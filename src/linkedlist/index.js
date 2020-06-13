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
  printList() {
    console.log(this.head);
  }
}

let list = new LinkedList();
for (var i = 0; i < 5; i++) {
  list.insertAtHead(i);
}
list.printList();
list.deleteVal(3);
list.printList();
//list.search(4);
