var path = require("path");
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin'); //自动引用打包后的JS文件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var buildProd = process.env.NODE_ENV === "production"; //是否要上线环境


/*plugins list*/
const plugins = [
	new webpack.optimize.CommonsChunkPlugin({  //提取公共模块
        name: "common",
        minChunks: 2
    }),
	new HtmlWebpackPlugin({						//插入模板中
		filename:'index.html',
      	template: __dirname + "/index.html"
    }),
	new ExtractTextPlugin("css/[name].css",{disable: false,allChunks: true}),//分离css
];
if(buildProd){
	console.log(buildProd);
	plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
			    warnings: false,
			    screw_ie8: false
			},
			mangle: { screw_ie8: false },
			output: { screw_ie8: false },
			sourceMap: true
		})
	)
}



module.exports = {
	entry : './src/entry.js',
	module : {
		rules : [
			{
				test : /\.js$/,
				use : 'babel-loader',
				exclude : /node_modules/
			}
			,{
			  	test:/containers(\/|\\)[^(\/|\\)]+(\/|\\)index\.js$/,
			  	use: ['bundle-loader?lazy', 'babel-loader'],
			  	include: __dirname + '/src/containers',
			  	exclude : /node_modules/
			 }
			,{
		        test: /\.css$/,
		        use: ExtractTextPlugin.extract({
		        	fallback:'style-loader',
					use:['css-loader?sourceMap','postcss-loader']
		        }),
		        exclude : /node_modules/
		    }
		    ,{
		    	test: /\.scss$/,
		    	use: ExtractTextPlugin.extract({
		        	fallback:'style-loader',
					use:['css-loader?sourceMap','postcss-loader', 'sass-loader'],
		        }),
		    	exclude : /node_modules/
		    }
		    ,{	
             	test: /\.(png|jpg|gif)$/,   					// 图片加载器，同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求  													
             	use: 'url-loader?limit=8192&name=./images/[hash:5].[name].[ext]',// 将小于8192byte的图片转成base64码
            }
            ,{
	            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
	            use: 'file-loader?name=./fonts/[hash:5].[name].[ext]',
	        },
		]
	},
	output: {
		filename: buildProd
			? '[name].bundle.min.js'
			: '[name].bundle.js',
		chunkFilename: buildProd
			? '[name].[chunkhash:5].chunk.min.js'
			: '[name].[chunkhash:5].chunk.js',
		path: __dirname + "/dist",
		publicPath:'/dist'
	},
	devServer : {
		publicPath : '/dist',
		filename : 'main.bundle.js',
		contentBase: "./dist",
		host : '0.0.0.0',
		port : 8080,
		historyApiFallback: true//不跳转
	},
	plugins: plugins,
	devtool: buildProd ? false : 'eval-source-map',
}