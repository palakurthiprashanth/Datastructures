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

Below is code with helper functions which is straighrforword
`isEmpty` , `size`, `getFront`

```javascript
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
```

`enqueue` - is like inserting to last means push in Arrays

`dequeue` - is like removing from first means shift in
Arrays.

```javascript
 enqueue(element) {
    this.items.push(element);
  }
  dequeue() {
    if (this.items.length === 0) {
      return null;
    }
    this.items.shift();
  }
```

Whole Code

```javascript
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
```

Time complexity of `isEmpty`,`front`,`back`,`size`,`enqueue`,`dequeue` is O(1)

## challenges

<details><summary>Generate Binary Numbers From 1 to n Using Queue
</summary>
<p>

```
pattern is from current number two numbers are creted by appending 0 and 1
1 ,10,11
10,100,101
11,110,111 so on...
```

```
https://www.youtube.com/watch?v=kL9KgvZs4e0
```

```javascript
function findBin(n) {
  let result = [];
  let myQueue = new Queue();
  myQueue.enqueue(1);
  for (var i = 0; i < n; i++) {
    result.push(myQueue.dequeue());
    var s1 = result[i] + "0";
    var s2 = result[i] + "1";
    myQueue.enqueue(s1);
    myQueue.enqueue(s2);
  }
  return result;
}
```

```
The time complexity of this solution is in O(n)O(n)
```

</p>

</details>

<details><summary>Implementing Two Stacks Using One Array
</summary>
<p>

```
maintaing 2 tops in array.
top1 grows from left
top2 grows from right
push1/push2 - we can push till top1<top2-1 //as it is max lengh
pop1 - top1>=0
pop2 - top2 <size
```

```

```

```javascript
class twostacks {
  constructor(s) {
    this.arr = [];
    this.size = s;
    this.top1 = -1;
    this.top2 = s;
  }
  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = value;
    }
  }
  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = value;
    }
  }
  pop1() {
    if (this.top1 >= 0) {
      let value = this.arr[this.top1];
      this.top1--;
      return value;
    } else {
      return -1;
    }
  }
  pop2() {
    if (this.top2 < this.size) {
      let value = this.arr[this.top2];
      this.top2++;
      return value;
    } else {
      return -1;
    }
  }
  print() {
    console.log(this.arr);
  }
}

let mystack = new twostacks(3);
mystack.push1(0);
mystack.push2(2);
mystack.push1(1);
mystack.print(); // 0,1,2
mystack.pop1();
mystack.print();
```

```
All the operations take constant time because the array is being indexed and not resized.
```

</p>

</details>

<details><summary>Reversing First k Elements of Queue
</summary>
<p>

```
https://www.youtube.com/watch?v=VECGnvhkh-s
```

```

```

```javascript
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
```

```
 Time complexity is O(n) as all nn elements have to be processed with constant-time​ operations
```

</p>

</details>

<details><summary>Implement a Queue Using Stacks
</summary>
<p>

```
https://www.youtube.com/watch?v=ma1S6vtkw9I

1. to do this we will maintain 2 stacks,
one for enquee and other for dequee.
for enque push to 1 stack. dequing do it in other stack
if dequing stack is empty then engue the second stacks from 1st stack and do it.
```

```

```

```javascript
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
```

```
Time complexity of the dequeue operation becomes O(n)O(n), while the time complexity for the enqueue operation is O(1).
```

</p>

</details>

<details><summary>Sort Values in Stack
</summary>
<p>

```
https://www.youtube.com/watch?v=b7pEt2vMfnQ&t=654s

This way we are creating temp stack
there is also a way without temp stack

```

```

```

