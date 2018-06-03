// LIFO - last item added is the first taken out
const Stack = function(maxSize = null) {
	this.storage = {};
	this.maxSize = maxSize || Infinity;
};

Stack.prototype.size = function() {
	return this.storage.length;
};
// time complexity = O(1)

Stack.prototype.push = function(value) {
	if (this.size < this.maxSize) {
		return (this.storage[this.size] = value);
	}
	return "This stack is full, remove items before adding more";
};
// time complexity = O(1)

Stack.prototype.pop = function() {
	if (this.size !== 0) {
		return delete this.storage[this.size - 1];
	}
	return "The stack is empty, please add an item to remove";
};
// time complexity = O(1)

const stack1 = new Stack();
stack1.size();
stack1.push("orange");
stack1.size();
stack1.pop();
