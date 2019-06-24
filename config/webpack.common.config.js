const path = require('path')
const process = require('process')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')

const { routers } = require('../router.json')

const config = {
  entry: {},
  output: {
    path: path.resolve(process.cwd(), 'build'),
    chunkFilename: '[name].[chunkhash:5].chunk.js',
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDom: 'react-dom',
      PropTypes: 'prop-types'
    })
  ],
  module: {
    rules: [{
      test: /\.(js)$/,
      use: ['babel-loader'],
      include: [appDir],
      exclude: [nodeModuleDir]
    }]
  }
}
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
    chunks: [template]
  })
  config.entry[template] = [path.resolve(appDir, `./router/${template}/index.js`)]
  config.plugins.push(plugin)
})

module.exports = config
