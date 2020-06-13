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
//alert(list.isEmpty());
