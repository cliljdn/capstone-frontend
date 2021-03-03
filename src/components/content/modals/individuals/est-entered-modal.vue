<template>
	<div
		class="modal"
		:class="{ 'is-active': this.$store.state.dashboardModal.estEntered }"
	>
		<div @click="closeModal" class="modal-background"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Entered Establishment Information</p>
				<button class="delete" @click="closeModal" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="columns travel-information level">
					<div class="column is-12">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-building"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Est name:
							</strong>

							<span class="ml-1 user-info">
								{{ estInfo ? estInfo.name : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Date Entered:
							</strong>

							<span class="ml-1 user-info">
								{{
									companions
										? new Date(companions[0].date_entered)
												.toISOString()
												.split('T')[0]
										: ''
								}}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Time Entered:
							</strong>

							<span class="ml-1 user-info">
								{{ companions ? companions[0].time_entered : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-user-secret"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Present Est Employee:
							</strong>

							<span class="ml-1 user-info">
								{{ empInfo ? empInfo.firstname : '' }}
								{{ empInfo ? empInfo.lastname : '' }}
							</span>
						</div>

						<div class="icon-text mb-1">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Est Address:
							</strong>

							<span class="ml-1 user-info">
								{{ estInfo ? estInfo.street : '' }}
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
						<div class="box" v-for="(comp, index) in companions" :key="index">
							<article class="media" v-if="comp.firstname && comp.lastname">
								<div class="media-left mt-4">
									<figure class="image is-64x64">
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
														{{ comp.firstname }}
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
														{{ comp.lastname }}
													</small>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-info">
														<i class="fas fa-phone"></i>
													</span>
													<small class="ml-1 tvl-info">
														Contact #:
													</small>

													<small class="ml-1 user-info">
														{{
															!comp.contact_number
																? 'No Contact Info'
																: comp.contact_number
														}}
													</small>
												</p>
											</div>
										</div>
									</div>
								</div>
							</article>
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
import app from '../../model/individuals/estentered-modal.model'
export default app
</script>

<style lang="scss">
// @import '../sass/individuals/travel-modal.scss';
</style>
