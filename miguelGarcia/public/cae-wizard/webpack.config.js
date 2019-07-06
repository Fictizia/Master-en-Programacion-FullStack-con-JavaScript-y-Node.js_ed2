const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
module.exports = {
    mode:'development',
    devtool: 'source-map',
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer:{
        port:5050

    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {loader: 'css-loader'}
                ] 
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/img'
                    }
                  },
                  
                ],
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

