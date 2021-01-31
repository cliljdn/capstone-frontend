<script>
export default {
	computed: {
		companions() {
			const {
				companionList,
			} = this.$store.state.individual.estEnteredCompanions
			return companionList ? companionList : ''
		},

		estInfo() {
			const {
				estInformation,
			} = this.$store.state.individual.estEnteredCompanions

			return estInformation ? estInformation : ''
		},

		empInfo() {
			const {
				employeeProfile,
			} = this.$store.state.individual.estEnteredCompanions

			return employeeProfile ? employeeProfile : ''
		},
	},

	methods: {
		closeModal() {
			return this.$store.commit('modalEntered')
		},
	},
}
</script>
