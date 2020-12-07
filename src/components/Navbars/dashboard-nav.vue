<template>
	<div id="nav-bar is-overlay">
		<nav
			class="navbar is-spaced"
			role="navigation"
			aria-label="main navigation"
		>
			<div class="container">
				<div class="navbar-brand">
					<a class="navbar-item" href="https://bulma.io">
						<img
							src="https://bulma.io/images/bulma-logo.png"
							width="112"
							height="28"
						/>
					</a>

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
					<div class="navbar-start">
						<router-link to="users">
							<a href="" class="navbar-item">Users</a>
						</router-link>

						<router-link to="drivers">
							<a href="" class="navbar-item">Drivers</a>
						</router-link>

						<router-link to="establishments">
							<a href="" class="navbar-item">Establishments</a>
						</router-link>
					</div>

					<div class="navbar-end">
						<a @click="toggleSideBar" class="navbar-item">Profile</a>
					</div>
				</div>
			</div>
			<transition name="slide">
				<div
					v-if="this.$store.state.sideBarOpen"
					class="sidebar-panel is-overlay"
				>
					<sidebar />
				</div>
			</transition>
		</nav>
	</div>
</template>

<script>
import app from './nav-model/nav-bar.model'
export default app
</script>

<style lang="scss">
@import './sass/dashboard-nav.scss';
</style>
