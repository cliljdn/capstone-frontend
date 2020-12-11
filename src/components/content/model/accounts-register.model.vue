<script>
import registerIsValid from '../validations/registerValidations'
// import axios from 'axios'
export default {
	mounted() {},
	data() {
		return {
			// input fields
			values: {
				email: '',
				password: '',
				accountType: '',
				confirm: '',
			},

			//validation error
			errors: {
				email: '',
				password: '',
				accountType: '',
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
					this.errors[error.path] = error.message
				})
			}
		},

		registerBtn: async function() {
			let { state } = this.$store
			let { registerIsValid } = this.getValidations
			try {
				this.isAuth = await registerIsValid.validate(
					this.values,
					this.yupOptions
				)

				if (!this.isAuth) {
					console.log(false)
				} else {
					delete this.values.confirm
					const res = await this.$axios.post(
						`${state.BASE_URL}/accounts/register`,
						this.values
					)

					if (res.status === 200) {
						console.log(res)
					}
				}
			} catch (err) {
				this.errors.email = err.response.data.message
				err.inner.forEach((error) => {
					this.errors[error.path] = error.message
				})
			}
		},
	},
}
</script>
