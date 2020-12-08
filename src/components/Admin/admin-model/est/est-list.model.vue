<script>
import EstProfile from '../../profile/establishment-profile'
export default {
	components: { 'establishment-profile': EstProfile },

	methods: {
		openModal() {
			return this.$store.commit('toggleModalEst')
		},
	},
}
</script>
