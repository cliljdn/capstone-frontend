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

			const sendDispatch = {
				startDate: startDate,
				start: start,
				end: end,
			}

			if ((startDate && start && end) || (start && end)) {
				this.$store.dispatch('travelHistory', sendDispatch)
			}
		},

		openModal() {
			return this.$store.commit('modalTravel')
		},

		resetDropdowns() {
			this.$store.dispatch('travelHistory')

			Object.keys(this.payload).forEach((k) => {
				this.payload[k] = ''
			})

			Object.keys(this.payloadErrors).forEach((k) => {
				this.payloadErrors[k] = ''
			})
		},

		orderBy(order) {
			const payload = { order: '' }
			// let dash = '-'
			switch (order) {
				case 'Destination':
					payload.order = order.toLowerCase()
					break
				case 'Time Boarded':
					payload.order = order
						.split(' ')
						.join('_')
						.toLowerCase()
					break

				case 'Date Boarded':
					payload.order = order
						.split(' ')
						.join('_')
						.toLowerCase()
					break
				default:
					break
			}
			console.log(payload.order)
			this.$store.dispatch('travelHistory', payload)
		},

		showBetweenTimeSort() {
			this.isTimeActive = true
			this.isDetailsActive = false
		},

		showDetailsSort() {
			this.isTimeActive = false
			this.isDetailsActive = true
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
