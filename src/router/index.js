import Vue from 'vue'
import VueRouter from 'vue-router'
import PageNotFound from '@/components/Notfound/not-found.vue'

//Admin

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'AdminView',
		component: () => import('@/views/Admin-view.vue'),
		children: [
			{
				path: 'users',
				name: 'users-list',
				component: () => import('../components/Admin/main/users-list.vue'),
			},

			{
				path: 'drivers',
				name: 'driver-list',
				component: () => import('../components/Admin/main/driver-list.vue'),
			},

			{
				path: 'establishments',
				name: 'establishment-list',
				component: () =>
					import('../components/Admin/main/establishment-list.vue'),
			},
		],
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
