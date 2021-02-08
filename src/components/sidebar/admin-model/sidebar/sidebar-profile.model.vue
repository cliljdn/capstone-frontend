<script>
import edit from '../../sidebar/edit-profile'
import DriverIndiProfile from '../../sidebar/driver-indiv-profile'
import EstProfile from '../../sidebar/est-profile'
import VehicleInfo from '../../sidebar/vehicle-info'
import About from '../../../msgmodal/about/about'
export default {
	components: {
		'edit-profile': edit,
		'driver-indiv-profile': DriverIndiProfile,
		'est-profile': EstProfile,
		'vehicle-info': VehicleInfo,
		about: About,
	},

	computed: {
		authProfile() {
			const { userProfile } = this.$store.state
			return userProfile
		},

		stateVar() {
			return this.$store.state
		},
	},

	data() {
		return {
			imgUser: '',
		}
	},

	methods: {
		encodeBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result)
				reader.onerror = (error) => reject(error)
			})
		},

		// hide and show the sidebar profile
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},

		toggleEditForm() {
			return this.$store.commit('toggleEditForm')
		},

		getDataUrlL: function(img) {
			var canvas = document.createElement('canvas')
			var ctx = canvas.getContext('2d')

			canvas.width = img.width
			canvas.height = img.height
			ctx.drawImage(img, 0, 0)

			// If the image is not png, the format
			// must be specified here
			return canvas.toDataURL()
		},

		openAbout() {
			this.$store.commit('showAbout')
		},

		logout() {
			this.$store.dispatch('removeCookie')
			this.$store.dispatch('isAuth', false)
			this.$router.push({ name: 'usersLogin' })
		},
	},

	async mounted() {
		this.$store.dispatch('getProfile')
	},
}
</script>
