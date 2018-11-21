const { resolve, join } = require('path');
const webpack = require('webpack');
const git = require('git-rev');
const packageJson = require('../package');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

const public = 'public';

// the path(s) that should be cleaned
const pathsToClean = [
    `${public}/**/*.*`,
];

// the clean options to use
const cleanOptions = {
    root: resolve(__dirname, '..'),
    verbose: true,
    dry: false,
};

const commons = [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
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
        filename: 'css/[contenthash].css',
        chunkFilename: 'css/[contenthash].css'
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

module.exports = new Promise((resolve) => {
    git.short(function (commit) {
        const htmlPlugin = new HtmlWebpackPlugin({
            template: join('assets', 'index.html'),
            meta: {
                version: packageJson.version,
                'git-rev': commit
            }
        })
        resolve({
            production: [...prodPlugins,htmlPlugin],
            development: [...devPlugins,htmlPlugin]
        })
    })
});