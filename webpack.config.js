/* eslint-disable no-undef */

const path = require('path');
module.exports = {
    entry: {
        index: [path.resolve(__dirname, 'src/pages', 'index.js')],
        photographer: [path.resolve(__dirname, 'src/pages', 'photographer.js')],
    },
    mode: 'development',
    target: 'web',
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'docs'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader'], 
            },
        ],
    },
}; 