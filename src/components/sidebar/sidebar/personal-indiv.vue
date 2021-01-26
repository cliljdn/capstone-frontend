<template>
	<div class="">
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
				<p class="mb-2">Firstname:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.profile.firstname"
							class="input"
							type="text"
							placeholder="Firstname"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-address-card"></i>
						</span>
					</p>
				</div>
			</div>
			<div class="column">
				<p class="mb-2">Middlename:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.profile.middlename"
							class="input"
							type="text"
							placeholder="Middle name"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-address-card"></i>
						</span>
					</p>
				</div>
			</div>
			<div class="column">
				<p class="mb-2">Lastname:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.profile.lastname"
							class="input"
							type="text"
							placeholder="Lastname"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-address-card"></i>
						</span>
					</p>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column">
				<p class="mb-2">Contact Number :</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.profile.contactnumber"
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
				<p class="mb-2">Home Address:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.address.house_lot_number"
							class="input"
							type="text"
							placeholder="Contact #"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-home"></i>
						</span>
					</p>
				</div>
			</div>

			<div class="column">
				<p class="mb-2">Barangay:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.address.barangay"
							class="input"
							type="text"
							placeholder="Contact #"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-address-card"></i>
						</span>
					</p>
				</div>
			</div>

			<div class="column">
				<p class="mb-2">City:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError()"
							v-model="payload.address.city"
							class="input"
							type="text"
							placeholder="Enter City"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-university"></i>
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
				@click="patchProfile(payload)"
				class="is-pulled-right button is-success"
			>
				Save
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			payload: {
				profile: {
					firstname: '',
					lastname: '',
					middlename: '',
					contactnumber: '',
					image: '',
				},

				address: {
					house_lot_number: '',
					barangay: '',
					city: '',
				},
			},

			formError: '',
		}
	},

	methods: {
		patchProfile(params) {
			const checkInput = []

			Object.values(this.payload.profile).forEach((val) => {
				val === '' ? checkInput.push(val) : false
			})

			Object.values(this.payload.address).forEach((val) => {
				val === '' ? checkInput.push(val) : false
			})
			if (checkInput.length === 8) {
				this.formError = 'Please Fill up some Field'
			} else {
				this.$store.dispatch('updateProfile', params)
			}
		},

		rmError() {
			this.formError = ''
		},
	},
}
</script>
