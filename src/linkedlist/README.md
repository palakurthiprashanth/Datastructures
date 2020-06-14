### Linked list

linked list a group of nodes linked together to form a chain
Each node has a

1. data
2. pointer to next load
   if node doesnt have pointer to previous node it is
   uni-directional lined list

Linked list has 2 classes

1. Node class which has data and pointer

```
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
```

2. Linked list class , it has all the nodes together
   to keep track of list we add head node which means
   it is start and it doent have data.

```
class LinkedList {
 constructor(){
   // head will be at the top of the list
   this.head = null;
  }
}
```

Operations of Linked list

insertAtTail(data) - inserts an element at the end of the linked list

insertAtHead(data) - inserts an element at the start/head of the linked list

delete(data) - deletes an element with your specified value from the linked list

deleteAtHead() - deletes the first element of the list
search(data) - searches for an element in the linked list

isEmpty() - returns true if the linked list is empty

```
### is Empty

class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.isEmpty = function() {
  return this.head === null;
};

var list = new LinkedList();
alert(list.isEmpty());

```

### Insertion

1. Insertion at head
2. insertion at tail
3. insertion at nth index

### Insertion at head

New element will be inserted as first element.
Head will point to newly added element and `nextElemet`
will point to previous element which is pointed to
Head or null

### Insertion at tail

New element will add to end.
nextElement of newly added element is pointed to Null
so it is tail node.

### Insertion at nth node

New node will be inserted at specified index.

1.We traverse the linked list to look for the nth node.

2. As soon as we find it, we assign the new node’s
   nextElement to the nth node’s nextElement.

3.Then we point nth node’s nextElement to the new node.

<details><summary>Insert At Head</summary>
<p>

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    return this.head === null;
  }
  insertAtHead(newData) {
    const tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }
  printList() {
    console.log(this.head);
  }
}

const list = new LinkedList();
for (var i = 0; i < 9; i++) {
  list.insertAtHead(i);
}
list.printList();
```

```
insertAtHead(newData) {
  // create new node with new data
    const tempNode = new Node(newData);
 // attach nextelement property to current head
    tempNode.nextElement = this.head;
 // attach newly created head to temp node
    this.head = tempNode;
    return this;
  }
  </p>
```


```
Time complexity
At every instance, we point the head Node to a new
Node. Therefore, the time complexity for insertion at
head is O(1).
```
</details>

<details><summary>Insert At Tail</summary>
<p>

```
Reference :
https://www.youtube.com/watch?v=IILYDOd_KGs
```

```javascript
LinkedList.prototype.insertAtTail = function(newData) {
  //Creating a new Node with data as newData
  let node = new Node(newData);

  //check for case when list is empty
  if (this.isEmpty()) {
    //Needs to Insert the new node at Head
    this.head = node;
    return this;
  }

  //Start from head
  let currentNode = this.head;

  //Iterate to the last element
  while (currentNode.nextElement != null) { // chec if last element has next element
    currentNode = currentNode.nextElement;
  }

  //Make new node the nextElement of last node of list
  currentNode.nextElement = node;
  return this;
};
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>Search a value in linked list</summary>
<p>

```
I/p - A linked list and an integer to be searched.
O/p - true if the integer is found. false otherwise.
Only way is to loop like arrays
```

```javascript
search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true; // found
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }
```

```
Time complexity
O(n)
```

</p>

</details>

### Deleting in lined list

It uses the search functionality , it searches in the
linked list and just deletes it.

3 ways we can delete in lined list.

1. Deletion at head.
2. Deletion at Tail.
3. Deletion by value.

<details><summary>Deletion at head</summary>
<p>

```
It is just simple, link head to first element so zeroth
element will be removed :)
```

```javascript
deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }
    let currentNode = this.head;
    this.head = currentNode.nextElement;
    return this;
  }
```

```
Time complexity
O(1)
```

</p>
</details>

<details><summary>Deletion by value</summary>
<p>

```
loop to list .
while you are at current index , compare value with
nextElement data , if same then link currentItem next
element to currentNode.nextElement.nextElement.
```

```javascript
deleteVal(value) {
    if (this.isEmpty()) {
      return;
    }
    let currentNode = this.head;
    if (currentNode.data === value) {
      this.head = currentNode.nextElement;
      return true;
    }
    while (currentNode.nextElement !== null) {
      if (currentNode.nextElement.data === value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return this;
  }
```

```
Time complexity
O(1)
```

</p>

</details>

<details><summary>Deletion Tail</summary>
<p>

```
We just need to reach the second last node and update its
nextElement.
```

