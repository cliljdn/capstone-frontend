<template>
	<div class="">
		<div
			class="modal"
			:class="{ 'is-active': this.$store.state.openModalDriver }"
		>
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">
						<span class="icon is-small is-left level">
							<i class="fas fa-user-circle"></i>
							<span style="white-space: nowrap;" class="admin ml-2"
								>Driver Profile</span
							>
						</span>
					</p>
					<button
						class="delete"
						aria-label="close"
						@click="closeModalDriver"
					></button>
				</header>
				<section class="modal-card-body">
					<div class="columns is-1-tablet">
						<div class="column">
							<article class="media">
								<div class="media-left">
									<figure class="image is-128x128">
										<img
											class="is-rounded"
											src="https://bulma.io/images/placeholders/128x128.png"
											alt="Image"
										/>
									</figure>
								</div>
								<div class="media-content mt-3">
									<div class="columns user-info">
										<div class="column">
											<div class="columns">
												<div class="column">
													<span class="icon is-small is-left level">
														<i class="fas fa-address-card"></i>
														<span class="admin ml-2">Firstname: </span>
														<span class="admin ml-2">Calil</span>
													</span>
												</div>
											</div>
											<div class="columns">
												<div class="column">
													<span class="icon is-small is-left level">
														<i class="fas fa-address-card"></i>
														<span class="admin ml-2">Middlename: </span>
														<span class="admin ml-2">Driver</span>
													</span>
												</div>
											</div>

											<div class="columns">
												<div class="column">
													<span class="icon is-small is-left level">
														<i class="fas fa-address-card"></i>
														<span class="account-type ml-2">Lastname: </span>
														<span class="admin ml-2">Jaudian</span>
													</span>
												</div>
											</div>
										</div>

										<div class="column address-info">
											<div class="columns">
												<div class="column">
													<span class="icon is-small  is-left level">
														<i class="fas fa-address-card"></i>
														<span class="admin ml-2">Address:</span>

														<p class="address-field">
															<span class="admin ml-2"
																>Blk 7 Lot 16 Stamonica</span
															>
														</p>
													</span>
												</div>
											</div>
											<div class="columns">
												<div class="column">
													<span class="icon is-small is-left level">
														<i class="fas fa-address-card"></i>
														<span class="admin ml-2">Barangay: </span>
														<span class="admin ml-2">Sto.thomas</span>
													</span>
												</div>
											</div>

											<div class="columns">
												<div class="column">
													<span class="icon is-small is-left level">
														<i class="fas fa-address-card"></i>
														<span class="account-type ml-2">City: </span>
														<span class="admin ml-2">Olongapo City</span>
													</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</article>
						</div>
					</div>
					<div class="columns">
						<div class="column">
							<div class="tabs is-centered">
								<ul>
									<li :class="{ 'is-active': isTabActiveTravel }">
										<a @click="showTravelFrmDriver">
											<span class="icon is-small"
												><i class="fas fa-car" aria-hidden="true"></i
											></span>
											<span>Travel History</span>
										</a>
									</li>
									<li :class="{ 'is-active': isTabActiveEst }">
										<a @click="showEstFrmDriver">
											<span class="icon is-small"
												><i class="fas fa-building" aria-hidden="true"></i
											></span>
											<span>Est. Entered</span>
										</a>
									</li>

									<li :class="{ 'is-active': isTabActivePassenger }">
										<a @click="showPassenger">
											<span class="icon is-small"
												><i class="fas fa-building" aria-hidden="true"></i
											></span>
											<span>Passengers</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="" v-if="isTabActiveTravel">
						<TravelDriver />
					</div>
					<div class="" v-if="isTabActiveEst">
						<EstDriver />
					</div>

					<div class="" v-if="isTabActivePassenger">
						<PassengerDriver />
					</div>
				</section>

				<footer class="modal-card-foot has-text-centered">
					<strong>Driver Profile Monitor</strong>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../../admin-model/driver/driver-profile.model'
export default app
</script>

<style lang="scss">
@import '../../sass/userprofile-modal.scss';
</style>
