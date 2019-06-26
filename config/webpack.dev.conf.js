const commonConfig = require('./webpack.common.config')
const webpackMerge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const process = require('process')

const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')
const ip = require('ip')
const port = 8078
const host = ip.address()

const config = webpackMerge(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port,
    host,
    historyApiFallback: true,
    proxy: {
      '/v1': {
        target: 'http://www.app-remix.com',
        // target: 'https://test1.app-remix.com',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({ __DEV__: 'true' }),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   filename: `index.html`,
    //   title: 'demo',
    //   template: path.join(appDir, 'app.html'),
    //   minify: {
    //     collapseWhitespace: true,
    //     conservativeCollapse: true
    //   },
    //   inject: true,
    //   chunks: ['app']
    // })
  ],
  module: {
    rules: [
      {
        test: new RegExp(`^(?!.*\\.common).*\\.css`),
        use: ['style-loader', 'css-loader?modules', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: new RegExp(`^(.*\\.common).*\\.css`),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: { limit: 2500 }
        }],
        include: [appDir],
        exclude: [nodeModuleDir]
      }
    ]
  }
})

module.exports = config
