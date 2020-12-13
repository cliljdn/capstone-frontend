<script>
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
import form from '../validations/fillup-validations'
export default {
	components: {
		FlatPickr: VueFlatpickr,
	},

	data() {
		return {
			// https://chmln.github.io/flatpickr/options/
			profileBody: {
				firstName: '',
				lastName: '',
				middleName: '',
				contact: '',
				birthday: null,
			},

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
		createProfile: function() {},

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
