module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	outputDir: 'dist',
	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Scan Olongapo'
			return args
		})
	},

	configureWebpack: {
		performance: {
			hints: false,
		},
		optimization: {
			splitChunks: {
				minSize: 10000,
				maxSize: 250000,
			},
		},
	},

	devServer: {
		proxy: 'https://capstone.scanolongapo-api.com/api/v1',
		// proxy: 'http://192.168.1.11:6060/api/v1',
	},
	// runtimeCompiler: true,
}
