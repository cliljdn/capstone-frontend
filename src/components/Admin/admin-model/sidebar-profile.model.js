export default {
	props: {
		sidebarSeen: Boolean,
	},
	methods: {
		closeSidebar: function() {
			return this.sidebarSeen ? false : true
		},
	},
	data() {
		return {
			hideCompo: false,
		}
	},
}
