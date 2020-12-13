<script>
export default {
	data() {
		return {
			msg: '',
			isType: '',
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
				this.msg = `Your email ${res.data.email} has been Verified`
				this.isType = res.data.account_type
				state.ACCESS_TOKEN = token
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
					this.$router.push({ name: 'user-driver-creation' })
					break
				case 'Employee':
					this.$router.push({ name: 'employee-creation' })
					break
				case 'Driver':
					this.$router.push({ name: 'user-driver-creation' })
					break
				default:
					break
			}
		},

		gotoForm() {
			this.getAccType(this.isType)
		},
	},
}
</script>
