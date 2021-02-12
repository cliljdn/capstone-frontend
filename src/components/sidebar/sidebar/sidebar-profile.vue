<template>
	<div class="is-pulled-right columns is-multiline users-profile ">
		<div class="card column is-12">
			<header class="card-header">
				<div class="column is-6">
					<p class="card-header-title">{{ stateVar.accType }} Profile</p>
				</div>

				<div class="column is-6">
					<button
						@click="toggleSideBar"
						class="delete mt-2  is-pulled-right ml-3"
					></button>
				</div>
			</header>

			<div class="card-content">
				<div class="columns is-flex is-justify-content-center">
					<div class="column column-content is-flex is-justify-content-center">
						<div class="media">
							<div class="media-left">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										:src="
											authProfile.image
												? authProfile.image
												: 'https://i.imgur.com/bCOd9N0.jpg'
										"
										alt="Placeholder image"
									/>
								</figure>
							</div>
							<div class="media-content ml-5">
								<p class="title is-4">
									{{
										authProfile.firstname
											? authProfile.firstname + ' ' + authProfile.lastname
											: authProfile.est_owner
									}}
								</p>
								<p class="subtitle is-6">{{ authProfile.email }}</p>

								<button
									@click="toggleEditForm"
									class="button button-sidebar is-rounded"
								>
									Edit Profile
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="columns columns-information">
					<div class="column">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-primary">
								<i class="fas fa-info"></i>
							</span>
							<strong class="ml-1 tvl-info">
								{{ stateVar.accType }} Information:
							</strong>
						</div>
					</div>
				</div>

				<driver-indiv-profile
					v-if="
						stateVar.accType === 'Driver' || stateVar.accType === 'Individual'
					"
				/>

				<est-profile v-if="stateVar.accType === 'Establishment'" />

				<div
					class="columns columns-information"
					v-if="stateVar.accType === 'Driver'"
				>
					<div class="column">
						<div class="icon-text mb-1 level-left level-item">
							<span class="icon has-text-primary">
								<i class="fas fa-car"></i>
							</span>
							<strong class="ml-1 tvl-info">
								Active Vehicle Information:
							</strong>
						</div>
					</div>
				</div>

				<vehicle-info v-if="stateVar.accType === 'Driver'" />
			</div>

			<footer class="card-footer">
				<a @click="logout" class="card-footer-item">Sign Out</a>
				<a @click="openAbout" class="card-footer-item">About</a>
			</footer>
		</div>
		<transition name="slide">
			<edit-profile
				class="edit-form-panel is-overlay"
				v-if="stateVar.editProfileOpen"
			/>
		</transition>

		<about />
	</div>
</template>

<script>
import app from '../admin-model/sidebar/sidebar-profile.model'
export default app
</script>

<style lang="scss" scoped>
@import '../sass/sidebar-profile.scss';
</style>
