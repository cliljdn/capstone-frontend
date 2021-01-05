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
				let app = await this.$axios.get(
					`${state.BASE_URL}/download/scanolongapo/hello.txt`,
					{
						responseType: 'blob',
					}
				)

				console.log(app.data)
			} catch (err) {
				console.log(err.response)
			}
		},
	},
}
</script>
