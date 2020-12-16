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
									v-model="body.email"
									@focus="errors.email = ''"
									@blur="validate('email')"
									@input="validate('email')"
									class="input is-medium"
									type="email"
									placeholder="Email"
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
									v-model="body.password"
									@focus="errors.password = ''"
									@blur="validate('password')"
									@input="validate('password')"
									class="input is-medium"
									type="password"
									placeholder="Password"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-key"></i>
								</span>
							</p>

							<span class="has-text-danger">{{ errors.password }}</span>
						</div>

						<span class="">Confirm Password:</span>
						<div class="field mt-3">
							<p class="control has-icons-left">
								<input
									v-model="body.confirm"
									@focus="errors.confirm = ''"
									@blur="validate('confirm')"
									@input="validate('confirm')"
									class="input is-medium"
									type="password"
									placeholder="Confirm Password"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-lock"></i>
								</span>
							</p>
							<span class="has-text-danger">{{ errors.confirm }}</span>
						</div>

						<button
							@click="registerAdmin"
							class="button is-success is-medium is-center mt-3"
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
import app from '../model/Admin/admin-register.model'
export default app
</script>
<style lang="scss">
@import '../sass/accounts-register.scss';
</style>
