const path = require('path')
const rules = require('./rules.js')
const appSrc = path.resolve(__dirname, "../src")
const appEntry = path.resolve(appSrc, "App/index.jsx")

const commons = {
    entry: {
        app: [
          'react-hot-loader/patch',
          '@babel/polyfill',
          appEntry
        ],
      },
      output: {
        filename: 'js/client.js',
        path: path.resolve(__dirname, '..', 'public'),
        publicPath: '/'
      },
      resolve: {
        modules: [appSrc, 'node_modules'],
        extensions: ['.js', '.jsx'],
      },
      module: {
        rules
      }
}

module.exports = commons