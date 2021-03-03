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
			const list = []

			Object.values(enteredIndividuals).forEach((v) => {
				list.push({
					indiv_name: v.firstname + ' ' + v.lastname,
					emp_name:
						v.presentEmployee.firstname + ' ' + v.presentEmployee.lastname,
					time_entered: v.time_entered,
					date_entered: v.date_entered,
					batch: v.batch,
				})
			})

			return list
		},

		printIndivs() {
			const { enteredIndividuals } = this.$store.state.est
			const list = []

			Object.values(enteredIndividuals).forEach((v) => {
				list.push({
					indiv_name: v.firstname + ' ' + v.lastname,
					emp_name:
						v.presentEmployee.firstname + ' ' + v.presentEmployee.lastname,
					time_entered: v.time_entered,
					date_entered: new Date(v.date_entered).toISOString().split('T')[0],
					batch: v.batch,
				})
			})

			return list
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
				start: '',
				end: '',
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
				time_24hr: true,
				defaultDate: '00:00',
			},
		}
	},

	methods: {
		btwnRanges() {
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		decrementPage() {
			if (this.payload.page < 1) {
				return true
			} else {
				this.payload.page--
				this.$store.dispatch('enteredIndividuals', this.payload)
			}
		},

		filterListDate(payload) {
			this.$store.dispatch('enteredIndividuals', payload)
		},

		gotoPage(params) {
			this.payload.page = params
			this.$store.dispatch('passengers', this.payload)
		},

		incrementPage() {
			if (this.payload.page === this.pages[this.pages.length - 1] - 1) {
				return true
			} else {
				this.payload.page++
				console.log(this.payload.page)

				this.$store.dispatch('enteredIndividuals', this.payload)
			}
		},

		openModal(batch) {
			return this.$store.dispatch('enteredIndivCompanions', batch)
		},

		printInfo() {
			if (this.indivs.length === 0) {
				return true
			}
			const doc = new jsPdf()
			const { userProfile } = this.$store.state

			const header = function() {
				doc.setFontSize(12)
				doc.setTextColor(40)

				doc.getFont('normal')
				//doc.addImage(headerImgData, 'JPEG', data.settings.margin.left, 20, 50, 50);
				doc.text(
					`Individual List Report \n Printed By: ${
						userProfile.est_owner
					} \n Date Printed: ${new Date().toDateString()}`,
					doc.internal.pageSize.getWidth() / 2,
					7,
					{ align: 'center' }
				)
			}

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: this.printIndivs,
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
			this.$store.dispatch('enteredIndividuals', this.payload)
		}, 300),

		sortList() {
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		switchPanelFalse() {
			this.payload.page = ''
			this.isPanelActive = false
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		switchPanelTrue() {
			this.payload.page = 0
			this.$store.dispatch('enteredIndividuals', this.payload)
			this.isPanelActive = true
		},
	},

	mounted() {
		this.$store.dispatch('enteredIndividuals', this.payload)
	},
}
</script>
