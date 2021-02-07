<template>
	<div class="modal" :class="{ 'is-active': this.$store.state.showAbout }">
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title is-bold is-justify-content-center is-flex">
					About
				</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="content is-medium">
					<driver-about v-if="accType === 'Driver'" />
					<indiv-about v-else-if="accType === 'Individual'" />
					<est-about v-else />
				</div>
			</section>
			<footer class="modal-card-foot is-flex is-justify-content-center">
				<button @click="closeModal" class="button">Close About</button>
			</footer>
		</div>
	</div>
</template>

<script>
import IndivAbout from './indiv-about'
import DriverAbout from './driver-about'
import EstAbout from './est-about'
export default {
	components: {
		'driver-about': DriverAbout,
		'indiv-about': IndivAbout,
		'est-about': EstAbout,
	},

	computed: {
		accType() {
			const { accType } = this.$store.state
			return accType
		},
	},

	data() {
		return {
			aboutDriver: `
				`,
		}
	},

	methods: {
		closeModal() {
			this.$store.commit('showPopOut')
		},
	},
}
</script>
