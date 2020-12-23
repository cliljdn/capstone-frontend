<script>
import UserProfile from '../../profile/users/user-profile'
export default {
	components: { 'user-profile': UserProfile },

	data() {
		return {
			inpSearch: '',
			sortUsers: '',
			notFound: false,
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
				this.notFound = !this.notFound
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
			this.$store.state.userList.userFound = []
			await this.$store.dispatch('searchUser', search)
		},

		async sortList(order) {
			if (order) {
				await this.$store.dispatch('sortUsers', order.toLowerCase())
			} else {
				return this.$store.state.userList.list
			}
		},

		blobToData: (blob) => {
			return new Promise((resolve) => {
				const reader = new FileReader()
				if (blob instanceof Blob) reader.readAsDataURL(blob)
				reader.onloadend = () => resolve(reader.result)
			})
		},
	},

	async mounted() {
		await this.initUserlist()
	},
}
</script>
