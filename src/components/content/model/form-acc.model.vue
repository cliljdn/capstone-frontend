<script>
export default {
	mounted() {
		return this.$router.push({ name: 'registerCitizen' }).catch(() => {})
	},
}
</script>
