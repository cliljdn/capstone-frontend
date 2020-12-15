<script>
export default {
	data() {
		return {
            estList: {},
        },
	},

	methods: {},

	mounted() {
		let { state } = this.$store
		return this.$axios.get(
			`${state.BASE_URL} /list/account/establishment/profile`,
			{
				headers: {
					Authorization: state.headers.Authorization,
				},
			}
		)
	},
}
</script>
