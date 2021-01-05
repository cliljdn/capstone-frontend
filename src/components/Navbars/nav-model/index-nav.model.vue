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
					.get(`${state.BASE_URL}/download/scanolongapo/hello.txt`, {
						responseType: 'blob',
					})
					.then((res) => {
						const url = window.URL.createObjectURL(new Blob([res.data]))
						const link = document.createElement('a')
						link.href = url
						link.setAttribute('download', 'hello.txt')
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
