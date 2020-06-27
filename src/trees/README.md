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

## In-Order Traversal

In in-order traversal, the elements are traversed in “left-root-right” order
It is like ascending order.

```javascript
inOrderprint(currentNode) {
  //if the currentNode IS NOT EQUAL to null
    if (currentNode!==null) {

        //make recursive call to the left subtree
        this.inOrderPrint(currentNode.leftChild);
       //print the value of the currentNode
        console.log(currentNode.val);
         //make recursive call to the right subtree
        this.inOrderPrint(currentNode.rightChild);
    }
  //if the currentNode IS EQUAL to null, then
  //we simply return
}
```

## Post order Traversal.

1. In the post-order traversal, the current node will be visited after its children nodes. Therefore, it is called the post-order traversal.
2. The root of the tree will always be the last one to be visited.

3.In post-order traversal, the elements are traversed in “left-right-root” order

```javascript
postOrderPrint(currentNode) {
  //if the currentNode IS NOT EQUAL to null
    if (currentNode!==null) {
        //make recursive call to the left subtree
        this.postOrderPrint(currentNode.leftChild);
         //make recursive call to the right subtree
        this.postOrderPrint(currentNode.rightChild);
        //print its value
        console.log(currentNode.val);
    }
  //if the currentNode IS EQUAL to null, then
  //we simply return from the function
}
```

## Iterative Search Implementation

```javascript
search(value) {
    //let's start with the root
    var currentNode = this.root;
    while (currentNode && (currentNode.val != value)) {
      //the loop will run until the currentNode IS NOT null
        //and until we get to our value
        if (value < currentNode.val) {
            //traverse to the left subtree
            currentNode = currentNode.leftChild;
        } else { //traverse to the right subtree
            currentNode = currentNode.rightChild;

        }

    }
    //after the loop, we'll have either the searched value
    //or null in case the value was not found
    return currentNode;
}
```

## Binary tree deletion

1. Deleting empty tree

```javascript
delete(currentNode, value) {
    if (currentNode === null) {
      return false;
    }
  }
```

2. Value not found

```javascript
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
```

3. Deleting leaf node

```javascript
delete(currentNode, value) {
    //case 1: checking for the empty tree
    // if rootNode equals Null
    if (currentNode == null) {
        return false;
    }
    //start traversng the tree
    //until we find the value to be deleted
    //or end up with a null node
    var parentNode;
    while (currentNode && (currentNode.val != value)) {

        parentNode = currentNode;
        //saving the previous node as parentNode before the currentNode is updated
        if (value < currentNode.val) {

            currentNode = currentNode.leftChild;
        } else {
            currentNode = currentNode.rightChild;

        }

    }
    //case 2 : currentNode IS EQUAL to null. Value not found!
    if (currentNode === null) {
        return false;
    } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
        //case 3: currentNode is a leaf node
        //i.e. right and left EQUAL to null

        //now checking if the node to be deleted
        //is a left or a right child of its parent or if it's the root
        if(currentNode.val==this.root.val){
            this.root=null;
            return true;
        }
        else if (currentNode.val < parentNode.val) {
            parentNode.leftChild = null;
            return true;
        } else {
            parentNode.rightChild = null;
            return true;
        }
    }
}
```

4.Deleting a Node with a Left Child Only / Right child only

```javascript
delete(currentNode, value){
    //case 1: checking for the empty tree
    // if rootNode equals Null
    if (currentNode == null) {
        return false;
    }
    //start traversing the tree
    //until we find the value to be deleted
    //or end up with a null node
    var parentNode;
    while (currentNode && (currentNode.val != value)) {

        parentNode = currentNode;
        //saving the previous node as parentNode before the currentNode is updated
        if (value < currentNode.val) {

            currentNode = currentNode.leftChild;
        } else {
            currentNode = currentNode.rightChild;

        }

    }
    //case 2 : currentNode IS EQUAL to null. Value not found!
    if (currentNode === null) {
        return false;
    } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
        //case 3: currentNode is a leaf node
        //i.e. right and left EQUAL to null
        //now checking if the node to be deleted
        //is a left or a right child of its parent
        if(currentNode.val==this.root.val){
            this.root = null;
            return true;
        }
        else if (currentNode.val < parentNode.val) {
            parentNode.leftChild = null;
            return true;
        } else {
            parentNode.rightChild = null;
            return true;
        }
    } else if (currentNode.rightChild == null) {
        //if the node to be deleted has a left child only
        //we'll link the left child to the parent of
        //the node to be deleted
        if(currentNode.val==this.root.val){
            this.root = currentNode.leftChild;
            return true;
        }
        else if (currentNode.leftChild.val < parentNode.val) {
            parentNode.leftChild = currentNode.leftChild;
            return true;
        } else {
            parentNode.rightChild = currentNode.leftChild;
            return true;
        }

    } else if (currentNode.leftChild = null) {
        //if the node to be deleted has a right child only
        //we'll link the right child to the parent of
        //the node to be deleted
        if(currentNode.val==this.root.val){
            this.root = currentNode.rightChild;
            return true;
        }
        else if (currentNode.rightChild.val < parentNode.val) {
            parentNode.leftChild = currentNode.rightChild;
            return true;
        } else {
            parentNode.rightChild = currentNode.rightChild;
            return true;
        }
    }
}
```

