class stack {
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
}

var myStack = new stack();
console.log("You have successfully created a Stack.");
