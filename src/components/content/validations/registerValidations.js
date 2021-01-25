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
			.strict(true)
			.nullable(true)
			.required(),

		password: yup
			.string()
			.trim()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
				errors.password
			)
			.strict(true)
			.nullable(true)
			.required(),

		confirm: yup
			.string()
			.trim()
			.when('password', {
				is: (password) => ('password' && password.length > 0 ? true : false),
				then: yup
					.string()
					.oneOf([yup.ref('password'), null], "Password doesn't match"),
			})
			.required('confirm field is a required field'),

		accountType: yup
			.string()
			.trim()
			.matches(
				/^(Individual|Driver|Establishment)$/,
				'User, Driver, Establishment account types are only allowed'
			)
			.strict(true)
			.nullable(true)
			.required('account type is a required field'),
	}),

	validateLogin: yup.object().shape({
		email: yup
			.string()
			.trim()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

				errors.email
			)
			.strict(true)
			.nullable(true)
			.required(),

		password: yup
			.string()
			.trim()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
				errors.password
			)
			.strict(true)
			.nullable(true)
			.required(),
	}),

	updateValidation: yup.object().shape({
		email: yup
			.string()
			.trim()
			.matches(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,

				errors.email
			)
			.strict(true)
			.nullable(true),

		password: yup
			.string()
			.trim()
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
				errors.password
			)
			.strict(true)
			.nullable(true),

		confirm: yup
			.string()
			.trim()
			.when('password', {
				is: (password) => ('password' && password.length > 0 ? true : false),
				then: yup
					.string()
					.oneOf([yup.ref('password'), null], "Password doesn't match")
					.required('confirm field is a required field'),
			}),
	}),
}
