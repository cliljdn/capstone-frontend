<template>
	<nav
		class="navbar is-transparent"
		role="navigation"
		aria-label="main navigation"
	>
		<div class="navbar-brand">
			<a
				role="button"
				class="navbar-burger burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
				@click="isActive = !isActive"
				:class="{ 'is-active': isActive }"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div
			id="navbarBasicExample"
			class="navbar-menu ml-6 p-5"
			:class="{ 'is-active': isActive }"
		>
			<div class="navbar-start">
				<a class="navbar-item">
					<strong>Home</strong>
				</a>

				<a class="navbar-item">
					<strong>Profile</strong>
				</a>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			isActive: false,
		}
	},
}
</script>

<style></style>
