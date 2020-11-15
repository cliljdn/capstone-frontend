import axios from 'axios'
import store from '../../store/index'
import Vue from 'vue'
export default class Login {

	constructor(email, password) {
		this.email = email
		this.password = password
	}

	authAdmin() {
        const url = `${store.state.BASE_URL}/admin/login`
				const res = await axios.post(url, {
					email: this.email,
					password: this.password,
                })
                
				if (res) {
					const auth = this.$cookies.set('Token', res.data.token, '7d')
				}
	}
	
	// authValidations(email, password, err) {
	// 	if (
	// 				(!err.response.data.inner &&
	// 					err.response.data.message === 'Email is not registered') ||
	// 				(!err.response.data.inner &&
	// 					err.response.data.message === 'Account is not yet activated')
	// 			) {
	// 				this.emailError.push(err.response.data.message)
	// 			} else if (
	// 				!err.response.data.inner &&
	// 				err.response.data.message === 'Wrong password'
	// 			) {
	// 				this.passwordError.push(err.response.data.message)
	// 			} else {
	// 				for (const err of err.response.data.inner) {
	// 					if (err.path === 'email') {
	// 						if (this.emailError.length > 2) {
	// 							this.emailError = []
	// 						}
	// 						this.emailError.push(err.message)
	// 					}

	// 					if (err.path === 'password') {
	// 						if (this.passwordError.length > 2) {
	// 							this.passwordError = []
	// 						}
	// 						this.passwordError.push(err.message)
	// 					}
	// 				}
	// 			}
	// }
}

Vue.prototype.$Login = Login