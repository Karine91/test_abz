const path = require('path');

module.exports = {
    entry: {
        bundle: ['babel-polyfill', './src/app.js'],
        vendor: "./src/vendor.js"
    },
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    }
};