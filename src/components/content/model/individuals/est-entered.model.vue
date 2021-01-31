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
		estList() {
			const { estEntered } = this.$store.state.individual
			return estEntered
		},

		pages() {
			const { estPages } = this.$store.state.individual
			const pages = []

			for (let i = 1; i < Math.ceil(estPages / 6) + 1; i++) {
				pages.push(i)
			}
			return pages
		},
	},

	data() {
		return {
			betweenTime: true,
			byDetails: false,
			timeConfig: {
				enableTime: true,
				noCalendar: true,
				dateFormat: 'H:i',
				time_24hr: true,
				defaultDate: '00:00',
			},

			config: {
				mode: 'range',
			},

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
				start: null,
				end: null,
				order: '',
				search: '',
				startDate: null,
				endDate: null,
			},
		}
	},

	methods: {
		decrementPage() {
			if (this.payload.page < 1) {
				return true
			}
			this.payload.page--
			this.$store.dispatch('estEntered', this.payload)
		},

		btwnRanges() {
			console.log(this.payload.startDate)
			this.$store.dispatch('estEntered', this.payload)
		},

		incrementPage() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				this.$store.dispatch('estEntered', this.payload)
			}
		},

		openModal(batch) {
			this.$store.dispatch('estEnteredCompanions', batch)
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

			if (!this.isPanelActive) {
				this.$store.dispatch('estEntered')
			} else {
				this.$store.dispatch('estEntered', this.payload)
			}
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
	},

	mounted() {
		this.$store.dispatch('estEntered', this.payload)
	},
}
</script>
