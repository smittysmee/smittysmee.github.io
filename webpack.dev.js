const path = require('path');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack')


module.exports = (env) => {
    let base_api_url = "http://localhost:8080"
    if(!env) env = {}

    if(env["local"]){
        base_api_url = "http://localhost:8080"
    } else{
        base_api_url = "http://localhost:8080"
    }

    const merged = merge(common, {
        mode: 'development',
        devServer: {
            port: 3000, // you can change the port
            allowedHosts: "all",
            historyApiFallback: true
        },
        devtool: "source-map",  // Critical for debugging!
        plugins: [
            new webpack.EnvironmentPlugin({
                NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
                DEBUG: true,
                MOCKED_API: env["mock-api"] || false,
                BASE_API_URL: base_api_url
            })
        ]
    });

    return merged;
}
