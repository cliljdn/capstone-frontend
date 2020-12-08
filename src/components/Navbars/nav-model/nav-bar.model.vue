<script>
import sidebar from '../../Admin/sidebar/sidebar-profile'
export default {
	components: {
		sidebar,
	},
	data() {
		return {
			isActive: false,
		}
	},

	methods: {
		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},
	},

	mounted() {
		return this.$router.push({ name: 'users-list' }).catch(() => {})
	},
}
</script>
