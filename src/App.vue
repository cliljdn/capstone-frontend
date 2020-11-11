<template>
	<div class="columns columns-parent is-gapless is-full">
		<div class="column img-left is-hidden-mobile">
			<h1 class="has-text-white">dito nakalgay yung fucking logo</h1>
		</div>
		<div class="column is-4 is-offset-8 is-full-mobile">
			<LoginForm class="login-form" />
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
}

.img-left {
	background-color: grey;
	background-image: url('');
	background-repeat: no-repeat;
	background-size: cover;
}
</style>
