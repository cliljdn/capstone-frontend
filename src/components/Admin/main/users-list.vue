<template>
	<div class="main-list">
		<div class="top-options mb-3">
			<div class="columns">
				<div class="column is-3-desktop is-6-mobile">
					<span class="sort-text ml-5 mr-3">Search: </span>
					<div class="field">
						<p class="control has-icons-left">
							<input
								class="input inp-search is-primary is-rounded"
								type="text"
								placeholder="Enter Search"
							/>
							<span class="icon is-small is-left">
								<i class="fas fa-search"></i>
							</span>
						</p>
					</div>
				</div>

				<div class="column is-6-desktop is-3-mobile">
					<nobr><span class="sort-text ml-5 mr-3">Sort by: </span></nobr>
					<div class="field">
						<div class="control has-icons-left">
							<div class="select is-primary is-rounded">
								<select>
									<option>Select</option>
									<option>With options</option>
								</select>
							</div>
							<span class="icon is-small is-left">
								<i class="fas fa-address-card"></i>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="columns is-0-tablet is-0-mobile is-0-desktop">
			<div class="column m-3">
				<div class="box is-medium" @click="openModal">
					<article class="media">
						<div class="media-left">
							<figure class="image is-128x128">
								<img
									class="is-rounded"
									src="https://bulma.io/images/placeholders/128x128.png"
									alt="Image"
								/>
							</figure>
						</div>
						<div class="media-content">
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Firstname: </span>
									<span class="admin- ml-2">Calil</span>
								</span>
							</div>
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Lastname: </span>
									<span class="admin- ml-2">Jaudian</span>
								</span>
							</div>
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-cog"></i>
									<span class="account-type ml-2">Account Type: </span>
									<span class="admin ml-2">User</span>
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>

		<div class="columns">
			<div class="column m-3">
				<div class="box is-medium">
					<article class="media">
						<div class="media-left">
							<figure class="image is-128x128">
								<img
									class="is-rounded"
									src="https://bulma.io/images/placeholders/128x128.png"
									alt="Image"
								/>
							</figure>
						</div>
						<div class="media-content">
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Firstname: </span>
									<span class="admin- ml-2">Calil</span>
								</span>
							</div>
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Lastname: </span>
									<span class="admin- ml-2">Jaudian</span>
								</span>
							</div>
							<div class="content user-content">
								<span class="icon is-small is-left level">
									<i class="fas fa-cog"></i>
									<span class="account-type ml-2">Account Type: </span>
									<span class="admin ml-2">User</span>
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>

		<div class="page-numbers ">
			<nav
				class="pagination is-centered is-small is-mobile is-0-tablet"
				role="navigation"
				aria-label="pagination"
			>
				<a class="pagination-previous">Previous</a>
				<a class="pagination-next">Next page</a>
				<ul class="pagination-list">
					<li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
					<li><span class="pagination-ellipsis">&hellip;</span></li>
					<li><a class="pagination-link" aria-label="Goto page 45">45</a></li>
					<li>
						<a
							class="pagination-link is-current"
							aria-label="Page 46"
							aria-current="page"
							>46</a
						>
					</li>
					<li><a class="pagination-link" aria-label="Goto page 47">47</a></li>
					<li><span class="pagination-ellipsis">&hellip;</span></li>
					<li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
				</ul>
			</nav>
		</div>

		<div
			class=""
			v-if="this.$store.state.openModal"
			:class="{ 'is-active': this.$store.state.openModalUser }"
		>
			<driver-profile />
		</div>
	</div>
</template>

<script>
import app from '../admin-model/users-list.model'
export default app
</script>

<style lang="scss">
@import '../sass/user-list.scss';
</style>
