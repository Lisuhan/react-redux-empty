const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动引用打包后的JS文件
const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离css为单独文件
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'); // 往html中添加dll文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除dist下的缓存


// plugins list
const plugins = [
	new HtmlWebpackPlugin({
		// 插入模板中
		filename: 'index.html',
		template: path.resolve(`${__dirname}/index.html`),
		inject: 'body',
	}),
	new ExtractTextPlugin('css/[name].css', {
		// 分离css
		disable: false,
		allChunks: true,
	}),
	new webpack.DllReferencePlugin({
		// 使用dll文件
		context: __dirname,
		manifest: require('./manifest.json'),
	}),
	new AddAssetHtmlPlugin({
		// dll插入模板
		filepath: require.resolve(`${__dirname}/dll/dll.js`),
		includeSourcemap: false,
	}),
	new CleanWebpackPlugin('dist/*.*', {
		root: __dirname,
		verbose: true,
		dry: false,
	}),
	new webpack.HotModuleReplacementPlugin(),
	// new FriendlyErrorsWebpackPlugin()
];
module.exports = {
	entry: {
		app: './src/entry',
	},
	module: {
		rules: [{
			test: /\.(jsx?)$/,
			use: 'babel-loader',
			exclude: /node_modules/,
		},
		{
			test: /\.(jsx)?$/,
			exclude: /node_modules/,
			enforce: 'pre',
			loader: 'eslint-loader',
			options: {
				fix: true,
			},
		},
		{
			test: /\.(ts|tsx)$/,
			loader: 'awesome-typescript-loader',
			options: {
				useBabel: true,
				useCache: true,
			},
			exclude: /node_modules/
		},
		{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			enforce: 'pre',
			loader: 'tslint-loader'
		},
		{
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader', 'postcss-loader'],
			}),
			exclude: /node_modules/,
		},
		{
			test: /\.scss$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			}),
			exclude: /node_modules/,
		},
		{
			test: /\.(png|jpg|gif)$/, // 图片加载器，同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
			use: 'url-loader?limit=8192&name=./images/[hash:6].[name].[ext]', // 将小于8192byte的图片转成base64码
		},
		{
			test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			use: 'file-loader?name=./fonts/[hash:6].[name].[ext]',
		},
		],
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'jsx'],
		alias: {
			'&': path.resolve(__dirname, 'src'),
		},
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].[chunkhash:6].chunk.js',
		path: path.resolve(__dirname, 'dist/'),
	},
	devServer: {
		publicPath: '/',
		//	contentBase:path.resolve(__dirname, "dist/"),
		host: '127.0.0.1',
		port: 8000,
		hot: true,
		historyApiFallback: true, // 不跳转
	},
	plugins,
};
