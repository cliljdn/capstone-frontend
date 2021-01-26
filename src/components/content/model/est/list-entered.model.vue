<script>
import ListEnteredModal from '../../modals/est/list-entered-modal'
import _debounce from 'lodash.debounce'
export default {
	components: { 'list-entered-modal': ListEnteredModal },

	computed: {
		listIndiv() {
			const { enteredIndividuals } = this.$store.state.est
			return enteredIndividuals
		},

		pages() {
			const { enteredPages } = this.$store.state.est
			const pages = []

			for (let i = 1; i < Math.ceil(enteredPages / 6); i++) {
				pages.push(i)
			}

			return pages
		},

		dates() {
			const { enteredDates } = this.$store.state.est
			return enteredDates.filter(
				(value, index) => enteredDates.indexOf(value) === index
			)
		},
	},

	data() {
		return {
			betweenTime: true,
			byDetails: false,

			payload: {
				page: 0,
				start: '',
				end: '',
				order: '',
				startDate: '',
				search: '',
			},

			formErrors: {
				search: 'No Results found',
				general: '',
			},

			daysValue: 31,
			timeFormat: 24,
		}
	},

	methods: {
		btwnTime(payload) {
			const splitStart = payload.start.split(':')
			const splitEnd = payload.end.split(':')

			this.formErrors.general = ''
			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.formErrors.general =
					'The start time must be less than the end time'
			} else {
				this.formErrors.general = ''
			}

			this.$store.dispatch('enteredIndividuals', payload)
		},

		openModal() {
			return this.$store.commit('modalListEntered')
		},

		resetPayload() {
			Object.keys(this.payload).forEach((el) => {
				this.payload[el] = ''
			})
			this.formErrors.general = ''
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		searchList: _debounce(function(searchParams) {
			this.$store.dispatch('enteredIndividuals', searchParams)
			console.log(this.listIndiv.length)
		}, 300),

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},

		switchPanelTime() {
			this.byDetails = false
			this.betweenTime = true
		},
	},

	mounted() {
		this.$store.dispatch('enteredIndividuals', this.payload)
	},
}
</script>
