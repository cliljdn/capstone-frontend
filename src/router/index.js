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

			{
				path: 'employee/create/working',
				name: 'employee-working-create',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/mobile/list-est-fillup.vue'
					),
			},
		],
	},

	{
		//admin dashboard
		path: '/admin',
		name: 'admin-dashboard',
		component: view('Admin-view'),
		//meta: { isAuthenticated: true },
		beforeEnter(to, from, next) {
			if (!store.state.isAuth) {
				next({ name: 'loginAdmin' })
			} else {
				next()
			}
		},

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
				path: '/employee/create/profile',
				name: 'employee-creation',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/mobile/employee-fillup.vue'
					),
			},

			{
				path: 'working/establishment/fillup',
				name: 'fill-up-establishment',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/mobile/list-est-fillup.vue'
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
		path: '/admin/verify/:token',
		component: view('verify-admin-view'),
		children: [
			{
				path: '',
				name: 'admin-account-verify',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/admin-verify.vue'
					),
			},

			{
				path: '/admin/create/profile',
				name: 'admin-profile-creation',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/admin-info-form.vue'
					),
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
