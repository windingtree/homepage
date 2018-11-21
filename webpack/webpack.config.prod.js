// const precss = require('precss');
const plugins = require('./plugins.js')
const baseConfig = require('./baseConfig')
const optimization = require('./optimization')

const settings = plugins.then(p => {
  return Object.assign(baseConfig, {
    plugins: p.production,
    mode: 'production',
    optimization
  })
})

module.exports = settings
