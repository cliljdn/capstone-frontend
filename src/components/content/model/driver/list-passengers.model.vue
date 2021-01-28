<script>
import ListPassengersModal from '../../modals/driver/list-passengers-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
export default {
	components: { 'list-passengers-modal': ListPassengersModal },

	computed: {
		passengers() {
			const { passengers } = this.$store.state.driver
			const list = []
			for (const passenger of passengers) {
				list.push({
					batch: passenger.batch,
					destination: passenger.destination,
					time_boarded: passenger.time_boarded,
					date_boarded: passenger.date_boarded,
					...passenger.passengerInfo,
				})
			}

			console.log(list, 'list')
			return list
		},

		travelDates() {
			const { getPassengerDates } = this.$store.getters
			return getPassengerDates.filter(
				(value, index) => getPassengerDates.indexOf(value) === index
			)
		},

		pages() {
			const { pages } = this.$store.state.driver
			const pageTotal = []

			for (let i = 0; i < Math.ceil(pages / 6); i++) {
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

			payload: {
				page: 0,
				start: '',
				end: '',
				order: '',
				startDate: '',
				search: '',
				filterDay: '',
				filterMonth: '',
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
			timeFormat: 24,
		}
	},

	methods: {
		decPage() {
			if (this.payload.page < 1) {
				return true
			} else {
				this.payload.page--
				console.log(this.payload.page)
				this.$store.dispatch('passengers', this.payload)
			}
		},

		gotoPage(params) {
			this.payload.page = params
			this.$store.dispatch('passengers', this.payload)
		},

		incPage() {
			if (this.payload.page === this.pages[this.pages.length - 1]) {
				return true
			} else {
				this.payload.page++
				console.log(this.payload.page)
				this.$store.dispatch('passengers', this.payload)
			}
		},

		filterList: _debounce(function() {
			const splitStart = this.payload.start.split(':')
			const splitEnd = this.payload.end.split(':')

			if (parseInt(splitStart) > parseInt(splitEnd)) {
				this.formError.all = 'The start time must be less than the end time'
			}

			this.$store.dispatch('passengers', this.payload)
		}, 300),

		openModal(batch) {
			return this.$store.dispatch('passengersInfo', batch)
		},

		printInfo() {
			const doc = new jsPdf()
			const { userProfile } = this.$store.state
			const printList = []

			Object.values(this.passengers).forEach((el) => {
				printList.push({
					indiv_name: el.firstname + ' ' + el.lastname,
					destination: el.destination,
					time_boarded: el.time_boarded,
					date_boarded: el.date_boarded,
				})
			})

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: printList,
				columns: [
					{ header: 'Individual Name', dataKey: 'indiv_name' },
					{ header: 'Destination', dataKey: 'destination' },
					{ header: 'Time Boarded', dataKey: 'time_boarded' },
					{ header: 'Date Boarded', dataKey: 'date_boarded' },
				],
			})

			doc.save(`${userProfile.firstname} list-of-passengers.pdf`)
		},

		searchList: _debounce(function() {
			console.log(this.payload)
			this.$store.dispatch('passengers', this.payload)
		}, 300),

		resetList() {
			Object.keys(this.payload).forEach((el) => {
				this.payload[el] = ''
			})
			this.formError.search = ''
			this.formError.all = ''
			this.$store.dispatch('passengers')
		},

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},

		switchPanelTime() {
			this.byDetails = false
			this.betweenTime = true
		},

		yearValue() {
			let currentYear = new Date().getFullYear(),
				years = [],
				startYear = 1960
			while (startYear <= currentYear) {
				years.push(startYear++)
			}
			return years.reverse()
		},
	},

	mounted() {
		this.$store.dispatch('passengers', this.payload)
	},
}
</script>
