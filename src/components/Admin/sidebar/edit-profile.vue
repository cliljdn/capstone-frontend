<template>
	<div class="show-edit">
		<section class="hero  sidebar-edit is-pulled-right has-background-white">
			<div class="edit-container">
				<div class="edit-header has-text-weight-bold mb-5">
					Edit Profile
					<span class="edit-icon icon is-pulled-left p-0">
						<i class="fas fa-edit"></i>
					</span>

					<span class="icon is-pulled-right close-form">
						<a @click="toggleEditForm"><i class="fas fa-times"></i></a>
					</span>
				</div>
				<div class="tabs edit-tabs">
					<ul>
						<li class="is-active"><a>Personal Information</a></li>
						<li><a>Account information</a></li>
					</ul>
				</div>
				<personal-info />
			</div>
		</section>
	</div>
</template>
<script>
import app from '../admin-model/edit-profile.model'
export default app
</script>

<style lang="scss">
@import '../sass/edit-form.scss';
</style>
