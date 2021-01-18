module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production' ? '/capstone-frontend/' : '/',

	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = 'Scan Olongapo'
			return args
		})

		resolve: {
			alias: {
				vue: 'vue/dist/vue.esm-bundler.js'
			}
		}
	},

	runtimeCompiler: true,
}
