<template>
	<div class="">
		<index-nav />
		<div class="is-overlay">
			<div class="columns is-multiline  columns-main ">
				<div class="column column-main is-5 is-hidden-mobile is-5">
					<section class="hero  is-fullheight">
						<div class="columns is-full has-text-centered">
							<div class="column mt-5">
								<h1 class="title">
									Scan Olongapo
								</h1>
								<h2 class="subtitle">Keeping tracks of your ventures</h2>
							</div>
						</div>
						<div class="hero-body">
							<div class="container">
								<h1 class="title"></h1>
								<h2 class="subtitle"></h2>
							</div>
						</div>
					</section>
				</div>
				<div class="column is-7 column-card">
					<transition name="slide"> <router-view /></transition>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IndexNav from '../components/Navbars/index-nav'
export default {
	components: {
		'index-nav': IndexNav,
	},
}
</script>

<style lang="scss">
@import '../components/content/sass/index-content.scss';
</style>
