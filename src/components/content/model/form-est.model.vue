<script>
export default {
	data() {
		return {
			payload: {
				name: '',
				street: '',
				telephone_number: '',
				est_owner: '',
				image: null,
			},
		}
	},

	methods: {
		async createProfile() {
			const { state, commit } = this.$store
			try {
				const res = await this.$axios.post(
					`${state.baseURL}/accounts/create/profile`,
					this.payload,
					{
						headers: {
							Authorization: this.$store.getters.isLoggedIn,
						},
					}
				)

				if (res.status === 201) {
					state.accountsMsg.isRegistered = false
					state.accountsMsg.isProfileCreated = true
					this.$store.dispatch('removeCookie')
					return commit('showPopOut')
				}
			} catch (error) {
				console.log(error.response)
			}
		},

		onFileChange(e) {
			// let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]

			if (!file) {
				e.preventDefault()
				return
			}

			// if (file.size > 1024 * 1024) {
			// 	e.preventDefault()
			// 	this.profileError.image = 'Image must be less than 1mb'
			// 	return
			// }
			// let fileFormat = file.name.split('.')[1]

			// if (!imgFormats.includes(fileFormat)) {
			// 	e.preventDefault()
			// 	this.profileError.image =
			// 		'jpg, jpeg and png are the only file supported'
			// 	return
			// }

			this.payload.image = URL.createObjectURL(file)
		},
	},
}
</script>