```javascript
deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }
    let firstNode = this.head;
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    //otherwise traverse to reach second last node
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
    firstNode.nextElement = null;
    return this;
  }
```

```
Time complexity
O(n)
```

</p>

</details>

### Linked lists VS Arrays

There are few differences between arrays and linked lists

Time complexity for linked lists for insertion , deletion is
O(1) for arrays it is O(n)

| operation        | Linked list            | array         |
| ---------------- | ---------------------- | ------------- |
| Access           | O(n) // coz traversing | O(1) - direct |
| Insert (at head) | O(1) - direct          | O(n)          |
| Delete(Head)     | O(1)                   | O(n)          |
| Insert(tail)     | O(n)                   | O(1)          |
| Delete (tail)    | O(n)                   | O(1)          |
|                  |                        |               |

<details><summary>Length of linked list</summary>
<p>

```javascript
length() {
    let currentNode = this.head;
    var size = 0;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nextElement;
    }
    //alert(size);
    return size;
  }
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>reverse linked list</summary>
<p>

```
It is simple , we just store ref to previous node and next.
in linked list next element points to next element so here
we will make next element point to previous element so it will be
reversed for first element previous node will be null.
and in last change head to first element.
```

```javascript
reverse() {
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode != null) {
      nextNode = currentNode.nextElement;
      currentNode.nextElement = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    console.log(this.head);
  }
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>Detect loop in linked list</summary>
<p>

```
Reference : https://www.youtube.com/watch?v=zbozWoMgKW0
```

```
Floyd’s Cycle-Finding Algorithm

head->1->5->7->3 // doent contain a loop
head->1->5->7>-3->5 // its a loop as 1 is point to 5 and 3 pointing to 5;
basically doesnot end with null
```

```javascript
detectLoop() {
    let onestep = this.head;
    let twostep = this.head;
    while (
      onestep !== null &&
      twostep !== null &&
      twostep.nextElement !== null
    ) {
      onestep = onestep.nextElement;
      twostep = twostep.nextElement.nextElement;
      if (onestep === twostep) {
        console.log("loop");
        return true;
      }
    }
    return false;
  }
```

```javascript
// Adding loop
let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.getHead();
let node = list.getHead();

// Adding a loop
for (var i = 0; i < 4; i++) {
  if (node.nextElement == null) {
    node.nextElement = head.nextElement;
    break;
  }
  node = node.nextElement;
}
```

```
Explanation
Take 2 pointers
while loop -> if any one is null hen there is no loop
incerement one pointer by one step and other by 2 steps.
if both meet then there is loop
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>Detect start</summary>
<p>

```javascript
```

```

```

</p>

</details>

<details><summary>Find Middle Value of a Linked List</summary>
<p>

```javascript
findMid() {
    let midNode = null;
    let length = 0;
    let tempNode = list.getHead();
    while (tempNode != null) {
      tempNode = tempNode.nextElement;
      length++;
    }
    let middle = Math.ceil(length / 2);
    midNode = list.getHead();
    for (var i = 1; i < middle; i++) {
      midNode = midNode.nextElement;
    }
    console.log("middle");
    console.log(midNode);
    return midNode;
  }
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>Find Middle Value of a Linked List 
in faster way
</summary>
<p>

```
Reference : https://www.youtube.com/watch?v=Uk-PkL5WMMY
```

```
In the same iteration we will maintain 2 pointers , 1st pointer will
increment by 1 and 2nd pointer will increment by 2 steps if at any
point if anyone is null then 1st pointer is midddle value.
```

```javascript
findMidFast() {
    let midNode = null;
    //Write your code here
    if (list.isEmpty()) {
      return null;
    }
    let slowerNode = list.getHead();
    let fasterNode = list.getHead();
    if (slowerNode.nextElement == null) {
      return slowerNode;
    }
    while (slowerNode.nextElement != null && fasterNode.nextElement != null) {
      slowerNode = slowerNode.nextElement;
      fasterNode = fasterNode.nextElement.nextElement;
    }
    console.log(slowerNode);
    return slowerNode;
  }
```

```
Time complexity
O(n)
```

</p>

</details>

<details><summary>Remove duplicates in linked list
</summary>
<p>

```javascript
removeDuplicates() {
    if (this.isEmpty()) {
      return null;
    }
    // if list has only 1 item
    if (this.head.nextElement === null) {
      return this.head;
    }
    let outernode = this.head;
    let innernode = this.head;
    while (outernode !== null) {
      while (innernode !== null) {
        // check for duplicate and if found
        if (
          innernode.nextElement !== null &&
          outernode.data === innernode.nextElement.data
        ) {
          // remove duplicate
          innernode.nextElement = innernode.nextElement.nextElement;
        } else {
          innernode = innernode.nextElement;
        }
      }
      outernode = outernode.nextElement;
    }
    console.log("duplicates");
    return this;
  }
```

