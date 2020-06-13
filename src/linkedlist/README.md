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
```

</p>
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
  while (currentNode.nextElement != null) {
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

<details><summary>Search a value in lined list</summary>
<p>

```
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

### Lined lists VS Arrays

There are few differences between arrays and linked lists

Time complexity for linked lists for insertion , deletion is
O(1) for arrays it is O(n)

| operation        | Linked list           | array         |
| ---------------- | --------------------- | ------------- |
| Access           | O(n) // coz raversing | O(1) - direct |
| Insert (at head) | O(1) - direct         | O(n)          |
| Delete(Head)     | O(1)                  | O(n)          |
| Insert(tail)     | O(n)                  | O(1)          |
| Delete (tail)    | O(n)                  | O(1)          |
|                  |                       |               |
