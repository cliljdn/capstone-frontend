<template>
	<div class="card-content">
		<div class="content">
			<div class="columns ">
				<div class="column text-welcome">
					<span>Personal Information</span>
				</div>
			</div>

			<div class="columns  columns-img	is-mobile ">
				<div class="column is-flex is-justify-content-center">
					<div class="media media-image">
						<div class="media-left">
							<figure class="image is-128x128">
								<img
									v-if="payload.image"
									class="is-rounded"
									:src="payload.image"
									alt="Placeholder image"
								/>
								<img
									v-if="!payload.image"
									class="is-rounded"
									src="https://i.imgur.com/bCOd9N0.jpg"
									alt="Placeholder image"
								/>
							</figure>

							<div class="columns">
								<div class="media-content m-2">
									<div class="file has-name">
										<label class="file-label">
											<input
												@change="onFileChange"
												class="file-input"
												type="file"
												name="resume"
											/>
											<span class="file-cta">
												<span class="file-icon">
													<i class="fas fa-upload"></i>
												</span>
												<span class="file-label">
													Choose a file…
												</span>
											</span>
										</label>
									</div>
								</div>
								<span class="has-text-danger block mt-3"></span>
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
									v-model="payload.name"
									class="input"
									type="email"
									placeholder="Enter Est name here"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
							<span class="mt-1 has-text-danger"></span>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">Name of Owner:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									v-model="payload.est_owner"
									class="input"
									type="text"
									placeholder="Lastname"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>

							<span class="mt-1 has-text-danger"></span>
						</div>
					</div>

					<div class="column">
						<span class="">Street Address:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									v-model="payload.street"
									class="input"
									type="text"
									placeholder="Enter Street Address"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
							<span class="mt-1 has-text-danger"></span>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">Contact #:</span>
						<div class="field mt-2">
							<p class="control has-icons-left">
								<input
									v-model="payload.telephone_number"
									class="input"
									type="text"
									maxlength="11"
									placeholder="Contact #"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-telephone"></i>
								</span>
							</p>

							<span class="mt-1 has-text-danger"></span>
						</div>
					</div>
				</div>
			</form>
			<button
				@click="createProfile"
				class="button is-success is-pulled-right is-medium is-center mt-3"
			>
				Create Profile
			</button>
		</div>
	</div>
</template>

<script>
import app from '../model/form-est.model'
export default app
</script>
