<template>
	<div class="main-view">
		<dashboard-nav />
		<transition name="slide">
			<router-view />
		</transition>
	</div>
</template>

<script>
import DashboardNav from '../components/Navbars/dashboard-nav'
// import cookies from '../assets/cookies/cookies'
import router from '../router/index'
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

		if (!this.$store.getters.isLoggedIn) {
			this.$store.dispatch('removeCookie')
			this.$store.dispatch('isAuth', false)
			router.push({ name: 'usersLogin' })
		}
	},
}
</script>
<style lang="scss">
html {
	overflow-x: hidden !important;
}

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to {
	transform: translateY(50%);
	transition: all 120ms ease-in 0s;
}

.main-view {
	background-image: url('https://i.imgur.com/fvnxvpK.jpg') !important;
	background-position: center !important;
	// background-size: cover;
	background-attachment: fixed;
	overflow: hidden !important;
}
</style>
