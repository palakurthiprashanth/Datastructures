class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    if (this.items.length == 0) return null;
    return this.top;
  }

  isEmpty() {
    return this.items.length == 0;
  }

  size() {
    return this.items.length;
  }

  push(element) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length != 0) {
      if (this.items.length == 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else return null;
  }
}
class minStack {
  constructor() {
    this.minimumstack = new Stack();
    this.mainstack = new Stack();
  }
  pop() {
    this.minimumstack.pop();
    return this.mainstack.pop();
  }
  push(value) {
    this.mainstack.push(value);
    if (this.minimumstack.isEmpty()) {
      this.minimumstack.push(value);
      return;
    }
    if (value < this.minimumstack.getTop()) {
      this.minimumstack.push(value);
    } else {
      this.minimumstack.push(this.minimumstack.getTop());
    }
  }
  min() {
    return this.minimumstack.getTop();
  }
}

var stack = new minStack();
stack.push(5);
stack.push(2);
stack.push(4);
stack.push(1);
stack.push(3);
stack.push(9);

console.log("minimum value: ", stack.min());
