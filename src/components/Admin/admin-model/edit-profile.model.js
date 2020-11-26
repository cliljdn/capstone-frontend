import personal from '../sidebar/personal-info.vue'
export default {
	components: {
		'personal-info': personal,
	},

	data() {
		return {}
	},

	methods: {
		toggleEditForm() {
			return this.$store.commit('toggleEditForm')
		},
	},
}