5. Deleting a Node with Two Children
   Here either we replace its value with smallest node in right sub tree.

   ```javascript
     delete(currentNode, value) {
        //case 1: checking for the empty tree
        // if rootNode equals Null
        if (currentNode == null) {
            return false;
        }
        //start traversing the tree
        //until we find the value to be deleted
        //or end up with a null node
        var parentNode;
        while (currentNode && (currentNode.val != value)) {

            parentNode = currentNode;
            //saving the previous node as parentNode before the currentNode is updated
            if (value < currentNode.val) {

                currentNode = currentNode.leftChild;
            } else {
                currentNode = currentNode.rightChild;

            }

        }
        //case 2 : currentNode IS EQUAL to null. Value not found!
        if (currentNode === null) {
            return false;
        } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
            //case 3: currentNode is a leaf node
            //i.e. right and left EQUAL to null
            //now checking if the node to be deleted
            //is a left or a right child of its parent
            if(currentNode.val==this.root.val){
                this.root=null;
                return true;
            }
            else if (currentNode.val < parentNode.val) {
                parentNode.leftChild = null;
                return true;
            } else {
                parentNode.rightChild = null;
                return true;
            }
        } else if (currentNode.rightChild == null) {
            //if the node to be deleted has a left child only
            //we'll link the left child to the parent of
            //the node to be deleted
            if(currentNode.val==this.root.val){
                this.root=currentNode.leftChild;
                return true;
            }else if (currentNode.leftChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.leftChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.leftChild;
                return true;
            }

        } else if (currentNode.leftChild == null) {
            //if the node to be deleted has a right child only
            //we'll link the right child to the parent of
            //the node to be deleted
            if(currentNode.val==this.root.val){
                this.root = currentNode.rightChild;
                return true;
            }else if (currentNode.rightChild.val < parentNode.val) {
                parentNode.leftChild = currentNode.rightChild;
                return true;
            } else {
                parentNode.rightChild = currentNode.rightChild;
                return true;
            }
        } else { //case where the node to be deleted has 2 children
            //starting point for the right sub tree
            var minRight = currentNode.rightChild;
            //traverse to find the left most node in the right subtree
            while (minRight.leftChild !== null) {
                minRight = minRight.leftChild;
            }
            var temp=minRight.val;
            //delete the left most node in the right subtree
            //by calling in the same delete function
            //to cater for whether it has children or not
            this.delete(this.root, minRight.val);
             //replace the currentNode with left most node in the right subtree
            currentNode.val = temp;
   ```


            return true;
        }
    }

````

