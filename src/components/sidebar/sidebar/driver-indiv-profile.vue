<template>
	<div class="content">
		<div class="columns is-multiline">
			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-address-card"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Firstname:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.firstname }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-address-card"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Lastname:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.lastname }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-address-card"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Middlename:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.middlename }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-balance-scale"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Barangay:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.barangay }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-home"></i>
					</span>
					<strong class="ml-1 tvl-info">
						House Lot #:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.house_lot_number }}
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
						{{ authProfile.city }}
					</span>
				</div>
			</div>

			<div class="column is-full">
				<div class="icon-text mb-1 level-left level-item">
					<span class="icon has-text-primary">
						<i class="fas fa-phone"></i>
					</span>
					<strong class="ml-1 tvl-info">
						Contact Number:
					</strong>

					<span class="ml-1 tvl-info">
						{{ authProfile.contactnumber }}
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
