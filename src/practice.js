class HashEntry {
  constructor(key, data) {
    this.key = key;
    // data to be stored
    this.value = data;
    // reference to new entry
    this.next = null;
  }
}
class HashTable {
  //Constructor
  constructor() {
    //Size of the HashTable
    this.slots = 10;
    //Current entries in the table
    //Used while resizing the table when half of the table gets filled
    this.size = 0;
    //Array of HashEntry objects (by deafult all null)
    this.bucket = [];
    for (var i = 0; i < this.slots; i++) {
      this.bucket[i] = null;
    }
    this.threshold = 0.6;
  }
  //Helper Functions
  get_size() {
    return this.size;
  }
  //Hash Function
  getIndex(key) {
    let index = key % this.slots;
    return index;
  }
  isEmpty() {
    return this.get_size() === 0;
  }

  insert(key, value) {
    //Find the node with the given key
    let b_Index = this.getIndex(key);
    if (this.bucket[b_Index] == null) {
      this.bucket[b_Index] = new HashEntry(key, value);
      console.log(String(key) + ", " + String(value) + " - inserted.");
    } else {
      let head = this.bucket[b_Index];
      while (head != null) {
        if (head.key === key) {
          head.value = value;
          break;
        } else if (head.next == null) {
          head.next = new HashEntry(key, value);
          console.log(String(key) + ", " + String(value) + " - inserted.");
          break;
        }
        head = head.next;
      }
    }

    this.size += 1;
    let load_factor = Number(this.size) / Number(this.slots);
    //Checks if 60% of the entries in table are filled, threshold = 0.6
    if (load_factor >= this.threshold) {
      this.resize();
    }
  }

  //Return a value for a given key
  search(key) {
    //Find the node with the given key
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    //Search key in the slots
    if (head != null) {
      while (head != null) {
        if (head.key === key) {
          return head.value;
        }
        head = head.next;
      }
    }
    //If key not found
    console.log("Key not found");
    return null;
  }

  //Remove a value based on a key
  deleteVal(key) {
    //Find index
    let b_Index = this.getIndex(key);
    let head = this.bucket[b_Index];
    //If key exists at first slot
    if (head.key === key) {
      this.bucket[b_Index] = head.next;
      console.log("Key deleted");
      this.size -= 1;
      return this;
    }
    //Find the key in slots
    let prev = null;
    while (head != null) {
      //If key exists
      if (head.key === key) {
        prev.next = head.next;
        console.log("Key deleted");
        this.size -= 1;
        return this;
      }
      //Else keep moving in chain
      prev = head;
      head = head.next;
    }
    //If key does not exist
    console.log("Key not found");
    return null;
  }

  resize() {
    let new_slots = this.slots * 2;
    let new_bucket = [];
    for (var n = 0; n < new_slots; n++) {
      new_bucket[n] = null;
    }
    // rehash all items into new slots
    for (var i = 0; i < this.bucket.length; i++) {
      let head = this.bucket[i];
      while (head != null) {
        let new_index = this.getIndex(head.key);
        if (new_bucket[new_index] == null) {
          new_bucket[new_index] = new HashEntry(head.key, head.value);
        } else {
          let node = new_bucket[new_index];
          while (node != null) {
            if (node.key === head.key) {
              node.value = head.value;
              node = null;
            } else if (node.next == null) {
              node.next = new HashEntry(head.key, head.value);
              node = null;
            } else {
              node = node.next;
            }
          }
        }
        head = head.next;
      }
    }
    this.bucket = new_bucket;
    this.slots = new_slots;
  }
}
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

  //Insertion At Head
  insertAtHead(newData) {
    let tempNode = new Node(newData);
    tempNode.nextElement = this.head;
    this.head = tempNode;
    return this; //returning the updated list
  }

  isEmpty() {
    return this.head == null;
  }

  //function to print the linked list
  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        //process.stdout.write(String(temp.data));
        //process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
      return true;
    }
  }

  getHead() {
    return this.head;
  }
  setHead(newHead) {
    this.head = newHead;
    return this;
  }
  getListStr() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return "null";
    } else {
      let st = "";
      let temp = this.head;
      while (temp != null) {
        st += String(temp.data);
        st += " -> ";
        temp = temp.nextElement;
      }
      st += "null";
      return st;
    }
  }
  insertAtTail(newData) {
    //Creating a new Node with data as newData
    let node = new Node(newData);

    //check for case when list is empty
    if (this.isEmpty()) {
      //Needs to Insert the new node at Head
      this.head = node;
      return this;
    }

    //Start from head
    let currentNode = this.head;

    //Iterate to the last element
    while (currentNode.nextElement != null) {
      currentNode = currentNode.nextElement;
    }

    //Make new node the nextElement of last node of list
    currentNode.nextElement = node;
    return this;
  }
  search(value) {
    //Start from the first element
    let currentNode = this.head;

    //Traverse the list until you find the value or reach the end
    while (currentNode != null) {
      if (currentNode.data == value) {
        return true; //value found
      }
      currentNode = currentNode.nextElement;
    }
    return false; //value not found
  }
  deleteAtHead() {
    //if list is empty, do nothing
    if (this.isEmpty()) {
      return this;
    }
    //Get the head and first element of the list
    let firstElement = this.head;

    //If list is not empty, link head to the nextElement of firstElement
    this.head = firstElement.nextElement;

    return this;
  }
  deleteVal(value) {
    let deleted = null; //True or False
    //Write code here

    //if list is empty return false
    if (this.isEmpty()) {
      return false;
    }

    //else get pointer to head
    let currentNode = this.head;
    // if first node's is the node to be deleted, delete it and return true
    if (currentNode.data == value) {
      this.head = currentNode.nextElement;
      return true;
    }

    // else traverse the list
    while (currentNode.nextElement != null) {
      // if a node whose next node has the value as data, is found, delete it from the list and return true
      if (currentNode.nextElement.data == value) {
        currentNode.nextElement = currentNode.nextElement.nextElement;
        return true;
      }
      currentNode = currentNode.nextElement;
    }
    //else node was not found, return false
    deleted = false;
    return deleted;
  }
  deleteAtTail() {
    // check for the case when linked list is empty
    if (this.isEmpty()) {
      return this;
    }
    //if linked list is not empty, get the pointer to first node
    let firstNode = this.head;
    //check for the corner case when linked list has only one element
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
}

function removeDuplicates(list) {
  let currentNode = list.getHead();
  let prevNode = list.getHead();
  let visitedNodes = new HashTable();
  if (list.isEmpty() || currentNode.nextElement === null) {
    return false;
  }
  while (currentNode !== null) {
    if (visitedNodes.search(currentNode.data) !== null) {
      prevNode.nextElement = currentNode.nextElement;
      currentNode = currentNode.nextElement;
    } else {
      visitedNodes.insert(currentNode.data, 1);
      prevNode = currentNode;
      currentNode = currentNode.nextElement;
    }
  }
}

let list = new LinkedList();
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(22);
list.insertAtHead(7);

console.log(list);
removeDuplicates(list);
console.log(list);
