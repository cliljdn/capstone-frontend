import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/not-found.vue'

//Admin

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: () =>
			import(/* webpackChunkName: "components" */ '@/views/index-view.vue'),
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
		path: '/admin',
		name: 'AdminView',
		component: () =>
			import(/* webpackChunkName: "components" */ '@/views/Admin-view.vue'),
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
		path: '/',
		name: 'IndexView',
		component: () =>
			import(/* webpackChunkName: "components" */ '@/views/index-view.vue'),
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
