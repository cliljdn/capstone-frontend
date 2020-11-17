import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/NotFound'
import Index from '@/views/Main.views.vue'

//Admin

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},

	{ path: '/404', component: PageNotFound },
	{ path: '*', redirect: '/404' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
