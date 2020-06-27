class Node {
  constructor(value) {
    this.val = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  insert(currentNode, newValue) {
    if (currentNode === null) {
      currentNode = new Node(newValue);
    } else if (newValue < currentNode.val) {
      currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
    } else {
      currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
    }
    return currentNode;
  }

  insertBST(newValue) {
    if (this.root == null) {
      this.root = new Node(newValue);
      return;
    }
    this.insert(this.root, newValue);
  }

  preOrderPrint(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.val);
      this.preOrderPrint(currentNode.leftChild);
      this.preOrderPrint(currentNode.rightChild);
    }
  }

  inOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.inOrderPrint(currentNode.leftChild);
      console.log(currentNode.val);
      this.inOrderPrint(currentNode.rightChild);
    }
  }
  postOrderPrint(currentNode) {
    if (currentNode !== null) {
      this.postOrderPrint(currentNode.leftChild);
      this.postOrderPrint(currentNode.rightChild);
      console.log(currentNode.val);
    }
  }
  search(currentNode, value) {
    if (currentNode !== null) {
      if (value === currentNode.val) {
        return currentNode;
      } else if (value < currentNode.val) {
        console.log(currentNode.leftChild);
        return this.search(currentNode.leftChild, value);
      } else {
        console.log(currentNode.rightChild);
        return this.search(currentNode.rightChild, value);
      }
    } else {
      return null;
    }
  }

  searchBST(value) {
    return this.search(this.root, value);
  }
  delete(currentNode, value) {
    if (currentNode == null) {
      return false;
    }

    var parentNode;
    while (currentNode && currentNode.val !== value) {
      parentNode = currentNode;
      if (value < currentNode.val) {
        currentNode = currentNode.leftChild;
      } else {
        currentNode = currentNode.rightChild;
      }
    }

    if (currentNode === null) {
      return false;
    } else if (
      currentNode.leftChild == null &&
      currentNode.rightChild == null
    ) {
      if (currentNode.val === this.root.val) {
        this.root = null;
        return true;
      } else if (currentNode.val < parentNode.val) {
        parentNode.leftChild = null;
        return true;
      } else {
        parentNode.rightChild = null;
        return true;
      }
    } else if (currentNode.rightChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = currentNode.leftChild;
        return true;
      } else if (currentNode.leftChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.leftChild;
        return true;
      } else {
        parentNode.rightChild = currentNode.leftChild;
        return true;
      }
    } else if (currentNode.leftChild == null) {
      if (currentNode.val === this.root.val) {
        this.root = currentNode.rightChild;
        return true;
      } else if (currentNode.rightChild.val < parentNode.val) {
        parentNode.leftChild = currentNode.rightChild;
        return true;
      } else {
        parentNode.rightChild = currentNode.rightChild;
        return true;
      }
    } else {
      var minRight = currentNode.rightChild;
      while (minRight.leftChild !== null) {
        minRight = minRight.leftChild;
      }
      var temp = minRight.val;
      this.delete(this.root, minRight.val);
      currentNode.val = temp;
      return true;
    }
  }
}

function findHeight(rootNode) {
  if (rootNode === null)
    // no node in BST
    return 0;
  else if (rootNode.leftChild === null && rootNode.rightChild === null)
    //Base case, leaf nodes have 0 height
    return 0;
  else {
    //Find Height of left subtree and then right subtree
    //Return greater height value of left or right subtree (plus 1)
    var leftHeight = findHeight(rootNode.leftChild);
    var rightHeight = findHeight(rootNode.rightChild);
    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  }
}

var BST = new BinarySearchTree(6);
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(7);
BST.insertBST(12);
console.log(findHeight(BST.root));
