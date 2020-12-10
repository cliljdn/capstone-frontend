/*eslint no-useless-escape: "error"*/
import * as yup from 'yup'
const errors = {
	email: 'Please enter a valid email',
	password: `Password must contain Minimum eight characters,
    at least one uppercase letter,
    one lowercase letter and one number`,
}
export default {
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

	validate: async function(values) {
		try {
			this.registerValidation.validate(values, { abortEarly: false })
		} catch (error) {
			return error
		}
	},
}
