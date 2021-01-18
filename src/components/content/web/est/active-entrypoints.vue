<template>
	<div class="columns is-multiline mt-3 is-justify-content-center">
		<div class="column is-8">
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
								Time In:
							</span>

							<span class="ml-1 user-info">
								11:07
							</span>
						</p>

						<p class="icon-text  level-left level-item">
							<span class="icon has-text-success">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time out:
							</span>

							<span class="ml-1 user-info">
								11:07
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="column is-8">
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
								Time In:
							</span>

							<span class="ml-1 user-info">
								11:07
							</span>
						</p>

						<p class="icon-text  level-left level-item">
							<span class="icon has-text-success">
								<i class="fas fa-clock"></i>
							</span>
							<span class="ml-1 tvl-info">
								Time out:
							</span>

							<span class="ml-1 user-info">
								11:07
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>

		<entryPoints />
	</div>
</template>

<script>
import EntryPoints from '../../modals/est/entrypoints-modal'
export default {
	components: {
		entryPoints: EntryPoints,
	},

	methods: {
		openModal() {
			return this.$store.commit('modalEntrypoints')
		},
	},
}
</script>
