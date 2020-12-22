<template>
	<div class="main-list m-4">
		<div class="top-options mb-3">
			<div class="columns">
				<div class="column is-3-desktop is-6-mobile">
					<span class="sort-text ml-5 mr-3">Search: </span>
					<div class="field">
						<p class="control has-icons-left">
							<input
								v-model="inpSearch"
								@keypress="searchUsers(inpSearch)"
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

		<div class="" v-if="inpSearch !== ''">
			<div class="columns is-0-tablet is-0-mobile is-0-desktop">
				<div
					class="column m-3"
					v-for="user in foundUsers().slice(0, 3)"
					:key="user.user_id"
				>
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
										<span class="admin- ml-2">{{ user.firstname }}</span>
									</span>
								</div>
								<div class="content user-content">
									<span class="icon is-small is-left level">
										<i class="fas fa-user"></i>
										<span class="admin- ml-2">Lastname: </span>
										<span class="admin- ml-2">{{ user.lastname }}</span>
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

					<div class="" v-if="foundUsers().length > 3">
						<div class="columns">
							<div
								class="column m-3"
								v-for="user in userList().slice(3, 6)"
								:key="user.user_id"
							>
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
													<span class="admin- ml-2">{{ user.firstname }}</span>
												</span>
											</div>
											<div class="content user-content">
												<span class="icon is-small is-left level">
													<i class="fas fa-user"></i>
													<span class="admin- ml-2">Lastname: </span>
													<span class="admin- ml-2">{{ user.lastname }}</span>
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
					</div>
				</div>
			</div>
			<div class="" v-if="foundUsers().length === 0">no result</div>
		</div>

		<div class="" v-if="inpSearch === ''">
			<div class="" else>
				<div class="columns is-0-tablet is-0-mobile is-0-desktop">
					<div
						class="column m-3"
						v-for="user in userList().slice(0, 3)"
						:key="user.user_id"
					>
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
											<span class="admin- ml-2">{{ user.firstname }}</span>
										</span>
									</div>
									<div class="content user-content">
										<span class="icon is-small is-left level">
											<i class="fas fa-user"></i>
											<span class="admin- ml-2">Lastname: </span>
											<span class="admin- ml-2">{{ user.lastname }}</span>
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

				<div class="" v-if="userList().length > 4">
					<div class="columns">
						<div
							class="column m-3"
							v-for="user in userList().slice(3, 6)"
							:key="user.user_id"
						>
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
												<span class="admin- ml-2">{{ user.firstname }}</span>
											</span>
										</div>
										<div class="content user-content">
											<span class="icon is-small is-left level">
												<i class="fas fa-user"></i>
												<span class="admin- ml-2">Lastname: </span>
												<span class="admin- ml-2">{{ user.lastname }}</span>
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
				</div>
			</div>
		</div>
		<div class="page-numbers mt-5">
			<nav
				class="pagination is-centered"
				role="navigation"
				aria-label="pagination"
			>
				<a class="pagination-previous">Previous</a>
				<a class="pagination-next">Next page</a>
				<ul class="pagination-list">
					<div class="" v-for="(number, index) in pageNumbers()" :key="index">
						<li>
							<a
								@click="getPage(index)"
								class="pagination-link is-current"
								aria-label="Page 46"
								aria-current="page"
								>{{ number }}</a
							>
						</li>
					</div>
				</ul>
			</nav>
		</div>

		<div
			class=""
			v-if="this.$store.state.openModalUser"
			:class="{ 'is-active': this.$store.state.openModalUser }"
		>
			<user-profile />
		</div>
	</div>
</template>

<script>
import app from '../admin-model/users/users-list.model'
export default app
</script>

<style lang="scss">
@import '../sass/user-list.scss';
</style>
