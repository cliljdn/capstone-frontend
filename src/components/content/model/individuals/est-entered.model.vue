<script>
export default {
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

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},
	},
}
</script>
