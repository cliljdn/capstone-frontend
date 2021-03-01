<template>
	<div class="">
		<index-nav />
		<div class="is-overlay main-index">
			<div class="columns is-multiline  columns-main">
				<div class="column column-main is-5 is-hidden-mobile">
					<div class="card has-equal-height">
						<div class="card-content">
							<section class="hero is-fullheight">
								<div class="hero-body">
									<div class="">
										<p class="title">
											General Purpose Monitoring for Olongapo City
										</p>
										<p class="subtitle"></p>
									</div>
								</div>
							</section>
						</div>
					</div>
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
