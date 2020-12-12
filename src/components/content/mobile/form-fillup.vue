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
				<!-- <div class="columns columns-img  is-centered is-vcentered is-mobile">
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
				</div> -->
				<div class="columns mt-3">
					<div class="column">
						<span class="">Firstname:</span>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input class="input" type="text" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column">
						<span class="">Lastname:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="text" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column">
						<span class="">Middlename:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="text" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-user"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">Contact #:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="text" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-phone"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column">
						<span class="">Birthday:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="date" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-calendar"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">House and Lot #:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="text" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-house"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column">
						<span class="">Barangay:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input
									class="input"
									type="input"
									placeholder="Confirm Password"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-university"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<span class="">City:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input class="input" type="password" placeholder="" />
								<span class="icon is-small is-left">
									<i class="fas fa-house"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<button class="button is-success is-medium is-pulled-right mt-3">
					Register
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import app from "../model/form-fillup.model";
	export default app;
</script>

<style lang="scss">
	@import "../sass/form-fillup.scss";
</style>
