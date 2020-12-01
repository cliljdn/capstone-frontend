<template>
	<div class="">
		<div class="modal" :class="{ 'is-active': this.$store.state.openModal }">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">Modal title</p>
					<button
						class="delete"
						aria-label="close"
						@click="closeModal"
					></button>
				</header>
				<section class="modal-card-body">
					<div class="columns">
						<div class="column"></div>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../admin-model/user-profile.model'
export default app
</script>
