<template>
	<div class="is-overlay">
		<section
			class="hero is-fullheight profile-sidebar  is-pulled-right has-background-white"
		>
			<div class="columns m-5">
				<div class="column">
					<strong>Admin Profile</strong>
					<span class="icon  is-pulled-right">
						<a @click="toggleSideBar"><i class="fas fa-times"></i></a>
					</span>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import app from './admin-model/sidebar-profile.model.js'
export default app
</script>

<style lang="scss">
@import './sass/sidebar-profile.scss';
</style>
