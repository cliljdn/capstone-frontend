<template>
	<div
		class="modal"
		:class="{ 'is-active': this.$store.state.dashboardModal.travelHistory }"
	>
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Travel History Information</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="columns travel-information level">
					<div class="column">
						<div class="icon-text  level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<span class="ml-1 tvl-info">
								Destination:
							</span>

							<span class="ml-1 user-info">
								Sm City
							</span>
						</div>

						<div class="icon-text  level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Date Boarded:
							</span>

							<span class="ml-1 user-info">
								1997-12-23
							</span>
						</div>

						<div class="icon-text  level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time Boarded:
							</span>

							<span class="ml-1 user-info">
								11:50
							</span>
						</div>
					</div>

					<div class="column">
						<div class="icon-text  level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-user-secret"></i>
							</span>
							<span class="ml-1 tvl-info">
								Driver Name:
							</span>

							<span class="ml-1 user-info">
								Carlito Manuel
							</span>
						</div>

						<div class="icon-text  level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-tasks"></i>
							</span>
							<span class="ml-1 tvl-info">
								Driver Plate Number:
							</span>

							<span class="ml-1 user-info">
								TXUFF2
							</span>
						</div>
					</div>
				</div>
				<div class="tabs is-centered">
					<ul>
						<li class="is-success">
							<a>
								<span class="icon is-small"
									><i class="fas fa-users" aria-hidden="true"></i
								></span>
								<span>Companion Information</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="columns companion-information">
					<div class="column">
						<h1>1st</h1>
					</div>
					<div class="column"><h1>2nd</h1></div>
				</div>
			</section>
			<footer class="modal-card-foot is-flex is-justify-content-center">
				<button class="button">Close Modal</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$store.commit('modalTravel')
		},
	},
}
</script>

<style lang="scss">
@import '../sass/travel-modal.scss';
</style>
