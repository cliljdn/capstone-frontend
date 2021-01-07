<template>
	<div id="nav-bar">
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
						<div class="icon-text navbar-item">
							<span class="icon has-text-success">
								<i class="fas fa-bus"></i>
							</span>
							<a class="ml-3">Travel History</a>
						</div>

						<div class="icon-text navbar-item">
							<span class="icon has-text-success">
								<i class="fas fa-university"></i>
							</span>
							<a class="ml-3">Establishment Entered</a>
						</div>
					</div>

					<div class="navbar-end">
						<div class="" @click="toggleSideBar">
							<div class="icon-text navbar-item">
								<span class="icon has-text-success">
									<i class="fas fa-user-circle"></i>
								</span>

								<a class="ml-3">
									Profile
								</a>
							</div>
						</div>
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
