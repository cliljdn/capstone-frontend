<script>
import UserProfile from '../../profile/users/user-profile'
export default {
	components: { 'user-profile': UserProfile },
	// computed() {},

	methods: {
		openModal() {
			return this.$store.commit('toggleModalUser')
		},

		userList() {
			return this.$store.state.userList.list
		},

		async getPage(number) {
			console.log(number)

			return await this.$store.dispatch('getUsers', number)
		},

		pageNumbers() {
			return this.$store.state.userList.pageNo
		},

		async initUserlist() {
			return await this.$store.dispatch('getUsers')
		},
	},

	async mounted() {
		await this.initUserlist()
		console.log(this.$store.state.userList.pageNo)
	},
}
</script>
