<script>
export default {
	data() {
		return {}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModal')
		},
	},
}
</script>
