module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production' ? '/capstone-frontend/' : '/',

	devServer: {
		host: '0.0.0.0',
		hot: true,
		disableHostCheck: true,
	},
}
