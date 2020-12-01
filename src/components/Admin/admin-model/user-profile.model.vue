<script>
export default {
	methods: {
		closeModal() {
			return this.$store.commit('toggleModal')
		},
	},
}
</script>
