<template>
	<div class="container est-entered-container">
		<div class="columns est-entered-columns">
			<div class="column">
				<aside class="menu">
					<p class="menu-label">
						List Of Individuals
					</p>
				</aside>

				<p class="panel-tabs is-centered est-tabs">
					<a>Sort List by: </a>
					<a :class="{ 'is-active': betweenTime }" @click="switchPanelTime"
						>Between Time
					</a>
					<a>Or</a>
					<a :class="{ 'is-active': byDetails }" @click="switchPanelDetails"
						>Details</a
					>
				</p>

				<div class="columns mt-1" v-if="betweenTime">
					<div class="column is-one-fifth">
						<strong class="select-labels">Date </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select
										@change="btwnTime(payload)"
										v-model="payload.startDate"
									>
										<option value="" selected> Choose Date </option>
										<option v-for="(date, index) in dates" :key="index"
											>{{ date.date_entered }}
										</option>
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
										<option value="" selected> Select Time </option>
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
						<strong class="select-labels"> End Time: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select
										:disabled="!payload.start && !payload.startDate"
										@change="btwnTime(payload)"
										v-model="payload.end"
									>
										<option value="" selected> Select Time </option>
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
						<strong class="select-labels">Sort List: </strong>
						<div class="field mt-3">
							<div class="control has-icons-left">
								<div class="select is-rounded is-primary">
									<select @change="sortList(payload)" v-model="payload.order">
										<option value="" selected> Select Details </option>
										<option>Firstname</option>
										<option>Middlename</option>
										<option>Lastname</option>
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

				<div class="columns-error-all" v-if="formErrors.general !== ''">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger">{{ formErrors.general }}</span>
					</div>
				</div>

				<div class="columns">
					<div class="column is-flex is-justify-content-center">
						<div class="columns">
							<div class="column ">
								<button
									@click="resetPayload"
									class="button is-rounded column-buttons is-ghost is-rounded"
								>
									Refresh Dropdowns
								</button>
							</div>

							<div class="column">
								<button
									:disabled="listIndiv.length === 0"
									class="button is-rounded  column-buttons is-ghost is-rounded"
								>
									Print List of Individuals
								</button>
							</div>
						</div>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									v-model="payload.search"
									@input="searchList(payload)"
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
					<div
						class="column is-4"
						v-for="indiv in listIndiv"
						:key="indiv.batch"
					>
						<div class="card" @click="openModal">
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
										<p class="title is-4 menu-label">
											{{
												indiv.scannedIndiv.firstname +
													' ' +
													indiv.scannedIndiv.lastname
											}}
										</p>
										<p class="subtitle is-6">
											{{ indiv.scannedIndiv.middlename }}
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
											{{ indiv.date_entered }}
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
											{{ indiv.time_entered }}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="columns-error" v-if="listIndiv.length === 0">
					<div class="column is-flex is-justify-content-center">
						<span class="has-text-danger">{{ formErrors.search }}</span>
					</div>
				</div>

				<div class="columns">
					<div class="column">
						<nav
							class="pagination is-centered"
							role="navigation"
							aria-label="pagination"
						>
							<a class="pagination-previous">Previous</a>
							<a class="pagination-next">Next page</a>
							<ul class="pagination-list">
								<li>
									<a class="pagination-link" aria-label="Goto page 1">1</a>
								</li>
								<li><span class="pagination-ellipsis">&hellip;</span></li>
								<li>
									<a class="pagination-link" aria-label="Goto page 45">45</a>
								</li>
								<li>
									<a
										class="pagination-link is-current"
										aria-label="Page 46"
										aria-current="page"
										>46</a
									>
								</li>
								<li>
									<a class="pagination-link" aria-label="Goto page 47">47</a>
								</li>
								<li><span class="pagination-ellipsis">&hellip;</span></li>
								<li>
									<a class="pagination-link" aria-label="Goto page 86">86</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</div>

		<!-- modal -->
		<list-entered-modal />
	</div>
</template>

<script>
import app from '../../model/est/list-entered.model'
export default app
</script>

<style lang="scss">
@import '../../sass/individuals/est-entered.scss';
</style>
