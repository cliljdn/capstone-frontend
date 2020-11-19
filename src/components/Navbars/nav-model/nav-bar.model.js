import sidebar from '../../Admin/sidebar-profile'
export default {
	components: {
		sidebar,
	},
	data() {
		return {
			sidebarSeen: false,
			show: false,
			isActive: false,
		}
	},

	methods: {
		showProfile: function() {
			if (!this.sidebarSeen) {
				this.show = true
			} else {
				this.show = true
			}
			console.log(this.show)
		},
	},
}
