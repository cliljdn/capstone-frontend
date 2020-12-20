<template>
	<div class="">
		<dashboard-nav />
		<router-view />
	</div>
</template>

<script>
import DashboardNav from '../components/Navbars/dashboard-nav'
// import cookies from '../assets/cookies/cookies'

export default {
	components: { 'dashboard-nav': DashboardNav },

	async mounted() {
		console.log(await this.checkToken())
		if (!this.checkToken()) {
			console.log(1)
		} else {
			console.log(2)
		}
	},

	methods: {
		async checkToken() {
			return await this.$store.dispatch('getCookie', 'Admin-6')
		},
	},
}
</script>
<style lang="scss"></style>
