<script>
import * as yup from 'yup'
const errors = {
	email: 'Please enter a valid email',
	password: `Password must contain Minimum eight characters,
    at least one uppercase letter,
    one lowercase letter and one number`,
}
// import { validate } from '../validations/registerValidations'
export default {
	data() {
		return {
			values: {
				email: '',
				password: '',
				account_type: '',
			},

			errors: {
				email: '',
				password: '',
				account_type: '',
			},

			registerValidation: yup.object().shape({
				email: yup
					.string()
					.trim()
					.matches(
						/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

						errors.email
					)
					.required(),

				password: yup
					.string()
					.trim()
					.matches(
						/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
						errors.password
					)
					.required(),

				account_type: yup
					.string()
					.trim()
					.matches(
						/^(User|Driver|Employee)$/,
						'User, Driver, Employee account types are only allowed'
					)
					.required(),
			}),
		}
	},

	methods: {
		isValid: async function(values) {
			this.registerValidation.validate(values, { abortEarly: false })
		},
	},
}
</script>
