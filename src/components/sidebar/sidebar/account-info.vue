<template>
	<div class="container columns  account-sidebar ">
		<div class="column is-12">
			<div class="box m-5">
				<div class="columns">
					<div class="column">
						<p class="box-title is-pulled-left is-fixed-top">
							Account Information
						</p>
					</div>
				</div>
				<div class="columns">
					<div class="column is-12">
						<article class="media-left">
							<div class="media-content">
								<div class="columns">
									<div class="column is-12">
										<p class="mb-2">Email:</p>
										<div class="field">
											<p class="control has-icons-left has-icons-right">
												<input
													v-model="payload.account.email"
													@click="clearErrors('email')"
													@blur="updateValue()"
													@input="validate('email')"
													class="input"
													type="email"
													placeholder="Enter E-mail"
												/>
												<span class="icon is-small is-left">
													<i class="fas fa-envelope"></i>
												</span>
											</p>
										</div>

										<span
											class="m-3 has-text-danger"
											v-if="
												$store.state.formError.updateError ||
													payloadErrors.email
											"
										>
											{{
												$store.state.formError.updateError
													? $store.state.formError.updateError
													: payloadErrors.email
													? payloadErrors.email
													: ''
											}}</span
										>
									</div>
								</div>

								<div class="columns">
									<div class="column">
										<p class="mb-2">Password:</p>
										<div class="field">
											<p class="control has-icons-left has-icons-right">
												<input
													v-model="payload.account.password"
													@click="clearErrors('password')"
													@input="validate('password')"
													class="input"
													type="password"
													placeholder="Enter Password"
												/>
												<span class="icon is-small is-left">
													<i class="fas fa-key"></i>
												</span>
											</p>
										</div>
										<span class="m-3 has-text-danger">
											{{ payloadErrors.password }}</span
										>
									</div>

									<div class="column">
										<p class="mb-2">Confirm Password:</p>
										<div class="field">
											<p class="control has-icons-left has-icons-right">
												<input
													v-model="payload.account.confirm"
													@click="clearErrors('confirm')"
													@input="validate('confirm')"
													class="input"
													type="password"
													placeholder="Re-type Password"
												/>
												<span class="icon is-small is-left">
													<i class="fas fa-lock"></i>
												</span>
											</p>
										</div>

										<span class="m-3 has-text-danger">
											{{ payloadErrors.confirm }}</span
										>
									</div>
								</div>

								<div class="columns">
									<div class="column is-flex is-justify-content-center">
										<span class="m-3 has-text-danger" v-if="payloadErrors.all">
											{{ payloadErrors.all }}</span
										>
									</div>
								</div>
								<div class="columns">
									<div class="column is-flex is-justify-content-center">
										<button
											@click="sendDispatch()"
											class="is-pulled-right button is-success"
										>
											Save
										</button>
									</div>
								</div>
							</div>
						</article>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import yup from '../../content/validations/registerValidations'
export default {
	computed: {
		profile() {
			const { userProfile } = this.$store.state

			return userProfile
		},
	},

	data() {
		return {
			payload: {
				account: {
					email: '',
					password: '',
					confirm: '',
				},
			},

			payloadErrors: {
				email: '',
				password: '',
				confirm: '',
				all: '',
			},

			//options for validation
			yupOptions: { abortEarly: false, strict: false },
		}
	},

	methods: {
		sendDispatch() {
			if (!this.payload.account.email && !this.payload.account.password) {
				this.payloadErrors.all = 'Please Fill up some Field'
				return this.payloadErrors.all
			} else {
				this.payloadErrors.all = ''
			}

			if (this.payload.account.email === this.profile.email) {
				this.payloadErrors.all = 'Account Info is up to date'
				return this.payloadErrors.all
			}

			this.$store.dispatch('updateProfile', this.payload)
		},

		validate: async function(field) {
			const { updateValidation } = yup
			try {
				await updateValidation.validateAt(
					field,
					this.payload.account,
					this.yupOptions
				)
				this.payloadErrors[field] = ''
			} catch (err) {
				err.inner.forEach((error) => {
					this.payloadErrors[error.path] = error.message
				})
			}
		},

		clearErrors(field) {
			this.payloadErrors[field] = ''
			this.payloadErrors.all = ''
			if (field === 'email') {
				this.$store.commit('formError', '')
				if (this.payload.account.email === this.profile.email) {
					this.payload.account.email = ''
				} else {
					return true
				}
			}
		},

		updateValue() {
			this.payloadErrors['email'] = ''
			this.payloadErrors.all = ''
			if (!this.payload.account.email) {
				console.log('haahah')
				this.payload.account.email = this.profile.email
			}
		},
	},

	mounted() {
		this.payload.account.email = this.profile.email
	},
}
</script>

<style lang="scss" scoped>
@import '../sass/account-info.scss';
</style>
