***REMOVED***
***REMOVED***
const {CleanWebpackPlugin***REMOVED*** = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/public/',
***REMOVED***,
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
***REMOVED***,
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
***REMOVED***,
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/,
        ***REMOVED***,
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
        ***REMOVED***,
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
    ***REMOVED***
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                    ***REMOVED***,
                ***REMOVED***,
        ***REMOVED***,
        ***REMOVED***
***REMOVED***,
***REMOVED***,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: false,
    ***REMOVED***),
    ],
***REMOVED***;
