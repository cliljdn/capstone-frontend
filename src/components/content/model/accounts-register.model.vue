<script>
import registerIsValid from '../validations/registerValidations'
import PopModal from '../../msgmodal/pop-modal'
export default {
	components: { 'pop-modal': PopModal },
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
			let { state, commit } = this.$store
			let { registerIsValid } = this.getValidations
			try {
				this.isAuth = await registerIsValid.validate(
					this.values,
					this.yupOptions
				)

				if (!this.isAuth) {
					return false
				} else {
					delete this.values.confirm
					const res = await this.$axios.post(
						`${state.baseURL}/accounts/register`,
						this.values,
						state.headers
					)

					if (res.status === 200) {
						this.values.email = ''
						this.values.password = ''
						this.values.accountType = 'SELECT'
						state.accountsMsg.isRegistered = true
						return commit('showPopOut')
					}
				}
			} catch (err) {
				console.log(err.response)
				if (err.response !== undefined) {
					this.errors.email = err.response.data.message
				} else {
					err.inner.forEach((error) => {
						this.errors[error.path] = error.message
					})
				}
			}
		},
	},
}
</script>
