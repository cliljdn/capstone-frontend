<template>
	<div class="main-class">
		<div class="is-overlay">
			<main class="hero profile-sidebar is-pulled-right has-background-white">
				<div class="main-container">
					<div class="has-text-weight-bold mb-5 profile-header">
						{{ authProfile.accType }} Profile
						<span class="icon is-pulled-right close-sidebar">
							<a @click="toggleSideBar"
								><button class="delete" aria-label="close"></button
							></a>
						</span>
						<div class="is-clearfix"></div>
					</div>

					<div class="container-header admin-name">
						<div class="item-1 image is-96x96">
							<img
								class="is-rounded"
								src="https://i.imgur.com/bCOd9N0.jpg"
								height="102"
								width="102"
								alt="admin-image"
							/>
						</div>
						<div class="item-2 ml-2">
							<span class="icon is-small is-left level">
								<i class="fas fa-user"></i>
								<span class="admin-email ml-2">
									{{ authProfile.firstname }} {{ authProfile.firstname }}
								</span>
							</span>

							<span
								class="icon is-mobile admin-email is-small is-left level is-centered"
							>
								<i class="fas fa-envelope"></i>
								<span class="ml-2 pr-10">
									{{ authProfile.email }}
								</span>
							</span>

							<button
								class="btn-signout pd-5 button is-ghost mb-2"
								@click="logout"
							>
								Sign out
							</button>
						</div>
					</div>
					<!-- Admin Additional info -->
					<div class="info-header">
						<span class="icon is-small personal-icon-text is-left level">
							<i class="fas fa-info"></i>
							<span
								class=" ml-2 is-success has-text-weight-bold personal-header"
								>Personal Information</span
							>
						</span>
						<button
							@click="toggleEditForm"
							class="btn-edit-profile is-medium  button is-ghost"
						>
							Edit Profile
						</button>
					</div>

					<div class="container-info admin-personal-info">
						<div class="address-container">
							<span class="icon address-icon is-small  is-left level">
								<i class="fas fa-home"></i>
								<span class="ml-2">Address: </span>

								<p class="ml-1 address-label">
									<span>
										{{ authProfile.house_lot_number }}
									</span>
								</p>
							</span>
						</div>

						<div class="barangay-container">
							<span class="icon barangay-icon is-small is-left level">
								<i class="fas fa-home"></i>
								<span class="ml-2">Barangay: </span>

								<p class="ml-1 barangay-label">
									<span>
										{{ authProfile.barangay }}
									</span>
								</p>
							</span>
						</div>

						<div class="city-container">
							<span class="icon is-small city-icon is-left level">
								<i class="fas fa-university"></i>
								<span class="ml-2">City: </span>
								<p class="ml-1 city-label">
									<span>
										{{ authProfile.city }}
									</span>
								</p>
							</span>
						</div>

						<div class="firstname-container">
							<span class="icon is-small firstname-icon is-left level">
								<i class="fas fa-user"></i>
								<span class="ml-2">Firstname: </span>
								<p class="ml-1 firstname-label">
									<span>
										{{ authProfile.firstname }}
									</span>
								</p>
							</span>
						</div>

						<div class="lastname-container">
							<span class="icon is-small lastname-icon is-left level">
								<i class="fas fa-user"></i>
								<span class="ml-2">Lastname: </span>
								<p class="ml-1 lastname-label">
									<span>
										{{ authProfile.lastname }}
									</span>
								</p>
							</span>
						</div>

						<div class="mname-container">
							<span class="icon is-small mname-icon is-left level">
								<i class="fas fa-user"></i>
								<span class="ml-2">Middlename: </span>
								<p class="ml-1 mname-label">
									<span>
										{{ authProfile.middlename }}
									</span>
								</p>
							</span>
						</div>

						<div class="age-container">
							<span class="icon is-small age-icon is-left level">
								<i class="fas fa-calendar"></i>
								<span class="ml-2">Birthday: </span>
								<p class="ml-1 age-label">
									<span>
										{{ authProfile.birthday }}
									</span>
								</p>
							</span>
						</div>

						<div class="contact-container">
							<span class="icon contact-icon is-small is-left level">
								<i class="fas fa-phone"></i>
								<span class="ml-2" style="white-space: nowrap;"
									>Contact Number:
								</span>
								<p class="ml-1 contact-label">
									<span>
										{{ authProfile.contactnumber }}
									</span>
								</p>
							</span>
						</div>
					</div>
				</div>
			</main>
		</div>
		<transition name="slide">
			<div
				v-if="this.$store.state.editProfileOpen"
				class="edit-form-panel is-overlay"
			>
				<edit-profile />
			</div>
		</transition>
	</div>
</template>

<script>
import app from '../admin-model/sidebar/sidebar-profile.model'
export default app
</script>

<style lang="scss">
@import '../sass/sidebar-profile.scss';
</style>
