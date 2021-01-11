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
					<div class="column is-one-quarter">
						<strong class="select-labels">Choose Date: </strong>
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

					<div class="column is-one-quarter">
						<strong class="select-labels">Start Time: </strong>
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

					<div class="column is-6">
						<strong class="select-labels">End Time: </strong>
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

				<div class="columns mt-1" v-if="byDetails">
					<div class="column">
						<strong class="select-labels">Sort By: </strong>
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

				<div class="columns">
					<div class="column">
						<strong class="select-labels">Search: </strong>
						<div class="field mt-3">
							<p class="control has-icons-left has-icons-right">
								<input
									class="input is-primary"
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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-4">
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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

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
										<p class="title is-4 menu-label">John Smith</p>
										<p class="subtitle is-6">@johnsmith</p>
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
											2020-12-13
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
											11:07
										</span>
									</p>
								</div>
							</div>
						</div>
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
