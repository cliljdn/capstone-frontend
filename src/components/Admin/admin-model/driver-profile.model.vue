<script>
import TravelDriver from '../profile/travel-driver'
import EstDriver from '../profile/est-driver'
import PassengerDriver from '../profile/passengers-driver'
export default {
	components: { TravelDriver, EstDriver, PassengerDriver },

	data() {
		return {
			isTravelActive: true,
			isEstFormActive: false,
			isTabActiveTravel: false,
			isTabActiveEst: false,
			isTabActivePassenger: false,
			isPassengerFormActive: false,
		}
	},

	methods: {
		closeModalDriver: function() {
			return this.$store.commit('toggleModalDriver')
		},

		showTravelFrmDriver() {
			this.isTabActiveTravel = true
			this.isTabActiveEst = false
			this.isTravelActive = true
			this.isEstFormActive = false
			this.isTabActivePassenger = false
			this.isPassengerFormActive = false
		},

		showEstFrmDriver() {
			this.isTabActivePassenger = false
			this.isPassengerFormActive = false
			this.isTabActiveTravel = false
			this.isTravelActive = false
			this.isTabActiveEst = true
			this.isEstFormActive = true
		},

		showPassenger() {
			this.isTabActiveEst = false
			this.isEstFormActive = false
			this.isTabActiveTravel = false
			this.isTravelActive = false
			this.isTabActivePassenger = true
			this.isPassengerFormActive = true
		},
	},
}
</script>
