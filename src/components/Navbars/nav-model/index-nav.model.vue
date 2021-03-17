<script>
export default {
	data() {
		return {
			isActive: false,

			loadBtn: false,
		}
	},

	methods: {
		downloadApp() {
			let { state } = this.$store

			try {
				state.isLoading = true
				this.loadBtn = true
				this.$axios
					.get(`${state.baseURL}/download/scanolongapo/scanolongapo.apk`, {
						responseType: 'blob',
					})
					.then((res) => {
						const url = window.URL.createObjectURL(new Blob([res.data]))
						const link = document.createElement('a')
						link.setAttribute('download', 'scanolongapo.apk')
						link.href = url
						document.body.appendChild(link)
						link.click()
						URL.revokeObjectURL(link.href)
						state.isLoading = false
						this.loadBtn = false
					})
			} catch (err) {
				if (err) {
					state.isLoading = false
					this.loadBtn = false

					return err
				}
			}
		},
	},
}
</script>
