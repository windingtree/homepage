const plugins = require('./plugins.js')
const baseConfig = require('./baseConfig.js')

const settings = plugins.then(p => (
  Object.assign(baseConfig, {
    plugins: p.development,
    mode: 'development',
    devtool: 'inline-cheap-module-source-map'
  })
))

module.exports = settings;