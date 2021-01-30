<script>
import EstEnteredModal from '../../modals/individuals/est-entered-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	components: { 'est-entered-modal': EstEnteredModal, FlatPickr: VueFlatpickr },

	computed: {
		estEntered() {
			const { estEntered } = this.$store.state.individual
			return estEntered
		},

		pages() {
			const { estEnteredPages } = this.$store.state.individual
			const pages = []

			for (let i = 1; i < Math.ceil(estEnteredPages / 6); i++) {
				pages.push(i)
			}
			return pages
		},
	},

	data() {
		return {
			betweenTime: true,
			byDetails: false,

			daysValue: 31,
			isPanelActive: false,

			isCurrentActive: false,
			timeFormat: 24,

			payloadErrors: {
				search: 'No Results Found',
			},

			sendFilter: {},

			payload: {
				page: '',
				start: '',
				end: '',
				order: '',
				search: '',
				startDate: '',
				endDate: '',
			},
		}
	},

	methods: {
		decPage() {
			if (this.currentPage < 1) {
				return true
			} else {
				this.currentPage--

				this.$store.dispatch('estEntered', this.payload)
			}
		},

		findBtwnTime() {
			this.$store.dispatch('estEntered', this.payload)
		},

		incPage() {
			if (
				this.estEnteredPages[this.estEnteredPages.length - 1] ===
				this.currentPage
			) {
				return true
			} else {
				this.currentPage++

				this.$store.dispatch('estEntered', this.payload)
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
			Object.keys(this.payload).forEach((k) => {
				this.payload[k] = ''
			})

			this.payloadErrors.all = ''
			this.$store.dispatch('estEntered')
		},

		searchList: _debounce(function() {
			this.currentPage = 0

			this.$store.dispatch('estEntered', this.payload)
			if (this.estEntered.length > 0) {
				this.payloadErrors.search = ''
			}
		}, 300),

		sortList() {
			this.$store.dispatch('estEntered', this.payload)
		},

		switchPanelFalse() {
			this.payload.page = ''
			this.isPanelActive = false
			this.$store.dispatch('estEntered', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.dispatch('estEntered', this.payload)
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

		this.$store.dispatch('estEntered', this.payload)
	},
}
</script>
