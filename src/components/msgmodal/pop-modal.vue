<template>
	<div class="modal" :class="{ 'is-active': this.$store.state.openPopOut }">
		<div class="modal-background" @click="closeModal"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">Modal title</p>
				<button @click="closeModal" class="delete" aria-label="close"></button>
			</header>
			<section class="modal-card-body">
				<div class="columns ">
					<div class="column  has-text-justified">
						<div class="" v-if="this.$store.state.accountsMsg.isRegistered">
							<h1>Successfully Registered</h1>
							<h1>We Sent a Verification Link to your E-mail address</h1>
						</div>
						<div class="" v-if="this.$store.state.accountsMsg.isProfileCreated">
							<h1>Profile Created</h1>
							<h1>
								You can now Login to your account on the android Application
							</h1>
						</div>

						<div
							class="has-text-black-bis is-flex is-justify-content-center"
							v-if="this.$store.state.accountsMsg.isProfileUpdated"
						>
							<h1 class="title">Profile Updated</h1>
						</div>
					</div>
				</div>
			</section>
			<footer class="modal-card-foot is-flex is-justify-content-center">
				<button @click="closeModal" class="button is-success">OK</button>
			</footer>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			header: '',
			sub: '',
		}
	},
	methods: {
		closeModal() {
			let { commit, state } = this.$store
			if (state.accountsMsg.isProfileCreated) {
				this.$router.push({ name: 'usersLogin' })
			}

			if (state.accountsMsg.isRegistered) {
				this.$router.push({ name: 'usersLogin' })
			}

			if (state.accountsMsg.isProfileUpdated) {
				this.$store.commit('toggleEditForm')
				this.$store.commit('toggleSideBar')
			}

			state.accountsMsg.isProfileCreated = false
			state.isAdminValid = false
			state.accountsMsg.isProfileUpdated = false
			return commit('showPopOut')
		},
	},
}
</script>
