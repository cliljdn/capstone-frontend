<script>
import TravelDriver from '../../profile/driver/travel-driver'
import EstDriver from '../../profile/driver/est-driver'
import PassengerDriver from '../../profile/driver/passengers-driver'
export default {
	components: { TravelDriver, EstDriver, PassengerDriver },

	data() {
		return {
			isTabActiveTravel: true,
			isTabActiveEst: false,
			isTabActivePassenger: false,
		}
	},

	methods: {
		closeModalDriver: function() {
			return this.$store.commit('toggleModalDriver')
		},

		showTravelFrmDriver() {
			this.isTabActiveTravel = true
			this.isTabActiveEst = false
			this.isTabActivePassenger = false
		},

		showEstFrmDriver() {
			this.isTabActivePassenger = false
			this.isTabActiveTravel = false
			this.isTabActiveEst = true
		},

		showPassenger() {
			this.isTabActiveEst = false
			this.isTabActiveTravel = false
			this.isTabActivePassenger = true
		},
	},
}
</script>
