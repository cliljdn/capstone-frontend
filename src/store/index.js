import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//development
		BASE_URL: 'http://192.168.1.11:6060/api/v1',

		//production
		// BASE_URL: 'http://scanolongapo-api.com/api/v1',
		ACCESS_TOKEN: '',
		TOKEN_NAME: '',
		isAuth: false,

		//dashboard
		sideBarOpen: false,
		editProfileOpen: false,
		openModalUser: false,
		openModalDriver: false,
		openModalEst: false,

		//message box
		isEmpSuccess: false,
		openPopOut: false,
		accountsMsg: {
			isRegistered: false,
			isProfileCreated: false,
		},

		headers: {
			Authorization: '',
		},

		userProfile: {},
	},

	getters: {
		isLoggedIn: (state) => {
			if (Cookies.get(state.TOKEN_NAME) === undefined) {
				return false
			} else {
				return Cookies.get(state.TOKEN_NAME)
			}
		},
	},

	mutations: {
		// hide and show the sidebar profile
		toggleSideBar(state) {
			state.sideBarOpen = !state.sideBarOpen
		},

		//hide and show the edit profile form
		toggleEditForm(state) {
			state.editProfileOpen = !state.editProfileOpen
		},

		//hide and show the modal profile
		toggleModalUser(state) {
			state.openModalUser = !state.openModalUser
		},

		toggleModalDriver(state) {
			state.openModalDriver = !state.openModalDriver
		},

		toggleModalEst(state) {
			state.openModalEst = !state.openModalEst
		},

		showPopOut(state) {
			state.openPopOut = !state.openPopOut
		},

		assignToken(state) {
			state.headers.Authorization = state.ACCESS_TOKEN
		},

		empCreateProfile(state) {
			state.isEmpSuccess = !state.isEmpSuccess
		},

		isAuth(state, auth) {
			state.isAuth = auth
		},

		setCookie(state, payload) {
			state.ACCESS_TOKEN = payload.token
			state.TOKEN_NAME = payload.name

			Cookies.set(state.TOKEN_NAME, state.ACCESS_TOKEN, { expires: 1 })
		},

		removeCookie(state) {
			Cookies.remove(state.TOKEN_NAME, { path: '/', domain: 'localhost' })
			state.TOKEN_NAME = ''
			state.ACCESS_TOKEN = ''
		},

		getProfile(state, payload) {
			state.adminProfile = { ...payload }
		},
	},

	//dispatch
	actions: {
		removeCookie({ commit }) {
			commit('removeCookie')
		},
		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},

		async getProfile({ commit }) {
			try {
				let res = await axios.get(`${this.state.BASE_URL}/list/admin/profile`, {
					headers: {
						Authorization: this.getters.isLoggedIn,
					},
				})

				commit('getProfile', res.data)
			} catch (error) {
				console.log(error.response)
			}
		},

		isAuth({ commit }, auth) {
			commit('isAuth', auth)
		},
	},
	modules: {},

	plugins: [
		createPersistedState({
			paths: ['ACCESS_TOKEN', 'TOKEN_NAME', 'isAuth'],
		}),
	],
})
