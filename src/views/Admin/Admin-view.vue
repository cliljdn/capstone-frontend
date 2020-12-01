<template>
	<div class="">
		<DashboardNav />
		<driver-list />
	</div>
</template>

<script>
import DashboardNav from '../../components/Navbars/dashboard-nav.vue'
import DriverList from '../../components/Admin/main/driver-list.vue'
export default {
	components: { DashboardNav, DriverList },
}
</script>

<style lang="scss"></style>
