<script>
import EnteredEst from '../../profile/est/entered-est'
import EstEmployees from '../../profile/est/est-employees'
export default {
	components: { EstEmployees, EnteredEst },

	data() {
		return {
			isTabActivePerson: true,
			isTabActiveEmp: false,
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModalEst')
		},

		showCitizenEntered() {
			this.isTabActivePerson = true
			this.isTabActiveEmp = false
		},

		showEmpForm() {
			this.isTabActivePerson = false
			this.isTabActiveEmp = true
		},
	},
}
</script>
