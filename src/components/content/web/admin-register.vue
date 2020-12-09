<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns mt-6">
					<div class="column text-welcome">
						<span>Welcome to Scan Gapo</span>
					</div>
				</div>
				<span>This is a registration for a Admin Account </span>

				<div class="columns mt-3">
					<div class="column">
						<span class="">Email:</span>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									class="input is-medium"
									type="email"
									placeholder="Email"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-envelope"></i>
								</span>
							</p>
						</div>

						<span class="">Password:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input
									class="input is-medium"
									type="password"
									placeholder="Password"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-key"></i>
								</span>
							</p>
						</div>

						<span class="">Confirm Password:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input
									class="input is-medium"
									type="password"
									placeholder="Confirm Password"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-lock"></i>
								</span>
							</p>
						</div>

						<button class="button is-success is-medium is-center mt-3">
							Register
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '../sass/accounts-register.scss';
</style>
