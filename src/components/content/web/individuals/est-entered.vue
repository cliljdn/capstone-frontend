<template>
	<div class="container  travel-container">
		<div class="columns travel-columns">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						List of Establishment Entered
					</p>

					<article class="panel">
						<!-- SORT BETWEEN TIME -->
						<div class="columns m-3 columns-button">
							<!-- <div class="column is-flex is-justify-content-center"></div> -->

							<div class="column is-12 has-text-justified-mobile">
								<button
									class="button is-pulled-right is-small is-marginless ml-2 reset-button is-ghost"
								>
									<strong> Print Travel History</strong>
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
											@onClose="btwnRanges()"
											v-model="payload.startDate"
											class="input is-primary is-rounded"
											placeholder="Filter Date"
										/>
										<span class="icon is-small is-left">
											<i class="fas fa-calendar"></i>
										</span>
										{{ payload.startDate }}
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
												<option>Time Entered</option>
												<option>Date Entered</option>
												<option>Establishment Name</option>
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
								<div class="table-container">
									<table
										id="my-table"
										class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
									>
										<!-- Your table content -->
										<thead>
											<tr>
												<th>Establishment Name</th>
												<th>Address Street</th>
												<th>Date Entered</th>
												<th>Time Entered</th>
											</tr>
										</thead>
										<tbody>
											<tr
												@click="openModal(est.batch)"
												v-for="est in estList"
												:key="est.batch"
											>
												<td>{{ est.name }}</td>
												<td>{{ est.street }}</td>
												<td>{{ est.date_entered }}</td>
												<td>{{ est.time_entered }}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div class="columns columns-error" v-if="estList.length === 0">
									<div class="column is-flex is-justify-content-center">
										<span class="has-text-danger">{{
											payloadErrors.search
										}}</span>
									</div>
								</div>
							</main>
							<!-- table view -->

							<!-- tile view -->
							<div class="columns p-3 is-multiline " v-if="isPanelActive">
								<div
									class="column is-4"
									v-for="est in estList"
									:key="est.batch"
								>
									<div class="card" @click="openModal(est.batch)">
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
													<p class="title is-4 menu-label">{{ est.name }}</p>
													<small class="subtitle is-6"></small>
												</div>
											</div>

											<div class="content">
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-calendar"></i>
													</span>
													<span class="ml-1 tvl-info">
														Location:
													</span>

													<span class="ml-1 user-info">{{ est.street }}</span>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-calendar"></i>
													</span>
													<span class="ml-1 tvl-info">
														Date Entered:
													</span>

													<span class="ml-1 user-info">{{
														est.date_entered
													}}</span>
												</p>

												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-clock"></i>
													</span>
													<span class="ml-1 tvl-info">
														Time Entered:
													</span>

													<span class="ml-1 user-info"
														>{{ est.time_entered }}
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div
									v-if="estList.length === 0"
									class="column columns-error is-flex is-justify-content-center"
								>
									<span class="has-text-danger">{{
										payloadErrors.search
									}}</span>
								</div>
							</div>
						</transition>

						<div class="columns" v-if="isPanelActive">
							<div class="column is-12 is-flex is-justify-content-center">
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
		<est-entered-modal />
	</div>
</template>

<script>
import app from '../../model/individuals/est-entered.model'
export default app
</script>
<style lang="scss">
@import '../../sass/individuals/travel-history.scss';
</style>
