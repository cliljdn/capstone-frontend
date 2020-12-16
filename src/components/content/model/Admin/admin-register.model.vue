<script>
import PopModal from '../../../msgmodal/pop-modal'
import form from '../../validations/registerValidations'
export default {
	components: { 'pop-modal': PopModal },
	data() {
		return {
			body: {
				email: '',
				password: '',
				confirm: '',
			},

			errors: {
				email: '',
				password: '',
				confirm: '',
			},
			//options for validation
			yupOptions: { abortEarly: false, strict: false },
		}
	},

	methods: {
		registerAdmin: async function() {
			let { state, commit } = this.$store,
				{ isAdminValid } = form
			try {
				let isValid = await isAdminValid.validate(this.body, this.yupOptions)

				if (isValid) {
					let res = await this.$axios.post(
						`${state.BASE_URL}/admin/create/account`,
						this.body
					)

					if (res.status === 201) {
						state.accountsMsg.isRegistered = true
						state.accountsMsg.isProfileCreated = false
						state.isAdminValid = true
						this.body.email = ''
						this.body.password = ''
						this.body.confirm = ''
						return commit('showPopOut')
					}
				}
			} catch (err) {
				if (err.response !== undefined) {
					this.errors.email = err.response.data.message
				} else {
					err.inner.forEach((error) => {
						this.errors[error.path] = error.message
					})
				}
			}
		},

		validate: async function(field) {
			let { isAdminValid } = form
			try {
				await isAdminValid.validateAt(field, this.body, this.yupOptions)
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
