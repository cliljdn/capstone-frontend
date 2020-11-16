import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/NotFound'
import Index from '@/views/Main.views.vue'

//Admin
import RegisterFormAdmin from '@/components/Admin/RegisterFormAdmin.vue'
import LoginForm from '@/components/Admin/LoginForm.vue'
import AdminViews from '@/views/Admin.views.vue'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Index',
		component: Index,
	},

	{
		path: '/admin',
		name: 'AdminViews',
		component: AdminViews,
		children: [
			{
				// Admin Login will be rendered inside User's <router-view>
				// when /user/:id/profile is matched
				path: 'login',
				component: LoginForm,
			},
			{
				// Admin Register will be rendered inside User's <router-view>
				// when /user/:id/posts is matched
				path: 'register',
				component: RegisterFormAdmin,
			},
		],
	},

	// {
	// 	path: '/admin/register',
	// 	name: 'RegisterFormAdmin',
	// 	component: RegisterForm,
	// 	// route level code-splitting
	// 	// this generates a separate chunk (about.[hash].js) for this route
	// 	// which is lazy-loaded when the route is visited.
	// 	//   component: () => import(/* webpackChunkName: "about" */ '../components//About.vue')
	// },

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
