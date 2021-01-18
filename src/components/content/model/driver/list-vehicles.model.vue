<script>
export default {
	data() {
		return {
			switchTabs: true,
		}
	},

	methods: {
		switchActive() {
			this.switchTabs = true
		},

		switchInactive() {
			this.switchTabs = false
		},
	},

	mounted() {},
}
</script>
