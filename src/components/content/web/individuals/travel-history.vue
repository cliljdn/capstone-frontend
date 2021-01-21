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
														<option selected>Country</option>
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

									<div class="column  is-6">
										<span class="select-labels">End Time: </span>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select is-rounded is-primary">
													<select v-model="payload.end">
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

							<div
								class="is-flex is-justify-content-center"
								v-if="isDetailsActive"
							>
								<!-- SORT BY DETAILS -->
								<div class="columns travel-columns">
									<div class="column ">
										<span class="select-labels">Sort List By: </span>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select is-primary">
													<select v-model="payload.order">
														<option selected>SELECT</option>
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
									<div class="column">
										<span class="select-labels">Search By: </span>
										<div class="panel-block">
											<p class="control has-icons-left">
												<input
													v-model="payload.search"
													class="input is-primary"
													type="text"
													placeholder="Search"
												/>
												<span class="icon is-left">
													<i class="fas fa-search" aria-hidden="true"></i>
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div class="" v-if="isTimeActive">
								<div class="panel-block">
									<p class="control has-icons-left">
										<input
											v-model="payload.search"
											class="input  is-rounded is-primary"
											type="text"
											placeholder="Search"
										/>
										<span class="icon is-left">
											<i class="fas fa-search" aria-hidden="true"></i>
										</span>
									</p>
								</div>
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
												@click="openModal"
												v-for="log in userTravelHistory"
												:key="log.batch"
											>
												<td>{{ log.destination }}</td>
												<td>{{ log.time_boarded }}</td>
												<td>{{ log.date_boarded }}</td>
											</tr>
										</tbody>
									</table>
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
