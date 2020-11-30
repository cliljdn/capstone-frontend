<template>
	<div class="">
		<DashboardNav />
		<users-list />
	</div>
</template>

<script>
import DashboardNav from '../../components/Navbars/dashboard-nav.vue'
import UsersList from '../../components/Admin/main/users-list.vue'
export default {
	components: { DashboardNav, UsersList },
}
</script>

<style lang="scss"></style>
