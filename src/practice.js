class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.items.length === 0) return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else return null;
  }
}

class Queue {
  constructor() {
    this.items = [];
    this.front = null;
    this.back = null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.items.length !== 0) {
      return this.items[0];
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items.shift();
    }
  }
}
function reverseK(queue, k) {
  if (queue.isEmpty() == false) {
    let myStack = new Stack();
    var count = 0;
    while (count < k) {
      myStack.push(queue.dequeue());
      count++;
    }

    while (myStack.isEmpty() === false) {
      queue.enqueue(myStack.pop());
    }

    for (var i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  }

  return queue;
}
var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
//console.log(queue);
reverseK(queue, 5);
console.log(queue);
