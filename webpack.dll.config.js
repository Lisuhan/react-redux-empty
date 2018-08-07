const webpack = require("webpack");
const path = require("path");

const vendors = [
    "react",
    "react-dom",
    "react-router",
    "react-router-dom",
    "redux",
]

module.exports = {
    output: {
        path: path.resolve(__dirname, "dll/"),
        filename: "[name].js",
        library: "[name]",
    },
    entry: {
        dll: vendors,
    },
    optimization: {
        minimize: true
    },
    plugins: [
        new webpack.DllPlugin({
            path: "manifest.json",
            name: "[name]",
            context: __dirname,
        })
    ]
}
