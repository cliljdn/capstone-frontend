/*eslint no-useless-escape: "error"*/
import * as yup from 'yup'
const errors = {
	email: 'Please enter a valid email',
	password: `password must contain Minimum eight characters,
    at least one uppercase letter,
    one lowercase letter and one number`,
}

export default {
	registerIsValid: yup.object().shape({
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

		confirm: yup
			.string()
			.trim()
			.oneOf([yup.ref('password'), null], 'password, must be matched')
			.required('confirm field is a required field'),

		account_type: yup
			.string()
			.trim()
			.matches(
				/^(User|Driver|Employee)$/,
				'User, Driver, Employee account types are only allowed'
			)
			.required('account type is a required field'),
	}),
}
