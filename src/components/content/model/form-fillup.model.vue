<script>
	import moment from "moment";

	export default {
		data() {
			return {
				personalInfo: {
					firstName: "",
					lastName: "",
					middleName: "",
					birthday: "",
					contact: "",
				},

				address: {
					lotNumber: "",
					barangay: "",
					city: "",
				},
			};
		},

		methods: {
			format_date(value) {
				if (value) {
					return moment(String(value)).format("YYYYMMDD");
				}
			},
		},
	};
</script>
