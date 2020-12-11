<script>
import registerIsValid from '../validations/registerValidations'

export default {
	mounted() {},
	data() {
		return {
			// input fields
			values: {
				email: '',
				password: '',
				account_type: '',
				confirm: '',
			},

			//validation error
			errors: {
				email: '',
				password: '',
				account_type: '',
				confirm: '',
			},

			//options for validation
			yupOptions: { abortEarly: false, strict: false },

			getValidations: registerIsValid,

			isAuth: false,
		}
	},

	methods: {
		validate: async function(field) {
			let { registerIsValid } = this.getValidations
			try {
				await registerIsValid.validateAt(field, this.values, this.yupOptions)
				this.errors[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					console.log(error.path, error.message)
					this.errors[error.path] = error.message
				})
			}
		},

		registerBtn: async function() {
			// let { state } = this.$store
			let { registerIsValid } = this.getValidations
			try {
				this.isAuth = await registerIsValid.isValid(
					this.values,
					this.yupOptions
				)
				// if (this.isAuth) {
				// }
			} catch (err) {
				err.inner.forEach((error) => {
					console.log(error.path, error.message)
					this.errors[error.path] = error.message
				})
			}
		},
	},
}
</script>
