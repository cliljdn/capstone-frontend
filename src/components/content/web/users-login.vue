<template>
	<div class="card   is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns mt-6">
					<div class="column text-welcome">
						<span>Welcome to Scan Olongapo</span>
					</div>
				</div>
				<span
					>This is a Login for Individual, Driver and Establishment
					Dashboard</span
				>

				<form @submit.prevent="btnLogin">
					<div class="columns mt-3">
						<div class="column">
							<span class="">Email:</span>
							<div class="field mt-3 ">
								<p class="control  has-icons-left has-icons-right">
									<input
										@input="validateProfile('email')"
										@blur="validateProfile('email')"
										v-model="body.email"
										class="input dropdown is-active is-primary is-medium"
										type="email"
										placeholder="Email"
										:disabled="disableInputs"
									/>

									<span class="icon is-small is-left">
										<i class="fas fa-envelope"></i>
									</span>
								</p>

								<span class="has-text-danger">{{ errors.email }}</span>
							</div>

							<span class="">Password:</span>
							<div class="field mt-3">
								<p class="control has-icons-left">
									<input
										@input="validateProfile('password')"
										@blur="validateProfile('password')"
										v-model="body.password"
										class="input is-primary is-medium"
										type="password"
										placeholder="Password"
										:disabled="disableInputs"
									/>

									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
									</span>
								</p>
								<span class="has-text-danger">{{ errors.password }}</span>
							</div>
							<div class="">
								<span
									>Don't have an account yet?
									<router-link to="/users/register">Sign up</router-link></span
								>
							</div>
							<button
								type="submit"
								class="button is-success is-medium is-center mt-3"
								:class="{ 'is-loading': disableInputs && loadBtn }"
								:disabled="disableInputs && loadBtn"
							>
								Login
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../model/users-login.model'
export default app
</script>

<style lang="scss">
@import '../sass/accounts-register.scss';
</style>
