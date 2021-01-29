<script>
export default {
	data() {
		return {
			msg: '',
			isType: '',
			isAuth: false,
		}
	},

	methods: {
		gotoForm() {
			if (this.isAuth) {
				this.$router.push({ name: 'create-profile' })
				this.isAuth = false
			}
		},
	},

	async mounted() {
		let { token } = this.$route.params,
			{ state } = this.$store

		try {
			const res = await this.$axios.get(
				`${state.baseURL}/accounts/verify/${token}`
			)
			if (res.data.verified) {
				this.msg = `Your email ${res.data.email} has been Verified`
				state.accountsMsg.isRegistered = true
				const auth = {
					token: token,
					name: res.data.name,
					accType: res.data.account_type,
				}
				console.log(auth)
				this.$store.dispatch('setCookie', auth)
				this.isAuth = true
			}
		} catch (err) {
			console.log(err.response.status)
			if (err.response.status === 500) {
				this.$router.push({ path: '/' })
			}
		}
	},
}
</script>
