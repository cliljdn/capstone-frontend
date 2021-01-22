<script>
export default {
	computed: {
		travelInfo() {
			const { travelHistory } = this.$store.state.individual.tvlCompanionInfo
			return travelHistory
		},

		driverInfo() {
			const { driverInfo } = this.$store.state.individual.tvlCompanionInfo
			return driverInfo
		},

		vehicleInfo() {
			const { vehicleInfo } = this.$store.state.individual.tvlCompanionInfo
			return vehicleInfo
		},
	},

	methods: {
		closeModal() {
			this.$store.commit('modalTravel')
		},
	},
}
</script>
