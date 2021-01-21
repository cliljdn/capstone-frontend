import axios from 'axios'
import Vue from 'vue'
import store from '../store/index'

const devInstance = createInstance('http://192.168.1.11:6060/api/v1')
// const productionInstance = createInstance('http://localhost:3000') // will change later

function createInstance(baseURL) {
	return axios.create({
		baseURL,
		headers: {
			// 'Cache-Control': ['no-cache'],
			Authorization: store.getters.isLoggedIn,
		},
	})
}

export default {
	install() {
		Vue.prototype.$axios = devInstance
	},
} // Check debug/build mode
