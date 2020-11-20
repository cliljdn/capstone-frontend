export default {
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
