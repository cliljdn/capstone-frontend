<script>
import TravelHistoryModal from '../../modals/individuals/travel-history-modal'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
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
				filterMonth: '',
				filterDay: '',
				filterYear: '',
			},

			monthValues: [
				'January',
				'February',
				'March',
				'April',
				'May',
				'June',
				'July',
				'August',
				'September',
				'October',
				'November',
				'December',
			],
			daysValue: 31,

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

		filterDate(obj) {
			console.log(obj)
			this.payload.filterMonth = !this.sendFilter.filterMonth
				? ''
				: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1
			console.log(this.payload)
			this.$store.dispatch('travelHistory', this.payload)
		},

		openModal(batch) {
			this.$store.dispatch('tvlCompanionInfo', batch)
			this.$store.commit('modalTravel')
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

			this.$store.dispatch('travelHistory', payload)
		},

		printInfo() {
			const doc = new jsPdf()
			const { travelHistory } = this.$store.state.individual
			const printData = []
			const { userProfile } = this.$store.state
			travelHistory.forEach((el) => {
				printData.push({
					destination: el.destination,
					time_boarded: el.time_boarded,
					date_boarded: el.date_boarded,
				})
			})

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: printData,
				columns: [
					{ header: 'Destination', dataKey: 'destination' },
					{ header: 'Time Boarded', dataKey: 'time_boarded' },
					{ header: 'Date Boarded', dataKey: 'date_boarded' },
				],
			})
			doc.save(`${userProfile.firstname.toLowerCase()}-travelhistory.pdf`)
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

		yearValue() {
			let currentYear = new Date().getFullYear(),
				years = [],
				startYear = 1960
			while (startYear <= currentYear) {
				years.push(startYear++)
			}
			return years
		},
	},

	mounted() {
		this.yearValue()
		this.$store.dispatch('travelHistory', this.payload)
	},
}
</script>
