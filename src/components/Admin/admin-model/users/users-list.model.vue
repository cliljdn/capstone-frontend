<script>
import UserProfile from '../../profile/users/user-profile'
export default {
	components: { 'user-profile': UserProfile },

	methods: {
		openModal() {
			return this.$store.commit('toggleModalUser')
		},
	},
}
</script>
