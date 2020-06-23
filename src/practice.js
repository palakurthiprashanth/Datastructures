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
}
