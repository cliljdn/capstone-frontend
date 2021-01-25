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
					})
			} catch (err) {
				console.log(err.response)
			}
		},
	},
}
</script>
