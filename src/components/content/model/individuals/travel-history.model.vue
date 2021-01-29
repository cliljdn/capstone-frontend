<script>
import TravelHistoryModal from '../../modals/individuals/travel-history-modal'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
import _debounce from 'lodash.debounce'
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	components: {
		'travel-history-modal': TravelHistoryModal,
		FlatPickr: VueFlatpickr,
	},

	computed: {
		userTravelHistory() {
			const { travelHistory } = this.$store.state.individual

			return travelHistory
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
			isPanelActive: false,
			timeValue: 24,

			payload: {
				start: '',
				end: '',
				order: '',
				search: '',
				startDate: '',
				endDate: '',
			},

			payloadErrors: {
				all: '',
				search: '',
			},
		}
	},
	methods: {
		btwnTime() {
			const splitStart = this.payload.start.split(':')
			const splitEnd = this.payload.end.split(':')

			this.payloadErrors['all'] = ''

			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.payloadErrors['all'] =
					'The start time must be less than the end time'
			} else {
				this.payloadErrors['all'] = ''
			}

			if (this.payload.start && this.payload.end) {
				this.$store.dispatch('travelHistory', this.payload)
			}
		},

		filterDate() {
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

		searchList: _debounce(function() {
			this.$store.dispatch('travelHistory', this.payload)

			if (this.userTravelHistory.length === 0) {
				this.payloadErrors.search = 'No results'
				console.log(this.payloadErrors.search)
			} else {
				this.payloadErrors.search = ''
			}
		}, 300),

		switchPanelFalse() {
			this.isPanelActive = false
		},

		switchPanelTrue() {
			this.isPanelActive = true
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
