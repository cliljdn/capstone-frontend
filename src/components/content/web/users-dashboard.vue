<template>
	<router-view />
</template>

<script>
import TravelHistory from './travel-history'
export default {
	components: {
		'travel-history': TravelHistory,
	},

	methods: {
		toggleSideBar() {
			return this.$store.commit('toggleSideBar')
		},
	},
}
</script>

<style></style>
