<script>
import PopModal from '../../msgmodal/pop-modal'
export default {
	components: { 'pop-modal': PopModal },
	data() {
		return {
			estList: [],
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
					console.log(res)
					if (res.status === 201) {
						state.accountsMsg.isRegistered = false
						state.accountsMsg.isProfileCreated = true
						return commit('showPopOut')
					}
				}
			} catch (error) {
				console.log(error.message)
			}
		},

		getEstId: function(estId) {
			this.body.establishment_id = estId
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
