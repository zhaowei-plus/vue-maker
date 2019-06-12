const path = require('path')
module.exports = {
  dev: {
    env: require('./dev.env'),
    port: 8082,
    assetsPublicPath: '/',
    assetsSubDirectory: 'assets',
    autoOpenBrowser: true,
    cssSourceMap: false,
    devtool: 'cheap-module-eval-source-map',
    bundleAnalyzerReport: true,
    proxyOptions: require('./proxy')
  },
  test: {
    env: require('./prod.env'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'template_assets', // 需修改
  },
  build: {
    env: require('./prod.env'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/',
    assetsSubDirectory: 'assets', // 需修改
    productionSourceMap: true,
    devtool: '#source-map'
  }
}