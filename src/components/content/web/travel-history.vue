<template>
	<div class="">
		<div class="container">
			<div class="columns travel-columns">
				<div class="column">
					<span>Travel History</span>
				</div>
			</div>

			<div class="columns travel-columns">
				<div class="column">
					<aside class="menu">
						<p class="menu-label">
							Travel History
						</p>
						<ul class="menu-list">
							<li><a>Dashboard</a></li>
							<li><a>Customers</a></li>
						</ul>
					</aside>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import app from '../model/travel-history.model'
export default app
</script>

<style lang="scss">
@import '../sass/travel-history.scss';
</style>
