<script>
import TravelUser from '../../profile/users/travel-user'
import EstUser from '../../profile/users/est-user'
export default {
	components: { TravelUser, EstUser },

	data() {
		return {
			isTabActiveTravel: true,
			isTabActiveEst: false,
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModalUser')
		},

		showTravelFrm() {
			this.isTabActiveTravel = true
			this.isTabActiveEst = false
		},

		showEstFrm() {
			this.isTabActiveEst = true
			this.isTabActiveTravel = false
		},
	},
}
</script>
