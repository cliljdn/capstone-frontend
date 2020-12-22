<script>
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import form from '../../validations/fillup-validations'
import qs from 'querystring'
import PopModal from '../../../msgmodal/pop-modal'
export default {
	components: {
		FlatPickr: VueFlatpickr,
		'pop-modal': PopModal,
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
				{ state, commit } = this.$store
			try {
				let blob = new Blob([this.profileBody.image], { type: 'image/png' })

				let img = await this.blobToData(blob)

				this.profileBody.image = img

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
						`${state.BASE_URL}/admin/create/profile`,
						qs.stringify(this.profileBody),
						{
							headers: {
								Authorization: state.headers.Authorization,
							},
						}
					)

					if (res.status === 201) {
						const resAddress = await this.$axios.post(
							`${state.BASE_URL}/admin/create/address`,
							qs.stringify(this.address),
							{
								headers: {
									Authorization: state.headers.Authorization,
								},
							}
						)

						if (resAddress.status === 201) {
							state.accountsMsg.isRegistered = false
							state.accountsMsg.isProfileCreated = false
							state.accountsMsg.adminProfileCreated = true
							return commit('showPopOut')
						}
					}
				}
			} catch (err) {
				if (err.response !== undefined) {
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

		blobToData: (blob) => {
			return new Promise((resolve) => {
				const reader = new FileReader()
				if (blob instanceof Blob) reader.readAsDataURL(blob)
				reader.onloadend = () => resolve(reader.result)
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

		onFileChange(e) {
			let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]
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
