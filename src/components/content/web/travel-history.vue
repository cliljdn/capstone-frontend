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
									<div class="column is-one-fifth">
										<span class="select-labels">Start Time: </span>
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
									<div class="column">
										<span class="select-labels">End Time: </span>
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

							<div class="" v-if="isDetailsActive">
								<!-- SORT BY DETAILS -->
								<div class="columns travel-columns">
									<div class="column is-one-fifth">
										<span class="select-labels">Sort List By: </span>
										<div class="field mt-3">
											<div class="control has-icons-left">
												<div class="select is-primary">
													<select>
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
								</div>
							</div>

							<div class="panel-block">
								<p class="control has-icons-left">
									<input
										class="input is-primary"
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
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
											</tr>
											<tr>
												<td>Alfreds Futterkiste</td>
												<td>Maria Anders</td>
												<td>Germany</td>
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
	</div>
</template>

<script>
import app from '../model/travel-history.model'
export default app
</script>

<style lang="scss">
@import '../sass/travel-history.scss';
</style>
