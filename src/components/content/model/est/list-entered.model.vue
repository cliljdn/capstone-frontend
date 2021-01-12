<script>
import ListEnteredModal from '../../modals/est/list-entered-modal'
export default {
	components: { 'list-entered-modal': ListEnteredModal },

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
			return this.$store.commit('modalListEntered')
		},

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},
	},
}
</script>
