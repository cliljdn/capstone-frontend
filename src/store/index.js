import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		BASE_URL: 'http://192.168.1.11:6060/api/v1',
		ACCESS_TOKEN: '',
		TOKEN_NAME: '',

		//dashboard
		sideBarOpen: false,
		editProfileOpen: false,
		openModalUser: false,
		openModalDriver: false,
		openModalEst: false,

		//message box
		isEmpSuccess: false,
		isAdminValid: false,
		openPopOut: false,
		accountsMsg: {
			isRegistered: false,
			isProfileCreated: false,
		},

		headers: {
			Authorization: '',
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
	},
	actions: {},
	modules: {},
})
