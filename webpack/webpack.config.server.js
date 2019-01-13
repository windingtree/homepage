const path = require('path')
const plugins = require('./plugins.js')
const baseConfig = require('./baseConfig.js')
const nodeExternals = require('webpack-node-externals');

const settings = plugins.then(p => (
  Object.assign({}, baseConfig, {
    entry: path.resolve(__dirname, '..','src/server/index.jsx'),
    plugins: p.production,
    mode: 'production',
    output: {
      ...baseConfig.output,
      filename: 'server.js',
      library: 'app',
      libraryTarget: 'commonjs2'
    },
    target: 'node',
    externals: [nodeExternals({whitelist: ['@windingtree/wt-ui-react']})],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s?css$/,
          loader: "css-loader/locals",
        },
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          loader: 'file-loader?emitFile=false',
        },
        {
          test: /\.(eot|woff|woff2|ttf)$/,
          loader: 'url-loader??emitFile=false'
        },
      ]
    }
    
  })
))

module.exports = settings;