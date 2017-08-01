var path = require("path");
module.exports = {
	entry : './src/entry.js',
	module : {
		loaders : [
			{
				loader : 'babel-loader',
				test : /\.js$/,
				exclude : /node_modules/
			}
			, {
		      test: /\.(css|scss)$/,
		      loaders: [ 'style-loader', 'css-loader', 'sass-loader'],
		      include: __dirname,
		      exclude : /node_modules/
		    }
		]
	},
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "/dist"),
		publicPath:'/dist',
		chunkFilename: '[name].[chunkhash:5].chunk.js',
	},
	devServer : {
		publicPath : '/dist',
		filename : 'main.bundle.js',
		host : '0.0.0.0',
		port : 8080
	},
	plugins: [
	// //必须配置，react的公共模块
	//     new webpack.optimize.CommonsChunkPlugin({
	//       names: ['vendor'],
	//       filename: 'vendor.js'
	//     })
	],
}