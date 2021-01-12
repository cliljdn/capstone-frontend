<template>
	<div
		class="modal"
		:class="{ 'is-active': this.$store.state.dashboardModal.listEntered }"
	>
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Individual Information</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="columns travel-information level">
					<div class="column is-5">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<span class="ml-1 tvl-info">
								Est Name:
							</span>

							<span class="ml-1 user-info">
								Sm City
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Date Entered:
							</span>

							<span class="ml-1 user-info">
								1997-12-23
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time Entered:
							</span>

							<span class="ml-1 user-info">
								11:50
							</span>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-user-secret"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Employee:
							</strong>

							<span class="ml-1 user-info">
								Carlito Manuel
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
						<div class="box is-flex is-justify-content-center">
							<article class="media">
								<div class="media-left mt-4">
									<figure class="image is-96x96">
										<img src="https://i.imgur.com/bCOd9N0.jpg" alt="Image" />
									</figure>
								</div>
								<div class="media-content level">
									<div class="content">
										<div class="columns">
											<div class="column">
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>

													<small class="ml-1 tvl-info">
														Firstname:
													</small>

													<small class="ml-1 user-info">
														Calil
													</small>
												</p>
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Lastname:
													</small>

													<small class="ml-1 user-info">
														Jaudian
													</small>
												</p>
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Middlename:
													</small>

													<small class="ml-1 user-info">
														Christopher
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>

						<div class="box is-flex is-justify-content-center">
							<article class="media">
								<div class="media-left mt-4">
									<figure class="image is-96x96">
										<img src="https://i.imgur.com/bCOd9N0.jpg" alt="Image" />
									</figure>
								</div>
								<div class="media-content level">
									<div class="content">
										<div class="columns">
											<div class="column">
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Firstname:
													</small>

													<small class="ml-1 user-info">
														Calil
													</small>
												</p>
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Lastname:
													</small>

													<small class="ml-1 user-info">
														Jaudian
													</small>
												</p>
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Middlename:
													</small>

													<small class="ml-1 user-info">
														Christopher
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot is-flex is-justify-content-center">
				<button @click="closeModal" class="button">Close Modal</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	methods: {
		closeModal() {
			this.$store.commit('modalListEntered')
		},
	},
}
</script>

<style lang="scss">
@import '../../sass/individuals/travel-modal.scss';
</style>
