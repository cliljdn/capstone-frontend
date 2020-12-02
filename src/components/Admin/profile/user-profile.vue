<template>
	<div class="">
		<div class="modal" :class="{ 'is-active': this.$store.state.openModal }">
			<div class="modal-background"></div>
			<div class="modal-card">
				<header class="modal-card-head">
					<p class="modal-card-title">User Profile</p>
					<button
						class="delete"
						aria-label="close"
						@click="closeModal"
					></button>
				</header>
				<section class="modal-card-body">
					<div class="columns">
						<div class="column">
							<article class="media">
								<div class="media-left">
									<figure class="image is-128x128">
										<img
											class="is-rounded"
											src="https://bulma.io/images/placeholders/128x128.png"
											alt="Image"
										/>
									</figure>
								</div>
								<div class="media-content">
									<div class="content user-content">
										<span class="icon is-small is-left level">
											<i class="fas fa-user"></i>
											<span class="admin- ml-2">Name: </span>
											<span class="admin- ml-2">McDonalds</span>
										</span>
									</div>
									<div class="content user-content">
										<span class="icon is-small is-left level">
											<i class="fas fa-user"></i>
											<span class="admin- ml-2">owner: </span>
											<span class="admin- ml-2">Christanto Macapagal</span>
										</span>
									</div>
									<div class="content user-content">
										<span class="icon is-small is-left level">
											<i class="fas fa-cog"></i>
											<span class="account-type ml-2">Address: </span>
											<span class="admin ml-2">Blk 7 Blvd Nationwide</span>
										</span>
									</div>
								</div>
							</article>
						</div>
					</div>
				</section>
				<footer class="modal-card-foot">
					<button class="button is-success">Save changes</button>
					<button class="button">Cancel</button>
				</footer>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../admin-model/user-profile.model'
export default app
</script>
