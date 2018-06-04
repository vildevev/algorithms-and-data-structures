// FIFO - first item added is the first taken out
class Queue {
	constructor(maxSize = null) {
		this.storage = {};
		this.maxSize = maxSize || Infinity;
		this.length = 0;
	}

	get size() {
		return this.length;
	} // runtime = O(1)

	push(value) {
		if(this.size )
	}
}
