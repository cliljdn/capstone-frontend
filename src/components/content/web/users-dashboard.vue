<template>
	<router-view />
</template>

<script>
export default {
	methods: {
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},
	},
}
</script>

<style></style>
