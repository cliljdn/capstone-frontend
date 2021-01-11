<script>
import ListPassengersModal from '../../modals/driver/list-passengers-modal'
export default {
	components: { 'list-passengers-modal': ListPassengersModal },

	data() {
		return {
			betweenTime: true,
			byDetails: false,
		}
	},

	methods: {
		switchPanelTime() {
			this.byDetails = false
			this.betweenTime = true
		},

		openModal() {
			return this.$store.commit('modalPassengers')
		},

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},
	},
}
</script>
