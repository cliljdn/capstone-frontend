import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'

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
			travelDates: [],
			tvlCompanionInfo: [],

			estEntered: [],
			estEnteredDates: [],
			estEnteredPages: 0,
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
			return state.individual.travelDates.map(
				({ date_boarded }) => date_boarded
			)
		},

		getEstEnteredDates: (state) => {
			return state.individual.estEnteredDates.map(
				({ date_entered }) => date_entered
			)
		},
	},

	mutations: {
		assignToken(state) {
			state.headers.Authorization = state.ACCESS_TOKEN
		},

		estEnteredDates(state, payload) {
			state.individual.estEnteredDates = payload
		},

		estEntered(state, payload) {
			state.individual.estEntered = payload
		},

		estEnteredPages(state, payload) {
			state.individual.estEnteredPages = payload
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

		travelDates(state, payload) {
			state.individual.travelDates = payload
		},

		travelHistory(state, payload) {
			state.individual.travelHistory = payload
		},

		tvlCompanionInfo(state, payload) {
			state.individual.tvlCompanionInfo = payload
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

		async estEntered({ commit, state }, payload) {
			try {
				const estEntered = await axios.get(
					`${state.baseURL}/accounts/list/est/entered`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
						params: { ...payload },
					}
				)
				commit('estEnteredPages', estEntered.data.listEmployees.total)
				commit('estEntered', estEntered.data.listEmployees.results)
				commit('estEnteredDates', estEntered.data.dates)
			} catch (err) {
				console.log(err.reponse)
			}
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
				return error.response
			}
		},

		async travelHistory({ commit, state }, payload) {
			try {
				const travelHistory = await axios.get(
					`${state.baseURL}/accounts/list/travelhistory`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
						params: { ...payload },
					}
				)

				commit('travelDates', travelHistory.data.dates)

				commit('travelHistory', travelHistory.data.travelHistory)
			} catch (err) {
				console.log(err.response)
			}
		},

		async tvlCompanionInfo({ commit, state }, batchParams) {
			const travelHistory = await axios.get(
				`${state.baseURL}/accounts/list/travelhistory/${batchParams}`,
				{
					headers: { Authorization: this.getters.isLoggedIn },
				}
			)

			console.log(travelHistory.data)

			commit('tvlCompanionInfo', travelHistory.data)
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
