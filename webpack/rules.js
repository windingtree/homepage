const path = require("path")
const appSrc = path.resolve(__dirname, "../src")
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devMode = process.env.NODE_ENV === 'development';

const rules = [
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
        devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
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
      include: path.resolve(__dirname, '..', 'data'),
      use: [
        {
          loader: 'file-loader',
          options: {
            regExp: /data\/(.*)/,
            name: '[1]',
            outputPath: 'img/'
          }
        }
      ]
    },
    {
      test: /\.(gif|png|jpe?g|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[hash].[ext]',
            outputPath: 'img/'
          }
        }
      ]
    },
    {
      test: /\.(eot|woff|woff2|ttf)$/,
      loader: 'url-loader?limit=30000&name=[name]-[hash].[ext]'
    },
  ]

  module.exports = rules