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
function sortStack(stack) {
  let tempStack = new Stack();
  let value;
  while (stack.isEmpty() === false) {
    //tempStack.push(stack.pop());
    value = stack.pop();
    if (value >= tempStack.getTop()) {
      tempStack.push(value);
    } else {
      while (tempStack.isEmpty() === false) {
        stack.push(tempStack.pop());
      }
      tempStack.push(value);
    }
  }
  while (tempStack.isEmpty() === false) {
    stack.push(tempStack.pop());
  }
  console.log(stack);
  return stack;
}

var mystack = new Stack();
mystack.push(1);
mystack.push(10);
mystack.push(5);
mystack.push(7);
mystack.push(2);
sortStack(mystack);
