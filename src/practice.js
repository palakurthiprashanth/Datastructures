class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  getFront() {
    if (this.items.length === 0) {
      return null;
    }
    return this.items[0];
  }
}

var myQueue = new Queue();
//alert("created");
console.log("You have successfully created a Queue of size: " + myQueue.size());
console.log("Is queue empty()?: " + myQueue.isEmpty());
console.log("getFront(): " + myQueue.getFront());
