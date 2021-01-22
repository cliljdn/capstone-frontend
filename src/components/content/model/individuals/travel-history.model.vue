<script>
import TravelHistoryModal from '../../modals/individuals/travel-history-modal'

export default {
	components: {
		'travel-history-modal': TravelHistoryModal,
	},

	computed: {
		userTravelHistory() {
			const { travelHistory } = this.$store.state.individual
			return travelHistory.filter(
				(value, index) => travelHistory.indexOf(value) === index
			)
		},

		getTravelData() {
			const { getTravelHistoryDate } = this.$store.getters
			return getTravelHistoryDate.filter(
				(value, index) => getTravelHistoryDate.indexOf(value) === index
			)
		},
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
			timeValue: 24,
			payload: {
				start: '',
				end: '',
				order: '',
				startDate: '',
				search: '',
			},

			payloadErrors: {
				all: '',
				search: '',
			},
		}
	},
	methods: {
		openModal() {
			return this.$store.commit('modalTravel')
		},

		showBetweenTimeSort() {
			this.isTimeActive = true
			this.isDetailsActive = false
		},

		showDetailsSort() {
			this.isTimeActive = false
			this.isDetailsActive = true
		},

		btwnTime(startDate, start, end) {
			const splitStart = start.split(':')
			const splitEnd = end.split(':')

			this.payloadErrors['all'] = ''
			if (startDate === 'Select Date') {
				startDate = ''
			}

			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.payloadErrors['all'] =
					'The start time must be less than the end time'
			} else {
				this.payloadErrors['all'] = ''
			}

			if (!end) {
				this.$store.dispatch('travelHistory')
				this.payload.start = ''
				this.payload.startDate = ''
			}

			const sendDispatch = {
				startDate: startDate,
				start: start,
				end: end,
			}

			if ((startDate && start && end) || (start && end)) {
				this.$store.dispatch('travelHistory', sendDispatch)
			}
		},

		searchList(searchParams) {
			const sendDispatch = {
				search: searchParams,
			}

			this.$store.dispatch('travelHistory', sendDispatch)
			if (this.$store.state.individual.travelHistory.length === 0) {
				this.payloadErrors['search'] = 'No results'
			} else {
				this.payloadErrors['search'] = ''
			}
		},
	},

	mounted() {
		this.$store.dispatch('travelHistory', this.payload)
	},
}
</script>
