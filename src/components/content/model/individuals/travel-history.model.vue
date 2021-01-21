<script>
import TravelHistoryModal from '../../modals/individuals/travel-history-modal'

export default {
	components: {
		'travel-history-modal': TravelHistoryModal,
	},

	computed: {
		userTravelHistory() {
			return this.$store.state.individual.travelHistory
		},
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
			timeValue: 24,
			endTime: 25,
		}
	},
	methods: {
		openModal() {
			console.log(this.$store.state.dashboardModal.travelHistory)
			return this.$store.commit('modalTravel')
		},

		showBetweenTimeSort() {
			this.isTimeActive = true
			this.isDetailsActive = false
		},

		showDetailsSort() {
			this.isTimeActive = false
			this.isDetailsActive = true
		},
	},
}
</script>
