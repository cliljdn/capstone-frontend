export default {
	isLoggedIn: function(token) {
		return new Promise((resolve, reject) => {
			return err
				? reject(err)
				: resolve(this.$cookies.set('Token', token, '1d', '/about'))
		})
	},

	checkCookies: function(name) {
		return this.$cookies.get(name)
	},

	ifCookieExist: function(keyName) {
		return this.$cookies.isKey(keyName)
	},
}
