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
			}
		} catch (err) {
			if (err.response.status === 500) {
				this.$router.push({ path: '/' })
			}
		}
	},
}
</script>
