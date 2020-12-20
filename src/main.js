import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import './assets/sass/main.scss'

Vue.config.productionTip = false

//initialize global for axios
import axios from 'axios'
Vue.prototype.$axios = axios

// initialize vue-cookies globally
// import './plugins/cookies.plugins'

// import VueCookies from 'vue-cookies'
// Vue.use(VueCookies)

// Initialize store
Vue.prototype.$store = store

//initialize router
// Vue.prototype.$router = router
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
