<template>
	<div class="container m-5">
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
							:src="imgRef"
							alt="image-edit"
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
				<p class="mb-2">Establishment Name:</p>
				<div class="field">
					<p class="control has-icons-left has-icons-right">
						<input
							:disabled="disableInputs"
							@click="clearError('name')"
							@blur="rebirthComputedValue('name')"
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
							:disabled="disableInputs"
							@click="clearError('est_owner')"
							@blur="rebirthComputedValue('est_owner')"
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
							:disabled="disableInputs"
							@click="clearError('telephone_number')"
							@blur="rebirthComputedValue('telephone_number')"
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
							:disabled="disableInputs"
							@click="clearError('street')"
							@blur="rebirthComputedValue('street')"
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
				@click="sendDispatch()"
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
		profile() {
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
			defaultImg: 'https://i.imgur.com/bCOd9N0.jpg',

			payload: {
				profile: {
					name: '',
					street: '',
					telephone_number: '',
					est_owner: '',
					image: null,
				},
			},

			profileError: {
				image: '',
				exist: '',
			},

			formError: '',
			imgRef: null,
		}
	},

	methods: {
		encodeBase64(file) {
			return new Promise((resolve, reject) => {
				const reader = new FileReader()
				reader.readAsDataURL(file)
				reader.onload = () => resolve(reader.result)
				reader.onerror = (error) => reject(error)
			})
		},

		async onFileChange(e) {
			let imgFormats = ['jpg', 'jpeg', 'png']
			const file = e.target.files[0]

			if (!file) {
				e.preventDefault()
				return
			}

			if (file.size > 600 * 600) {
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

		sendDispatch() {
			const { state } = this.$$store
			const result = Object.keys(this.payload.profile).map(
				(key) => this.profile[key]
			)

			const checkIfChange = Object.values(this.payload.profile).every((v) =>
				result.includes(v)
			)

			if (!checkIfChange) {
				state.isLoading = true
				this.$store.dispatch('updateProfile', this.payload)
			} else {
				this.formError = 'Profile Info is up to date'
			}
		},

		clearError(field) {
			this.formError = ''

			if (this.payload.profile[field] === this.profile[field]) {
				this.payload.profile[field] = ''
			}
		},

		rebirthComputedValue(field) {
			if (!this.payload.profile[field]) {
				this.payload.profile[field] = this.profile[field]
			}
		},
	},

	mounted() {
		Object.keys(this.payload.profile).forEach((k) => {
			this.payload.profile[k] = this.profile[k]
		})

		if (!this.profile.image) {
			this.imgRef = this.defaultImg
		} else {
			this.imgRef = this.profile.image
		}
	},
}
</script>
