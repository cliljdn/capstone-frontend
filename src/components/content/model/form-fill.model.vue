<script>
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import form from '../validations/fillup-validations'
import querystring from 'querystring'
export default {
	components: {
		FlatPickr: VueFlatpickr,
	},

	data() {
		return {
			profileBody: {
				firstName: '',
				lastName: '',
				middleName: '',
				contact: '',
				image: null,
				birthday: null,
			},

			imgRef: '',

			address: {
				lotNumber: '',
				barangay: '',
				city: '',
			},

			profileError: {
				firstName: '',
				lastName: '',
				middleName: '',
				contact: '',
				birthday: null,
				image: null,
			},

			addressError: {
				lotNumber: '',
				barangay: '',
				city: '',
			},

			yupOptions: { abortEarly: false, strict: false },

			profileValidate: form,
		}
	},

	methods: {
		createProfile: async function() {
			let { formValidate, addressValidate } = form,
				{ state } = this.$store
			try {
				// let fileImg = URL.revokeObjectURL(this.profileBody.image)
				let blob = new Blob([this.profileBody.image], { type: 'image/jpg' })
				let reader = new FileReader()
				reader.onloadend = () => {
					let base64data = reader.result
					return base64data
				}
				this.profileBody.image = reader.readAsDataURL(blob)

				console.log(this.profileBody.image)
				let validateProfile = await formValidate.validate(
					this.profileBody,
					this.yupOptions
				)
				let validateAddress = await addressValidate.validate(
					this.address,
					this.yupOptions
				)

				if (validateProfile && validateAddress) {
					const res = await this.$axios.post(
						`${state.BASE_URL}/accounts/create/profile`,
						querystring.stringify(this.profileBody),
						{
							headers: {
								Authorization: state.headers.Authorization,
							},
						}
					)
					console.log(res)
					if (res.status === 201) {
						await this.$axios.post(
							`${state.BASE_URL}/account/create/address`,
							this.profileBody,
							{
								headers: {
									Authorization: state.headers.Authorization,
								},
							}
						)
					}
				}
			} catch (err) {
				console.log(err)
				if (err.response !== undefined) {
					console.log(err.response)
				} else {
					err.inner.forEach((error) => {
						if (error.path in this.addressError) {
							this.addressError[error.path] = error.message
						}
						if (error.path in this.profileError) {
							this.profileError[error.path] = error.message
						}
					})
				}
			}
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

		onFileChange(e) {
			let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]
			console.log(file)
			this.imgRef = file.name
			if (!file) {
				e.preventDefault()
				return
			}

			if (file.size > 1024 * 1024) {
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

			this.profileBody.image = URL.createObjectURL(file)
		},

		validateProfile: async function(field) {
			let { formValidate } = form
			try {
				await formValidate.validateAt(field, this.profileBody, this.yupOptions)
				this.profileError[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					this.profileError[error.path] = error.message
				})
			}
		},

		validateAddress: async function(field) {
			let { addressValidate } = form
			try {
				await addressValidate.validateAt(field, this.address, this.yupOptions)
				this.addressError[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					this.addressError[error.path] = error.message
				})
			}
		},
	},
}
</script>
