import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/sass/main.scss'
import 'jspdf-autotable'
Vue.config.productionTip = false

// import axiosConfig from './plugins/axios.plugins'

// Vue.use(axiosConfig)

// Initialize store
Vue.prototype.$store = store

// initialize global for axios
import axios from 'axios'

Vue.prototype.$axios = axios

//initialize router
// Vue.prototype.$router = router
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
