<template>
	<div class="">
		<div class="columns is-multiline  columns-main">
			<div class="column column-main is-hidden-mobile is-5">
				<section class="hero  is-fullheight">
					<div class="columns is-full has-text-centered">
						<div class="column mt-5">
							<h1 class="title">
								SCAN GAPO
							</h1>
							<h2 class="subtitle"></h2>
						</div>
					</div>
					<div class="hero-body">
						<div class="container">
							<h1 class="title">
								Download Our App on
							</h1>
							<h2 class="subtitle"></h2>
						</div>
					</div>
				</section>
			</div>
			<div class="column column-card">
				<router-view />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		// if (this.$store.dispatch('getCookie')) {
		// 	return this.$router.push({ name: 'admin-dashboard' })
		// } else {
		// 	return this.$router.push({ name: 'loginAdmin' })
		// }
	},
}
</script>

<style lang="scss">
@import '../components/content/sass/index-content.scss';
</style>
