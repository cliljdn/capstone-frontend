<template>
	<div class="">
		<dashboard-nav />
		<router-view />
	</div>
</template>

<script>
import DashboardNav from '../components/Navbars/dashboard-nav'

export default {
	components: { 'dashboard-nav': DashboardNav },
}
</script>
<style lang="scss"></style>
