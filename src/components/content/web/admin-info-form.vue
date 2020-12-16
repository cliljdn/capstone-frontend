<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns ">
					<div class="column text-welcome">
						<span>Personal Information</span>
					</div>
				</div>
				<span> </span>
				<div class="columns columns-img	is-mobile is-full">
					<div class="column is-3">
						<div class="media">
							<div class="media-left">
								<figure class="image is-128x128">
									<img
										v-if="profileBody.image"
										class="is-rounded"
										:src="profileBody.image"
										alt="Placeholder image"
									/>
									<img
										v-if="!profileBody.image"
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
													@click="profileError.image = ''"
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
									<span class="has-text-danger block mt-3">{{
										profileError.image
									}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<form action="" @click.prevent method="post">
					<div class="columns mt-2">
						<div class="column">
							<span class="">Firstname:</span>
							<div class="field mt-2">
								<p class="control has-icons-left has-icons-right">
									<input
										v-model="profileBody.firstName"
										@input="validateProfile('firstName')"
										@blur="validateProfile('firstName')"
										class="input"
										type="email"
										placeholder="Email"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-user"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									profileError.firstName
								}}</span>
							</div>
						</div>

						<div class="column">
							<span class="">Lastname:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										v-model="profileBody.lastName"
										@input="validateProfile('lastName')"
										@blur="validateProfile('lastName')"
										class="input"
										type="text"
										placeholder="Lastname"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-user"></i>
									</span>
								</p>

								<span class="mt-1 has-text-danger">{{
									profileError.lastName
								}}</span>
							</div>
						</div>

						<div class="column">
							<span class="">Middlename:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										@input="validateProfile('middleName')"
										@blur="validateProfile('middleName')"
										v-model="profileBody.middleName"
										class="input"
										type="text"
										placeholder="Middlename"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-user"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									profileError.middleName
								}}</span>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<span class="">Contact #:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										@keypress="isNumber"
										@input="validateProfile('contact')"
										@blur="validateProfile('contact')"
										v-model="profileBody.contact"
										class="input"
										type="text"
										maxlength="11"
										placeholder="Contact #"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-telephone"></i>
									</span>
								</p>

								<span class="mt-1 has-text-danger">{{
									profileError.contact
								}}</span>
							</div>
						</div>

						<div class="column">
							<span class="">Birthday:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<flat-pickr
										v-model="profileBody.birthday"
										@input="validateProfile('birthday')"
										@blur="validateProfile('birthday')"
										class="input"
										placeholder="Date of Birth"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-calendar"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									profileError.birthday
								}}</span>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<span class="">House and Lot #:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										@input="validateAddress('lotNumber')"
										@blur="validateAddress('lotNumber')"
										v-model="address.lotNumber"
										class="input"
										type="text"
										placeholder="House Lot #"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-house"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									addressError.lotNumber
								}}</span>
							</div>
						</div>

						<div class="column">
							<span class="">Barangay:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										@input="validateAddress('barangay')"
										@blur="validateAddress('barangay')"
										v-model="address.barangay"
										class="input"
										type="input"
										placeholder="Barangay Input"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-birthday"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									addressError.barangay
								}}</span>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<span class="">City:</span>
							<div class="field mt-2">
								<p class="control has-icons-left">
									<input
										@input="validateAddress('city')"
										@blur="validateAddress('city')"
										v-model="address.city"
										class="input"
										type="text"
										placeholder="City"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-house"></i>
									</span>
								</p>
								<span class="mt-1 has-text-danger">{{
									addressError.city
								}}</span>
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
		<div class="" v-if="this.$store.state.openPopOut">
			<pop-modal />
		</div>
	</div>
</template>
<script>
import app from '../model/Admin/admin-info-form.model'
export default app
</script>
<style lang="scss">
@import '../sass/admin-info-form.scss';
</style>
