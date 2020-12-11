<template>
	<div class="card is-fullheight has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns">
					<div class="column text-welcome">
						<span>Welcome to Scan Gapo</span>
					</div>
				</div>
				<span>This is a registration for a citizen Monitoring </span>

				<div class="columns mt-3">
					<div class="column">
						<form action="" @click.prevent method="post">
							<span class="">Email:</span>
							<div class="field mt-3">
								<p class="control has-icons-left has-icons-right">
									<input
										v-model="values.email"
										@focus="errors.email = ''"
										@blur="validate('email')"
										@input="validate('email')"
										class="input"
										type="email"
										placeholder="Email"
										required
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
										v-model="values.password"
										@focus="errors.password = ''"
										class="input"
										type="text"
										@blur="validate('password')"
										@input="validate('password')"
										placeholder="Password"
										minlength="8"
										maxlength="12"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
									</span>
								</p>
								<span class="has-text-danger">{{ errors.password }}</span>
							</div>
							{{ values.password }}
							<span class="">Confirm Password:</span>
							<div class="field mt-3">
								<p class="control has-icons-left">
									<input
										v-model="values.confirm"
										@focus="errors.confirm = ''"
										@blur="validate('confirm')"
										@input="validate('confirm')"
										class="input"
										type="text"
										placeholder="Confirm Password"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-lock"></i>
									</span>
								</p>
								<span class="has-text-danger">{{ errors.confirm }}</span>
							</div>

							<span class="">Account Type:</span>
							<div class="control has-icons-left mt-3">
								<div class="select">
									<select
										v-model="values.accountType"
										@click="errors.accountType = ''"
										@blur="validate('accountType')"
										@change="validate('accountType')"
									>
										<option>SELECT</option>
										<option>User</option>
										<option>Driver</option>
										<option>Employee</option>
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
							class="button is-success is-pulled-right is-medium  mt-5"
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
