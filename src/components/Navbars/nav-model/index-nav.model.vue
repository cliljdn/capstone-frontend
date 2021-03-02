<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},

	methods: {
		downloadApp() {
			let { state } = this.$store

			try {
				state.isLoading = true
				this.$axios
					.get(`${state.baseURL}/download/scanolongapo/scanolongapo.apk`, {
						responseType: 'blob',
					})
					.then((res) => {
						const url = window.URL.createObjectURL(new Blob([res.data]))
						const link = document.createElement('a')
						link.href = url
						link.setAttribute('download', 'scanolongapo.apk')
						document.body.appendChild(link)
						link.click()
						state.isLoading = false
					})
			} catch (err) {
				return err
			}
		},
	},
}
</script>
