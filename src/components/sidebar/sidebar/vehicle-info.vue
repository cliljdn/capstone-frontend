<template>
	<div class="content">
		<div class="columns is-multiline">
			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-address-card"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Plate Number:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.plate_number }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-hashtag"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Body Number:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.body_number }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-road"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Route:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.vehicle_route }}
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
