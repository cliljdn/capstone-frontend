<script>
import edit from '../../sidebar/edit-profile'
import DriverIndiProfile from '../../sidebar/driver-indiv-profile'
import EstProfile from '../../sidebar/est-profile'
import VehicleInfo from '../../sidebar/vehicle-info'

export default {
	components: {
		'edit-profile': edit,
		'driver-indiv-profile': DriverIndiProfile,
		'est-profile': EstProfile,
		'vehicle-info': VehicleInfo,
	},

	computed: {
		authProfile() {
			return this.$store.state.userProfile
		},

		stateVar() {
			return this.$store.state
		},
	},

	data() {
		return {}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			console.log(this.authProfile)
			return this.$store.commit('toggleSideBar')
		},

		toggleEditForm() {
			console.log(this.stateVar.editProfileOpen)
			return this.$store.commit('toggleEditForm')
		},

		// adminProfile() {
		// 	return this.$store.state.adminProfile
		// },

		logout() {
			this.$store.dispatch('removeCookie')
			this.$store.dispatch('isAuth', false)
			this.$router.push({ name: 'usersLogin' })
		},
	},

	mounted() {
		this.$store.dispatch('getProfile')
	},
}
</script>
