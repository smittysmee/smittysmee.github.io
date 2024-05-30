const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv')

module.exports = (env) => {

    return merge(common, {
        mode: 'production',
        optimization: {
            moduleIds: 'deterministic',
            runtimeChunk: true,
            splitChunks: {
                minSize: 10000,
                maxSize: 250000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'production',
                DEBUG: false,
                BASE_API_URL: "http://localhost:8080"
            }),
            new MiniCssExtractPlugin(),
            new webpack.DefinePlugin({
               'process.env': JSON.stringify(process.env)
            })

        ],
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, "css-loader"],
                },
            ],
        }
    });
}

