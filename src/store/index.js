import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		BASE_URL: 'http://localhost:6060/api/v1',
		ACCESS_TOKEN: '',
		sideBarOpen: false,
		editProfileOpen: false,
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
	},
	actions: {},
	modules: {},
})
