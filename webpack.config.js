const config = {

	mode: 'production',  // режим работы webpack в prodaction

	entry: {             // точки входа какие js файлы собирать

			index: './src/js/index.js',  // js файл страницы index.html

	},

	output: {

		filename: '[name].bundle.js',

	},

	module: {       // подключение модулей

		rules: [

			{

			test: /\.css$/,

			use: ['style-loader', 'css-loader'],

		},

	],

	},

};

module.exports = config;