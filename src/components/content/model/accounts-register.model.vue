<script>
import registerIsValid from '../validations/registerValidations'
export default {
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
			validateInfo: registerIsValid,

			isAuth: '',
		}
	},

	methods: {
		validate: async function(field) {
			let { registerIsValid } = this.validateInfo
			try {
				this.isAuth = await registerIsValid.validateAt(
					field,
					this.values,
					this.yupOptions
				)
			} catch (err) {
				err.inner.forEach((error) => {
					console.log(error.path, error.message)
					this.errors[error.path] = error.message
				})
			}
		},

		registerBtn() {},
	},
}
</script>
