<template>
	<div class="">
		<index-nav />
		<div class="is-overlay">
			<div class="columns is-multiline  columns-main ">
				<div class="column column-main is-5 is-hidden-mobile is-5">
					<div class="card is-fullheight has-equal-height">
						<div class="card-content">
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
