<script>
import ListEnteredModal from '../../modals/est/list-entered-modal'
import _debounce from 'lodash.debounce'
import jsPdf from 'jspdf'
import 'jspdf-autotable'
export default {
	components: { 'list-entered-modal': ListEnteredModal },

	computed: {
		listIndiv() {
			const { enteredIndividuals } = this.$store.state.est
			return enteredIndividuals
		},

		pages() {
			const { enteredPages } = this.$store.state.est
			const pages = []

			for (let i = 1; i < Math.ceil(enteredPages / 6); i++) {
				pages.push(i)
			}

			return pages
		},

		dates() {
			const { enteredDates } = this.$store.state.est
			return enteredDates.filter(
				(value, index) => enteredDates.indexOf(value) === index
			)
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

			payload: {
				page: 0,
				start: '',
				end: '',
				order: '',
				startDate: '',
				search: '',
				filterDay: '',
				filterMonth: '',
				filterYear: '',
			},

			formErrors: {
				search: 'No Results found',
				general: '',
			},
		}
	},

	methods: {
		btwnTime(payload) {
			const splitStart = payload.start.split(':')
			const splitEnd = payload.end.split(':')

			this.formErrors.general = ''
			if (parseInt(splitStart[0]) > parseInt(splitEnd[0])) {
				this.formErrors.general =
					'The start time must be less than the end time'
			} else {
				this.formErrors.general = ''
			}

			this.$store.dispatch('enteredIndividuals', payload)
		},

		filterListDate(payload) {
			console.log(payload)

			this.$store.dispatch('enteredIndividuals', payload)
		},

		openModal(batch) {
			return this.$store.dispatch('enteredIndivCompanions', batch)
		},

		printInfo() {
			const doc = new jsPdf()
			const { userProfile } = this.$store.state
			const { enteredIndividuals } = this.$store.state.est
			const printList = []
			Object.values(enteredIndividuals).forEach((el) => {
				printList.push({
					indivname: el.scannedIndiv.firstname + ' ' + el.scannedIndiv.lastname,
					time_entered: el.time_entered,
					date_entered: el.date_entered,
				})
			})

			doc.autoTable({
				columnStyles: { halign: 'center' }, // European countries centered
				body: printList,
				columns: [
					{ header: 'Individual Name', dataKey: 'indivname' },
					{ header: 'Time Entered', dataKey: 'time_entered' },
					{ header: 'Date Entered', dataKey: 'date_entered' },
				],
			})

			doc.save(`${userProfile.name} list-of-individuals.pdf`)
		},

		resetPayload() {
			Object.keys(this.payload).forEach((el) => {
				this.payload[el] = ''
			})
			this.formErrors.general = ''
			this.$store.dispatch('enteredIndividuals', this.payload)
		},

		searchList: _debounce(function(searchParams) {
			this.$store.dispatch('enteredIndividuals', searchParams)
			console.log(this.listIndiv.length)
		}, 300),

		sortList(obj) {
			this.$store.dispatch('enteredIndividuals', obj)
		},

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
			return years.reverse()
		},
	},

	mounted() {
		this.$store.dispatch('enteredIndividuals', this.payload)
	},
}
</script>
