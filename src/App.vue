<template>
	<div class="columns is-desktop">
		<div class="column"></div>
		<div class="column column-login is-one-third m-6">
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
* {
	margin: 0;
}

.page-divider {
	border-right: transparent, solid red;
}
</style>
