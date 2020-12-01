<template>
	<div class="main-list">
		<div class="top-options">
			<span class="sort-text ml-5 mr-3">Search: </span>
			<div class="field">
				<p class="control has-icons-left">
					<input
						class="input inp-search is-primary is-rounded"
						type="text"
						placeholder="Password"
					/>
					<span class="icon is-small is-left">
						<i class="fas fa-search"></i>
					</span>
				</p>
			</div>
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

		<div class="columns">
			<div class="column">
				<div class="box">
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
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Account Type: </span>
									<span class="admin- ml-2">User</span>
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>

			<div class="column">
				<div class="box">
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
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Account Type: </span>
									<span class="admin- ml-2">User</span>
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>

			<div class="column">
				<div class="box">
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
									<i class="fas fa-user"></i>
									<span class="admin- ml-2">Account Type: </span>
									<span class="admin- ml-2">User</span>
								</span>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@import '../sass/user-list.scss';
</style>
