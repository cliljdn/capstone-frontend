<script>
import sidebar from '../../sidebar/sidebar/sidebar-profile'
export default {
	components: {
		sidebar,
	},
	data() {
		return {
			isActive: false,
			isUserActive: true,
			isDriverActive: false,
			isEstActive: false,
		}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},

		activeUser() {
			this.isUserActive = true
			this.isDriverActive = false
			this.isEstActive = false
		},

		activeDriver() {
			this.isUserActive = false
			this.isDriverActive = true
			this.isEstActive = false
		},

		// adminInfo() {
		// 	return this.$store.state.adminProfile
		// },

		activeEst() {
			this.isUserActive = false
			this.isDriverActive = false
			this.isEstActive = true
		},
	},

	// async mounted() {
	// 	await this.$store.dispatch('getProfile')
	// },
}
</script>
