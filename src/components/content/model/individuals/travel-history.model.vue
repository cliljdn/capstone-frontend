<script>
import TravelHistoryModal from '../../modals/individuals/travel-history-modal'
export default {
	components: {
		'travel-history-modal': TravelHistoryModal,
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
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
