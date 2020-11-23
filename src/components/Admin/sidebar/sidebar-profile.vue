<template>
	<div class="is-overlay">
		<main
			class="hero  is-fullheight profile-sidebar  is-pulled-right has-background-white"
		>
			<div class="main-container">
				<div class="has-text-weight-bold mb-5">
					Admin Profile
					<span class="icon is-pulled-right close-sidebar">
						<a @click="toggleSideBar"><i class="fas fa-times"></i></a>
					</span>
					<div class="is-clearfix"></div>
				</div>
				<div class="container-header admin-name">
					<div class="item-1">
						<img
							src="https://i.imgur.com/bCOd9N0.jpg"
							height="102"
							width="102"
							alt="admin-image"
						/>
					</div>
					<div class="item-2 ml-2">
						<span class="icon is-small is-left level">
							<i class="fas fa-user"></i>
							<span class="admin-email ml-2">Calil Jaudian</span>
						</span>

						<span
							class="icon is-mobile admin-email is-small is-left level is-centered"
						>
							<i class="fas fa-envelope"></i>
							<span class="ml-2 pr-10">caliljaudiannn@gmail.com</span>
						</span>

						<button class="btn-signout pd-5   button is-ghost mb-2">
							Sign out
						</button>
					</div>
				</div>
				<!-- Admin Additional info -->
				<div class="info-header">
					<span class="icon is-small personal-icon-text is-left level">
						<i class="fas fa-info"></i>
						<span class=" ml-2 is-success has-text-weight-bold personal-header"
							>Personal Information</span
						>
					</span>
					<button class="btn-edit-profile is-medium  button is-ghost">
						Edit Profile
					</button>
				</div>

				<div class="container-info admin-personal-info">
					<div class="address-icon">
						<span class="icon is-small  is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Address: </span>
							<p class="ml-1 field-info address-label">
								<span class=""> Blk 7 Lot lot 16 stamonica hahahahaha</span>
							</p>
						</span>
					</div>

					<div class="barangay-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Barangay: </span>
							<p class="ml-1 field-info"><span>Sto.thomas</span></p>
						</span>
					</div>

					<div class="city-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">City: </span>
							<p class="ml-1 field-info"><span>Olongapo City</span></p>
						</span>
					</div>

					<div class="firstname-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Firstname: </span>
							<p class="ml-1 field-info"><span>Calil</span></p>
						</span>
					</div>

					<div class="lastname-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Lastname: </span>
							<p class="ml-1 field-info"><span>Jaudian</span></p>
						</span>
					</div>

					<div class="mname-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Middlename: </span>
							<p class="ml-1 field-info"><span>Christopher</span></p>
						</span>
					</div>

					<div class="age-icon">
						<span class="icon is-small is-left level">
							<i class="fas fa-home"></i>
							<span class="ml-2">Age: </span>
							<p class="ml-1 field-info"><span>23</span></p>
						</span>
					</div>

					<div class="contact-icon">
						<span class="icon is-small  is-left level">
							<i class="fas fa-phone"></i>
							<span class="ml-2">Contact Number: </span>
							<p class="ml-1 field-info"><span>09955591932</span></p>
						</span>
					</div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import app from '../admin-model/sidebar-profile.model.js'
export default app
</script>

<style lang="scss">
@import '../sass/sidebar-profile.scss';
</style>
