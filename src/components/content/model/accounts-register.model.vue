<script>
import registerIsValid from '../validations/registerValidations'
import PopModal from '../../msgmodal/pop-modal'
export default {
	components: { 'pop-modal': PopModal },

	computed: {
		isLoading() {
			const { state } = this.$store
			return state.isLoading
		},
	},

	data() {
		return {
			btnLoad: false,
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
				state.isLoading = true
				this.btnLoad = true
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
						state.isLoading = false
						this.btnLoad = false
						return commit('showPopOut')
					}
				}
			} catch (err) {
				state.isLoading = false
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
