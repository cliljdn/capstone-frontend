<template>
	<main
		class="hero is-fullheight edit-form is-fullwidth is-pulled-right has-background-white"
	>
		<div class="edit-container">
			<div class="has-text-weight-bold mb-5">
				Edit Profile
				<span class="icon is-pulled-right close-edit">
					<a @click="toggleEditForm"><i class="fas fa-times"></i></a>
				</span>
				<div class="is-clearfix"></div>
			</div>

			<form action="PATCH" class="form-edit">
				<div class="field">
					<p class="control is-medium has-icons-left has-icons-right">
						<input class="input" type="email" placeholder="Email" />
						<span class="icon is-small is-left">
							<i class="fas fa-envelope"></i>
						</span>
					</p>
				</div>
			</form>
		</div>
	</main>
</template>
<script>
import app from '../admin-model/edit-profile.model'
export default app
</script>

<style lang="scss" scoped>
@import '../sass/edit-form.scss';
</style>
