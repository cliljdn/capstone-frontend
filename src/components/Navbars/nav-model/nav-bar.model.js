import sidebar from '../../Admin/sidebar/sidebar-profile'
export default {
	components: {
		sidebar,
	},
	data() {
		return {
			isActive: false,
		}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},
	},
}
