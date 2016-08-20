var Path = require('path');

module.exports = {
	entry: './main.js',
	output: {
		path: __dirname,
		filename: 'build.js'
	},
	module: {
		resolve: {
	    extensions: ['', '.js', '.vue'],
	    alias: {
	      'src': Path.resolve(__dirname, './'),
	    },
	  },
	  resolveLoader: {
	    root: Path.join(__dirname, 'node_modules'),
	  },
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
			},
			{
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash:7]',
        },
      },
      {
      	test: require.resolve('jquery'),
      	loader: 'expose?jQuery',
      },
      {
      	test: require.resolve('pen'),
      	loader: 'exports?window.Pen',
      },
		]
	},
	babel: {
		presets: ['es2015'],
		plugins: ['transform-runtime']
	}
}
