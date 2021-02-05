module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production' ? '/capstone-frontend/' : '/',

	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Scan Olongapo'
			return args
		})
	},
	devServer: {
		proxy: 'http://192.168.1.11:6060/api/v1',
	},
	// runtimeCompiler: true,
}
