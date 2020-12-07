<template>
	<div class="">
		<DashboardNav />
		<router-view />
	</div>
</template>

<script>
import DashboardNav from '../../components/Navbars/dashboard-nav.vue'

export default {
	components: { DashboardNav },
}
</script>
<style lang="scss"></style>
