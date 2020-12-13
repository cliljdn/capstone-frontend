<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns ">
					<div class="column text-welcome">
						<span>Personal Information</span>
					</div>
				</div>
				<div class="columns columns-img  is-centered is-vcentered is-mobile">
					<div class="column is-narrow has-text-centered">
						<div class="media">
							<div class="media-left">
								<figure class="image is-128x128">
									<img
										class="is-rounded"
										src="https://versions.bulma.io/0.7.4/images/placeholders/96x96.png"
										alt="Placeholder image"
									/>
								</figure>
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
										@keypress="isNumber(event)"
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
					Register
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../model/form-fill.model'
export default app
</script>

<style lang="scss">
@import '../sass/form-fillup.scss';
</style>
