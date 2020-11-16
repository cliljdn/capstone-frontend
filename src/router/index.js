import Vue from 'vue'
import VueRouter from 'vue-router'
import RegisterForm from '@/components/Admin/RegisterFormAdmin.vue'
import Login from '@/views/Admin.views.vue'
import PageNotFound from '@/components/Notfound/NotFound'
import Index from '@/App.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},

	{
		path: '/admin/login',
		name: 'Login',
		component: Login,
	},

	{
		path: '/admin/register',
		name: 'RegisterFormAdmin',
		component: RegisterForm,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		//   component: () => import(/* webpackChunkName: "about" */ '../components//About.vue')
	},

	// Separated into two routes so that you can also programmatically
	// direct the user to the /404 if missing some data, etc.
	{ path: '/404', component: PageNotFound },
	{ path: '*', redirect: '/404' },
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
