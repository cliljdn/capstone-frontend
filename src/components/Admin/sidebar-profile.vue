<template>
	<div class="is-overlay">
		<main
			class="hero is-fullheight p-6 profile-sidebar is-pulled-right  has-background-white"
		>
			<div class="main-container">
				<div class="has-text-weight-bold is-flex-direction-row mb-5">
					Admin Profile
					<span class="icon is-pulled-right">
						<a @click="toggleSideBar"><i class="fas fa-times"></i></a>
					</span>
					<div class="is-clearfix"></div>
				</div>

				<div class="container admin-info">
					<div class="item-1">
						<img
							src="https://i.imgur.com/bCOd9N0.jpg"
							height="102"
							width="102"
							alt="admin-image"
						/>
					</div>
					<div class="item-2 ml-2">
						<span class="icon is-small is-left level is-centered">
							<i class="fas fa-user"></i>
							<span class="">Calil Jaudian</span>
						</span>

						<span
							class="icon is-mobile admin-email is-small is-left level is-centered"
						>
							<i class="fas fa-envelope"></i>
							<span class="ml-2 pr-10">caliljaudiannn@gmail.com</span>
						</span>
					</div>
				</div>
			</div>
		</main>
		<div class="prevent-overflow">&nbsp;</div>
	</div>
</template>

<script>
import app from './admin-model/sidebar-profile.model.js'
export default app
</script>

<style lang="scss">
@import './sass/sidebar-profile.scss';
</style>
