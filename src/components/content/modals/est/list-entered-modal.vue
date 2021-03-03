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
					<div class="column">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<span class="ml-1 tvl-info">
								Name:
							</span>

							<span class="ml-1 user-info">
								{{ indiv ? indiv.firstname + ' ' + indiv.lastname : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Contact Number:
							</span>

							<span class="ml-1 user-info">{{
								indiv ? indiv.contactnumber : 'No contact provided'
							}}</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Address:
							</span>

							<span class="ml-1 user-info">{{
								indiv ? indiv.house_lot_number : ''
							}}</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Date Entered:
							</span>

							<span class="ml-1 user-info">{{
								info
									? new Date(info.date_entered).toISOString().split('T')[0]
									: ''
							}}</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time Entered:
							</span>

							<span class="ml-1 user-info"
								>{{ info ? info.time_entered : '' }}
							</span>
						</div>
					</div>
				</div>

				<div class="columns level">
					<div class="column">
						<span class="menu-label level-item">Present Employee</span>
					</div>
				</div>

				<div class="columns level">
					<div class="column">
						<div class="icon-text mb-2 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-user-secret"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Employee:
							</strong>

							<span class="ml-1 user-info">
								{{
									employee ? employee.firstname + ' ' + employee.lastname : ''
								}}
							</span>
						</div>

						<div class="icon-text mb-2 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-phone"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Contact #:
							</strong>

							<span class="ml-1 user-info">
								{{ employee ? employee.contactnumber : 'No contact provided' }}
							</span>
						</div>

						<!-- <div class="icon-text mb-2 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-envelope-open-text"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Address:
							</strong>

							<span class="ml-1 user-info">
								{{ employee ? employee.house_lot_number : ' ' }}
							</span>
						</div> -->
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
						<div
							:class="{
								'remove-shadow ':
									companion.firstname === null && companion.lastname === null,
							}"
							class="box"
							v-for="(companion, index) in companions"
							:key="index"
						>
							<article
								class="media"
								v-if="companion.firstname && companion.lastname"
							>
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
														{{ companion.firstname }}
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
														{{ companion.lastname }}
													</small>
												</p>
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-tasks"></i>
													</span>
													<small class="ml-1 tvl-info">
														Contact Number:
													</small>

													<small class="ml-1 user-info">
														{{
															companion.contact
																? companion.contact
																: 'No Contact Info'
														}}
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</article>
							<!-- errors -->
							<div
								v-else
								class="column m-5 is-12 is-flex is-justify-content-center"
							>
								<strong class="has-text-danger">No Companions</strong>
							</div>
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
	computed: {
		employee() {
			const { employee } = this.$store.state.est.enteredIndivCompanions
			return employee
		},

		companions() {
			const { scannedIndiv } = this.$store.state.est.enteredIndivCompanions
			const listComps = []

			if (scannedIndiv) {
				for (const indiv of scannedIndiv) {
					listComps.push(indiv)
				}
			}

			return listComps
		},

		indiv() {
			const { indiv } = this.$store.state.est.enteredIndivCompanions

			return indiv
		},

		info() {
			const { info } = this.$store.state.est.enteredIndivCompanions

			return info
		},
	},

	methods: {
		closeModal() {
			this.$store.commit('modalListEntered')
		},
	},

	mounted() {},
}
</script>

<style lang="scss">
@import '../../sass/est/list-entered-modal.scss';
</style>
