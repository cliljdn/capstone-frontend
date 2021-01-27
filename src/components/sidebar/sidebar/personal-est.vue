<template>
	<div class="container m-5">
		<div class="columns is-vcentered is-horizontal-center">
			<figure class="image is-128x128">
				<article class="media">
					<div class="column">
						<img
							class="is-rounded"
							:src="
								!payload.profile.image
									? 'https://i.imgur.com/bCOd9N0.jpg'
									: payload.profile.image
							"
							alt="Image"
						/>
					</div>
				</article>
			</figure>
		</div>
		<div class="columns">
			<div class="column">
				<p class="mb-2">Establishment Name:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="clearError"
							v-model="payload.profile.name"
							class="input"
							type="text"
							placeholder="Establishment Name"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-building"></i>
						</span>
					</p>
				</div>
			</div>
			<div class="column">
				<p class="mb-2">Establishment Owner:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="clearError"
							v-model="payload.profile.est_owner"
							class="input"
							type="text"
							placeholder="Enter Establishment Owner"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-user"></i>
						</span>
					</p>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<p class="mb-2">Telephone Number :</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="clearError"
							v-model="payload.profile.telephone_number"
							class="input"
							type="text"
							placeholder="Contact #"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-phone"></i>
						</span>
					</p>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<p class="mb-2">Street:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="clearError"
							v-model="payload.profile.street"
							class="input"
							type="text"
							placeholder="Street"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-road"></i>
						</span>
					</p>
				</div>
			</div>
		</div>
		<div class="columns">
			<div class="column is-flex is-justify-content-center">
				<span class="m-3 has-text-danger" v-if="formError">
					{{ formError }}</span
				>
			</div>
		</div>
		<div class="is-flex is-justify-content-center">
			<button
				@click="sendDispatch(payload)"
				class="is-pulled-right button is-success"
			>
				Save
			</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		profile() {
			const { userProfile } = this.$store.state
			return userProfile
		},
	},

	data() {
		return {
			payload: {
				profile: {
					name: '',
					street: '',
					telephone_number: '',
					est_owner: '',
					image: '',
				},
			},

			formError: '',
		}
	},

	methods: {
		sendDispatch(params) {
			const checkInput = []

			Object.values(this.payload.profile).forEach((val) => {
				val === '' ? checkInput.push(val) : false
			})

			if (checkInput.length === 5) {
				this.formError = 'Please Fill up some Field'
			} else {
				this.$store.dispatch('updateProfile', params)
			}
		},

		clearError() {
			this.formError = ''
		},
	},
}
</script>
