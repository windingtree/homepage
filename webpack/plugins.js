const { resolve, join } = require('path');
const webpack = require('webpack');
const git = require('git-rev');
const packageJson = require('../package');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const commons = [
    new webpack.NamedModulesPlugin(),
    new Dotenv({
        path: resolve('./.env'),
        systemvars: true
    }),
];
const prodPlugins = commons.concat(
    [new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
    }),
    new MiniCssExtractPlugin({
        filename: 'css/styles.css',
        chunkFilename: 'css/styles.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/),
    ])

const devPlugins = commons.concat([
    new webpack.LoaderOptionsPlugin({
        debug: true,
    }),
    new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        defaultSizes: 'parsed',
        openAnalyzer: false
    }),
    new webpack.HotModuleReplacementPlugin()
])

module.exports = Promise.resolve({
            production: prodPlugins,
            development: devPlugins
})

// module.exports = new Promise((resolve) => {
//     git.short(function (commit) {
//         const htmlPlugin = new HtmlWebpackPlugin({
//             template: join('assets', 'index.html'),
//             meta: {
//                 version: packageJson.version,
//                 'git-rev': commit
//             }
//         })
//         resolve({
//             production: [...prodPlugins,htmlPlugin],
//             development: [...devPlugins,htmlPlugin]
//         })
//     })
// });