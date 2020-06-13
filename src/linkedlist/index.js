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
