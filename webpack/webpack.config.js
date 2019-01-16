const git = require('git-rev');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const packageJson = require('../package');
const plugins = require('./plugins.js')
const baseConfig = require('./baseConfig.js')

const settings = plugins.then(p => (
  new Promise((resolve) => {
    git.short(function (commit) {
        const htmlPlugin = new HtmlWebpackPlugin({
            template: join('assets', 'index.html'),
            meta: {
                version: packageJson.version,
                'git-rev': commit
            }
        })
        p.development.push(htmlPlugin)
        resolve(
          Object.assign(baseConfig, {
                plugins: p.development,
                mode: 'development',
                devtool: 'inline-cheap-module-source-map'
              })
              )
    })
  })
  
))

module.exports = settings;