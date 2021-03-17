<script>
import ListEnteredModal from '../../modals/est/list-entered-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	components: {
		'list-entered-modal': ListEnteredModal,
		FlatPickr: VueFlatpickr,
	},

	computed: {
		indivs() {
			const { enteredIndividuals } = this.$store.state.est

			return enteredIndividuals
		},

		pages() {
			const { enteredPages } = this.$store.state.est
			const pages = []

			for (let i = 1; i < Math.ceil(enteredPages / 6) + 1; i++) {
				pages.push(i)
			}

			return pages
		},
	},

	data() {
		return {
			listOfIndiv: [],
			betweenTime: true,
			byDetails: false,
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

			isPanelActive: false,

			payload: {
				page: '',
				start: null,
				end: null,
				order: '',
				startDate: null,
				search: '',
				endDate: null,
			},

			formError: {
				search: 'No Results found',
			},

			timeConfig: {
				enableTime: true,
				noCalendar: true,
				dateFormat: 'H:i',
				disableMobile: true,
				time_24hr: true,
			},
		}
	},

	methods: {
		btwnRanges() {
			if (
				this.payload.startDate ||
				this.payload.endDate ||
				this.payload.start ||
				this.payload.end
			) {
				this.$store.state.isLoading = true
			}
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		decrementPage: _debounce(function() {
			if (this.payload.page < 1) {
				return true
			} else {
				this.$store.state.isLoading = true
				this.payload.page--
				this.$store.dispatch('enteredIndividuals', this.payload)
			}
		}, 300),

		filterListDate(payload) {
			this.$store.state.isLoading = true
			this.$store.dispatch('enteredIndividuals', payload)
		},

		gotoPage: _debounce(function(params) {
			this.$store.state.isLoading = true
			this.payload.page = params
			this.$store.dispatch('enteredIndividuals', this.payload)
		}, 300),

		incrementPage: _debounce(function() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				this.$store.state.isLoading = true
				this.$store.dispatch('enteredIndividuals', this.payload)
			}
		}, 300),

		openModal(batch) {
			this.$store.state.isLoading = true
			return this.$store.dispatch('enteredIndivCompanions', batch)
		},

		printInfo() {
			if (this.indivs.length === 0) {
				return true
			}
			const list = []

			Object.values(this.indivs).forEach((v) => {
				list.push({
					indiv_name: v.firstname + ' ' + v.lastname,
					emp_name:
						v.presentEmployee.firstname + ' ' + v.presentEmployee.lastname,
					time_entered: v.time_entered,
					date_entered: new Date(v.date_entered).toISOString().split('T')[0],
					batch: v.batch,
				})
			})

			const doc = new jsPdf()
			const { userProfile } = this.$store.state
			doc.page = 1

			function footer() {
				doc.setFont('Times', 'italic')
				doc.text(180, 290, 'page ' + doc.page) //print number bottom right
				doc.page++
				doc.text(90, 290, 'Establishment Print Report')
			}

			const header = function() {
				doc.setTextColor(40)

				doc.setFont('Times', 'bold')
				doc.setFontSize(18)
				doc.text(
					`List of Individuals Report`,
					doc.internal.pageSize.getWidth() / 2,
					10,
					{ align: 'center' }
				)

				doc.setFont('Times', 'italic')
				doc.setFontSize(10)
				doc.text(
					`Printed By: ${userProfile.est_owner}`,
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
					{ header: 'Individual Name', dataKey: 'indiv_name' },
					{ header: 'Present Employee', dataKey: 'emp_name' },
					{ header: 'Date Entered', dataKey: 'date_entered' },
					{ header: 'Time Entered', dataKey: 'time_entered' },
				],
				margin: { top: 20 },
				didDrawPage: header,
			})
			doc.save(`${userProfile.name.toLowerCase()}-ListofIndividuals.pdf`)
		},

		resetDispatch() {
			this.$store.state.isLoading = true
			Object.keys(this.payload).forEach((el) => {
				if (el.page && !this.isPanelActive) {
					this.payload[el] = ''
				} else if (el.page && this.isPanelActive) {
					this.payload[el] = 0
				} else {
					this.payload[el] = ''
				}
			})

			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		searchList: _debounce(function() {
			this.$store.state.isLoading = true
			this.$store.dispatch('enteredIndividuals', this.payload)
		}, 300),

		sortList() {
			this.$store.state.isLoading = true
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		switchPanelFalse() {
			this.payload.page = ''
			this.isPanelActive = false
			this.$store.state.isLoading = true
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.state.isLoading = true
			this.$store.dispatch('enteredIndividuals', this.payload)
			this.isPanelActive = true
		},
	},

	mounted() {
		this.$store.state.isLoading = true
		this.$store.dispatch('enteredIndividuals', this.payload)
	},
}
</script>
