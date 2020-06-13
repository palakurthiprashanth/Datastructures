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
