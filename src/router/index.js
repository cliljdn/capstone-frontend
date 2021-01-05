import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/not-found.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
	{
		//index page
		path: '/',
		component: view('index-view'),
		children: [
			{
				path: '',
				name: 'usersLogin',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/mobile/users-login.vue'
					),
			},

			{
				path: '/users/register',
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
		],
	},

	{
		path: '/accounts/verify/:token',
		component: view('verify-accounts-view'),
		children: [
			{
				path: '',
				name: 'accounts-create-profile',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/mobile/account-verify.vue'
					),
			},

			{
				path: '/profile/create',
				name: 'user-driver-creation',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/mobile/form-fillup'
					),
			},
		],
	},

	{
		path: '/accounts/auth/dashboard',
		component: view('users-view'),
		name: '',
		beforeEnter(to, from, next) {
			if (!store.state.isAuth) {
				next({ name: 'usersLogin' })
			} else {
				next()
			}
		},
		children: [
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/mobile/users-dashboard'
					),
				name: 'usersDashboard',
			},
		],
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
