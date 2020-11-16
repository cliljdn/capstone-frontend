<template>
	<div class="main-section">
		<indexNav />
		<div class="columns columns-parent  is-mobile">
			<div class="column">
				<h1 class="has-text-white"></h1>
			</div>
		</div>
	</div>
</template>

<script>
import indexNav from '@/components/Navbars/Indexnav'
export default {
	components: { indexNav },
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
</style>
