<script>
export default {
	components: {},

	data() {
		return {
			items: [{ message: 'Foo' }, { message: 'Bar' }],
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModal')
		},
	},
}
</script>
