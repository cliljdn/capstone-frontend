<script>
import UserProfile from '../../profile/users/user-profile'
export default {
	components: { 'user-profile': UserProfile },

	data() {
		return {
			inpSearch: '',
		}
	},

	methods: {
		openModal() {
			return this.$store.commit('toggleModalUser')
		},

		userList() {
			return this.$store.state.userList.list
		},

		foundUsers() {
			if (this.$store.state.userList.userFound.length > 0) {
				return this.$store.state.userList.userFound
			} else {
				return []
			}
		},

		async getPage(number) {
			return await this.$store.dispatch('getUsers', number)
		},

		pageNumbers() {
			return this.$store.state.userList.pageNo
		},

		async initUserlist() {
			return await this.$store.dispatch('getUsers')
		},

		async searchUsers(search) {
			await this.$store.dispatch('searchUser', search)
		},
	},

	async mounted() {
		await this.initUserlist()
	},
}
</script>
