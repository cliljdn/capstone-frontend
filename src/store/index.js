import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ACCESS_TOKEN: '',
		TOKEN_NAME: '',
		isAuth: false,
		accType: '',

		//dashboard
		sideBarOpen: false,
		editProfileOpen: false,

		//message box
		isEmpSuccess: false,
		openPopOut: false,
		accountsMsg: {
			isRegistered: false,
			isProfileCreated: false,
		},
		//

		dashboardModal: {
			travelHistory: false,
			estEntered: false,
			passengers: false,
			listEntered: false,
			entryPoints: false,
		},

		headers: {
			Authorization: '',
		},

		userProfile: {},

		individual: {
			travelHistory: [],
			estEntered: [],
		},
	},

	getters: {
		isLoggedIn: (state) => {
			if (Cookies.get(state.TOKEN_NAME) === undefined) {
				return false
			} else {
				return Cookies.get(state.TOKEN_NAME)
			}
		},

		userProfile: (state) => {
			return state.userProfile
		},
	},

	mutations: {
		assignToken(state) {
			state.headers.Authorization = state.ACCESS_TOKEN
		},

		getProfile(state, payload) {
			state.userProfile = { ...payload }
		},

		isAuth(state, auth) {
			state.isAuth = auth
		},

		modalEntered(state) {
			state.dashboardModal.estEntered = !state.dashboardModal.estEntered
		},

		modalEntrypoints(state) {
			state.dashboardModal.entryPoints = !state.dashboardModal.entryPoints
		},

		modalTravel(state) {
			state.dashboardModal.travelHistory = !state.dashboardModal.travelHistory
		},

		modalPassengers(state) {
			state.dashboardModal.passengers = !state.dashboardModal.passengers
		},

		modalListEntered(state) {
			state.dashboardModal.listEntered = !state.dashboardModal.listEntered
		},

		showPopOut(state) {
			state.openPopOut = !state.openPopOut
		},

		setCookie(state, payload) {
			state.ACCESS_TOKEN = payload.token
			state.TOKEN_NAME = payload.name
			state.accType = payload.accType

			Cookies.set(state.TOKEN_NAME, state.ACCESS_TOKEN, { expires: 1 })
		},

		// hide and show the sidebar profile
		toggleSideBar(state) {
			state.sideBarOpen = !state.sideBarOpen
		},

		//hide and show the edit profile form
		toggleEditForm(state) {
			state.editProfileOpen = !state.editProfileOpen
		},

		removeCookie(state) {
			Cookies.remove(state.TOKEN_NAME, { path: '/', domain: 'localhost' })
			state.TOKEN_NAME = ''
			state.ACCESS_TOKEN = ''
			state.accType = ''
		},
	},

	//dispatch
	actions: {
		isAuth({ commit }, auth) {
			commit('isAuth', auth)
		},

		async getProfile({ commit }) {
			try {
				const userProfile = await this._vm.$axios.get(
					'/list/account/login/profile'
				)

				commit('getProfile', userProfile.data)
			} catch (error) {
				console.log(error.response)
			}
		},

		removeCookie({ commit }) {
			commit('removeCookie')
		},
		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},
	},
	modules: {},

	plugins: [
		createPersistedState({
			paths: ['ACCESS_TOKEN', 'TOKEN_NAME', 'isAuth', 'accType'],
		}),
	],
})
