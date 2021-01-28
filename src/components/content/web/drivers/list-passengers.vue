<template>
	<div class="container est-entered-container">
		<div class="columns est-entered-columns">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						List of Passengers
					</p>
				</aside>

				<p class="panel-tabs is-centered est-tabs">
					<a>Sort List by: </a>
					<a :class="{ 'is-active': betweenTime }" @click="switchPanelTime"
						>Between Time</a
					>
					<a>Or</a>
					<a :class="{ 'is-active': byDetails }" @click="switchPanelDetails"
						>Details</a
					>
				</p>

				<div class="columns mt-1" v-if="betweenTime">
					<div class="column is-one-fifth">
						<strong class="select-labels">Start Date: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList()" v-model="payload.startDate">
										<option value="" selected> Select Date </option>
										<option v-for="(date, index) in travelDates" :key="index">{{
											date
										}}</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-one-fifth">
						<strong class="select-labels">Start Time: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select v-model="payload.start">
										<option value="" selected>Select Time</option>
										<option v-for="(time, index) in timeFormat" :key="index"
											>{{ time }}:00</option
										>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-one-fifth">
						<strong class="select-labels">End Time: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList" v-model="payload.end">
										<option value="" selected>Select Time</option>
										<option v-for="(time, index) in timeFormat" :key="index"
											>{{ time }}:00</option
										>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns mt-1" v-if="byDetails">
					<div class="column">
						<strong class="select-labels">Sort By: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList" v-model="payload.order">
										<option value="" seleted>Select Info</option>
										<option>Destination</option>
										<option>Firstname</option>
										<option>Lastname</option>
										<option>Middlename</option>
										<option>Date Boarded</option>
										<option>Time Boarded</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns" v-if="byDetails">
					<div class="column is-one-fifth">
						<strong class="select-labels">Filter by Month: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList" v-model="payload.filterMonth">
										<option value="" seleted>Select Month</option>
										<option
											v-for="(month, index) in monthValues"
											:key="index"
											>{{ month }}</option
										>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-one-fifth">
						<strong class="select-labels">Day</strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList" v-model="payload.filterDay">
										<option value="" seleted>Select Day</option>
										<option v-for="(day, index) in daysValue" :key="index">{{
											day
										}}</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-one-fifth">
						<strong class="select-labels">Year</strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="filterList" v-model="payload.filterYear">
										<option value="" selected>Select Year</option>
										<option v-for="(year, index) in yearValue()" :key="index">{{
											year
										}}</option>
									</select>
								</div>
								<div class="icon is-small is-left has-text-success">
									<i class="fas fa-globe"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column is-flex is-justify-content-center">
						<div class="columns">
							<div class="column ">
								<button
									@click="resetList"
									class="button is-rounded column-buttons is-ghost is-rounded"
								>
									Refresh Dropdowns
								</button>
							</div>

							<div class="column">
								<button
									@click="printInfo"
									class="button is-rounded  column-buttons is-ghost is-rounded"
								>
									Print List Passengers
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="columns-error-all" v-if="formError.all !== ''">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger">{{ formError.all }}</span>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									v-model="payload.search"
									@input="searchList"
									class="input is-rounded is-primary"
									type="text"
									placeholder="Search"
								/>
								<span class="icon is-small is-left">
									<i class="fas fa-search"></i>
								</span>
							</p>
						</div>
					</div>
				</div>

				<div class="columns is-multiline">
					<div class="column is-4" v-for="pass in passengers" :key="pass.batch">
						<div class="card" @click="openModal(pass.batch)">
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
											<img
												:src="
													pass.image
														? pass.image
														: 'https://bulma.io/images/placeholders/96x96.png'
												"
												alt="Placeholder image"
											/>
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4 menu-label">
											{{ pass.firstname + ' ' + pass.lastname }}
										</p>
										<p class="subtitle  is-6">
											<small class="">Destination: </small
											>{{ pass.destination }}
										</p>
									</div>
								</div>

								<div class="content">
									<p class="icon-text  level-left level-item">
										<span class="icon has-text-success">
											<i class="fas fa-calendar"></i>
										</span>
										<span class="ml-1 tvl-info">
											Date Entered:
										</span>

										<span class="ml-1 user-info">
											{{ pass.date_boarded }}
										</span>
									</p>

									<p class="icon-text  level-left level-item">
										<span class="icon has-text-success">
											<i class="fas fa-clock"></i>
										</span>
										<span class="ml-1 tvl-info">
											Time Entered:
										</span>

										<span class="ml-1 user-info">
											{{ pass.time_boarded }}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns-error" v-if="passengers.length === 0">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger">{{ formError.search }}</span>
					</div>
				</div>

				<div class="columns">
					<div class="column is-flex is-justify-content-center">
						<nav
							class="pagination is-centered"
							role="navigation"
							aria-label="pagination"
						>
							<a
								@click="decPage"
								class="pagination-previous"
								:disabled="
									payload.page === 0 ||
										pages.length <= 1 ||
										passengers.length === 0
								"
								>Previous</a
							>

							<a
								:disabled="
									payload.page === pages[pages.length - 1] ||
										pages.length <= 1 ||
										passengers.length === 0
								"
								@click="incPage"
								class="pagination-next"
								>Next page</a
							>
							<ul class="pagination-list" v-if="pages.length > 1">
								<li v-if="pages.length >= 1">
									<a
										@click="gotoPage(pages[0])"
										:class="{
											'is-current': payload.page === pages[0],
										}"
										class="pagination-link"
										aria-label="Goto page 1"
										>{{ pages[0] === 0 ? '1' : '' }}</a
									>
								</li>
								<li>
									<span class="pagination-ellipsis">&hellip;</span>
								</li>
								<li v-if="pages.length > 2">
									<a
										@click="
											gotoPage(pages[Math.round((pages.length - 1) / 2) - 1])
										"
										:class="{
											'is-current':
												payload.page ===
												pages[Math.round((pages.length - 1) / 2) - 1],
										}"
										class="pagination-link"
										aria-label="Goto page 86"
										>{{ pages[Math.round((pages.length - 1) / 2) - 1] }}</a
									>
								</li>

								<li v-if="pages.length > 3">
									<a
										@click="gotoPage(pages[Math.round((pages.length - 1) / 2)])"
										:class="{
											'is-current':
												payload.page ===
												pages[Math.round((pages.length - 1) / 2)],
										}"
										class="pagination-link"
										aria-label="Goto page 86"
										>{{ pages[Math.round((pages.length - 1) / 2)] }}</a
									>
								</li>

								<li v-if="pages.length > 4">
									<a
										@click="
											gotoPage(pages[Math.round((pages.length - 1) / 2) + 1])
										"
										:class="{
											'is-current':
												payload.page ===
												pages[Math.round((pages.length - 1) / 2) + 1],
										}"
										class="pagination-link"
										aria-label="Goto page 86"
										>{{ pages[Math.round((pages.length - 1) / 2) + 1] }}</a
									>
								</li>

								<li>
									<span class="pagination-ellipsis">&hellip;</span>
								</li>

								<li>
									<a
										@click="gotoPage(pages[pages.length - 1])"
										:class="{
											'is-current': payload.page === pages[pages.length - 1],
										}"
										class="pagination-link"
										aria-label="Goto page 86"
										>{{ pages[pages.length - 1] }}</a
									>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<list-passengers-modal />
	</div>
</template>

<script>
import app from '../../model/driver/list-passengers.model'
export default app
</script>

<style lang="scss">
@import '../../sass/individuals/est-entered.scss';
</style>
