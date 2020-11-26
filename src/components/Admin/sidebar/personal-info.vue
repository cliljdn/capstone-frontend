<template>
	<div class="box personal-info-container">
		<p class="box-header is-pulled-left is-fixed-top">
			Personal Information
		</p>
		<article class="media">
			<div class="media-left">
				<figure class="image is-96x96">
					<img
						class="is-rounded"
						src="https://i.imgur.com/bCOd9N0.jpg"
						alt="Image"
					/>
				</figure>
			</div>
			<div class="media-content">
				<div class="columns">
					<div class="column">
						<p class="mb-2">Firstname:</p>
						<div class="field">
							<p class="control has-icons-left has-icons-right">
								<input class="input" type="email" placeholder="Firstname" />
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
								<input class="input" type="email" placeholder="Middle name" />
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
								<input class="input" type="email" placeholder="Lastname" />
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
								<input class="input" type="email" placeholder="Contact #" />
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
								<input class="input" type="email" placeholder="Contact #" />
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
								<input class="input" type="email" placeholder="Contact #" />
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
								<input class="input" type="email" placeholder="Contact #" />
								<span class="icon is-small is-left">
									<i class="fas fa-address-card"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<button class="is-pulled-right button is-success">
					Save
				</button>
			</div>
		</article>
	</div>
</template>

<style lang="scss">
@import '../sass/personal-info.scss';
</style>
