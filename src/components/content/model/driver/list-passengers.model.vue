<script>
import ListPassengersModal from '../../modals/driver/list-passengers-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	components: {
		'list-passengers-modal': ListPassengersModal,
		FlatPickr: VueFlatpickr,
	},

	computed: {
		passengers() {
			const { passengers } = this.$store.state.driver

			return passengers
		},

		pages() {
			const { pages } = this.$store.state.driver
			const pageTotal = []

			for (let i = 1; i < Math.ceil(pages / 6) + 1; i++) {
				pageTotal.push(i)
			}

			console.log(pageTotal)
			return pageTotal
		},
	},

	data() {
		return {
			betweenTime: true,
			byDetails: false,

			formError: {
				search: 'No Results Found',
				all: '',
			},

			isPanelActive: false,

			payload: {
				page: '',
				start: '',
				end: '',
				order: '',
				startDate: null,
				search: '',
				endDate: null,
			},

			timeConfig: {
				enableTime: true,
				noCalendar: true,
				dateFormat: 'H:i',
				time_24hr: true,
			},
		}
	},

	methods: {
		btwnRanges() {
			this.$store.dispatch('passengers', this.payload)
		},

		decrementPage() {
			if (this.payload.page < 1) {
				return true
			} else {
				this.payload.page--
				this.$store.dispatch('passengers', this.payload)
			}
		},

		gotoPage(params) {
			this.payload.page = params
			this.$store.dispatch('passengers', this.payload)
		},

		incrementPage() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				console.log(this.payload.page)

				this.$store.dispatch('passengers', this.payload)
			}
		},

		openModal(batch) {
			return this.$store.dispatch('passengersInfo', batch)
		},

		printList() {
			const doc = new jsPdf()

			const { userProfile } = this.$store.state

			const header = function() {
				doc.setFontSize(12)
				doc.setTextColor(40)

				doc.getFont('normal')
				//doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
				doc.text(
					`Establishment Entered Report \n Printed By: ${userProfile.firstname +
						' ' +
						userProfile.lastname} \n Date Printed: ${new Date().toDateString()}`,
					doc.internal.pageSize.getWidth() / 2,
					7,
					{ align: 'center' }
				)
			}

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: this.passengers,
				columns: [
					{ header: 'Plate Number', dataKey: 'plate_number' },
					{ header: 'Vechicle Route', dataKey: 'vehicle_route' },
					{ header: 'Destination', dataKey: 'destination' },
					{ header: 'Date Boarded', dataKey: 'date_boarded' },
					{ header: 'Time Boarded', dataKey: 'time_boarded' },
				],
				margin: { top: 20 },
				didDrawPage: header,
			})
			doc.save(`${userProfile.firstname.toLowerCase()}-routehistory.pdf`)
		},

		searchList: _debounce(function() {
			this.$store.dispatch('passengers', this.payload)
		}, 300),

		sortList() {
			this.$store.dispatch('passengers', this.payload)
		},

		resetDispatch() {
			Object.keys(this.payload).forEach((k) => {
				if (k === 'page' && this.isPanelActive) {
					this.payload[k] = 0
				} else {
					this.payload[k] = ''
				}
			})

			if (!this.isPanelActive) {
				this.$store.dispatch('passengers')
			} else {
				this.$store.dispatch('passengers', this.payload)
			}
		},

		switchPanelFalse() {
			this.payload.page = ''
			this.isPanelActive = false
			this.$store.dispatch('passengers', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			console.log(this.payload)
			this.$store.dispatch('passengers', this.payload)
			this.isPanelActive = true
		},
	},

	mounted() {
		this.$store.dispatch('passengers', this.payload)
	},
}
</script>
