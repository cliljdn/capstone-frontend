<template>
	<div class="container entrypoints-columns">
		<div class="columns columns-header">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						List of Vehicles
					</p>
				</aside>

				<div class="columns mt-1">
					<div class="column is-one-quarter">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									class="input is-primary"
									type="text"
									placeholder="Search Employee"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-search"></i>
								</span>
							</p>
						</div>
					</div>

					<div class="column is-one-quarter">
						<strong class="select-labels">Sort List: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-primary">
									<select>
										<option selected>Country</option>
										<option>Select dropdown</option>
										<option>With options</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p class="panel-tabs m-3 is-centered entry-tabs">
			<a>View:</a>

			<router-link to="/vehicles">
				<a @click="switchActive" :class="{ 'is-active': switchTabs }"
					>Active Vehicles</a
				>
			</router-link>

			<a>Or</a>

			<router-link to="/vehicles/inactive">
				<a @click="switchInactive" :class="{ 'is-active': !switchTabs }"
					>Inactive Vehicles</a
				>
			</router-link>
		</p>

		<router-view />
	</div>
</template>

<script>
import app from '../../model/driver/list-vehicles.model'
export default app
</script>

<style lang="scss">
@import '../../sass/est/list-entrypoints.scss';
</style>
