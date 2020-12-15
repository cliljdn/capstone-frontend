<script>
import func from '../../../../vue-temp/vue-editor-bridge'
export default {
	data() {
		return {
			estList: [],
			workingId: '',
		}
	},

	methods: {
		createProfile: async function() {
			try {

			} catch (error) {

			}
		}

		getEstId: function(estId) {
			this.workingId = estId
		},


		getEstList: async function() {
			let { state } = this.$store

			try {
				let res = await this.$axios.get(
					`${state.BASE_URL}/list/account/establishment/profile`,
					{
						headers: {
							Authorization: state.headers.Authorization,
						},
					}
				)

				this.estList = await res.data
			} catch (error) {
				return error
			}
		},
	},

	async mounted() {
		await this.getEstList()
	},
}
</script>
