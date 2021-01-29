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
		travelHistory() {
			const { travelHistory } = this.$store.state.individual
			return travelHistory
		},
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
			isPanelActive: false,
			timeValue: 24,

			payload: {
				page: '',
				start: '',
				end: '',
				order: '',
				search: '',
				startDate: null,
				endDate: null,
			},

			payloadErrors: {
				all: '',
				search: 'No Results Found',
			},
		}
	},
	methods: {
		btwnTime() {
			if (!this.isPanelActive) {
				this.payload.page = ''
			} else {
				this.payload.page = 0
			}

			this.$store.dispatch('travelHistory', this.payload)
		},

		filterDate() {
			this.$store.dispatch('travelHistory', this.payload)
		},

		openModal(batch) {
			this.$store.dispatch('tvlCompanionInfo', batch)
			this.$store.commit('modalTravel')
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
			Object.keys(this.payload).forEach((k) => {
				if (k === 'page' && this.isPanelActive) {
					this.payload[k] = 0
				} else {
					this.payload[k] = ''
				}
			})

			if (!this.isPanelActive) {
				this.$store.dispatch('travelHistory')
			} else {
				this.$store.dispatch('travelHistory', this.payload)
			}
		},

		searchList: _debounce(function() {
			if (!this.isPanelActive) {
				this.payload.page = ''
			} else {
				this.payload.page = 0
			}
			this.$store.dispatch('travelHistory', this.payload)
		}, 300),

		switchPanelFalse() {
			this.payload.page = ''
			this.isPanelActive = false
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.dispatch('travelHistory', this.payload)
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
