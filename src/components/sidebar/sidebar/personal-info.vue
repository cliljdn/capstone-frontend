<template>
	<div class="box personal-info-container m-5">
		<p class="box-title is-pulled-left is-fixed-top">
			Personal Information
		</p>

		<div class="columns is-vcentered">
			<div class="column">
				<article class="media">
					<figure class="image is-96x96">
						<img
							class="is-rounded"
							src="https://i.imgur.com/bCOd9N0.jpg"
							alt="Image"
						/>
					</figure>
				</article>
			</div>
		</div>

		<div class="media-content">
			<form action="" method="PATCH">
				<div class="columns">
					<div class="column">
						<p class="mb-2">Firstname:</p>
						<div class="field">
							<p class="control has-icons-left has-icons-right">
								<input class="input" type="text" placeholder="Firstname" />
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
								<input class="input" type="text" placeholder="Middle name" />
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
								<input class="input" type="text" placeholder="Lastname" />
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
								<input class="input" type="text" placeholder="Contact #" />
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
								<input class="input" type="text" placeholder="Contact #" />
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
								<input class="input" type="text" placeholder="Contact #" />
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
								<input class="input" type="text" placeholder="Contact #" />
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
			</form>
		</div>
	</div>
</template>

<style lang="scss">
@import '../sass/personal-info.scss';
</style>
