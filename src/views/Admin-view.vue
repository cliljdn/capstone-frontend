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

	mounted() {
		console.log(this.$store.state.TOKEN_NAME)
		if (!this.$store.dispatch('getCookie')) {
			return this.$router.push({ name: 'loginAdmin' })
		} else {
			return true
		}
	},
}
</script>
<style lang="scss"></style>
