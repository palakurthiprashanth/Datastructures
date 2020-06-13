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
