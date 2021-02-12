<script>
export default {
	computed: {
		accountInfo() {
			const { userProfile } = this.$store.state
			return userProfile
		},
	},

	data() {
		return {}
	},

	methods: {
		gotoForm() {
			if (this.accountInfo) {
				this.$router.push({ name: 'create-profile' })
			}
		},
	},

	mounted() {
		this.$store.dispatch('getAccount', this.$route.params.token)
		if (this.accountInfo.isActive === 1) {
			this.$router.push({ name: 'usersLogin' })
		}
	},
}
</script>
