const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: {
        index: './src/index.js',
        survey: './src/Survey.js',
    },
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "[name].bundle.js",
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.(sass|scss|css)$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: "react",
        }),
    ],
};
