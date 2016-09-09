var webpack = require('webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: './',
		filename: 'f5.js',
		library: 'f5',
    libraryTarget: 'umd'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
        presets: ['es2015']
      }
		}]
	}
}
