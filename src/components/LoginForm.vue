<template>
	<div class="card">
		<header class="card-header columns level is-mobile">
			<p class="card-header-title mt-3 level-item has-text-centered">
				Scan Olongapo
			</p>
		</header>
		<section>
			<h3
				class="has-text-centered has-text-weight-semibold is-capitalized ml-5 mr-5"
			>
				Providing Security for your information
			</h3>
			<p
				class="has-text-centered has-text-weight-semibold is-capitalized ml-5 mr-5"
			>
				Join us in stopping the spread of COVID-19
			</p>
			<p class="has-text-centered has-text-weight-semibold ml-5 mr-5">
				through this community-driven monitoring, <br />
				<a href="">Download our android application</a>
			</p>
		</section>

		<div class="card-content">
			<div class="content">
				<form action="" method="POST" @submit.prevent>
					<label class="" for=""><strong>Email:</strong></label>
					<div class="field">
						<div class="control has-icons-left mt-2">
							<input
								class="input input-shadow is-hovered"
								type="email"
								placeholder="Enter E-mail"
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-envelope"></i>
							</span>
						</div>
					</div>

					<label class="" for=""><strong>Password:</strong></label>
					<div class="field">
						<div class="control has-icons-left mt-2">
							<input
								class="input is-hovered"
								type="password"
								placeholder="Enter Password"
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-key"></i>
							</span>
						</div>
					</div>
					<button class="button is-success is-fullwidth is-link is-rounded">
						Login
					</button>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style>
.card {
	height: 100%;
}
</style>
