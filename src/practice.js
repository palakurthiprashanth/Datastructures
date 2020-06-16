class stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
  isEmpty() {
    return this.items.length === 0;
  }
  getTop() {
    return this.top;
  }
  push(value) {
    this.items.push(value);
    this.top = value;
  }
  pop() {
    if (this.items.length === 0) {
      return null;
    }
    if (this.items.length === 1) {
      this.top = null;
      return this.items.pop();
    }
    this.top = this.items[this.items.length - 2];
    return this.items.pop();
  }
}

class queue {
  constructor(size) {
    this.tempStack = new stack();
    this.mainStack = new stack();
  }
  enquee(value) {
    this.mainStack.push(value);
  }
  dequeue() {
    if (this.tempStack.isEmpty() && this.mainStack.isEmpty()) {
      return null;
    }
    debugger;
    if (this.tempStack.isEmpty()) {
      while (this.mainStack.isEmpty() === false) {
        this.tempStack.push(this.mainStack.pop());
      }
      return this.tempStack.pop();
    }
    return this.tempStack.pop();
  }
}

var q1 = new queue();
q1.enquee(1);
q1.enquee(2);
q1.enquee(3);
console.log(q1.dequeue());
console.log(q1.dequeue());
console.log(q1.dequeue());
