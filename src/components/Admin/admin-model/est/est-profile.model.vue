<script>
import EnteredEst from '../../profile/entered-est'
import EstEmployees from '../../profile/est-employees'
export default {
	components: { EstEmployees, EnteredEst },

	data() {
		return {
			isPersonFormActive: false,
			isTabActivePerson: false,
			isTabActiveEmp: false,
			isEmpFormActive: false,
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModalEst')
		},

		showCitizenEntered() {
			this.isPersonFormActive = true
			this.isTabActivePerson = true
			this.isTabActiveEmp = false
			this.isEmpFormActive = false
		},

		showEmpForm() {
			this.isPersonFormActive = false
			this.isTabActivePerson = false
			this.isTabActiveEmp = true
			this.isEmpFormActive = true
		},
	},
}
</script>
