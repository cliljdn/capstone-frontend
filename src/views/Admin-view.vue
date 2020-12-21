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

	mounted() {},

	methods: {},
}
</script>
<style lang="scss"></style>
