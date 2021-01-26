<script>
import EstEnteredModal from '../../modals/individuals/est-entered-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
export default {
	components: { 'est-entered-modal': EstEnteredModal },

	computed: {
		estEntered() {
			const { estEntered } = this.$store.state.individual
			return estEntered ? estEntered : ''
		},

		estEnteredPages() {
			const { estEnteredPages } = this.$store.state.individual
			const pages = []

			for (let i = 1; i < Math.ceil(estEnteredPages / 6); i++) {
				pages.push(i)
			}
			return pages
		},

		getEstEnteredDates() {
			const { getEstEnteredDates } = this.$store.getters
			return getEstEnteredDates.filter(
				(value, index) => getEstEnteredDates.indexOf(value) === index
			)
		},
	},
	data() {
		return {
			betweenTime: true,
			byDetails: false,
			pages: [],
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

			currentPage: 0,
			isCurrentActive: false,
			timeFormat: 24,

			estErrors: {
				all: '',
				search: 'No Results Found',
			},

			sendFilter: {
				filterYear: '',
				filterMonth: '',
				filterDay: '',
			},

			sendDispatch: {
				page: '',
				start: '',
				end: '',
				order: '',
				startDate: '',
				search: '',
			},
		}
	},

	methods: {
		changeSelectValue(selectList) {
			switch (selectList) {
				case 'Establishment Name':
					selectList = selectList.split(' ')[1].toLowerCase()

					return selectList
				case 'Time Entered':
					selectList = selectList
						.split(' ')
						.join('_')
						.toLowerCase()
					return selectList

				case 'Date Entered':
					selectList = selectList
						.split(' ')
						.join('_')
						.toLowerCase()
					return selectList
				default:
					break
			}
		},

		decPage() {
			if (this.currentPage < 1) {
				return true
			} else {
				this.currentPage--

				const payload = {
					order: this.changeSelectValue(this.sendDispatch.order),
					page: this.currentPage,
					filterYear: this.sendFilter.filterYear,
					filterMonth: !this.sendFilter.filterMonth
						? ''
						: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1,
					filterDay: this.sendFilter.filterDay,
				}

				this.$store.dispatch('estEntered', payload)
			}
		},

		//date on the db
		filterDate(startDate) {
			this.$store.dispatch('estEntered', { startDate: startDate })
		},

		// month day year
		filterList(filterYear, filterMonth, filterDay) {
			const payload = {
				startDate: this.sendDispatch.startDate,
				start: this.sendDispatch.start,
				end: this.sendDispatch.end,
				order: this.changeSelectValue(this.sendDispatch.order),
				filterYear: filterYear,
				filterMonth: filterMonth,
				filterDay: filterDay,
			}
			this.$store.dispatch('estEntered', payload)
		},

		findBtwnTime(startDate, start, end) {
			const splitStart = start.split(':')
			const splitEnd = end.split(':')

			this.estErrors.all = ''
			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.estErrors.all = 'The start time must be less than the end time'
			} else {
				this.estErrors.all = ''
			}

			const sendDispatch = {
				startDate: startDate,
				start: start,
				end: end,
				filterYear: this.sendFilter.filterYear,
				filterMonth: !this.sendFilter.filterMonth
					? ''
					: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1,
				filterDay: this.sendFilter.filterDay,
				order: this.changeSelectValue(this.sendDispatch.order),
			}

			if ((startDate && start && end) || (start && end)) {
				this.$store.dispatch('estEntered', sendDispatch)
			}
		},

		gotoPage(page) {
			if (page === 1) page = 0
			const payload = {
				order: this.changeSelectValue(this.sendDispatch.order),
				page: page,
				filterYear: this.sendFilter.filterYear,
				filterMonth: !this.sendFilter.filterMonth
					? ''
					: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1,
				filterDay: this.sendFilter.filterDay,
			}
			this.$store.dispatch('estEntered', payload)
		},

		incPage() {
			if (
				this.estEnteredPages[this.estEnteredPages.length - 1] ===
				this.currentPage
			) {
				return true
			} else {
				this.currentPage++
				const payload = {
					order: this.changeSelectValue(this.sendDispatch.order),
					page: this.currentPage,
					filterYear: this.sendFilter.filterYear,
					filterMonth: !this.sendFilter.filterMonth
						? ''
						: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1,

					filterDay: this.sendFilter.filterDay,
				}

				this.$store.dispatch('estEntered', payload)
			}
		},

		openModal(batch) {
			this.$store.dispatch('estEnteredCompanions', batch)
			return this.$store.commit('modalEntered')
		},

		printEstList() {
			const doc = new jsPdf()
			const { userProfile } = this.$store.state
			const printList = []
			this.estEntered.forEach((el) => {
				printList.push({
					time_entered: el.time_entered,
					date_entered: el.date_entered,
					...el.estList,
				})
			})

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: printList,
				columns: [
					{ header: 'Establishment Name', dataKey: 'name' },
					{ header: 'Street Address', dataKey: 'street' },
					{ header: 'Time Entered', dataKey: 'time_entered' },
					{ header: 'Date Entered', dataKey: 'date_entered' },
				],
			})

			doc.save(`${userProfile.firstname.toLowerCase()}-estentered.pdf`)
		},

		resetDispatch(obj) {
			if (!obj) {
				Object.keys(this.sendDispatch).forEach((k) => {
					this.sendDispatch[k] = ''
				})

				this.estErrors.all = ''
			} else {
				Object.keys(obj).forEach((k) => {
					obj[k] = ''
				})
				this.estErrors.all = ''
			}
			this.$store.dispatch('estEntered', this.sendDispatch)
		},

		searchList: _debounce(function(searchParams) {
			this.currentPage = 0
			const sendParams = { search: searchParams }
			this.$store.dispatch('estEntered', sendParams)
			if (this.estEntered > 0) {
				this.estErrors.search = ''
			}
		}, 300),

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},

		switchPanelTime() {
			this.byDetails = false
			this.betweenTime = true
		},

		sortList(order) {
			const payload = {
				startDate: this.sendDispatch.startDate,
				start: this.sendDispatch.start,
				end: this.sendDispatch.end,
				order: '',
				filterYear: this.sendFilter.filterYear,
				filterMonth: !this.sendFilter.filterMonth
					? ''
					: this.monthValues.indexOf(this.sendFilter.filterMonth) + 1,
				filterDay: this.sendFilter.filterDay,
			}

			payload.order = this.changeSelectValue(order)
			this.$store.dispatch('estEntered', payload)
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

		this.$store.dispatch('estEntered', this.sendDispatch)
	},
}
</script>
