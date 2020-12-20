import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'

Vue.use(Vuex)

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

		getCookie(state, name) {
			state.TOKEN_NAME = name

			if (Cookies.get(state.TOKEN_NAME) === undefined) {
				return false
			} else {
				state.ACCESS_TOKEN = Cookies.get(state.TOKEN_NAME)
			}
		},

		getEst(state, list) {
			state.estList = list
		},
	},

	actions: {
		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},

		getCookie(context, name) {
			return context.commit('getCookie', name)
		},

		async getEst({ commit }) {
			let res = await this.$axios.get(
				`${this.state.BASE_URL}/list/account/establishment/profile`,
				{
					headers: {
						Authorization: this.state.headers.Authorization,
					},
				}
			)

			return commit('getEst', res.data)
		},

		isAuth({ commit }, auth) {
			commit('isAuth', auth)
		},
	},
	modules: {},

	plugins: [createPersistedState()],
})
