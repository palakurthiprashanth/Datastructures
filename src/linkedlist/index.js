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
