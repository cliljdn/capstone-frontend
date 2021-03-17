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
			if (this.payload.startDate || this.payload.endDate) {
				this.$store.state.isLoading = true
			}
			this.$store.dispatch('passengers', this.payload)
		},

		decrementPage() {
			if (this.payload.page < 1) {
				return true
			} else {
				this.payload.page--
				this.$store.state.isLoading = true
				this.$store.dispatch('passengers', this.payload)
			}
		},

		gotoPage(params) {
			this.payload.page = params
			this.$store.state.isLoading = true
			this.$store.dispatch('passengers', this.payload)
		},

		incrementPage() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				this.$store.state.isLoading = true
				this.$store.dispatch('passengers', this.payload)
			}
		},

		openModal(batch) {
			this.$store.state.isLoading = true
			return this.$store.dispatch('passengersInfo', batch)
		},

		printList() {
			const doc = new jsPdf()
			const { userProfile } = this.$store.state

			const list = []
			for (const pass of this.passengers) {
				list.push({
					plate_number: pass.plate_number,
					destination: pass.destination,
					vehicle_route: pass.vehicle_route,
					time_boarded: pass.time_boarded,
					date_boarded: new Date(pass.date_boarded).toISOString().split('T')[0],
				})
			}

			doc.page = 1
			console.log(list)
			function footer() {
				doc.setFont('Times', 'italic')
				doc.text(180, 290, 'page ' + doc.page) //print number bottom right
				doc.page++
				doc.text(90, 290, 'Driver Print Report')
			}

			const header = function() {
				doc.setTextColor(40)

				doc.setFont('Times', 'bold')
				doc.setFontSize(18)
				doc.text(
					`List of Routes Report`,
					doc.internal.pageSize.getWidth() / 2,
					10,
					{ align: 'center' }
				)

				doc.setFont('Times', 'italic')
				doc.setFontSize(10)
				doc.text(
					`Printed By: ${userProfile.firstname + ' ' + userProfile.lastname}`,
					doc.internal.pageSize.getWidth() / 4,
					17,
					{ align: 'right' }
				)

				doc.setFontSize(10)
				doc.text(
					`Date Printed: ${new Date().toISOString().split('T')[0]}`,
					180,
					17,
					{
						align: 'center',
					}
				)

				footer()
			}
			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: list,
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
			if (!this.isPanelActive) {
				this.payload.page = ''
			} else {
				this.payload.page = 0
			}
			this.$store.state.isLoading = true
			this.$store.dispatch('passengers', this.payload)
		}, 300),

		sortList() {
			this.$store.state.isLoading = true
			this.$store.dispatch('passengers', this.payload)
		},

		resetDispatch() {
			this.$store.state.isLoading = true
			Object.keys(this.payload).forEach((k) => {
				if (k === 'page' && this.isPanelActive) {
					this.payload[k] = 0
				} else {
					this.payload[k] = ''
				}
			})

			if (!this.isPanelActive) {
				this.$store.dispatch('passengers', this.payload)
			} else {
				this.$store.dispatch('passengers', this.payload)
			}
		},

		switchPanelFalse() {
			this.$store.state.isLoading = true
			this.payload.page = ''
			this.isPanelActive = false
			this.$store.dispatch('passengers', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.state.isLoading = true
			this.isPanelActive = true
			this.$store.dispatch('passengers', this.payload)
		},
	},

	mounted() {
		this.$store.state.isLoading = true
		this.$store.dispatch('passengers', this.payload)
	},
}
</script>
