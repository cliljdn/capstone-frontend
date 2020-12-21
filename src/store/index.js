import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'
Vue.use(Vuex)
// function refreshList(ms) {
// 	return new Promise((resolve) => {
// 		setInterval(resolve, ms)
// 	})
// }

// function stopTimeout(name) {
// 	return new Promise((resolve) => {
// 		resolve(clearTimeout(name))
// 	})
// }
export default new Vuex.Store({
	state: {
		BASE_URL: 'http://scanolongapo-api.com/api/v1',
		ACCESS_TOKEN: '',
		TOKEN_NAME: 'walang laman',
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
			adminProfileCreated: false,
		},

		headers: {
			Authorization: '',
		},

		estList: [],

		userList: [],
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

		getEst(state, list) {
			state.estList = list
		},

		getUsers(state, list) {
			state.userList = list
		},
	},

	actions: {
		removeCookie({ commit }) {
			commit('removeCookie')
		},
		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},

		async getEst({ commit }) {
			await setInterval(async () => {
				let res = await axios.get(
					`${this.state.BASE_URL}/list/account/establishment/profile`,
					{
						headers: {
							Authorization: this.state.headers.Authorization,
						},
					}
				)
				console.log(1)
				commit('getEst', res.data)
			}, 30000)
		},

		isAuth({ commit }, auth) {
			commit('isAuth', auth)
		},
	},
	modules: {},

	plugins: [createPersistedState()],
})
