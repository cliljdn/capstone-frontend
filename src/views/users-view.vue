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
	data() {
		return {
			page: 0,
		}
	},
	methods: {},

	mounted() {
		this.$store.dispatch('getProfile')
		this.$store.dispatch('travelHistory')
	},
}
</script>
<style lang="scss"></style>
