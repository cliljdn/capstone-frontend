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
									<div class="column">
										<p class="mb-2">Email:</p>
										<div class="field">
											<p class="control has-icons-left has-icons-right">
												<input
													v-model="payload.account.email"
													@click="payloadErrors.email = ''"
													@blur="validate('email')"
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

										<span class="m-3 has-text-danger">
											{{ payloadErrors.email }}</span
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
													@click="payloadErrors.password = ''"
													@blur="validate('password')"
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
													@click="payloadErrors.confirm = ''"
													@blur="validate('confirm')"
													@input="validate('confirm')"
													class="input"
													type="password"
													placeholder="Re-type Password"
												/>
												<span class="icon is-small is-left">
													<i class="fas fa-key"></i>
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
											@click="sendDispatch(payload)"
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
		sendDispatch(params) {
			const { updateValidation } = yup
			try {
				if (this.payload.account.email || this.payload.account.password) {
					Object.keys(this.payload.account).forEach(async (key) => {
						try {
							await updateValidation.validateAt(
								key,
								this.payload.account,
								this.yupOptions
							)
						} catch (err) {
							err.inner.forEach((error) => {
								this.payloadErrors[error.path] = error.message
							})
						}
					})
				} else {
					this.payloadErrors.all = 'There is nothing to update'
					return true
				}

				this.$store.dispatch('updateProfile', params)
			} catch (err) {
				err.inner.forEach((error) => {
					this.payloadErrors[error.path] = error.message
				})
			}
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
	},
}
</script>

<style lang="scss" scoped>
@import '../sass/account-info.scss';
</style>
