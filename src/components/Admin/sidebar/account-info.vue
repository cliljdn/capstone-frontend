<template>
	<div class="box account-sidebar m-5">
		<p class="box-title is-pulled-left is-fixed-top">
			Account Information
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
				<form action="PATCH">
					<div class="columns">
						<div class="column">
							<p class="mb-2">Email:</p>
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input
										class="input"
										type="email"
										placeholder="Enter E-mail"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-envelope"></i>
									</span>
								</p>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<p class="mb-2">Password:</p>
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input
										class="input"
										type="password"
										placeholder="Enter Password"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
									</span>
								</p>
							</div>
						</div>

						<div class="column">
							<p class="mb-2">Confirm Password:</p>
							<div class="field">
								<p class="control has-icons-left has-icons-right">
									<input
										class="input"
										type="password"
										placeholder="Re-type Password"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
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
		</article>
	</div>
</template>

<style lang="scss">
@import '../sass/account-info.scss';
</style>
