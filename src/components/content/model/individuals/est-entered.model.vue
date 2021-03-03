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

			console.log(estEntered)
			return estEntered
		},

		printEst() {
			const listEst = []
			const { estEntered } = this.$store.state.individual

			for (const est of estEntered) {
				listEst.push({
					name: est.name,
					street: est.street,
					time_entered: est.time_entered,
					date_entered: new Date(est.date_entered).toDateString(),
				})
			}

			return listEst
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

			defImage: 'https://bulma.io/images/placeholders/96x96.png',
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
			this.$store.dispatch('estEntered', this.payload)
		},

		gotoPage(indexofArr) {
			this.payload.page = indexofArr
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
				body: this.printEst,
				columns: [
					{ header: 'Establishment Name', dataKey: 'name' },
					{ header: 'Address Street', dataKey: 'street' },
					{ header: 'Date Entered', dataKey: 'date_entered' },
					{ header: 'Time Entered', dataKey: 'time_entered' },
				],
				margin: { top: 20 },
				didDrawPage: header,
			})
			doc.save(`${userProfile.firstname.toLowerCase()}-EstList.pdf`)
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
				this.$store.dispatch('estEntered')
			} else {
				this.$store.dispatch('estEntered', this.payload)
			}
		},

		searchList: _debounce(function() {
			const { state } = this.$store
			state.isLoading = true

			this.$store.dispatch('estEntered', this.payload)
		}, 300),

		sortList() {
			if (!this.isPanelActive) {
				this.payload.page = ''
			} else {
				this.payload.page = 0
			}

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
