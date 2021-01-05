<script>
import edit from '../../sidebar/edit-profile.vue'

export default {
	components: { 'edit-profile': edit },

	data() {
		return {}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},

		toggleEditForm() {
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

	// async mounted() {
	// 	await this.$store.dispatch('getProfile')
	// },
}
</script>
