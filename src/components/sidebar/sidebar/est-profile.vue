<template>
	<div class="content">
		<div class="columns is-multiline">
			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-address-card"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Establishment Name:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.name }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-road"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Street:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.street }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-phone"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Telephone #:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.telephone_number }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-user"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Establishment Owner:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.est_owner }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-university"></i>
					</span>
					<strong class="ml-1 tvl-info">
						City:
					</strong>

					<span class="ml-1 tvl-info">
						Olongapo
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		authProfile() {
			return this.$store.state.userProfile
		},
	},

	mounted() {
		this.$store.dispatch('getProfile')
	},
}
</script>
