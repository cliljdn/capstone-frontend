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
			return await this.$store.dispatch('getUsers', number)
		},

		pageNumbers() {
			return this.$store.state.userList.pageNo
		},

		async initUserlist(page) {
			return await this.$store.dispatch('getUsers', page)
		},
	},

	async mounted() {
		await this.initUserlist()
		console.log(this.$store.state.userList.pageNo)
	},
}
</script>