```
Time complexity
O(n power 2)
```

</p>

</details>

<details><summary>Union of linked list
</summary>
<p>

```javascript
function union(list1, list2) {
  if (list1.isEmpty()) {
    return list2;
  } else if (list2.isEmpty()) {
    return list1;
  }

  let start = list1.getHead();

  //Traverse the first list till the tail
  while (start.nextElement != null) {
    start = start.nextElement;
  }

  //Link last element of first list to the first element of second list
  start.nextElement = list2.getHead();
  list1.removeDuplicates();
  console.log("union");
  console.log(list1);
  return list1;
}
```

```
If we did not have the care of duplicates, the runtime complexity of
this algorithm would be O(m) where m is the size of the first list.
 However, because of duplicates, we need to traverse the whole union
  list. This increases the time complexity to O(m+n)power 2
​
​​  where m is the size of the first list and n is the size of the second list.
```

</p>

</details>

<details><summary>Intersection of linked list
</summary>
<p>

```javascript
```

</p>

</details>

<details><summary>find nth node from last in linked list
</summary>
<p>

```
1. Calculate the length of the linked list
2. Find the position of the node using length - n + 1 (We start from the last node since we can’t start from null)
3. Check if n is within the length
4. Iterate over to the node and return it
```

```javascript
function findNth(list, n) {
  let nthNode = null;
  let length = 0;
  let tempNode = list.getHead();
  while (tempNode != null) {
    tempNode = tempNode.nextElement;
    length++;
  }
  let nthPos = length - n;
  if (nthPos < 0 || nthPos > length) {
    return null;
  }
  nthNode = list.getHead();
  for (var i = 0; i < nthPos; i++) {
    nthNode = nthNode.nextElement;
  }
  return nthNode;
}
```

```
It performs two iterations, so the complexity is O(n).
```

</p>

</details>

<details><summary>whole code
</summary>
<p>

