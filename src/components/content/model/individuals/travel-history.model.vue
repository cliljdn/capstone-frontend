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

		printLog() {
			const listData = []
			const { travelHistory } = this.$store.state.individual

			for (const log of travelHistory) {
				listData.push({
					destination: log.destination,
					time_boarded: log.time_boarded,
					date_boarded: new Date(log.date_boarded).toISOString().split('T')[0],
				})
			}

			return listData
		},

		pages() {
			const { tvlPages } = this.$store.state.individual
			const pages = []
			for (let i = 1; i < Math.ceil(tvlPages / 6) + 1; i++) {
				pages.push(i)
			}
			return pages
		},
	},

	data() {
		return {
			isTimeActive: true,
			isDetailsActive: false,
			isPanelActive: false,
			timeValue: 24,
			timeConfig: {
				enableTime: true,
				noCalendar: true,
				dateFormat: 'H:i',
				time_24hr: true,
				defaultDate: '00:00',
			},

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
		btwnRanges() {
			if (!this.isPanelActive) {
				this.payload.page = ''
			} else {
				this.payload.page = 0
			}

			this.$store.dispatch('travelHistory', this.payload)
		},

		decrementPage() {
			if (this.payload.page < 1) {
				return true
			}
			this.payload.page--
			this.$store.dispatch('travelHistory', this.payload)
		},

		gotoPage(index) {
			this.payload.page = index
			this.$store.dispatch('travelHistory', this.payload)
		},

		incrementPage() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				this.$store.dispatch('travelHistory', this.payload)
			}
		},

		openModal(batch) {
			this.$store.dispatch('tvlCompanionInfo', batch)
			this.$store.commit('modalTravel')
		},

		printInfo() {
			const doc = new jsPdf()

			const { userProfile } = this.$store.state

			const header = function() {
				doc.setFontSize(12)
				doc.setTextColor(40)

				doc.getFont('normal')
				//doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
				doc.text(
					`Travel History Report \n Printed By: ${userProfile.firstname +
						' ' +
						userProfile.lastname} \n Date Printed: ${new Date().toDateString()}`,
					doc.internal.pageSize.getWidth() / 2,
					7,
					{ align: 'center' }
				)
			}

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: this.printLog,
				columns: [
					{ header: 'Destination', dataKey: 'destination' },
					{ header: 'Time Boarded', dataKey: 'time_boarded' },
					{ header: 'Date Boarded', dataKey: 'date_boarded' },
				],
				margin: { top: 20 },
				didDrawPage: header,
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
			const { state } = this.$store
			state.isLoading = true
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
			this.$store.dispatch('travelHistory', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.dispatch('travelHistory', this.payload)
			this.isPanelActive = true
		},
	},

	mounted() {
		this.$store.dispatch('travelHistory', this.payload)
	},
}
</script>
