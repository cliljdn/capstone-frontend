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
		proxy: 'https://192.168.1.11:6060/',
	},
	// runtimeCompiler: true,
}
