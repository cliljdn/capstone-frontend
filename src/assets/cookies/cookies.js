export default {
	isLoggedIn: function(token) {
		this.$cookies.set('Token', token, '1d')
	},

	checkCookies: function(name) {
		return this.$cookies.get(name)
	},

	ifCookieExist: function(keyName) {
		return this.$cookies.isKey(keyName)
	},
}
