<template>
	<div class="columns is-multiline columns-main">
		<div class="column column-main is-hidden-mobile is-5">
			<section class="hero  is-fullheight">
				<div class="columns is-full has-text-centered">
					<div class="column mt-5">
						<h1 class="title">
							SCAN GAPO
						</h1>
						<h2 class="subtitle">
							Fullheight subtitle
						</h2>
					</div>
				</div>
				<div class="hero-body">
					<div class="container">
						<h1 class="title">
							Download Our App on
						</h1>
						<h2 class="subtitle"></h2>
					</div>
				</div>
			</section>
		</div>
		<div class="column column-card">
			<form-fillup />
		</div>
	</div>
</template>

<script>
import FormFillup from './mobile/form-fillup'
export default {
	components: { 'form-fillup': FormFillup },
}
</script>

<style lang="scss">
@import './sass/index-content.scss';
</style>
