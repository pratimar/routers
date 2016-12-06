module.exports = {
	entry : [
		'./index.js'
	],
	output : {
		path: '/build',
		filename : 'bundle.js'
	},
	module : {
		loaders : [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query : {
					presets: ['es2015','react']
				}
			}

		]
	}
};
