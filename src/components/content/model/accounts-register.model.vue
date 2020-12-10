<script>
import registerIsValid from '../validations/registerValidations'
export default {
	data() {
		return {
			values: {
				email: '',
				password: '',
				account_type: '',
				confirm: '',
			},

			errors: {
				email: '',
				password: '',
				account_type: '',
				confirm: '',
			},

			validateInfo: registerIsValid,
		}
	},

	methods: {
		validate: async function(values) {
			let { registerIsValid } = this.validateInfo
			try {
				await registerIsValid.validate(values, { abortEarly: false })
			} catch (err) {
				for (const item of err.errors) {
					console.log(item)
					if (item.includes('email')) {
						this.errors.email = item
					} else if (item.includes('confirm')) {
						this.errors.confirm = item
					} else if (item.includes('password')) {
						this.errors.password = item
					} else {
						this.errors.account_type = item
					}
				}
			}
		},
	},
}
</script>
