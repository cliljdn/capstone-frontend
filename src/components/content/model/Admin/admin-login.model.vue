<script>
import cookies from '../../../../assets/cookies/cookies'
import form from '../../validations/registerValidations'
export default {
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
				{ state } = this.$store,
				{ isLoggedIn, checkCookies } = cookies

			try {
				let isValid = await validateLogin.validate(this.body, this.yupOptions)

				if (isValid) {
					let res = await this.$axios.post(
						`${state.BASE_URL}/admin/login`,
						this.body
					)

					if (res.status === 201) {
						state.TOKEN_NAME = res.data.name
						isLoggedIn(res.data.token, res.data.name)
						let test = checkCookies(state.TOKEN_NAME)
						console.log(test)
					}
				}
			} catch (err) {
				console.log(err.response)
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