The whole code of the BST has been put together.
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
     if(this.root==null){
         this.root=new Node(newValue);
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
         if (value == currentNode.val) {

             return currentNode;
         } else if (value < currentNode.val) {
             return this.search(currentNode.leftChild, value)
         } else {
             return this.search(currentNode.rightChild, value)
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
     while (currentNode && (currentNode.val != value)) {

         parentNode = currentNode;
         if (value < currentNode.val) {

             currentNode = currentNode.leftChild;
         } else {
             currentNode = currentNode.rightChild;

         }

     }

     if (currentNode === null) {
         return false;
     } else if (currentNode.leftChild == null && currentNode.rightChild == null) {
         if(currentNode.val==this.root.val){
             this.root=null;
             return true;
         }
         else if (currentNode.val < parentNode.val) {
             parentNode.leftChild = null;
             return true;
         } else {
             parentNode.rightChild = null;
             return true;
         }
     } else if (currentNode.rightChild == null) {
         if(currentNode.val==this.root.val){
             this.root=currentNode.leftChild;
             return true;
         }
         else if (currentNode.leftChild.val < parentNode.val) {
             parentNode.leftChild = currentNode.leftChild;
             return true;
         } else {
             parentNode.rightChild = currentNode.leftChild;
             return true;
         }

     } else if (currentNode.leftChild == null) {
         if(currentNode.val==this.root.val){
             this.root = currentNode.rightChild;
             return true;
         }
         else if (currentNode.rightChild.val < parentNode.val) {
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
         var temp=minRight.val;
         this.delete(this.root, minRight.val);
         currentNode.val = temp;
         return true;
     }
 }

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(3);
BST.insertBST(1);

BST.inOrderPrint(BST.root);
console.log("Delete 9!")
console.log(BST.delete(BST.root, 9));
BST.inOrderPrint(BST.root);
````

## RED-Black tree

DS is way of organizing data so we can perform operations in less time..
It is subset of binary search tree.

In BST searching takes place av of logn

Search in BST takes less time as if value is less then we can search in left subset of tree so we are skipping right section of tree. so no need to compare with all elements.Time complexity is based on height and time complexity of height is logn so BST searching is O(logn).

RED-Black tree is self balancing tree , AVL is also self balancing also time complexity is o(logn)

AVL tree, if tree is very large then it might take many rotations to balance.

Red black tree takes max of 2 rotations or re coloring required.

AVL trees are more balanced of red black tree.

So for searching AVL is better , for insertion , deletion is faster in RED-Black as it requires few rotations.

## properties

1 .Root node should be black

2 . if parent is red , childs should be black

3. Cout of blacks from any node to its NULL
   should be same

## RULES

1. if tree is empty create node with color black as root

   2 . if tree is not empty , then create a node as leaf with
   color RED

   3.if parent of new node is black then insertion is done

   4.If parent of new node is RED , then check color of parent's sibbling
   of new node

   a. if parents' sibbling is black or NULLthen do suitable rotation & recolour

   b. if parent's sibbling is RED then change the color of parent and parents
   sibling and also check if parents parent is not root node then recolor
   and recheck it.

## challenges

<details><summary>Find min value in BST
</summary>
<p>

```javascript
findMin(currentNode) {
  if (currentNode === null) {
    return false;
  }
  while(currentNode!==null) {
    currentNode = currentNode.leftChild;
  }
  return currentNode.val;
}
```

```
The time complexity of this solution is O(h) , if it is skewed tree then time complexity is O(n)
```

</p>

</details>

<details><summary>Find kth Maximum Value in BST
</summary>
<p>

```
inOrderTraversal gives values in ascending order, get values from last.
```

```javascript
function findKthMax(rootNode, k) {
  var tree = [];
  tree = inOrderTraverse(rootNode, tree);
  console.log(tree);
  if (tree.length - k >= 0 && k > 0) {
    return tree[tree.length - k];
  }
  return null;
}
function inOrderTraverse(rootNode, tree) {
  var temp;
  if (rootNode !== null) {
    temp = inOrderTraverse(rootNode.leftChild, tree);
    tree.push(rootNode.val);
    temp = inOrderTraverse(rootNode.rightChild, tree);
  }
  return tree;
}
var BST = new BinarySearchTree(6);
BST.insertBST(1);
BST.insertBST(133);
BST.insertBST(12);
console.log(findKthMax(BST.root, 3)); //6
```

```
Time complexity is O(n);
```

</p>

</details>

<details><summary>Find kth Maximum Value in BST [ reverse order traversal ]
</summary>
<p>

```javascript
```

```

```

</p>

</details>

<details><summary>Find Ancestors of a Given Node in a BST
</summary>
<p>

```javascript
function findAncestors(currentNode, value) {
  if (currentNode === null) {
    return false;
  }
  var res = [];
  while (currentNode !== null) {
    if (currentNode.val === value) {
      console.log(res);
      return true;
    }
    res.push(currentNode.val);
    if (value < currentNode.val) {
      currentNode = currentNode.leftChild;
    } else {
      currentNode = currentNode.rightChild;
    }
  }
}
var BST = new BinarySearchTree(6);
BST.insertBST(1);
BST.insertBST(133);
BST.insertBST(12);
findAncestors(BST.root, 12); //  6,133
```

```
Time complexity is O(n)
```

</p>

</details>

<details><summary>Find Height of BST
</summary>
<p>

```javascript
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
```

```
Time complexity is O(n)
```

</p>

</details>
