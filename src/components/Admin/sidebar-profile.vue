<template>
	<div class="is-overlay">
		<section
			class="hero is-fullheight profile-sidebar  is-pulled-right has-background-white"
		>
			<div class="columns inner-content">
				<div class="column m-5">
					<strong>Admin Profile</strong>
					<a>
						<span class="icon has-text-info is-pulled-right">
							<button @click="closeSidebar">{{ sidebarSeen }}</button>
							<i class="fas fa-info-circle"></i>
						</span>
					</a>
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
