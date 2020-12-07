<script>
export default {
	components: {},

	data() {
		return {
			items: [
				{ message: 'Foo', content: 'hahahaha' },
				{ message: 'Foo', content: 'hahahaha' },
			],
		}
	},

	methods: {
		closeModal() {
			return this.$store.commit('toggleModal')
		},
	},
}
</script>
