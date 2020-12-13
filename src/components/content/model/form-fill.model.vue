<script>
import VueFlatpickr from 'vue-flatpickr-component'
import 'flatpickr/dist/flatpickr.css'
export default {
	components: {
		FlatPickr: VueFlatpickr,
	},
	data() {
		return {
			date: null,
			// https://chmln.github.io/flatpickr/options/
			config: {
				altFormat: 'F j, Y',
				altInput: true,
			},
		}
	},
}
</script>
