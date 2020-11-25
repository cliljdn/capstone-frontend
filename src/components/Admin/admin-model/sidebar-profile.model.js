import edit from '../sidebar/edit-profile.vue'

export default {
	components: { 'edit-profile': edit },

	data() {
		return {}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			console.log(this.$store.state.sideBarOpen)
			return this.$store.commit('toggleSideBar')
		},

		toggleEditForm() {
			console.log(this.$store.state.editProfileOpen)
			return this.$store.commit('toggleEditForm')
		},
	},
}
