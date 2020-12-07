<script>
import DriverProfile from '../profile/driver-profile'
export default {
	components: { 'driver-profile': DriverProfile },

	methods: {
		openModalDriver() {
			return this.$store.commit('toggleModalDriver')
		},
	},
}
</script>
