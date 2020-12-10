<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns mt-4">
					<div class="column text-welcome">
						<span>Welcome to Scan Gapo</span>
					</div>
				</div>
				<span>This is a registration for a citizen Monitoring </span>

				<div class="columns mt-3">
					<div class="column">
						<span class="">Email:</span>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									v-model="values.email"
									class="input is-medium"
									type="email"
									placeholder="Email"
									required
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
									v-model="values.password"
									class="input is-medium"
									type="password"
									placeholder="Password"
									minlength="8"
									maxlength="12"
									required
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
									required
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-lock"></i>
								</span>
							</p>
						</div>

						<span class="">Account Type:</span>
						<div class="control has-icons-left mt-3">
							<div class="select is-medium">
								<select v-model="values.account_type">
									<option selected>SELECT</option>
									<option>User</option>
									<option>Driver</option>
									<option>Employee</option>
								</select>
							</div>
							<span class="icon is-medium is-left">
								<i class="fas fa-globe"></i>
							</span>
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
<script>
import app from '../model/accounts-register.model'
export default app
</script>
<style lang="scss">
@import '../sass/accounts-register.scss';
</style>
