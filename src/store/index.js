import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
// import axios from 'axios'

const getDefaultState = () => {
	return {
		TOKEN_NAME: '',
		ACCESS_TOKEN: '',
		accType: '',
		sideBarOpen: false,
		editProfileOpen: false,
		userProfile: {},
	}
}

const delUndefined = (payload) => {
	Object.keys(payload).forEach(
		(key) => payload[key] === undefined && delete payload[key]
	)
}
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		ACCESS_TOKEN: '',
		TOKEN_NAME: '',
		isAuth: false,
		accType: '',
		baseURL: 'http://192.168.1.11:6060/api/v1',

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

		getBaseURL: (state) => {
			return state.baseURL
		},

		getTravelHistoryDate: (state) => {
			return state.individual.travelHistory.map(
				({ date_boarded }) => date_boarded
			)
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

		travelHistory(state, payload) {
			state.individual.travelHistory.push(...payload)
		},

		removeCookie(state) {
			Cookies.remove(state.TOKEN_NAME, { path: '/', domain: 'localhost' })
		},

		resetState(state) {
			Object.keys(state.userProfile).forEach((k) => delete state.userProfile[k])
			const initial = getDefaultState()
			Object.keys(initial).forEach((key) => {
				state[key] = initial[key]
			})
			localStorage.removeItem('vuex')
		},
	},

	//dispatch
	actions: {
		isAuth({ commit }, auth) {
			commit('isAuth', auth)
		},

		async getProfile({ commit, state }) {
			try {
				const profile = await this._vm.$axios.get(
					`${state.baseURL}/list/account/login/profile`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				commit('getProfile', profile.data)
			} catch (error) {
				console.log(error.response, 'getProfile')
			}
		},

		async travelHistory({ commit, state }, payload) {
			const qryParams = {
				search: payload.search,
				start: payload.start,
				end: payload.end,
				order: payload.order,
				startDate: payload.startDate,
			}
			try {
				delUndefined(qryParams)
				console.log(qryParams)
				const travelHistory = await this._vm.$axios.get(
					`${state.baseURL}/accounts/list/travelhistory`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
						params: { qryParams },
					}
				)

				commit('travelHistory', travelHistory.data)
			} catch (err) {
				console.log(err)
			}
		},

		removeCookie({ commit }) {
			commit('removeCookie')
			commit('resetState')
		},

		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},
	},
	modules: {},

	plugins: [
		createPersistedState({
			paths: ['ACCESS_TOKEN', 'TOKEN_NAME', 'isAuth', 'accType', 'userProfile'],
		}),
	],
})
