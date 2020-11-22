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
						<span class=" ml-2">Personal Information</span>
					</span>
					<button class="btn-edit-profile is-medium  button is-ghost">
						Edit Profile
					</button>
				</div>

				<div class="container-info admin-personal-info">
					<span class="icon is-small address-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Address: </span>
						<p class="ml-1">Blk 7 Lot 16 Sta.monica Subdivision</p>
					</span>
					<span class="icon is-small barangay-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Barangay: </span>
					</span>
					<span class="icon is-small city-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">City: </span>
					</span>
					<span class="icon is-small firstname-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Firstname: </span>
					</span>
					<span class="icon is-small lastname-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Lastname: </span>
					</span>
					<span class="icon is-small mname-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Middlename: </span>
					</span>
					<span class="icon is-small age-icon is-left level">
						<i class="fas fa-home"></i>
						<span class="ml-2">Age: </span>
					</span>
					<span class="icon is-small contact-icon is-left level">
						<i class="fas fa-phone"></i>
						<span class="ml-2">Contact Number: </span>
					</span>
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
