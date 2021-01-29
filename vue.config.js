module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production' ? '/capstone-frontend/' : '/',

	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Scan Olongapo'
			return args
		})
	},

	runtimeCompiler: true,
}
