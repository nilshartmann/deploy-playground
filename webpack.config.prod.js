const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/main.jsx",
	output: {
		path: __dirname + "/dist/",
		filename: "[name].[chunkhash].js",
		publicPath: "/"
	},
	resolve: {
		extensions: [".js", ".jsx"]
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								importLoaders: 1,
								modules: true,
								sourceMap: true
							}
						}
					]
				})
			},
			{
				test: /\.jsx?$/,
				use: "babel-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles-[name].[chunkhash].css"),
		new HtmlWebpackPlugin({
			template: "index.template.ejs",
			inject: "body"
		})
	],
	externals: {
		react: "React",
		"react-dom": "ReactDOM"
	},
	devtool: "source-map"
};
