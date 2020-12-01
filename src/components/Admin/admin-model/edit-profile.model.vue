<script>
import personal from '../sidebar/personal-info.vue'
import account from '../sidebar/account-info.vue'
export default {
	components: {
		'personal-info': personal,
		'account-info': account,
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
