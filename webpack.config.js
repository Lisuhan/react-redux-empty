var path = require("path");

var HtmlWebpackPlugin = require('html-webpack-plugin'); //自动引用了你打包后的JS文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry : './src/entry.js',
	module : {
		loaders : [
			{
				test : /\.js$/,
				loader : 'babel-loader',
				exclude : /node_modules/
			}
			, {
		        test: /\.(css|scss)$/,
		        loaders: ['style-loader', 'css-loader', 'sass-loader'],
		        exclude : /node_modules/
		    }
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: __dirname + "/dist",
		publicPath:'/dist',
		chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
	devServer : {
		publicPath : '/dist',
		filename : 'main.bundle.js',
		contentBase: "./dist",
		host : '0.0.0.0',
		port : 8080,
		historyApiFallback: true,//不跳转
	},
	plugins: [
	//     必须配置，react的公共模块
	//     new webpack.optimize.CommonsChunkPlugin({
	//       names: ['vendor'],
	//       filename: 'vendor.js'
	//     })
		 new HtmlWebpackPlugin({
	      	template: __dirname + "/index.html"
	    }),
	],
	devtool: 'eval-source-map',
}