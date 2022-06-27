/* eslint-disable no-undef */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');
module.exports = {
    entry: {
        index: [path.resolve(__dirname, 'src/scripts/pages', 'index.js')],
        photographer: [path.resolve(__dirname, 'src/scripts/pages', 'photographer.js')],
    },
    mode: 'development',
    target: 'web',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'index.html'),
            filename: 'index.html',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/pages', 'photographer.html'),
            filename: 'photographer.html',
            chunks: ['photographer'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], 
            },
        ],
    },
}; 