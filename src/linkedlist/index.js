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
  printList() {
    console.log(this.head);
  }
}

let list = new LinkedList();
for (var i = 0; i < 5; i++) {
  list.insertAtHead(i);
}
list.printList();
//list.deleteVal(3);
//list.deleteAtTail();
//list.printList();
//list.search(4);
list.length();
