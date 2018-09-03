const webpack = require('webpack');
const path = require('path');


const isProduction = process.argv.indexOf('-p') >= 0 || process.env.NODE_ENV === 'production';
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, '../dist/public');

const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
        extensions: ['.vue', '.js',]
    },
    context: sourcePath,

    entry: [
        'babel-polyfill',
        './app.js'
    ],
    output: {
        publicPath: '/',
        path: outPath,
        filename: 'bundle.js',
        chunkFilename: '[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            { test: /\.(jpe?g|gif|bmp|mp3|mp4|ogg|wav|eot|ttf|woff|woff2)$/, use: 'file-loader' },
            
        ]
    },
    optimization: {
        splitChunks: {
            name: true,
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    minChunks: 2
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    priority: -10
                }
            }
        },
        runtimeChunk: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'development',
            DEBUG: false
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            filename: './index.html'
        })
    ],
    devServer: {
        contentBase: sourcePath,
        hot: true,
        inline: true,
        historyApiFallback: {
            disableDotRule: true
        },
        stats: 'minimal',
        clientLogLevel: 'warning'
    },
    devtool: isProduction ? 'hidden-source-map' : 'cheap-module-eval-source-map',
    node: {
        fs: 'empty',
        net: 'empty'
    }
};