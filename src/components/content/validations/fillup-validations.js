import * as yup from 'yup'

export default {
	formValidate: yup.object().shape({
		firstName: yup
			.string()
			.trim()
			.required('Firstname Field is required'),

		lastName: yup
			.string()
			.trim()
			.required('Lastname Field is required'),

		middleName: yup
			.string()
			.trim()
			.required('Middlename Field is required'),

		birthday: yup
			.date()
			.max(new Date(), 'The Year cannot be greater on the present!')
			.typeError('Select a date')
			.nullable(true)
			.required('Birthday Field is required '),
		contact: yup
			.string()
			.trim()
			.min(11, 'Contact number must a 11 characters length')
			.required('Contact Field is required'),
	}),

	addressValidate: yup.object().shape({
		lotNumber: yup
			.string()
			.trim()
			.required('Lot # is a required Field'),
		barangay: yup
			.string()
			.trim()
			.required('Barangay is a required Field'),
		city: yup
			.string()
			.trim()
			.required('City is a required Field'),
	}),
}
