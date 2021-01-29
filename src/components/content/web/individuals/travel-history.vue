<template>
	<div class="">
		<div class="container  travel-container">
			<div class="columns travel-columns">
				<div class="column">
					<aside class="menu">
						<p class="menu-label">
							Travel History
						</p>

						<article class="panel">
							<div class="tabs is-centered is-boxed">
								<ul>
									<li :class="{ 'is-active': !isPanelActive }" class="mr-3">
										<a @click="switchPanelFalse">
											<span class="icon is-small"
												><i class="fas fa-film" aria-hidden="true"></i
											></span>
											<span>Table View</span>
										</a>
									</li>

									<li :class="{ 'is-active': isPanelActive }">
										<a @click="switchPanelTrue">
											<span class="icon is-small"
												><i class="far fa-file-alt" aria-hidden="true"></i
											></span>
											<span>Tile View</span>
										</a>
									</li>
								</ul>
							</div>
							<!-- SORT BETWEEN TIME -->

							<div class="columns travel-columns">
								<div class="column is-one-fifth">
									<span class="select-labels">Start Date:</span>
									<div class="field between-time mt-3">
										<p class="control has-icons-left">
											<flat-pickr
												@input="btwnTime()"
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
												@input="btwnTime()"
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
										<div class="control has-icons-left">
											<div class="select is-rounded is-primary">
												<select @change="btwnTime()" v-model="payload.start">
													<option value="" selected>Select Time</option>
													<option
														v-for="(time, index) in timeValue"
														:key="index"
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

								<div class="column  is-one-fifth">
									<span class="select-labels">End Time: </span>
									<div class="field mt-3">
										<div class="control has-icons-left">
											<div class="select is-rounded is-primary">
												<select
													:disabled="!payload.start"
													v-model="payload.end"
													@change="btwnTime()"
												>
													<option value="" selected>Select Time</option>
													<option
														v-for="(time, index) in timeValue"
														:key="index"
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
									<span class="select-labels">Sort List By: </span>
									<div class="field mt-3">
										<div class="control has-icons-left">
											<div class="select is-rounded is-primary">
												<select @change="orderBy()" v-model="payload.order">
													<option value="" selected>Select Details</option>
													<option>Destination</option>
													<option>Time Boarded</option>
													<option>Date Boarded</option>
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

							<div class="columns m-3 is-vcentered">
								<div class="column is-flex is-justify-content-center">
									<button
										@click="printInfo"
										class="button reset-button is-ghost is-rounded"
									>
										Print Travel History
									</button>
								</div>

								<div class="column is-flex is-justify-content-center">
									<button
										@click="resetDropdowns"
										class="button reset-button is-ghost is-rounded"
									>
										Reset Dropdowns
									</button>
								</div>
							</div>

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
												<th>Destination</th>
												<th>Date Boarded</th>
												<th>Time Boarded</th>
											</tr>
										</thead>
										<tbody>
											<tr
												@click="openModal(log.batch)"
												v-for="log in travelHistory"
												:key="log.batch"
											>
												<td>{{ log.destination }}</td>
												<td>{{ log.date_boarded }}</td>
												<td>{{ log.time_boarded }}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<div
									class="columns columns-error"
									v-if="travelHistory.length === 0"
								>
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
									v-for="list in travelHistory"
									:key="list.batch"
								>
									<div class="card">
										<div class="card-content">
											<div class="media">
												<div class="media-left">
													<figure class="image is-96x96">
														<img
															src="https://bulma.io/images/placeholders/96x96.png"
															alt="Placeholder image"
														/>
													</figure>
												</div>
												<div class="media-content">
													<p class="title is-4 menu-label">
														{{ list.destination }}
													</p>
													<p class="subtitle is-6">
														{{ list.plate_number }}
													</p>
												</div>
											</div>

											<div class="content">
												<p class="icon-text  level-left level-item">
													<span class="icon has-text-success">
														<i class="fas fa-calendar"></i>
													</span>
													<span class="ml-1 tvl-info">
														Date Boarded:
													</span>

													<span class="ml-1 user-info">{{
														list.date_boarded
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
														>{{ list.time_entered }}
													</span>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div
									v-if="travelHistory.length === 0"
									class="column columns-error is-flex is-justify-content-center"
								>
									<span class="has-text-danger">{{
										payloadErrors.search
									}}</span>
								</div>
							</div>

							<!-- tile view -->
						</article>
					</aside>
				</div>
			</div>
		</div>

		<travel-history-modal />
	</div>
</template>

<script>
import app from '../../model/individuals/travel-history.model'
export default app
</script>

<style lang="scss">
@import '../../sass/individuals/travel-history.scss';
</style>
