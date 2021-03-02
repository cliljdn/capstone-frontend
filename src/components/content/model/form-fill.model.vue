<script>
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import form from '../validations/fillup-validations'

import qs from 'querystring'
export default {
	components: {
		FlatPickr: VueFlatpickr,
	},

	computed: {
		isLoading() {
			const { state } = this.$store
			return state.isLoading
		},

		credentials() {
			const { userProfile } = this.$store.state
			return userProfile
		},
	},

	data() {
		return {
			profileBody: {
				firstName: '',
				lastName: '',
				middleName: '',
				contact: '',
				image: '',
				birthday: null,
			},

			imgRef: null,

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
		encodeBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result.split(',')[1])
				reader.onerror = (error) => reject(error)
			})
		},

		createProfile: async function() {
			let { formValidate, addressValidate } = form,
				{ state, commit, dispatch } = this.$store
			try {
				let validateProfile = await formValidate.validate(
					this.profileBody,
					this.yupOptions
				)
				let validateAddress = await addressValidate.validate(
					this.address,
					this.yupOptions
				)
				state.isLoading = true

				if (validateProfile && validateAddress) {
					const res = await this.$axios.post(
						`${state.proxyURL}/accounts/create/profile`,
						qs.stringify(this.profileBody),
						{
							headers: {
								Authorization: this.$store.getters.isLoggedIn,
							},
						}
					)

					const resAddress = await this.$axios.post(
						`${state.baseURL}/account/create/address`,
						qs.stringify(this.address),
						{
							headers: {
								Authorization: this.$store.getters.isLoggedIn,
							},
						}
					)

					if (resAddress.status === 201 && res.status === 201) {
						dispatch('verifyAccount')
						state.accountsMsg.isRegistered = false
						state.accountsMsg.isProfileCreated = true
						state.isLoading = false
						this.$store.dispatch('removeCookie')
						return commit('showPopOut')
					}
				}
			} catch (err) {
				state.isLoading = false
				console.log(err.response)
				if (!err.response) {
					return err.response
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

			this.profileBody.image = await this.encodeBase64(file)
			this.imgRef = URL.createObjectURL(file)
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
