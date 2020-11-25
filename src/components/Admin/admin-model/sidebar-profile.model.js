import edit from '../sidebar/edit-profile.vue'

export default {
	components: { 'edit-profile': edit },

	data() {
		return {
			hideCompo: false,
		}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},

		toggleEditForm() {
			return this.$store.commit('toggleEditForm')
		},
	},
}
