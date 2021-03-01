<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content mt-6">
			<div class="content">
				<div class="columns">
					<div class="column text-welcome">
						<span>Welcome to Scan Gapo</span>
					</div>
				</div>
				<span>This is a registration for a citizen Monitoring </span>

				<div class="columns is-multiline mt-3">
					<div class="column is-12">
						<form action="" @click.prevent method="post">
							<span class="">Email:</span>
							<div class="field mt-3">
								<p class="control has-icons-left has-icons-right">
									<input
										v-model="values.email"
										@focus="errors.email = ''"
										@blur="validate('email')"
										@input="validate('email')"
										class="input mb-3 is-primary"
										type="email"
										placeholder="Email"
										required
										:disabled="isLoading"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-envelope"></i>
									</span>
								</p>
							</div>
							<span class="has-text-danger">{{ errors.email }}</span>

							<span class="is-block mt-3">Password:</span>
							<div class="field mt-3">
								<p class="control has-icons-left">
									<input
										v-model="values.password"
										class="input mb-3 is-primary"
										type="password"
										@focus="errors.password = ''"
										@blur="validate('password')"
										@input="validate('password')"
										placeholder="Password"
										minlength="8"
										maxlength="12"
										required
										:disabled="isLoading"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
									</span>
								</p>
							</div>
							<span class="has-text-danger">{{ errors.password }}</span>

							<span class="is-block mt-3">Confirm Password:</span>
							<div class="field mt-3">
								<p class="control has-icons-left">
									<input
										v-model="values.confirm"
										@focus="errors.confirm = ''"
										@blur="validate('confirm')"
										@input="validate('confirm')"
										class="input is-primary"
										type="password"
										placeholder="Confirm Password"
										required
										:disabled="values.password === '' || isLoading"
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-lock"></i>
									</span>
								</p>
							</div>
							<span class="has-text-danger">{{ errors.confirm }}</span>

							<span class="is-block mt-3">Account Type:</span>
							<div class="control has-icons-left mt-3">
								<div class="select is-primary">
									<select
										v-model="values.accountType"
										@click="errors.accountType = ''"
										@blur="validate('accountType')"
										@change="validate('accountType')"
										:disabled="isLoading"
									>
										<option value="" selected>SELECT</option>
										<option value="Individual">Individual</option>
										<option value="Driver">Driver</option>
										<option value="Establishment">Establishment</option>
									</select>
								</div>
								<span class="icon is-medium is-left">
									<i class="fas fa-globe"></i>
								</span>
							</div>
							<span class="has-text-danger">{{ errors.accountType }}</span>
						</form>

						<button
							@click="registerBtn"
							class="button is-success is-pulled-left is-medium  mt-5"
							:class="{ 'is-loading': isLoading }"
							:disabled="isLoading"
						>
							Register
						</button>
					</div>
				</div>
			</div>
		</div>

		<div class="" v-if="this.$store.state.openPopOut">
			<pop-modal />
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
