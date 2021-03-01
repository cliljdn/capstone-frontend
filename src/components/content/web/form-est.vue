<template>
	<div class="card-content">
		<div class="content">
			<div class="columns">
				<div class="column text-welcome">
					<span>Personal Information</span>
				</div>
			</div>

			<div class="columns  columns-img">
				<div class="column is-flex is-justify-content-center">
					<div class="media media-image">
						<div class="media-left">
							<figure class="image is-128x128">
								<input
									ref="file"
									@change="onFileChange"
									class="file-input"
									type="file"
									name="resume"
									:disabled="isLoading"
								/>
								<img
									@click="$refs.file.click(), (profileError.image = '')"
									class="is-rounded img-user"
									:src="!imgRef ? 'https://i.imgur.com/bCOd9N0.jpg' : imgRef"
									alt="Placeholder image"
								/>
							</figure>

							<div class="column is-12 is-flex is-justify-content-center">
								<span class="m-1 has-text-danger" v-if="profileError.image">
									{{ profileError.image }}</span
								>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form class="fillup-form-indiv" action="" @click.prevent method="post">
				<div class="columns mt-2">
					<div class="column">
						<span class="">Establishment Name:</span>
						<div class="field mt-2">
							<p class="control has-icons-left has-icons-right">
								<input
									@input="validateForm('name')"
									@blur="validateForm('name')"
									v-model="payload.name"
									class="input"
									type="text"
									placeholder="Enter Establishment Name"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
							<span class="mt-1 has-text-danger">{{ formError.name }}</span>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">Name of Owner:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									@input="validateForm('est_owner')"
									@blur="validateForm('est_owner')"
									v-model="payload.est_owner"
									class="input"
									type="text"
									placeholder="Enter Lastname"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>

							<span class="mt-1 has-text-danger">{{
								formError.est_owner
							}}</span>
						</div>
					</div>

					<div class="column">
						<span class="">Street Address:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									@input="validateForm('street')"
									@blur="validateForm('street')"
									v-model="payload.street"
									class="input"
									type="text"
									placeholder="Enter Street Address"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
							<span class="mt-1 has-text-danger">{{ formError.street }}</span>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">Contact #:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									@input="validateForm('telephone_number')"
									@blur="validateForm('telephone_number')"
									@keypress="isNumber"
									v-model="payload.telephone_number"
									class="input"
									type="text"
									maxlength="11"
									placeholder="Contact #"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-telephone"></i>
								</span>
							</p>

							<span class="mt-1 has-text-danger">{{
								formError.telephone_number
							}}</span>
						</div>
					</div>
				</div>
			</form>
			<div class="is-flex is-justify-content-center ">
				<button
					@click="createProfile"
					class="button is-success is-medium is-center mt-3"
					:class="{ 'is-loading': isLoading }"
					:disabled="isLoading"
				>
					Create Profile
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../model/form-est.model'
export default app
</script>
