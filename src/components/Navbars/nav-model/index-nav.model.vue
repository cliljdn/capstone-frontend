<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},

	methods: {
		async downloadApp() {
			let { state } = this.$store

			try {
				let app  = await this.$axios.get(`${state.BASE_URL}/download/scanolongapo`)
				return  app
			} catch (error) {
				console.log(error.response)
			}
		},
	},
}
</script>
