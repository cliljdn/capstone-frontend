import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import * as Cookies from 'js-cookie'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		BASE_URL: 'http://scanolongapo-api.com/api/v1',
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
			adminProfileCreated: false,
		},

		headers: {
			Authorization: '',
		},

		estList: [],

		userList: {
			pageNo: 0,
			list: [],
			userFound: [],
		},

		adminProfile: {},
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

		getUsers(state, payload) {
			if (!payload.pageNo) {
				state.userList.list = []
				state.userList.list = payload.list
			} else {
				state.userList.list = payload.list
				state.userList.pageNo = payload.pageNo
			}
		},

		getProfile(state, payload) {
			state.adminProfile = { ...payload }
		},

		searchUser(state, name) {
			state.userList.userFound = name
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

		async getEst({ commit }) {
			setInterval(async () => {
				let res = await axios.get(
					`${this.state.BASE_URL}/list/account/establishment/profile`,
					{
						headers: {
							Authorization: this.state.getters.isLoggedIn,
						},
					}
				)

				commit('getEst', res.data)
			}, 1000)
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

		async getUsers({ commit }, page) {
			let res = await axios.get(
				`${this.state.BASE_URL}/list/users?page=${!page ? 0 : page}`,
				{
					headers: { Authorization: this.getters.isLoggedIn },
				}
			)

			let temp_total = Math.ceil(res.data.total / res.data.results.length)
			if (res.data.results.length < 6) {
				temp_total = res.data.results.length
			}

			let userPayload = {
				pageNo: temp_total,
				list: res.data.results,
			}

			commit('getUsers', userPayload)
		},

		async searchUser({ commit }, search) {
			try {
				let res = await axios.get(
					`${this.state.BASE_URL}/list/users?search=${search}`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				this.state.userList.userFound = []
				commit('searchUser', res.data)
			} catch (error) {
				return error
			}
		},

		async sortUsers({ commit }, order) {
			try {
				let res = await axios.get(
					`${this.state.BASE_URL}/list/users?order=${order}&page=${0}`,
					{
						headers: { Authorization: this.getters.isLoggedIn },
					}
				)

				let load = {
					list: res.data.results,
				}

				commit('getUsers', load)
			} catch (error) {
				return error
			}
		},
	},
	modules: {},

	plugins: [
		createPersistedState({
			paths: ['ACCESS_TOKEN', 'TOKEN_NAME', 'isAuth'],
		}),
	],
})
