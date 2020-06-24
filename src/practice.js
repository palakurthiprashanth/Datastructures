class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinarySearchTree {
  constructor(rootValue) {
    this.root = rootValue;
  }
  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }
  search(value) {
    var currentNode = this.root;
    while (currentNode !== null && currentNode.val !== value) {
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    return currentNode;
  }
  insert(newValue) {
    if (this.root === null) {
      this.root = newValue;
      return;
    }
    let parent;
    let currentNode = this.root;
    while (currentNode) {
      parent = currentNode;
      if (newValue < currentNode) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    // it has reached last level
    if (newValue < parent.val) {
      parent.leftChild = new Node(newValue);
    } else {
      parent.rightChild = new Node(newValue);
    }
  }
  delete(currentNode, value) {
    if (currentNode === null) {
      return false;
    }

    while (currentNode !== null && currentNode !== value) {
      if (value < currentNode) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }
    //case 2 : currentNode IS EQUAL to null. Value not found!
    if (currentNode === null) {
      return false;
    }
  }
}
