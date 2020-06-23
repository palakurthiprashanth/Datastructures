## Trees

DS like arrays, linked lkist , Stacks, Queues follow linear data structure but Trees follow hierarchical DS.

Trees can be formed by group of nodes linked together to simulate hiererchy

Trees are Uni-directional.

## Terminology

1. Root Node.
2. Parent Node.
3. Child Node.
4. Leaf Node / External Nodes.
5. Non- leaf Node / Internal Nodes.
6. Path - sequence of edges from source to destination.
7. Ancestor Node - Any precesor [ previous node] in that path
8. Descesant Node - Any succesor [ next nodes] in path from that node to leaf.
9. Sibling Node.
10. Degree - No of Children of a node, Max degree of any node in tree is degree of a tree.
11. Depth - No of edges from root to that node.Depth of root node is 0
12. Height - From bottom , height of tree is height of root node.
13. Level - each step of hierarchy , level of tree = height of tree.

In a tree for n nodes there will be n-1 edges , if we add one more edge it will become cycle, tree will not have cycle.

## Applications

File system, Hierarchy systems.

```
https://awwapp.com/b/ujtvkz9j3reu7/
```

## BST Implementation

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }
}
```

## Insert

```javascript
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
```

## Traversal strategies

1. pre-Order Traversal

In pre-order traversal, the elements are traversed in “root-left-right” order

```javascript
preOrderPrint(currentNode) {
  //if the currentNode IS NOT EQUAL to null
    if (currentNode!==null) {
        //print its value
        console.log(currentNode.val);
        //make recursive call to the left subtree
        this.preOrderPrint(currentNode.leftChild);
         //make recursive call to the right subtree
        this.preOrderPrint(currentNode.rightChild);
    }
  //if the currentNode IS EQUAL to null, then
  //we simply return
}
```

```
Time Complexity
This is a linear-time algorithm, i.e., the time complexity of preOrderPrint() is in O(n) because a total of nn recursive calls occur.
```
