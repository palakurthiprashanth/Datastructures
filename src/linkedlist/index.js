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
  printList() {
    console.log(this.head);
  }
}

//let list = new LinkedList();
/** for (var i = 0; i < 5; i++) {
  list.insertAtHead(i);
}
*/
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
list.printList();
//list.deleteVal(3);
//list.deleteAtTail();
//list.printList();
//list.search(4);
//list.length();
//list.reverse();
list.detectLoop();
