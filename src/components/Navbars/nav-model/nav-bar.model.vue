<script>
import sidebar from '../../sidebar/sidebar/sidebar-profile'
export default {
	components: {
		sidebar,
	},

	computed: {
		authUser() {
			return this.$store.state.userProfile
		},
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

		activeEst() {
			this.isUserActive = false
			this.isDriverActive = false
			this.isEstActive = true
		},
	},
}
</script>
