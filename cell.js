class cell {
	constructor() {
		this.items = [];
		this.action;
	}
	random_items() {
		let count = random(0, 5);
		for (let i = 0; i < count; i++) {
			this.items[i] = random(0, 9);
		}
	}
	pick(item_num) {
		let wait = [];

		this.items[item_num] = 0;
		for (let i = 0; i < this.items.length; i++) {
			if (this.items[i] != 0) wait[wait.length] = this.items[i];
		}
		this.items = wait;
	}
	drop(item) {
		this.items[this.items.length] = item;
	}
}
