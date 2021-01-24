<script>
import EstEnteredModal from '../../modals/individuals/est-entered-modal'
import _debounce from 'lodash.debounce'
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

		debouncedOnChange() {
			return _debounce(this.searchList(this.sendDispatch.search), 700)
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

			currentPage: 0,
			isCurrentActive: false,
			timeFormat: 24,

			estErrors: {
				all: '',
				search: 'No Results Found',
			},

			filterData: '',

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
		decPage() {
			if (this.currentPage < 1) {
				return true
			} else {
				this.currentPage--
				this.sendDispatch.page = this.currentPage
				this.$store.dispatch('estEntered', this.sendDispatch)
			}
		},
		filterDate(startDate) {
			this.$store.dispatch('estEntered', { startDate: startDate })
		},

		filterList(dateParams) {
			console.log(parseInt(dateParams) + 1)
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
			}

			if ((startDate && start && end) || (start && end)) {
				this.$store.dispatch('estEntered', sendDispatch)
			}
		},

		gotoPage(page) {
			if (page === 1) page = 0
			this.currentPage = page
			this.sendDispatch.page = page
			this.$store.dispatch('estEntered', this.sendDispatch)
		},

		incPage() {
			if (
				this.estEnteredPages[this.estEnteredPages.length - 1] ===
				this.currentPage
			) {
				return true
			} else {
				this.currentPage++
				this.sendDispatch.page = this.currentPage
				this.$store.dispatch('estEntered', this.sendDispatch)
			}
		},

		openModal() {
			return this.$store.commit('modalEntered')
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
