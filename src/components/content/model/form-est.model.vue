<script>
import qs from 'querystring'
import yup from '../validations/fillup-validations'
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

			formError: {
				name: '',
				street: '',
				telephone_number: '',
				est_owner: '',
				image: null,
			},

			imgRef: null,

			profileError: {
				image: '',
			},

			yupOptions: { abortEarly: false, strict: false },
		}
	},

	methods: {
		async createProfile() {
			let { formEst } = yup
			const { state, commit, dispatch } = this.$store
			try {
				const isFormValid = await formEst.validate(
					this.payload,
					this.yupOptions
				)

				if (isFormValid) {
					const res = await this.$axios.post(
						`${state.baseURL}/accounts/create/profile`,
						qs.stringify(this.payload),
						{
							headers: {
								Authorization: this.$store.getters.isLoggedIn,
							},
						}
					)

					if (res.status === 201) {
						dispatch('verifyAccount')
						state.accountsMsg.isRegistered = false
						state.accountsMsg.isProfileCreated = true
						this.$store.dispatch('removeCookie')
						return commit('showPopOut')
					}
				} else {
					return
				}
			} catch (error) {
				console.log(error.response)
			}
		},

		encodeBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result)
				reader.onerror = (error) => reject(error)
			})
		},

		isNumber: function(evt) {
			evt = evt ? evt : window.event
			var charCode = evt.which ? evt.which : evt.keyCode
			if (
				charCode > 31 &&
				(charCode < 48 || charCode > 57) &&
				charCode !== 46
			) {
				evt.preventDefault()
			} else {
				return true
			}
		},

		async onFileChange(e) {
			let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]

			if (!file) {
				e.preventDefault()
				return
			}

			if (file.size > 600 * 600) {
				e.preventDefault()
				this.profileError.image = 'Image must be less than 1mb'
				return
			}
			let fileFormat = file.name.split('.')[1]

			if (!imgFormats.includes(fileFormat)) {
				e.preventDefault()
				this.profileError.image =
					'jpg, jpeg and png are the only file supported'
				return
			}

			this.payload.image = await this.encodeBase64(file)
			this.imgRef = URL.createObjectURL(file)
		},

		async validateForm(field) {
			let { formEst } = yup
			try {
				await formEst.validateAt(field, this.payload, this.yupOptions)
				this.formError[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					this.formError[error.path] = error.message
				})
			}
		},
	},
}
</script>
