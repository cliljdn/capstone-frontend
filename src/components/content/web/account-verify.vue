<template>
	<div class="">
		<section class="hero is-medium">
			<div class="hero-body">
				<div class="container">
					<h1 class="title">
						{{ msg }}
					</h1>
					<h2 class="subtitle">
						Click the button to proceed in profile creation
					</h2>
					<button @click="gotoForm" class="button is-medium is-success">
						Proceed to Profile Creation
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
