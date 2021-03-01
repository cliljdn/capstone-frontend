<script>
// import store from '../../../../assets/cookies/cookies'
import form from '../validations/registerValidations'

export default {
	computed: {
		disableInputs() {
			const { state } = this.$store
			return state.isLoading
		},
	},

	data() {
		return {
			body: {
				email: '',
				password: '',
			},

			errors: {
				email: '',
				password: '',
			},

			yupOptions: { abortEarly: false, strict: false },
		}
	},

	methods: {
		btnLogin: async function() {
			let { validateLogin } = form,
				{ state } = this.$store

			try {
				let isValid = await validateLogin.validate(this.body, this.yupOptions)
				state.isLoading = true

				if (isValid) {
					let res = await this.$axios.post(
						`${state.baseURL}/accounts/login`,
						this.body
					)

					if (res.status === 201) {
						state.TOKEN_NAME = res.data.name
						//stores token on cookies
						let auth = {
							name: res.data.name,
							token: res.data.token,
							accType: res.data.account_type,
						}

						this.$store.dispatch('setCookie', auth)
						this.$store.dispatch('isAuth', true)
						this.isUserAuth(auth.accType)
						state.isLoading = false
					}
				}
			} catch (err) {
				state.isLoading = false
				if (err.response !== undefined) {
					if (
						err.response.data.message.includes('Password') ||
						err.response.data.message.includes('password')
					) {
						this.errors.password = err.response.data.message
					} else {
						this.errors.email = err.response.data.message
					}
				} else {
					if (err.inner === undefined) {
						return false
					} else {
						err.inner.forEach((error) => {
							if (error.path in this.errors) {
								this.errors[error.path] = error.message
							}

							if (error.path in this.errors) {
								this.errors[error.path] = error.message
							}
						})
					}
				}
			}
		},

		isUserAuth(accType) {
			switch (accType) {
				case 'Individual':
					this.$router.push({ name: 'travelHistory' })
					break
				case 'Driver':
					this.$router.push({ name: 'listPassengers' })
					break

				case 'Establishment':
					this.$router.push({ name: 'listEntered' })
					break
				default:
					this.$router.push({ name: 'usersLogin' })
					break
			}
		},

		validateProfile: async function(field) {
			let { validateLogin } = form
			try {
				await validateLogin.validateAt(field, this.body, this.yupOptions)
				this.errors[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					this.errors[error.path] = error.message
				})
			}
		},
	},
}
</script>
