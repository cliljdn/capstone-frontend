<template>
	<div
		class="modal"
		:class="{ 'is-active': this.$store.state.dashboardModal.entryPoints }"
	>
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Employee Information</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>

			<section class="modal-card-body">
				<div class="columns">
					<div class="column is-flex is-justify-content-center">
						<figure class="image is-128x128">
							<img src="https://i.imgur.com/4AcjS2P.png" alt="Image" />
						</figure>
					</div>
					<!-- QR-Code -->
					<div class="column mb-3 is-flex is-justify-content-center">
						<figure class="image is-128x128">
							<img src="https://i.imgur.com/4AcjS2P.png" alt="Image" />
							<div class="columns mt-1">
								<div class="column is-flex is-justify-content-center">
									<span class="subtitle">QR-CODE</span>
								</div>
							</div>
						</figure>
					</div>
				</div>

				<div class="columns mt-3 travel-information level">
					<div class="column">
						<div class="icon-text m-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-tasks"></i>
							</span>
							<span class="ml-1 tvl-info">
								Employee Name:
							</span>

							<span class="ml-1 user-info">
								Calil Christopher Jaudian
							</span>
						</div>

						<div class="icon-text m-1 level-left">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<span class="ml-1 tvl-info">
								Address:
							</span>

							<span class="ml-1 user-info">
								Blk 7 Lot 16 Sta.Monica Subdivision Subic Zambales
							</span>
						</div>

						<div class="icon-text m-1 level-left">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time In:
							</span>

							<span class="ml-1 user-info">
								11:50
							</span>
						</div>

						<div class="icon-text m-1 level-left">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Date Entered:
							</span>

							<span class="ml-1 user-info">
								1997-12-23
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
								<span>Scanned Individuals</span>
							</a>
						</li>
					</ul>
				</div>

				<div class="columns is-multiline">
					<div class="column is-12">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									class="input is-primary"
									type="text"
									placeholder="Search Employee"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-search"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column">
						<strong class="select-labels">Choose Date: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-primary">
									<select>
										<option selected>Country</option>
										<option>Select dropdown</option>
										<option>With options</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns companion-information">
					<div class="column">
						<div class="box">
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

						<div class="box">
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
			this.$store.commit('modalEntrypoints')
		},
	},
}
</script>

<style lang="scss">
@import '../../sass/est/entrypoints-modal.scss';
</style>
