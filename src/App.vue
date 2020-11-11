<template>
	<div class="columns columns-parent is-gapless is-full">
		<div class="column img-left is-half-fullhd is-hidden-mobile">
			<h1 class="has-text-white">dito nakalgay yung fucking logo</h1>
		</div>
		<div class="column login-form is-half-fullhd is-full-mobile">
			<LoginForm />
		</div>
	</div>
</template>

<script>
import LoginForm from './components/LoginForm'

export default {
	components: { LoginForm },
}
</script>

<style>
html,
body {
	height: 100%;
}
.columns-parent {
	height: 100%;
	/* margin-left: 50px;
	margin-right: 50px; */
}

.login-form {
	background-color: #dadbdf;
}

.img-left {
	background-color: #f7f7f7;
	background-image: url('');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
