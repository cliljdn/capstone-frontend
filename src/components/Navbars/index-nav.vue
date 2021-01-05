<template>
	<div id="nav-bar">
		<nav
			class="navbar is-spaced is-transparent"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="container">
				<div class="navbar-brand">
					<a
						role="button"
						class="navbar-burger burger"
						@click="isActive = !isActive"
						aria-label="menu"
						aria-expanded="false"
						data-target="navbarBasicExample"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>

				<div
					id="navbarBasicExample"
					class="navbar-menu"
					:class="{ 'is-active': isActive }"
				>
					<div class="navbar-end">
						<a type="submit" @click="downloadApp" class="navbar-item"
							>Download Our App</a
						>
					</div>
				</div>
			</div>
		</nav>
	</div>
</template>

<script>
import app from './nav-model/index-nav.model'
export default app
</script>

<style lang="scss">
@import './sass/index-nav.scss';
</style>
