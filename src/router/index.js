import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/not-found.vue'

//Admin

Vue.use(VueRouter)

const routes = [
	{
		//index page
		path: '/',
		component: view('index-view'),
		children: [
			{
				path: '',
				name: 'registerCitizens',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/mobile/accounts-register.vue'
					),
			},

			{
				path: 'admin/olongapo/cityhall/mis/register',
				name: 'registerAdmin',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/web/admin-register.vue'
					),
			},

			{
				path: 'admin/olongapo/cityhall/mis/login',
				name: 'loginAdmin',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/web/admin-login.vue'
					),
			},
		],
	},

	{
		//admin dashboard
		path: '/admin',
		name: 'AdminView',
		component: view('Admin-view'),
		children: [
			{
				path: 'users',
				name: 'users-list',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/Admin/main/users-list.vue'
					),
			},

			{
				path: 'drivers',
				name: 'driver-list',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/Admin/main/driver-list.vue'
					),
			},

			{
				path: 'establishments',
				name: 'establishment-list',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/Admin/main/establishment-list.vue'
					),
			},
		],
	},

	{
		path: '/accounts/verify/:token',
		name: 'verify-accounts',
		component: view('verify-accounts-view'),
	},

	{ path: '/404', component: PageNotFound },
	{ path: '*', redirect: '/404' },
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * @param  {string}   name     the filename (basename) of the view to load.
 */

function view(name) {
	return function(resolve) {
		require(['../views/' + name + '.vue'], resolve)
	}
}

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
