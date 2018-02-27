const webpack = require("webpack")
const path = require("path")

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
    plugins: [
        new webpack.DllPlugin({
            path: "manifest.json",
            name: "[name]",
            context: __dirname,
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: false,
            },
            mangle: { screw_ie8: false },
            output: { screw_ie8: false },
            sourceMap: false,
        }),
    ],
}
