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
		// baseURL: 'http://scanolongapo-api.com/api/v1',
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
			isProfileUpdated: false,
			isLogout: false,
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
			travelHistoryPages: 0,
			tvlCompanionInfo: [],

			estEntered: [],
			estEnteredDates: [],
			estEnteredPages: 0,
			estEnteredCompanions: [],
		},

		est: {
			enteredIndividuals: [],
			enteredPages: 0,
			enteredDates: [],
			enteredIndivCompanions: [],
		},

		driver: {
			passengers: [],
			travelDates: [],
			pages: 0,
			passengersInfo: [],
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

		//to remove duplicates
		getEstEnteredDates: (state) => {
			return state.individual.estEnteredDates.map(
				({ date_entered }) => date_entered
			)
		},

		//to remove duplicates
		getPassengerDates: (state) => {
			return state.driver.travelDates.map(({ date_boarded }) => date_boarded)
		},
	},

	mutations: {
		enteredIndivCompanions(state, payload) {
			state.est.enteredIndivCompanions = payload
		},

		enteredIndividuals(state, payload) {
			state.est.enteredIndividuals = payload
		},

		enteredPages(state, payload) {
			state.est.enteredPages = payload
		},

		enteredDates(state, payload) {
			state.est.enteredDates = payload
		},

		estEnteredDates(state, payload) {
			state.individual.estEnteredDates = payload
		},

		estEntered(state, payload) {
			state.individual.estEntered = payload
		},

		estEnteredCompanions(state, payload) {
			state.individual.estEnteredCompanions = payload
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

		isProfileUpdated(state) {
			state.accountsMsg.isProfileUpdated = !state.accountsMsg.isProfileUpdated
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

		passengers(state, payload) {
			state.driver.passengers = payload.passengers.results
			state.driver.pages = payload.passengers.total
			state.driver.travelDates = payload.dates
		},

		passengersInfo(state, payload) {
			state.driver.passengersInfo = payload
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
			state.individual.travelHistory = payload.results
			state.individual.travelHistoryPages = payload.total
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

		async enteredIndividuals({ commit, state }, payload) {
			try {
				const responseData = await axios.get(
					`${state.baseURL}/accounts/est/scanned`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
						params: { ...payload },
					}
				)

				commit('enteredDates', responseData.data.dates)
				commit('enteredPages', responseData.data.scannedIndiv.total)
				commit('enteredIndividuals', responseData.data.scannedIndiv.results)
			} catch (err) {
				console.log(err.reponse)
			}
		},

		async enteredIndivCompanions({ commit, state }, batchNum) {
			try {
				const responseData = await axios.get(
					`${state.baseURL}/accounts/est/scanned/${batchNum}`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				commit('enteredIndivCompanions', responseData.data)
				commit('modalListEntered')
			} catch (err) {
				console.log(err)
			}
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
				console.log(err)
			}
		},

		async estEnteredCompanions({ commit, state }, batchParams) {
			try {
				const companions = await axios.get(
					`${state.baseURL}/accounts/list/est/entered/${batchParams}`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)
				commit('estEnteredCompanions', companions.data)
			} catch (err) {
				return err.response
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

		async passengers({ commit, state }, payload) {
			try {
				const passengers = await axios.get(
					`${state.baseURL}/accounts/driver/passenger`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
						params: { ...payload },
					}
				)
				commit('passengers', passengers.data)
			} catch (err) {
				console.log(err.response)
			}
		},

		async passengersInfo({ commit, state }, batchParams) {
			try {
				const passengers = await axios.get(
					`${state.baseURL}/accounts/driver/passenger/${batchParams}`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				commit('modalPassengers')
				commit('passengersInfo', passengers.data)
			} catch (err) {
				console.log(err.response)
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
				commit('travelHistory', travelHistory.data)
			} catch (err) {
				return err.response
			}
		},

		async tvlCompanionInfo({ commit, state }, batchParams) {
			const travelHistory = await axios.get(
				`${state.baseURL}/accounts/list/travelhistory/${batchParams}`,
				{
					headers: { Authorization: this.getters.isLoggedIn },
				}
			)

			commit('tvlCompanionInfo', travelHistory.data)
		},

		removeCookie({ commit }) {
			commit('removeCookie')
			commit('resetState')
		},

		setCookie({ commit }, payload) {
			commit('setCookie', payload)
		},

		async updateProfile({ commit, state, dispatch }, payload) {
			const { profile, address, account } = payload

			try {
				const profileUpdate = await axios.patch(
					`${state.baseURL}/accounts/update/profile`,
					profile, //data body
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				const addressUpdate = await axios.patch(
					`${state.baseURL}/account/update/address`,
					address,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				const accountUpdate = await axios.patch(
					`${state.baseURL}/update/account`,
					account,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				if (
					profileUpdate.status === 201 ||
					addressUpdate.status === 201 ||
					accountUpdate.status === 201
				) {
					commit('showPopOut')

					commit('isProfileUpdated')
					dispatch('getProfile')
				}
			} catch (error) {
				return error
			}
		},
	},
	modules: {},

	plugins: [
		createPersistedState({
			paths: ['ACCESS_TOKEN', 'TOKEN_NAME', 'isAuth', 'accType', 'userProfile'],
		}),
	],
})
