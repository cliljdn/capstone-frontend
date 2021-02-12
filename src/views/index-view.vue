<template>
	<div class="">
		<index-nav />
		<div class="is-overlay main-index">
			<div class="columns is-multiline  columns-main">
				<div class="column column-main is-5 is-hidden-mobile">
					<div class="card has-equal-height">
						<div class="card-content">
							<p class="title mt-5 is-flex is-justify-content-center">
								Scan-Olongapo
							</p>
							<div class="content">
								Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at
								eros. Donec id elit non mi porta gravida at eget metus. Cum
								sociis natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Cras mattis consectetur purus sit amet
								fermentum.
							</div>
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
