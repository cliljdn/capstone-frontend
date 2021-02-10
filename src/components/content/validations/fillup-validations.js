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

		middleName: yup.string().trim(),

		birthday: yup
			.date()
			.max(
				new Date(),
				'The year value cannot be on present and greater than present year!'
			)
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

	formEst: yup.object().shape({
		name: yup
			.string()
			.trim()
			.required('Establishment Name Field is required'),

		street: yup
			.string()
			.trim()
			.required('Street Address Field is required'),

		est_owner: yup
			.string()
			.trim()
			.required('Establishment Owner Field is required'),

		telephone_number: yup
			.string()
			.trim()
			.min(11, 'Contact number must a 11 characters length')
			.required('Contact Field is required'),
	}),
}
