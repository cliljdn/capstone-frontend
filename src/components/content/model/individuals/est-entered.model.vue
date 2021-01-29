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
			return estEntered
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

			sendFilter: {},

			sendDispatch: {
				page: '',
				start: '',
				end: '',
				order: '',
				search: '',
				filterYear: '',
				filterMonth: '',
				filterDay: '',
			},
		}
	},

	methods: {
		decPage() {
			if (this.currentPage < 1) {
				return true
			} else {
				this.currentPage--

				this.$store.dispatch('estEntered', this.sendDispatch)
			}
		},

		findBtwnTime() {
			const splitStart = this.sendDispatch.start.split(':')
			const splitEnd = this.sendDispatch.end.split(':')

			this.estErrors.all = ''
			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.estErrors.all = 'The start time must be less than the end time'
			} else {
				this.estErrors.all = ''
			}

			if (this.sendDispatch.start && this.sendDispatch.end) {
				this.$store.dispatch('estEntered', this.sendDispatch)
			}
		},

		incPage() {
			if (
				this.estEnteredPages[this.estEnteredPages.length - 1] ===
				this.currentPage
			) {
				return true
			} else {
				this.currentPage++

				this.$store.dispatch('estEntered', this.sendDispatch)
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

		resetDispatch() {
			Object.keys(this.sendDispatch).forEach((k) => {
				this.sendDispatch[k] = ''
			})

			this.estErrors.all = ''
			this.$store.dispatch('estEntered')
		},

		searchList: _debounce(function() {
			this.currentPage = 0

			this.$store.dispatch('estEntered', this.sendDispatch)
			if (this.estEntered.length > 0) {
				this.estErrors.search = ''
			}
		}, 300),

		sortList() {
			this.$store.dispatch('estEntered', this.sendDispatch)
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
