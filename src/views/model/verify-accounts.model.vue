<script>
export default {
	data() {
		return {
			msg: '',
		}
	},
	async mounted() {
		let { token } = this.$route.params,
			{ state } = this.$store

		try {
			const res = await this.$axios.get(
				`${state.BASE_URL}/accounts/verify/${token}`
			)

			if (res.status === 200) {
				this.msg = 'verified'
				console.log(this.getAccType(res.data.account_type))
			}
		} catch (err) {
			if (err.response.status === 500) {
				this.$router.push({ path: '/' })
			}
		}
	},

	methods: {
		getAccType(value) {
			switch (value) {
				case 'User':
					return 'gago'
					break
				case 'Employee':
					return 'bobo'
					break
				case 'Driver':
					return 'tanga'
					break
				default:
					break
			}
		},
	},
}
</script>
