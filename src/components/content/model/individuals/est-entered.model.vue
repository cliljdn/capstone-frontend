<script>
import EstEnteredModal from '../../modals/individuals/est-entered-modal'
export default {
	components: { 'est-entered-modal': EstEnteredModal },
	computed: {
		estEntered() {
			const { estEntered } = this.$store.state.individual
			return estEntered.results ? estEntered.results : ''
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

		searchList(searchParams) {
			this.currentPage = 0
			const sendParams = { search: searchParams }
			setTimeout(() => {
				this.$store.dispatch('estEntered', sendParams)
				if (this.$store.state.individual.estEntered.results.length < 1) {
					this.estErrors = 'No results'
					console.log(this.estErrors)
				} else {
					this.estErrors = ''
				}
			}, 1000)
		},

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
