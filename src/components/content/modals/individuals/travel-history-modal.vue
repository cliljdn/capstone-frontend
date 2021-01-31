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
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-map-pin"></i>
							</span>
							<span class="ml-1 tvl-info">
								Destination:
							</span>

							<span class="ml-1 user-info">
								{{ travelInfo ? travelInfo[0].destination : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-calendar"></i>
							</span>
							<span class="ml-1 tvl-info">
								Date Boarded:
							</span>

							<span class="ml-1 user-info">
								{{ travelInfo ? travelInfo[0].date_boarded : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time Boarded:
							</span>

							<span class="ml-1 user-info">
								{{ travelInfo ? travelInfo[0].time_boarded : '' }}
							</span>
						</div>
					</div>

					<div class="column">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-user-secret"></i>
							</span>
							<span class="ml-1 tvl-info">
								Driver Name:
							</span>

							<span class="ml-1 user-info">
								{{ driverInfo ? driverInfo.firstname : '' }}
								{{ driverInfo ? driverInfo.lastname : '' }}
							</span>
						</div>

						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-info">
								<i class="fas fa-tasks"></i>
							</span>
							<span class="ml-1 tvl-info">
								Driver Plate Number:
							</span>

							<span class="ml-1 user-info">
								{{ vehicleInfo ? vehicleInfo.plate_number : '' }}
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
						<div class="box" v-for="(info, index) in travelInfo" :key="index">
							<article class="media" v-if="info.firstname && info.lastname">
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
														{{ info.firstname }}
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
														{{ info.lastname }}
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
															!info.contact_number
																? 'No Contact Info'
																: info.contact_number
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
import app from '../../model/individuals/tvl-modal.model'
export default app
</script>

<style lang="scss">
@import '../../sass/individuals/travel-modal.scss';
</style>
