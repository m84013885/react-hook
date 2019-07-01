const commonConfig = require('./webpack.common.config')
const webpackMerge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const process = require('process')
const webpack = require('webpack')

const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')
const outputPath = path.resolve(process.cwd(), 'build')
const assestPathName = 'assest'

const { routers } = require('../router.json')

const config = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    path: outputPath,
    chunkFilename: `${assestPathName}/[name].[chunkhash:5].js`,
    publicPath: '',
    filename: `${assestPathName}/[name].js`
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: { drop_console: true },
          output: { comments: false }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: { name: () => { return 'manifest' } },
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      cacheGroups: {
        default: {
          name: 'globals',
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        },
        vendors: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({ __DEV__: 'false' }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: `${assestPathName}/[name].[chunkhash:5].css` }),
    new InlineManifestWebpackPlugin('manifest')
  ],
  module: {
    rules: [
      {
        test: new RegExp(`^(?!.*\\.common).*\\.css`),
        use: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: new RegExp(`^(.*\\.common).*\\.css`),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2500,
            outputPath: assestPathName,
            // 和 JS / CSS 在统一路径下·
            publicPath: './'
          }
        }],
        include: [appDir],
        exclude: [nodeModuleDir]
      }
    ]
  }
})
routers.map((item) => {
  const {
    name,
    template
  } = item
  const tempSrc = path.resolve(appDir, `./router/${template}/index.html`)
  const plugin = new HtmlWebpackPlugin({
    filename: `${template}.html`,
    title: name,
    template: tempSrc,
    inject: true,
    chunks: ['manifest', 'vendors', template]
  })
  config.entry[template] = [path.resolve(appDir, `./router/${template}/index.js`)]
  config.plugins.splice(-1, 0, plugin)
})

module.exports = config
