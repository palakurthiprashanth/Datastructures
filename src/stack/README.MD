### stacks
Stacks follow Last-in-first-out
UNDO operation is classic example for it.

## functionalities of stack
push(element) - Pushes element to top of stack.

pop()  - removes element form top of stack.

isEmpty() - returns Boolean 1 if it is empty.

getTop() - returns element added recently.

## Implementation
Stacks can be implemented with arrays or Linked lists
both have their own advanages and dis-advantages.
Here we will see with arrays.

## creating stack
stack has all the methods like above and stack class has
all items , and top element

```
class stack {
  constructor() {
    this.items = [];
    this.top = null;
  }
}

var myStack = new stack();
console.log("You have successfully created a Stack.");

```

## Implementing isEmpty() , getTop(), size

```
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
```