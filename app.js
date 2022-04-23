const Counter = {
	data() {
		return {
			title: 'Список заметок',
			placeholderString: 'Новая заметка',
			notes: [],
			inputValue: '',
		}
	},
	methods: {
			addNewNotes() {
			if (this.inputValue != false) {
				this.notes.push(this.inputValue);
				this.inputValue = '';
			}
		},
		resetListNotes() {
			this.notes.length = 0;
		},
		deleteNote(idx) {
			this.notes.splice(idx, 1);
		}
	},
	computed: {
		doubleCountComputed() {
			console.log('doubleCount');
			return this.notes.length * 2;
		}
	},
	watch: {
		inputValue(value) {
			if(value.length > 25){
				this.inputValue = '';
			}
		}
	}
};
Vue.createApp(Counter).mount('#app');
