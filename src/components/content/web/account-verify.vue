<template>
	<div class="">
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						your E-mail {{ accountInfo ? accountInfo.email : '' }} is Ready for
						Verification
					</h1>
					<h2 class="subtitle">
						Click the button to proceed in
						{{ accountInfo ? accountInfo.accType : '' }} Profile Creation
					</h2>
					<button @click="gotoForm" class="button is-medium is-success">
						Proceed
					</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import app from '../model/verify-accounts.model'
export default app
</script>
