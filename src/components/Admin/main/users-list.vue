<template>
	<div class="main-list">
		<div class="top-options p-3 is-pulled-right">
			<div class="field">
				<div class="control">
					<span class="sort-text mr-3">Sort by: </span>
					<div class="select is-primary">
						<select>
							<option>Select</option>
							<option>With options</option>
						</select>
					</div>
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
							<div class="content user-content p-3">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin-email ml-2">Calil Jaudian</span>
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
							<div class="content user-content p-3">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin-email ml-2">Calil Jaudian</span>
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
							<div class="content user-content p-3">
								<span class="icon is-small is-left level">
									<i class="fas fa-user"></i>
									<span class="admin-email ml-2">Calil Jaudian</span>
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
