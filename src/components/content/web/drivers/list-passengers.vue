<template>
	<div class="container  travel-container">
		<div
			class="columns travel-columns m-6"
			v-if="Object.keys($store.state.userProfile).length <= 0"
		>
			<div class="column is-flex is-justify-content-center">
				<figure class="image is-128x128 is-vcentered m-6">
					<img src="https://i.imgur.com/zCToWR2.gif" />
				</figure>
			</div>
		</div>

		<div v-else class="columns travel-columns">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						List of Routes History
					</p>

					<article class="panel">
						<!-- SORT BETWEEN TIME -->
						<div class="columns m-3 columns-button">
							<!-- <div class="column is-flex is-justify-content-center"></div> -->

							<div class="column is-12 has-text-justified-mobile">
								<button
									@click="printList"
									class="button is-pulled-right is-small is-marginless ml-2 reset-button is-ghost"
								>
									<strong> Print Routes History</strong>
								</button>

								<button
									@click="resetDispatch"
									class="button is-small is-marginless is-pulled-right reset-button is-ghost"
								>
									<strong>Reset Dropdowns</strong>
								</button>
							</div>
						</div>

						<div class="columns travel-columns">
							<div class="column is-one-fifth">
								<span class="select-labels">Start Date:</span>
								<div class="field between-time mt-3">
									<p class="control has-icons-left">
										<flat-pickr
											@input="btwnRanges()"
											v-model="payload.startDate"
											class="input is-primary is-rounded"
											placeholder="Filter Date"
										/>
										<span class="icon is-small is-left">
											<i class="fas fa-calendar"></i>
										</span>
									</p>
								</div>
							</div>

							<div class="column is-one-fifth">
								<span class="select-labels">End Date:</span>
								<div class="field between-time mt-3">
									<p class="control has-icons-left">
										<flat-pickr
											@input="btwnRanges()"
											v-model="payload.endDate"
											class="input is-primary  is-rounded"
											placeholder="Filter Date"
										/>
										<span class="icon is-small is-left">
											<i class="fas fa-calendar"></i>
										</span>
									</p>
								</div>
							</div>
						</div>

						<div class="columns travel-columns">
							<div class="column is-one-fifth">
								<span class="select-labels">Start Time: </span>
								<div class="field between-time mt-3">
									<p class="control has-icons-left">
										<flat-pickr
											@input="btwnRanges"
											v-model="payload.start"
											class="input is-primary is-rounded"
											placeholder="Select Start Time"
											:config="timeConfig"
										/>
										<span class="icon is-small is-left">
											<i class="fas fa-clock"></i>
										</span>
									</p>
								</div>
							</div>

							<div class="column  is-one-fifth">
								<span class="select-labels">End Time: </span>
								<div class="field between-time mt-3">
									<p class="control has-icons-left">
										<flat-pickr
											@input="btwnRanges"
											v-model="payload.end"
											class="input is-primary is-rounded"
											placeholder="Select End Time"
											:config="timeConfig"
										/>
										<span class="icon is-small is-left">
											<i class="fas fa-clock"></i>
										</span>
									</p>
								</div>
							</div>

							<div class="column is-one-fifth">
								<span class="select-labels">Sort List By: </span>
								<div class="field mt-3">
									<div class="control has-icons-left">
										<div class="select is-rounded is-primary">
											<select @change="sortList()" v-model="payload.order">
												<option value="" selected>Select Details</option>
												<option>Destination</option>
												<option>Date Boarded</option>
												<option>Vehicle Route</option>
												<option>Time Boarded</option>
												<option>Plate Number</option>
											</select>
										</div>
										<div class="icon is-small is-left has-text-success">
											<i class="fas fa-globe"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div class="panel-block">
							<p class="control has-icons-left">
								<input
									v-model="payload.search"
									@input="searchList"
									class="input  is-rounded is-primary"
									type="text"
									placeholder="Search"
								/>
								<span class="icon is-left">
									<i class="fas fa-search" aria-hidden="true"></i>
								</span>
							</p>
						</div>

						<div class="tabs is-centered is-boxed">
							<ul>
								<li :class="{ 'is-active': !isPanelActive }" class="mr-3">
									<a @click="switchPanelFalse">
										<span class="icon is-small"
											><i class="fas fa-table" aria-hidden="true"></i
										></span>
										<strong>Table View</strong>
									</a>
								</li>

								<li
									:class="{
										'is-active': isPanelActive,
									}"
								>
									<a @click="switchPanelTrue">
										<span class="icon is-small"
											><i class="far fa-window-restore" aria-hidden="true"></i
										></span>
										<strong>Tile View</strong>
									</a>
								</li>
							</ul>
						</div>

						<transition name="slide">
							<!-- table view -->
							<main class="travel-log" v-if="!isPanelActive">
								<div class="table-container" v-if="!$store.state.isLoading">
									<table
										id="my-table"
										class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
									>
										<!-- Your table content -->
										<thead>
											<tr>
												<th>Plate Number</th>
												<th>Vechicle Route</th>
												<th>Destination</th>
												<th>Date Boarded</th>
												<th>Time Boarded</th>
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="pass in passengers"
												:key="pass.batch"
												@click="openModal(pass.batch)"
											>
												<td>{{ pass.plate_number }}</td>
												<td>{{ pass.vehicle_route }}</td>
												<td>{{ pass.destination }}</td>
												<td>
													{{
														new Date(pass.date_boarded)
															.toISOString()
															.split('T')[0]
													}}
												</td>
												<td>{{ pass.time_boarded }}</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div
									class="columns columns-error"
									v-if="$store.state.isLoading"
								>
									<div class="column is-flex is-justify-content-center">
										<figure class="image is-96x96 is-vcentered m-2">
											<img src="https://i.imgur.com/zCToWR2.gif" />
										</figure>
									</div>
								</div>

								<div
									class="columns columns-error"
									v-if="passengers.length === 0 && !$store.state.isLoading"
								>
									<div class="column is-flex is-justify-content-center">
										<span class="has-text-danger">{{ formError.search }}</span>
									</div>
								</div>
							</main>
							<!-- table view -->

							<!-- tile view -->
							<div class="columns p-3 is-multiline " v-if="isPanelActive">
								<div
									class="column is-4"
									v-for="pass in passengers"
									:key="pass.batch"
								>
									<div
										class="card"
										v-if="!$store.state.isLoading"
										@click="openModal(pass.batch)"
									>
										<div class="card-content">
											<div class="media">
												<div class="media-left">
													<figure class="image is-64x64">
														<img
															src="https://bulma.io/images/placeholders/96x96.png"
															alt="Placeholder image"
														/>
													</figure>
												</div>
												<div class="media-content">
													<p class="title is-4 menu-label">
														{{ pass.destination }}
													</p>
													<small class="subtitle is-6"></small>
												</div>
											</div>

											<div class="content">
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-map"></i>
													</span>
													<span class="ml-1 tvl-info">
														Destination:
													</span>

													<span class="ml-1 user-info">{{
														pass.destination
													}}</span>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-road"></i>
													</span>
													<span class="ml-1 tvl-info">
														Vehicle Route:
													</span>

													<span class="ml-1 user-info">{{
														pass.vehicle_route
													}}</span>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-calendar"></i>
													</span>
													<span class="ml-1 tvl-info">
														Date Boarded:
													</span>

													<span class="ml-1 user-info">{{
														new Date(pass.date_boarded)
															.toISOString()
															.split('T')[0]
													}}</span>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-clock"></i>
													</span>
													<span class="ml-1 tvl-info">
														Time Boarded:
													</span>

													<span class="ml-1 user-info"
														>{{ pass.time_boarded }}
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div
									v-if="$store.state.isLoading && isPanelActive"
									class="column columns-error is-flex is-justify-content-center"
								>
									<figure class="image is-96x96 is-vcentered m-2">
										<img src="https://i.imgur.com/zCToWR2.gif" />
									</figure>
								</div>

								<div
									v-if="passengers.length === 0 && !$store.state.isLoading"
									class="column columns-error is-flex is-justify-content-center"
								>
									<span class="has-text-danger">{{ formError.search }}</span>
								</div>
							</div>
						</transition>

						<div class="columns" v-if="isPanelActive">
							<div
								v-if="!$store.state.isLoading"
								class="column is-12 is-flex is-justify-content-center"
							>
								<nav
									class="pagination is-centered"
									role="navigation"
									aria-label="pagination"
								>
									<a
										:disabled="payload.page < 1"
										@click="decrementPage()"
										class="pagination-previous"
										>Previous</a
									>
									<a
										:disabled="payload.page === pages[pages.length - 1] - 1"
										@click="incrementPage()"
										class="pagination-next"
										>Next page</a
									>
									<ul
										class="pagination-list"
										v-for="(page, index) in pages"
										:key="index"
									>
										<li v-if="page === 1">
											<a
												@click="gotoPage(index)"
												:class="{
													'is-current': payload.page === index,
												}"
												class="pagination-link"
												aria-label="Goto page 1"
												>{{ page }}</a
											>
										</li>
										<li v-if="page === 2">
											<span class="pagination-ellipsis">&hellip;</span>
										</li>
										<!-- middle page -->
										<li v-if="page > 1 && page !== pages[pages.length - 1]">
											<a
												@click="gotoPage(index)"
												:class="{
													'is-current': payload.page === index,
												}"
												class="pagination-link"
												aria-label="Goto page 1"
												>{{ page }}</a
											>
										</li>

										<!-- end page -->
										<li
											v-if="
												page === pages[pages.length - 1] && pages.length > 1
											"
										>
											<span class="pagination-ellipsis">&hellip;</span>
										</li>
										<li
											v-if="
												page === pages[pages.length - 1] && pages.length > 1
											"
										>
											<a
												@click="gotoPage(index)"
												:class="{
													'is-current': payload.page === index,
												}"
												class="pagination-link"
												aria-label="Goto page 1"
												>{{ page }}</a
											>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<!-- tile view -->
					</article>
				</aside>
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
@import '../../sass/individuals/travel-history.scss';
</style>
