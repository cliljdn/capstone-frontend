<script>
export default {
	computed: {
		companions() {
			const { estEnteredCompanions } = this.$store.state.individual

			return estEnteredCompanions.companionList
		},

		estInfo() {
			const { estEnteredCompanions } = this.$store.state.individual

			return estEnteredCompanions.estInformation
		},

		empInfo() {
			const { estEnteredCompanions } = this.$store.state.individual

			return estEnteredCompanions.employeeProfile
		},
	},

	methods: {
		closeModal() {
			return this.$store.commit('modalEntered')
		},
	},
}
</script>
