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

		getTravelData() {
			const { getTravelHistoryDate } = this.$store.getters
			return getTravelHistoryDate.filter(
				(value, index) => getTravelHistoryDate.indexOf(value) === index
			)
		},
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
			timeValue: 24,
			payload: {
				start: undefined,
				end: undefined,
				order: undefined,
				startDate: undefined,
				search: undefined,
			},
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

	mounted() {
		this.$store.dispatch('travelHistory', this.payload)
	},
}
</script>
