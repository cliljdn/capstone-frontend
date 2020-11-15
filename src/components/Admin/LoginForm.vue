<template>
	<div class="card-form columns">
		<div class="card column is-8 is-centered is-offset-one-quarter">
			<header class="level ">
				<p class="card-header-title  level-item has-text-centered">
					Admin Login
				</p>
			</header>
			<section class="mt-3">
				<div class="definition-content mb-3">
					<h3
						class="has-text-centered has-text-weight-semibold is-capitalized "
					>
						Providing Security for your information
					</h3>
					<p
						class="has-text-centered has-text-weight-semibold is-justify-content-center is-capitalized ml-5 mr-5"
					>
						Join us in stopping the spread of COVID-19 through this
						community-driven monitoring,
					</p>
				</div>
				<div class="card-content">
					<div class="content">
						<form action="" method="POST" @submit.prevent>
							<label class="" for=""><strong>Email:</strong></label>
							<div class="field">
								<div class="control has-icons-left mt-2">
									<input
										class="input input-username is-hovered"
										@click="emailError = []"
										@change="emailError = []"
										type="email"
										v-model="inpUsername"
										placeholder="Enter E-mail"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-envelope"></i>
									</span>

									<div v-for="(err, index) in emailError" :key="index">
										<span> {{ err }}</span>
									</div>
								</div>
							</div>

							<label class="" for=""><strong>Password:</strong></label>
							<div class="field">
								<div class="control has-icons-left mt-2">
									<input
										class="input input-password is-hovered"
										type="password"
										v-model="inpPassword"
										@click="passwordError = []"
										@change="passwordError = []"
										placeholder="Enter Password"
										required
									/>
									<span class="icon is-small is-left">
										<i class="fas fa-key"></i>
									</span>
								</div>
							</div>
							<div v-for="(err, index) in passwordError" :key="index">
								<span> {{ err }}</span>
							</div>
							<button
								class="button btn-login is-success is-fullwidth is-link is-rounded mt-6"
								@click="authUser"
							>
								Login
							</button>

							<button
								class="button btn-register is-primary is-fullwidth is-link is-rounded mt-6"
							>
								Register
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import store from '../../store/index'
import axios from 'axios'
export default {
	data() {
		return {
			inpUsername: '',
			inpPassword: '',
			emailError: [],
			passwordError: [],
			showErr: false,
		}
	},

	methods: {
		authUser: async function() {
			try {
				const url = `${store.state.BASE_URL}/admin/login`
				const res = await axios.post(url, {
					email: this.inpUsername,
					password: this.inpPassword,
				})
				console.log(res)
			} catch (err) {
				if (
					(!err.response.data.inner &&
						err.response.data.message === 'Email is not registered') ||
					(!err.response.data.inner &&
						err.response.data.message === 'Account is not yet activated')
				) {
					this.emailError.push(err.response.data.message)
				} else if (
					!err.response.data.inner &&
					err.response.data.message === 'Wrong password'
				) {
					this.passwordError.push(err.response.data.message)
				} else {
					for (const err of err.response.data.inner) {
						if (err.path === 'email') {
							if (this.emailError.length > 2) {
								this.emailError = []
							}
							this.emailError.push(err.message)
						}

						if (err.path === 'password') {
							if (this.passwordError.length > 2) {
								this.passwordError = []
							}
							this.passwordError.push(err.message)
						}
					}
				}
			}
		},
	},
}
</script>

<style>
* {
	margin: 0 !important;
}
html,
body {
	height: 100%;
}

.btn-login {
	border-top: none !important;
	border-left: none !important;
	border-bottom: 5px !important;
	box-shadow: 3px 3px 1px 1px grey !important;
}

.btn-register {
	border-top: none !important;
	border-left: none !important;
	border-bottom: 5px !important;
	box-shadow: 3px 3px 1px 1px grey !important;
}
.card-form {
	height: 100%;
	width: auto;
	display: flex;
	justify-content: center;
}

.card {
	border: 100px !important;
	box-shadow: 10px 10px 10px 10px grey !important;
}

.card-body {
	background-color: lightgrey !important;
}

.definition-content {
	border-radius: 30px;
	box-shadow: 5px 5px lightgrey !important;
}

.input-username {
	border-top: none !important;
	border-left: none !important;
	box-shadow: 3px 3px 1px 1px grey !important;
}
.input-password {
	border-top: none !important;
	border-left: none !important;
	border-bottom: 5px !important;
	box-shadow: 3px 3px 1px 1px grey !important;
}
</style>
