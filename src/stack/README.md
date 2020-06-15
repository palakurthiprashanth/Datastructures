### stacks

Stacks follow Last-in-first-out
UNDO operation is classic example for it.

## functionalities of stack

push(element) - Pushes element to top of stack.

pop() - removes element form top of stack.

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

## Full stack implementation using JS array

<details><summary>Stack</summary>
<p>

```javascript
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

var myStack = new stack();
console.log("You have successfully created a Stack.");

for (var i = 0; i < 5; i++) {
  myStack.push(i);
}
console.log("Is stack empty? " + myStack.isEmpty());
console.log("top: " + myStack.getTop());

for (var i = 0; i < 5; i++) {
  console.log("Element poped" + myStack.pop());
  console.log("top :" + myStack.getTop());
}
```

| Operation | Time Complexity |
| --------- | --------------- |
| isEmpty   | O(1)            |
| top       | O(1)            |
| size      | O(1)            |
| push      | O(1)            |
| pop       | O(1)            |
|           |                 |

</p>

</details>

## Queue

Similar to stack Queue stores elements in sequential manner.
Stack uses LIFO but
Queue uses FIFO principle

think as pipe with both ends open
one enters first from `back`
leaves first from `front`

## when do we generally use queue ?

1. when we need to prioritize any task
2. A resource is shared between multiple devices

## How do Queue works ?

It has following functionalities

| Function         | What does it do?                 |
| ---------------- | -------------------------------- |
| enqueue(element) | inserts at end of queue          |
| dequeue()        | removes form start of queue      |
| getFront()       | returns first element from queue |
| isEmpty()        | checks if the queue is empty     |
| size()           | returns the size of the queue    |
|                  |                                  |

## Types of queue

1. Linear queue
2. Circular queue
3. PRIORITY Queue

Linear queue - till now we have seen linear queue

## circular queue

circular in nature which means both are connected to form circle.
circular queues are used in

1. simulation of objects.
2. Event handling (do something when a particular event occurs).

## priority queue

In this all elements will have priorities associated with it.
Least prioritized element will be at end of list.
It is mostly used in Operating systems for which
process to execute.

## Implementation of Queue

Queue can be implemened by arrays, linkedlists, stacks ,but most common is arrays as it is simple. It has above methods

## Queue class

It has items which is elements in queus and relevent methods.

```
class Queue {
  constructor() {
    this.items = [];
  }
}

var myQueue = new Queue();
//alert("created");
```
