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
			const { estEntered } = this.$store.state.individual
			const pages = []

			for (let i = 1; i < Math.ceil(estEntered.total / 6); i++) {
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

			currentPage: 0,
			isCurrentActive: false,
			timeFormat: 24,

			estErrors: '',

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

		searchList: _debounce(function(searchParams) {
			this.currentPage = 0
			const sendParams = { search: searchParams }
			this.$store.dispatch('estEntered', sendParams)
			if (this.estEntered > 0) {
				this.estErrors = ''
			} else {
				this.estErrors = 'No Results'
			}

			console.log(this.estErrors)
		}, 300),

		switchPanelDetails() {
			this.byDetails = true
			this.betweenTime = false
		},

		switchPanelTime() {
			this.byDetails = false
			this.betweenTime = true
		},
	},

	mounted() {
		this.$store.dispatch('estEntered', this.sendDispatch)
	},
}
</script>
