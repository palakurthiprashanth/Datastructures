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
  enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    this.items.shift();
  }
}

var myQueue = new Queue();
//alert("created");

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

console.log(myQueue.getFront()); //1
console.log(myQueue.dequeue());
console.log(myQueue.getFront()); //2