```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  isEmpty() {
    return this.head === null;
  }
  getHead() {
    return this.head;
  }
  insertAtHead(newData) {
    const tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this;
  }
  insertAtTail(newData) {
    const node = new Node(newData);
    if (this.isEmpty) {
      this.head = node;
      return this;
    }
    let tempCurrentNode = this.head;
    while (tempCurrentNode.nextElement !== null) {
      tempCurrentNode = tempCurrentNode.nextElement;
    }
    tempCurrentNode.nextElement = node;
    return this;
  }
  search(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === value) {
        return true; // found
      }
      currentNode = currentNode.nextElement;
    }
    return false;
  }
  deleteAtHead() {
    if (this.isEmpty()) {
      return this;
    }
    let currentNode = this.head;
    this.head = currentNode.nextElement;
    return this;
  }
  deleteVal(value) {
    if (this.isEmpty()) {
      return;
    }
    let currentNode = this.head;
    if (currentNode.data === value) {
      this.head = currentNode.nextElement;
      return true;
    }
    while (currentNode.nextElement !== null) {
      if (currentNode.nextElement.data === value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    return this;
  }
  deleteAtTail() {
    if (this.isEmpty()) {
      return this;
    }
    let firstNode = this.head;
    if (firstNode.nextElement == null) {
      this.deleteAtHead();
      return this;
    }
    //otherwise traverse to reach second last node
    while (firstNode.nextElement.nextElement != null) {
      firstNode = firstNode.nextElement;
    }
    //since you have reached second last node, just update its nextElement pointer to point at null, skipping the last node
    firstNode.nextElement = null;
    return this;
  }
  length() {
    let currentNode = this.head;
    var size = 0;
    while (currentNode !== null) {
      size++;
      currentNode = currentNode.nextElement;
    }
    //alert(size);
    return size;
  }
  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode != null) {
      nextNode = currentNode.nextElement;
      currentNode.nextElement = prevNode;
      prevNode = currentNode;
      currentNode = nextNode;
    }
    this.head = prevNode;
    console.log(this.head);
  }
  detectLoop() {
    let onestep = this.head;
    let twostep = this.head;
    while (
      onestep !== null &&
      twostep !== null &&
      twostep.nextElement !== null
    ) {
      onestep = onestep.nextElement;
      twostep = twostep.nextElement.nextElement;
      if (onestep === twostep) {
        console.log("loop");
        return true;
      }
    }
    return false;
  }
  findMid() {
    let midNode = null;
    let length = 0;
    let tempNode = list.getHead();
    while (tempNode != null) {
      tempNode = tempNode.nextElement;
      length++;
    }
    let middle = Math.ceil(length / 2);
    midNode = list.getHead();
    for (var i = 1; i < middle; i++) {
      midNode = midNode.nextElement;
    }
    console.log("middle");
    console.log(midNode);
    return midNode;
  }
  findMidFast() {
    let midNode = null;
    //Write your code here
    if (list.isEmpty()) {
      return null;
    }
    let slowerNode = list.getHead();
    let fasterNode = list.getHead();
    if (slowerNode.nextElement == null) {
      return slowerNode;
    }
    while (slowerNode.nextElement != null && fasterNode.nextElement != null) {
      slowerNode = slowerNode.nextElement;
      fasterNode = fasterNode.nextElement.nextElement;
    }
    console.log(slowerNode);
    return slowerNode;
  }
  removeDuplicates() {
    if (this.isEmpty()) {
      return null;
    }
    // if list has only 1 item
    if (this.head.nextElement === null) {
      return this.head;
    }
    let outernode = this.head;
    let innernode = this.head;
    while (outernode !== null) {
      while (innernode !== null) {
        // check for duplicate and if found
        if (
          innernode.nextElement !== null &&
          outernode.data === innernode.nextElement.data
        ) {
          // remove duplicate
          innernode.nextElement = innernode.nextElement.nextElement;
        } else {
          innernode = innernode.nextElement;
        }
      }
      outernode = outernode.nextElement;
    }
    console.log("duplicates");
    return this;
  }
  printList() {
    console.log(this.head);
  }
}

let list = new LinkedList();
for (var i = 0; i < 5; i++) {
  list.insertAtHead(i);
}
list.insertAtHead(2);
/** let list = new LinkedList();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

let head = list.getHead();
let node = list.getHead();

// Adding a loop
for (var i = 0; i < 4; i++) {
  if (node.nextElement == null) {
    node.nextElement = head.nextElement;
    break;
  }
  node = node.nextElement;
}
*/
list.printList();
//list.deleteVal(3);
//list.deleteAtTail();
//list.printList();
//list.search(4);
//list.length();
//list.reverse();
//list.detectLoop();
//list.findMid();
//list.findMidFast();
list.removeDuplicates();
function union(list1, list2) {
  if (list1.isEmpty()) {
    return list2;
  } else if (list2.isEmpty()) {
    return list1;
  }

  let start = list1.getHead();

  //Traverse the first list till the tail
  while (start.nextElement != null) {
    start = start.nextElement;
  }

  //Link last element of first list to the first element of second list
  start.nextElement = list2.getHead();
  list1.removeDuplicates();
  console.log("union");
  console.log(list1);
  return list1;
}
function findNth(list, n) {
  let nthNode = null;
  let length = 0;
  let tempNode = list.getHead();
  while (tempNode != null) {
    tempNode = tempNode.nextElement;
    length++;
  }
  let nthPos = length - n;
  if (nthPos < 0 || nthPos > length) {
    return null;
  }
  nthNode = list.getHead();
  for (var i = 0; i < nthPos; i++) {
    nthNode = nthNode.nextElement;
  }
  return nthNode;
}
let l1 = new LinkedList();
l1.insertAtHead(54);
l1.insertAtHead(89);
l1.insertAtHead(11);
l1.insertAtHead(40);
l1.insertAtHead(23);

for (var i = 1; i < 5; i++) {
  console.log(findNth(l1, i).data);
}
console.log(findNth(l1, 100));

let ulist1 = new LinkedList();
let ulist2 = new LinkedList();
ulist1.insertAtHead(8);
ulist1.insertAtHead(22);
ulist1.insertAtHead(15);
ulist1.insertAtHead(22);
ulist1.printList();

ulist2.insertAtHead(21);
ulist2.insertAtHead(14);
ulist2.insertAtHead(21);
ulist2.insertAtHead(8);
ulist2.insertAtHead(7);
ulist2.printList();

union(ulist1, ulist2);
```

</p>

</details>

### Double linked list

```
 since a linked list can only be traversed in one direction, this
 limits us to a great extent. Thus we needlessly have to keep track
 of previous elements.

 The only difference between doubly and singly-linked lists is that
 in DLLs, each node contains pointers for both the previous and the
 next node. This makes the DLLs bi-directional.
```

```javascript
class Node {
  constructor(value) {
    this.data = value; //Stores data
    this.previousElement = null; //Stores pointer to previous element
    this.nextElement = null; //Stores pointer to next element
  }
}
```

```javascript
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
```

```
https://www.educative.io/courses/data-structures-coding-interviews-javascript/gx6lVB0D4xl
```
