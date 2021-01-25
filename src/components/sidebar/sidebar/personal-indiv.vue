<template>
	<div class="">
		<div class="columns">
			<div class="column">
				<p class="mb-2">Firstname:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
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
							v-model="payload.profile.contactnumber"
							class="input"
							type="text"
							placeholder="Contact #"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-telephone"></i>
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
							v-model="payload.address.house_lot_number"
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
				<p class="mb-2">Barangay:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
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
							v-model="payload.address.city"
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
		}
	},

	methods: {
		patchProfile(params) {
			this.$store.dispatch('updateProfile', params)
		},
	},
}
</script>
