<template>
	<div class="">
		<div class="columns is-multiline is-vcentered is-horizontal-center">
			<figure class="image is-128x128">
				<article class="media">
					<div class="column is-12">
						<input
							ref="file"
							@change="onFileChange"
							type="file"
							style="display:none"
							:disabled="disableInputs"
						/>
						<img
							@click="$refs.file.click(), (profileError.image = '')"
							class="is-rounded profile-photo"
							:src="!imgRef ? 'https://i.imgur.com/bCOd9N0.jpg' : imgRef"
							alt="Image"
						/>
					</div>
				</article>
			</figure>

			<div class="column is-12 is-flex is-justify-content-center">
				<span class="m-3 has-text-danger" v-if="profileError.image">
					{{ profileError.image }}</span
				>
			</div>
		</div>
		<div class="columns">
			<div class="column">
				<p class="mb-2">Firstname:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError('firstname')"
							@blur="changeBackState('firstname')"
							v-model="payload.profile.firstname"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Firstname"
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
							@click="rmError('middlename')"
							@blur="changeBackState('middlename')"
							v-model="payload.profile.middlename"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Middlename"
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
							@click="rmError('lastname')"
							@blur="changeBackState('lastname')"
							v-model="payload.profile.lastname"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Lastname"
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
							@click="rmError('contactnumber')"
							@blur="changeBackState('contactnumber')"
							@keypress="isNumber"
							v-model="payload.profile.contactnumber"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Contact #"
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
							@click="rmError('house_lot_number')"
							@blur="changeBackState('house_lot_number')"
							v-model="payload.address.house_lot_number"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Address"
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
							@click="rmError('barangay')"
							@blur="changeBackState('barangay')"
							v-model="payload.address.barangay"
							class="input"
							type="text"
							:disabled="disableInputs"
							placeholder="Enter Barangay"
						/>
						<span class="icon is-small is-left">
							<i class="fas fa-balance-scale"></i>
						</span>
					</p>
				</div>
			</div>

			<div class="column">
				<p class="mb-2">City:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							@click="rmError('city')"
							@blur="changeBackState('city')"
							v-model="payload.address.city"
							class="input"
							type="text"
							:disabled="disableInputs"
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
				:disabled="$store.state.isLoading"
				:class="{ 'is-loading': $store.state.isLoading }"
				class="is-pulled-right button is-success"
			>
				Update
			</button>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		auth() {
			const { userProfile } = this.$store.state
			return userProfile
		},

		disableInputs() {
			const { state } = this.$store
			return state.isLoading
		},
	},

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

			imgRef: null,

			formError: '',

			profileError: {
				image: '',
			},
		}
	},

	methods: {
		encodeBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result.split(',')[1])
				reader.onerror = (error) => reject(error)
			})
		},

		isNumber: function(evt) {
			if (this.payload.profile.contactnumber.length > 11) {
				evt.preventDefault()
			}

			evt = evt ? evt : window.event
			var charCode = evt.which ? evt.which : evt.keyCode

			if (
				charCode > 31 &&
				(charCode < 48 || charCode > 57) &&
				charCode !== 46
			) {
				evt.preventDefault()
			} else {
				return true
			}
		},

		async onFileChange(e) {
			let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]

			if (!file) {
				e.preventDefault()
				return
			}

			if (file.size > 1024 * 1024) {
				e.preventDefault()
				this.profileError.image = 'Image must be less than 1mb'
				return
			}
			let fileFormat = file.name.split('.')[1]

			if (!imgFormats.includes(fileFormat)) {
				e.preventDefault()
				this.profileError.image =
					'jpg, jpeg and png are the only file supported'
				return
			}

			this.payload.profile.image = await this.encodeBase64(file)
			this.imgRef = URL.createObjectURL(file)
		},

		patchProfile(params) {
			const { state } = this.$store
			const profileResult = Object.keys(this.payload.profile).map(
				(key) => this.auth[key]
			)

			const addressResult = Object.keys(this.payload.address).map(
				(key) => this.auth[key]
			)

			const isProfileChange = Object.values(this.payload.profile).every((v) =>
				profileResult.includes(v)
			)

			const isAddressChange = Object.values(this.payload.address).every((v) =>
				addressResult.includes(v)
			)

			if (!isProfileChange || !isAddressChange) {
				state.isLoading = true
				this.$store.dispatch('updateProfile', params)
			} else {
				this.formError = 'Profile Info is up to date'
			}
		},

		rmError(field) {
			this.formError = ''

			if (field in this.payload.profile) {
				if (this.payload.profile[field] === this.auth[field]) {
					this.payload.profile[field] = ''
				}
			} else {
				if (this.payload.address[field] === this.auth[field]) {
					this.payload.address[field] = ''
				}
			}
		},

		changeBackState(field) {
			if (field in this.payload.profile) {
				if (!this.payload.profile[field]) {
					this.payload.profile[field] = this.auth[field]
				}
			} else {
				if (!this.payload.address[field]) {
					this.payload.address[field] = this.auth[field]
				}
			}
		},
	},

	mounted() {
		this.imgRef = this.auth.image
			? 'data:image/jpeg;base64,' + this.auth.image
			: null

		Object.keys(this.payload.profile).forEach((k) => {
			this.payload.profile[k] = this.auth[k]
		})

		Object.keys(this.payload.address).forEach((k) => {
			this.payload.address[k] = this.auth[k]
		})
	},
}
</script>
