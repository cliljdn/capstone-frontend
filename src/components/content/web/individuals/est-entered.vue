<template>
	<div class="container est-entered-container">
		<div class="columns est-entered-columns">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						Establishment Entered
					</p>
				</aside>

				<div class="columns mt-1">
					<div class="column is-one-fifth">
						<strong class="select-labels">Start Time: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select v-model="sendDispatch.start">
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
								<div class="select  is-rounded is-primary">
									<select @change="findBtwnTime()" v-model="sendDispatch.end">
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

				<div class="columns mt-1">
					<div class="column is-one-quarter">
						<strong class="select-labels">Sort List by: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="sortList()" v-model="sendDispatch.order">
										<option value="" seleted>Select Info</option>
										<option>Establishment Name</option>
										<option>Date Entered</option>
										<option>Time Entered</option>
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
					<div class="column is-one-fifth">
						<strong class="select-labels">Filter by Month: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select
										@change="filterList()"
										v-model="sendDispatch.filterMonth"
									>
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
									<select
										@change="filterList()"
										v-model="sendDispatch.filterDay"
									>
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
									<select
										@change="filterList()"
										v-model="sendDispatch.filterYear"
									>
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

				<div class="columns-error-all" v-if="estEntered.all !== ''">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger">{{ estErrors.all }}</span>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									v-model="sendDispatch.search"
									@input="searchList()"
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

				<div class="columns">
					<div class="column is-flex is-justify-content-center">
						<div class="columns">
							<div class="column ">
								<button
									class="button is-rounded column-buttons is-ghost is-rounded"
								>
									Refresh Dropdowns
								</button>
							</div>

							<div class="column">
								<button
									@click="printEstList"
									class="button is-rounded  column-buttons is-ghost is-rounded"
									:disabled="estEntered.length === 0"
								>
									Print Establishment History
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="columns is-multiline is-flex">
					<div class="column is-4">
						<div class="card">
							<div class="card-content">
								<div class="media">
									<div class="media-left">
										<figure class="image is-48x48">
											<img
												src="https://bulma.io/images/placeholders/96x96.png"
												alt="Placeholder image"
											/>
										</figure>
									</div>
									<div class="media-content">
										<p class="title is-4 menu-label"></p>
										<p class="subtitle is-6"></p>
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

										<span class="ml-1 user-info"> </span>
									</p>

									<p class="icon-text  level-left level-item">
										<span class="icon has-text-success">
											<i class="fas fa-clock"></i>
										</span>
										<span class="ml-1 tvl-info">
											Time Entered:
										</span>

										<span class="ml-1 user-info"> </span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns-error" v-if="estEntered.length === 0">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger"></span>
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
									currentPage === 0 ||
										estEntered.length === 0 ||
										estEnteredPages.length <= 1
								"
								>Previous</a
							>
							<a
								@click="incPage"
								class="pagination-next"
								:disabled="
									currentPage === estEnteredPages[estEnteredPages.length - 1] ||
										estEntered.length === 0 ||
										estEnteredPages.length <= 1
								"
								>Next page</a
							>
							<ul class="pagination-list" v-if="estEnteredPages.length > 1">
								<li>
									<a
										:class="{
											'is-current':
												currentPage ===
												estEnteredPages.indexOf(estEnteredPages[0]),
										}"
										@click="gotoPage(estEnteredPages[0])"
										class="pagination-link"
										aria-label="Goto page 1"
										>{{ estEnteredPages[0] }}</a
									>
								</li>
								<li><span class="pagination-ellipsis">&hellip;</span></li>
								<li v-if="estEnteredPages.length > 3">
									<a
										:class="{
											'is-current':
												currentPage ===
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2) - 1
												],
										}"
										@click="
											gotoPage(
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2) - 1
												]
											)
										"
										class="pagination-link"
										aria-label="Goto page 45"
										>{{
											estEnteredPages[
												Math.round((estEnteredPages.length - 1) / 2) - 1
											]
										}}</a
									>
								</li>

								<li>
									<a
										:class="{
											'is-current':
												currentPage ===
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2)
												],
										}"
										@click="
											gotoPage(
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2)
												]
											)
										"
										class="pagination-link"
										aria-label="Page 46"
										aria-current="page"
										>{{
											estEnteredPages[
												Math.round((estEnteredPages.length - 1) / 2)
											]
										}}</a
									>
								</li>
								<li v-if="estEnteredPages.length > 4">
									<a
										:class="{
											'is-current':
												currentPage ===
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2) + 1
												],
										}"
										@click="
											gotoPage(
												estEnteredPages[
													Math.round((estEnteredPages.length - 1) / 2) + 1
												]
											)
										"
										class="pagination-link"
										aria-label="Goto page 45"
										>{{
											estEnteredPages[
												Math.round((estEnteredPages.length - 1) / 2) + 1
											]
										}}</a
									>
								</li>

								<li><span class="pagination-ellipsis">&hellip;</span></li>
								<li>
									<a
										:class="{
											'is-current':
												currentPage ===
												estEnteredPages[estEnteredPages.length - 1],
										}"
										@click="
											gotoPage(estEnteredPages[estEnteredPages.length - 1])
										"
										class="pagination-link"
										aria-label="Goto page 86"
										>{{ estEnteredPages[estEnteredPages.length - 1] }}</a
									>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<!-- modal -->
		<est-entered-modal />
	</div>
</template>

<script>
import app from '../../model/individuals/est-entered.model'
export default app
</script>
<style lang="scss">
@import '../../sass/individuals/est-entered.scss';
</style>
