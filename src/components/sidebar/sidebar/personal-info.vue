<template>
	<div class="container">
		<div class="box personal-info-container  is-flex">
			<p class="box-title is-pulled-left is-fixed-top">
				Personal Information
			</p>

			<div class="columns is-vcentered is-horizontal-center">
				<figure class="image is-128x128">
					<article class="media">
						<div class="column">
							<img
								class="is-rounded"
								src="https://i.imgur.com/bCOd9N0.jpg"
								alt="Image"
							/>
						</div>
					</article>
				</figure>
			</div>

			<div class="media-content">
				<personal-indiv
					v-if="
						this.$store.state.accType === 'Individual' ||
							this.$store.state.accType === 'Driver'
					"
				/>

				<personal-est v-if="this.$store.state.accType === 'Establishment'" />
			</div>
		</div>
	</div>
</template>

<script>
import PersonalIndiv from './personal-indiv'
import PersonalEst from './personal-est'
export default {
	components: {
		'personal-indiv': PersonalIndiv,
		'personal-est': PersonalEst,
	},
}
</script>

<style lang="scss">
@import '../sass/personal-info.scss';
</style>
