<template>
	<div class="">
		<index-nav />
	</div>
</template>

<script>
import IndexNav from '../components/Navbars/index-nav'
import IndexContent from '../components/content/index-content'
export default {
	components: {
		'index-nav': IndexNav,
	},
}
</script>

<style lang="scss">
@import '../components/Navbars/sass/index-nav.scss';
</style>
