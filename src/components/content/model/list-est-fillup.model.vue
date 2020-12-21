<script>
import PopModal from '../../msgmodal/pop-modal'
export default {
	components: { 'pop-modal': PopModal },

	data() {
		return {
			body: {
				establishment_id: 0,
			},
		}
	},

	methods: {
		createProfile: async function() {
			let { state, commit } = this.$store
			try {
				console.log(this.body)
				if (!this.body.establishment_id) {
					alert('please select a establishment from the list')
				} else {
					let res = await this.$axios.post(
						`${state.BASE_URL}/account/establishment/create`,
						this.body,
						{
							headers: {
								Authorization: state.headers.Authorization,
							},
						}
					)
					if (res.status === 201) {
						state.accountsMsg.isRegistered = false
						state.accountsMsg.isProfileCreated = true
						return commit('showPopOut')
					}
				}
			} catch (error) {
				return error.message
			}
		},

		getEstId: function(estId) {
			this.body.establishment_id = estId
		},

		listEst() {
			return this.$store.state.estList
		},
	},

	async mounted() {
		await this.$store.dispatch('getEst')
	},
}
</script>
