<template>
	<div class="columns">
		<div class="card is-fullheight has-equal-height">
			<form-est v-if="this.$store.state.accType === 'Establishment'" />

			<form-indiv
				v-if="
					this.$store.state.accType === 'Driver' ||
						this.$store.state.accType === 'Individual'
				"
			/>

			<div class="" v-if="this.$store.state.openPopOut">
				<pop-modal />
			</div>
		</div>
	</div>
</template>

<script>
import PopModal from '../../msgmodal/pop-modal'
import FormEst from './form-est'
import FormIndiv from './form-indiv'
export default {
	components: {
		'form-est': FormEst,
		'form-indiv': FormIndiv,
		'pop-modal': PopModal,
	},
}
</script>

<style lang="scss">
@import '../sass/form-fillup.scss';
</style>
