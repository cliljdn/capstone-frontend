<template>
	<div class="">
		<div class="container travel-container">
			<div class="columns travel-columns">
				<div class="column">
					<aside class="menu">
						<p class="menu-label">
							Travel History
						</p>

						<article class="panel">
							<p class="panel-tabs choose-panel">
								<a>Sort List by:</a>
								<a
									@click="showBetweenTimeSort"
									:class="{ 'is-active': isTimeActive }"
									>Between Time</a
								>
								<a>Or</a>
								<a
									@click="showDetailsSort"
									:class="{ 'is-active': isDetailsActive }"
									>By Details</a
								>
							</p>

							<div class="" v-if="isTimeActive">
								<!-- SORT BETWEEN TIME -->
								<div class="columns travel-columns">
									<div class="column is-one-quarter">
										<strong class="select-labels">Choose Date: </strong>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select  is-rounded is-primary">
													<select v-model="payload.startDate">
														<option value="" selected>Select Date</option>
														<option
															v-for="(date, index) in getTravelData"
															:key="index"
															>{{ date }}</option
														>
													</select>
												</div>
												<div class="icon is-small is-left has-text-success">
													<i class="fas fa-globe"></i>
												</div>
											</div>
										</div>
									</div>

									<div class="column is-one-quarter">
										<span class="select-labels">Start Time: </span>
										<div class="field between-time mt-3">
											<div class="control has-icons-left">
												<div class="select  is-rounded is-primary">
													<select v-model="payload.start">
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

									<div class="column  is-one-quarter">
										<span class="select-labels">End Time: </span>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select is-rounded is-primary">
													<select
														:disabled="!payload.start"
														v-model="payload.end"
														@change="
															btwnTime(
																payload.startDate,
																payload.start,
																payload.end
															)
														"
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
								</div>
							</div>

							<div class="" v-if="isDetailsActive">
								<!-- SORT BY DETAILS -->
								<div class="columns travel-columns">
									<div class="column ">
										<span class="select-labels">Sort List By: </span>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select is-rounded is-primary">
													<select
														@change="orderBy(payload.order)"
														v-model="payload.order"
													>
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
							</div>

							<div class="columns ml-3" v-if="isDetailsActive">
								<div class="column is-one-fifth">
									<strong class="select-labels">Filter by Month: </strong>
									<div class="field mt-3">
										<div class="control has-icons-left">
											<div class="select is-rounded is-primary">
												<select>
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
												<select>
													<option value="" seleted>Select Day</option>
													<option
														v-for="(day, index) in daysValue"
														:key="index"
														>{{ day }}</option
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
									<strong class="select-labels">Year</strong>
									<div class="field mt-3">
										<div class="control has-icons-left">
											<div class="select is-rounded is-primary">
												<select>
													<option value="" selected>Select Year</option>
													<option
														v-for="(year, index) in yearValue()"
														:key="index"
														>{{ year }}</option
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

							<div class="columns ">
								<div class="column is-flex is-justify-content-center">
									<div class="columns">
										<div class="column ">
											<button
												@click="resetDropdowns"
												class="button reset-button is-ghost is-rounded"
											>
												Reset Dropdowns
											</button>
										</div>

										<div class="column">
											<button
												@click="printInfo"
												class="button  reset-button is-ghost is-rounded"
											>
												Print Travel History
											</button>
										</div>
									</div>
								</div>
							</div>

							<div class="panel-block">
								<p class="control has-icons-left">
									<input
										v-model="payload.search"
										@input="searchList(payload.search)"
										class="input  is-rounded is-primary"
										type="text"
										placeholder="Search"
									/>
									<span class="icon is-left">
										<i class="fas fa-search" aria-hidden="true"></i>
									</span>
								</p>
							</div>

							<main class="travel-log">
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
												v-for="log in userTravelHistory"
												:key="log.batch"
											>
												<td>{{ log.destination }}</td>
												<td>{{ log.date_boarded }}</td>
												<td>{{ log.time_boarded }}</td>
											</tr>
										</tbody>
									</table>

									<div
										class="columns columns-error"
										v-if="payloadErrors.search !== ''"
									>
										<div class="column is-flex is-justify-content-center">
											<span class="has-text-danger">{{
												payloadErrors.search
											}}</span>
										</div>
									</div>

									<div
										class="columns columns-error"
										v-if="payloadErrors.all !== ''"
									>
										<div class="column is-flex is-justify-content-center">
											<span class="has-text-danger">{{
												payloadErrors.all
											}}</span>
										</div>
									</div>
								</div>
							</main>
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
