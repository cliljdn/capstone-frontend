<script>
import personal from '../../sidebar/personal-info.vue'
import account from '../../sidebar/account-info.vue'
import PopModal from '../../../msgmodal/pop-modal'

export default {
	components: {
		'personal-info': personal,
		'account-info': account,
		'pop-modal': PopModal,
	},

	data() {
		return {
			showPersonalInfo: true,
			showAccountInfo: false,
		}
	},

	methods: {
		toggleEditForm() {
			return this.$store.commit('toggleEditForm')
		},

		showPersonal() {
			this.showAccountInfo = false
			this.showPersonalInfo = true
		},

		showAccount() {
			this.showPersonalInfo = false
			this.showAccountInfo = true
		},
	},
}
</script>
