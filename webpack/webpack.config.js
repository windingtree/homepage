const path = require('path')
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const appSrc = path.resolve(__dirname, "../src")

module.exports = {
  resolve: {
    modules: [appSrc, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  plugins: [
  ],
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
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: "css-loader",
            options: {
              root: appSrc,
              camelCase: true,
              importLoaders: 2,
            }
        },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
                plugins: [
                  autoprefixer,
                  // precss, @// TODO: Check if precss is needed
                ]
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/,
        loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
      },
    ],
  },
};
