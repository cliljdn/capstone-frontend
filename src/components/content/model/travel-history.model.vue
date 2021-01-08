<script>
export default {
	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
		}
	},
	methods: {
		showBetweenTimeSort() {
			this.isTimeActive = true
			this.isDetailsActive = false
		},

		showDetailsSort() {
			this.isTimeActive = false
			this.isDetailsActive = true
		},
	},
}
</script>
