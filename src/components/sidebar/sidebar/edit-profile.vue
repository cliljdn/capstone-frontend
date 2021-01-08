<template>
	<div class="show-edit">
		<main class="hero sidebar-edit is-clearfix has-background-white">
			<div class="edit-container">
				<div class="edit-header has-text-weight-bold m-5">
					Edit Profile
					<span class="edit-icon icon is-pulled-left p-0">
						<i class="fas fa-edit"></i>
					</span>

					<span class="icon is-pulled-right close-form">
						<a @click="toggleEditForm"
							><button class="delete" aria-label="close"></button
						></a>
					</span>
				</div>

				<div class="tabs edit-tabs is-centered mb-3">
					<ul>
						<li
							class="personal-divider"
							:class="{ 'is-active': showPersonalInfo }"
						>
							<a @click="showPersonal">Personal Information</a>
						</li>

						<li :class="{ 'is-active': showAccountInfo }">
							<a @click="showAccount">Account information</a>
						</li>
					</ul>
				</div>

				<transition name="slide">
					<div class="" v-if="showPersonalInfo">
						<personal-info />
					</div>
				</transition>

				<transition name="slide">
					<div class="account-form-panel" v-if="showAccountInfo">
						<account-info />
					</div>
				</transition>
			</div>
		</main>
	</div>
</template>
<script>
import app from '../admin-model/sidebar/edit-profile.model'
export default app
</script>

<style lang="scss">
@import '../sass/edit-form.scss';
</style>
