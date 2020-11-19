import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		BASE_URL: 'http://localhost:6060/api/v1',
		ACCESS_TOKEN: '',
		TOGGLE_SIDEBAR: false,
	},
	mutations: {},
	actions: {},
	modules: {},
})
