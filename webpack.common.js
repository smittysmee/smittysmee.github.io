const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "[name].[contenthash].js",
    clean: true,
    publicPath: "/", // the public path
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "public/index.html", // to import index.html file inside index.js
        publicPath: '/'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/, // styles files
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  }
};