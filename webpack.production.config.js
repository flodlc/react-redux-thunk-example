const webpack = require('webpack');

module.exports = {
    entry: {
        index: "./index.js"
    },
    output: {
		path: './web',
        filename: "[name].js"
    },
	module: {
         loaders: [
			 {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         	},
			{
             test: /\.css$/,
             exclude: /node_modules/,
             loader: "style-loader!css-loader"
         	}
		 ]
     },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    ]
}
