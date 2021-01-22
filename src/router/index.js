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
						/* webpackChunkName: "components" */ '@/components/content/web/users-login.vue'
					),
			},

			{
				path: '/users/register',
				name: 'registerCitizens',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '@/components/content/web/accounts-register.vue'
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
						/* webpackChunkName: "components" */ '../components/content/web/account-verify.vue'
					),
			},

			{
				path: '/profile/create',
				name: 'user-driver-creation',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/form-fillup'
					),
			},
		],
	},

	{
		path: '/accounts/auth/dashboard',
		// name: 'accountDashboard',
		component: view('users-view'),

		children: [
			//for individuals
			{
				path: '',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/individuals/travel-history'
					),
				name: 'travelHistory',
				async beforeEnter(to, from, next) {
					if (store.state.accType === 'Individual' && store.state.isAuth) {
						next()
					} else if (store.state.accType === 'Driver' && store.state.isAuth) {
						next({ name: 'listPassengers' })
					} else if (
						store.state.accType === 'Establishment' &&
						store.state.isAuth
					) {
						next({ name: 'listEntered' })
					} else {
						next({ name: 'usersLogin' })
					}
				},
			},

			{
				path: 'est',
				name: 'estEntered',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/individuals/est-entered'
					),

				beforeEnter(to, from, next) {
					if (store.state.accType !== 'Individual' && !store.state.isAuth) {
						next({ name: 'travelHistory' })
					} else {
						next()
					}
				},
			},

			//for driver
			{
				path: '/passengers',
				name: 'listPassengers',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/drivers/list-passengers'
					),

				beforeEnter(to, from, next) {
					if (store.state.accType !== 'Driver' && !store.state.isAuth) {
						next({ name: 'travelHistory' })
					} else {
						next()
					}
				},
			},

			{
				path: '/vehicles/',
				//name: 'listVehicles',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/drivers/list-vehicles'
					),

				beforeEnter(to, from, next) {
					if (store.state.accType !== 'Driver' && !store.state.isAuth) {
						next({ name: 'travelHistory' })
					} else {
						next()
					}
				},

				children: [
					{
						path: '',
						name: 'activeVehicles',
						component: () =>
							import(
								/* webpackChunkName: "components" */ '../components/content/web/drivers/active-vehicles'
							),

						beforeEnter(to, from, next) {
							if (store.state.accType !== 'Driver' && !store.state.isAuth) {
								next({ name: 'travelHistory' })
							} else {
								next()
							}
						},
					},

					{
						path: 'inactive',
						name: 'inactiveVehicles',
						component: () =>
							import(
								/* webpackChunkName: "components" */ '../components/content/web/drivers/inactive-vehicles'
							),

						beforeEnter(to, from, next) {
							if (store.state.accType !== 'Driver' && !store.state.isAuth) {
								next({ name: 'travelHistory' })
							} else {
								next()
							}
						},
					},
				],
			},

			// for est
			{
				path: '/establishment/entered',
				name: 'listEntered',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/est/list-entered'
					),

				beforeEnter(to, from, next) {
					if (store.state.accType !== 'Establishment' && !store.state.isAuth) {
						next({ name: 'travelHistory' })
					} else {
						next()
					}
				},
			},

			{
				path: '/establishment/entrypoints',
				// name: 'listEntrypoints',
				component: () =>
					import(
						/* webpackChunkName: "components" */ '../components/content/web/est/list-entrypoints'
					),

				children: [
					{
						path: '',
						name: 'activeEntry',
						component: () =>
							import(
								/* webpackChunkName: "components" */ '../components/content/web/est/active-entrypoints'
							),

						beforeEnter(to, from, next) {
							if (
								store.state.accType !== 'Establishment' &&
								!store.state.isAuth
							) {
								next({ name: 'travelHistory' })
							} else {
								next()
							}
						},
					},

					{
						path: 'inactive',
						name: 'inactiveEntry',
						component: () =>
							import(
								/* webpackChunkName: "components" */ '../components/content/web/est/inactive-entrypoints'
							),

						beforeEnter(to, from, next) {
							if (
								store.state.accType !== 'Establishment' &&
								!store.state.isAuth
							) {
								next({ name: 'travelHistory' })
							} else {
								next()
							}
						},
					},
				],
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
