import edit from '../sidebar/edit-profile.vue'

export default {
	components: edit,

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
	},
}
