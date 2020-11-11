<template>
	<section>
		<div class="columns is-desktop is-fullheight">
			<div class="column column-login-image is-half is-hidden-mobile"></div>
			<div class="column column-login is-half ">
				<LoginForm />
			</div>
		</div>
	</section>
</template>

<script>
import LoginForm from './components/LoginForm'

export default {
	components: { LoginForm },
}
</script>

<style scoped>
section {
	height: 100%;
}
.column-login-image {
	background-color: aquamarine;
	background-image: url('');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
