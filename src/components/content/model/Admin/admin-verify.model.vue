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
				`${state.BASE_URL}/admin/verify/email/${token}`
			)

			if (res.status === 200) {
				this.msg = `Your email ${res.data.email} has been Verified`
				state.ACCESS_TOKEN = token
				state.accountsMsg.isRegistered = true
				this.$store.commit('assignToken')
			}
		} catch (err) {
			if (err.response.status === 500) {
				this.$router.push({ path: '/admin/olongapo/cityhall/mis/register' })
			}
		}
	},

	methods: {
		gotoForm() {
			let { state } = this.$store
			if (state.accountsMsg.isRegistered === true)
				return this.$router.push({ name: 'admin-profile-creation' })
		},
	},
}
</script>
