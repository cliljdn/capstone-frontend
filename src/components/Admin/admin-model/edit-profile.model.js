export default {
	data() {
		return {}
	},

	methods: {
		toggleEditForm() {
			return this.$store.commit('toggleEditForm')
		},
	},
}
