<template>
	<div class="modal" :class="{ 'is-active': this.$store.state.openPopOut }">
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Modal title</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="columns ">
					<div class="column  has-text-justified">
						<h1>Successfully Registered</h1>
						<h1>We Sent a Verification Link to your E-mail address</h1>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot is-vcentered">
				<button @click="closeModal" class="button is-success">OK</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			let { commit } = this.$store
			return commit('showPopOut')
		},
	},
}
</script>
