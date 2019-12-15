const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPluguin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js',
        owlCarousel: './src/owl-carosuel.js'
    },
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules:[
            {
                test:/\.(scss)$/,
                use :[
                    {loader: MiniCssExtractPluguin.loader},
                    {loader: "css-loader"},
                    {loader: "sass-loader"}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new MiniCssExtractPluguin({
            filename: 'bundle.css'
        })
    ]
}