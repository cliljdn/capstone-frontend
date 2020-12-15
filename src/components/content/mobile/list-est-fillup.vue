<template>
	<div class="card has-equal-height">
		<div class="card-content">
			<div class="content">
				<div class="columns">
					<div class="column text-welcome">
						<span>Select a establishment where you work</span>
					</div>
				</div>
				<aside class="menu">
					<div class="" v-for="est in estList" :key="est.establishment_id">
						<div class="box mb-3" @click="getEstId(est.establishment_id)">
							<p class="menu-label"></p>
							<ul class="menu-list">
								<div class="columns">
									<div class="column">
										<span class="icon has-text-info mr-3">
											<i class="fas fa-location-arrow"></i>
										</span>
										<span>Est Name:</span>
										<span class="ml-3"> {{ est.name }}</span>
									</div>
								</div>

								<div class="columns">
									<div class="column">
										<span class="icon has-text-info mr-3">
											<i class="fas fa-child"></i>
										</span>
										<span>Est Street:</span>
										<span class="ml-3">{{ est.street }}</span>
									</div>
								</div>

								<div class="columns">
									<div class="column">
										<span class="icon has-text-info mr-3">
											<i class="fas fa-child"></i>
										</span>
										<span>Est Owner:</span>
										<span class="ml-3">{{ est.establishment_owner }}</span>
									</div>
								</div>

								<div class="columns">
									<div class="column">
										<span class="icon has-text-info mr-3">
											<i class="fas fa-child"></i>
										</span>
										<span>Telephone #:</span>
										<span class="ml-3">{{ est.telephone_number }}</span>
									</div>
								</div>
							</ul>
						</div>
					</div>
				</aside>
			</div>
		</div>
		<footer class="card-footer">
			<a href="#" class="card-footer-item" @click="createProfile"
				>Create Profile</a
			>
		</footer>
	</div>
</template>

<script>
import app from '../model/list-est-fillup.model'
export default app
</script>

<style lang="scss">
@import '../sass/list-est-fillup.scss';
</style>
