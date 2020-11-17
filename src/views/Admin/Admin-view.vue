<template>
	<div class="">
		<dashboard-nav />
		<div class="main"></div>
	</div>
</template>

<script>
import DashboardNav from '../../components/Navbars/dashboard-nav.vue'
export default {
	components: { DashboardNav },
}
</script>

<style lang="scss">
* {
	@import './admin-dashboard.scss';
}
</style>