```javascript
function sortStack(stack) {
  //1. Use a second tempStack.
  var tempStack = new Stack();
  var value;
  while (stack.isEmpty() == false) {
    //2. Pop value from mainStack.
    value = stack.pop();
    //3. If the value is greater than or equal to the top of tempStack, then push the value in tempStack
    if (value >= tempStack.getTop()) {
      tempStack.push(value);
    } else {
      // else pop all values from tempStack and push them in mainStack
      while (tempStack.isEmpty() == false) {
        stack.push(tempStack.pop());
      }
      // and in the end push value in tempStack
      tempStack.push(value);
    }
    //4.repeat from step 2 till mainStack is not empty.
  }
  //5. When mainStack will be empty, tempStack will have sorted values in descending order.
  //6. Now transfer values from tempStack to mainStack to make values sorted in ascending order.
  while (tempStack.isEmpty() == false) {
    stack.push(tempStack.pop());
  }
  return stack;
}
```

```
The outer and inner loops both traverse all the n elements of the stack. Hence, the time complexity is O(n2).
```

</p>

</details>

<details><summary>Evaluate Postfix Expression Using a Stack
</summary>
<p>

```
https://www.youtube.com/watch?v=a6YC386fNEA

1.Scan expression character by character,
2.If character is a number push it in stack
3.If character is operator then pop two elements from stack
perform the operation and put the result back in stack
At the end, Stack will contain result of whole expression.

```

```

```

```javascript
function evaluatePostfix(exp) {
  let myStack = new Stack();
  let op1, op2;
  for (var i = 0; i < exp.length; i++) {
    if (!isNaN(parseInt(exp[i], 10))) {
      myStack.push(parseInt(exp[i], 10));
    } else {
      op1 = myStack.pop();
      op2 = myStack.pop();
      if (exp[i] === "+") {
        myStack.push(op2 + op1);
      } else if (exp[i] === "-") {
        myStack.push(op2 - op1);
      } else if (exp[i] === "*") {
        myStack.push(op2 * op1);
      } else if (exp[i] === "/") {
        myStack.push(op2 / op1);
      }
    }
  }
  return myStack.pop();
}
console.log(evaluatePostfix("921*-8-4+"));
```

```
Time complexity is O(n)
```

</p>

</details>

<details><summary>Next Greater Element Using a Stack
</summary>
<p>

```
  The next greater element is the first element towards
  the right, which is greater than the current element. For example, in the array [1, 3, 8, 4, 10, 5],
  the next greater element of 3 is 8, and the next
  greater element for 8 is 10.

  i/p => arr = [4, 6, 3, 2, 8, 1]
  o/p=> {6, 8, 8, 8, -1, -1}
```

```

```

```javascript
```

```
Time complexity is O(n)
```

</p>

</details>

<details><summary>Check Balanced Parentheses Using Stack
</summary>
<p>

```
 Basically checkk for every closing parenthesis there should be opening one
```

```

```

```javascript
function isBalanced(exp) {
  let tempStack = new Stack();
  for (var i = 0; i < exp.length; i++) {
    // for every closing bracket check for open bracke.
    if (exp[i] === "}" || exp[i] === ")" || exp[i] === "]") {
      // stack is empty so no opening braces
      if (tempStack.isEmpty()) {
        return false;
      }
      // if value existis in stack then take that value
      let output = tempStack.pop();
      //  if closing braces doent have opening braces
      if (
        (exp[i] === "}" && output !== "{") ||
        (exp[i] === ")" && output !== "(") ||
        (exp[i] === "]" && output !== "[")
      ) {
        return false;
      }
    } else {
      //if expression is opening brace then push to stack
      tempStack.push(exp[i]);
    }
  }
  // after iteration if there are still open braces in stack then not balanced
  if (tempStack.isEmpty() === false) {
    return false;
  }
  return true;
}
var inputString = "{()}";
console.log(inputString);
console.log(isBalanced(inputString));
```

```
Time complexity is O(n)
```

</p>

</details>

<details><summary>min() Function Using a Stack
</summary>
<p>

```
 1. maintain 2 stacks main ,min
 2. push values to main directly, while to min stack chack f vale is less than top
 of min stack if yes push value else push again the top value
```

```
https://www.youtube.com/watch?v=ufwPuyxkNVE&t=433s

```

```javascript
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
```

```
Time complexity is O(1)
```

</p>

</details>
