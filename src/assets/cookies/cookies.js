export default {
	isLoggedIn: function(token, name) {
		return window.$cookies.set(name, token, '1d')
	},

	checkCookies: function(name) {
		return window.$cookies.get(name)
	},

	ifCookieExist: function(keyName) {
		return window.$cookies.isKey(keyName)
	},
}
