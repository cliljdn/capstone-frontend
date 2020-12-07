<script>
import TravelUser from '../profile/travel-user'
import EstUser from '../profile/est-user'
export default {
	components: { TravelUser, EstUser },

	data() {
		return {
			isTravelActive: true,
			isEstFormActive: false,
			isTabActiveTravel: false,
			isTabActiveEst: false,
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModal')
		},

		showTravelFrm() {
			this.isTabActiveTravel = true
			this.isTabActiveEst = false
			this.isTravelActive = true
			this.isEstFormActive = false
		},

		showEstFrm() {
			this.isTabActiveEst = true
			this.isTabActiveTravel = false
			this.isTravelActive = false
			this.isEstFormActive = true
		},
	},
}
</script>
