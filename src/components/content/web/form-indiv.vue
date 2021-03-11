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
								<input
									ref="file"
									@change="onFileChange"
									type="file"
									style="display:none"
									:disabled="isLoading"
									@click="profileError.image = ''"
								/>
								<img
									class="is-rounded"
									:src="imgRef ? imgRef : 'https://i.imgur.com/bCOd9N0.jpg'"
									alt="Placeholder image"
									@click="$refs.file.click()"
								/>
							</figure>

							<div class="columns">
								<div class="column is-12 is-flex is-justify-content-center">
									<span class="has-text-danger block mt-3">{{
										profileError.image
									}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form class="fillup-form-indiv" action="" @click.prevent method="post">
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
									type="text"
									placeholder="Enter Firstname"
									:disabled="isLoading"
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
									placeholder="Enter Lastname"
									:disabled="isLoading"
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
									placeholder="Enter Middlename"
									:disabled="isLoading"
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
									:disabled="isLoading"
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
									placeholder="House Lot Number"
									:disabled="isLoading"
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
									@input="
										validateAddress('barangay')
										showBarangay()
									"
									@blur="validateAddress('barangay')"
									v-model="address.barangay"
									class="input"
									type="text"
									placeholder="Enter Barangay Name"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-balance-scale"></i>
								</span>
							</p>

							<div
								v-if="showSuggest"
								class="content has-background-white content-suggest"
							>
								<ul
									@click="getBarangay(comp.barangay)"
									type=""
									v-for="(comp, index) in autoComp"
									:key="index"
								>
									<li>{{ comp.barangay }}</li>
								</ul>
							</div>

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
									placeholder="Enter City"
									:disabled="isLoading"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-university"></i>
								</span>
							</p>
							<span class="mt-1 has-text-danger">{{ addressError.city }}</span>
						</div>
					</div>
				</div>
			</form>
			<button
				@click="createProfile"
				class="button is-success  is-medium mt-3"
				:class="{ 'is-loading': isLoading }"
				:disabled="isLoading"
			>
				Create Profile
			</button>
		</div>
	</div>
</template>

<script>
import app from '../model/form-fill.model'
export default app
</script>
