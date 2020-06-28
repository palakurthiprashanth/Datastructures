class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}

class HashTable {
  constructor() {
    //size of table
    this.slots = 10;
    //size and we can use to resize hashtable
    this.size = 0;
    this.buckets = []; // key value pairs
    //intially all are none;
    for (var i = 0; i < this.slots; i++) {
      this.buckets[i] = null;
    }
  }
  getSize() {
    return this.size;
  }
  isEmppty() {
    return this.getSize() === 0;
  }
  getIndex(key) {
    return key % this.slots;
  }
}
let threshold = 0.6;
HashTable.prototype.resize = function() {
  let new_slots = this.slots * 2;
  let new_bucket = [];
  for (var i = 0; i < new_slots; i++) {
    new_bucket[i] = null;
  }
  for (var i = 0; i < this.buckets.length; i++) {
    let head = this.buckets[i];
    let new_index = this.getIndex(head.key);
    while (head != null) {
      if (new_bucket[new_index] === null) {
        new_bucket[new_index] = new HashEntry(head.key, head.data);
      } else {
        let node = new_bucket[new_index];
        while (node !== null) {
          if (node.key === head.key) {
            node.data = head.data;
          } else if (node.next === null) {
            node.next = new HashEntry(head.key, head.data);
            node = node.next;
          } else {
            node = node.next;
          }
        }
      }
      head = head.next;
    }
  }
  this.slots = new_slots;
  this.buckets = new_bucket;
};

HashTable.prototype.insert = function(key, value) {
  let threshold = 0.6;
  let b_index = this.getIndex(key);
  if (this.buckets[b_index] === null) {
    this.buckets[b_index] = new HashEntry(key, value);
  } else {
    let head = this.buckets[b_index];
    while (head !== null) {
      if (head.key === key) {
        head.data = value;
        break;
      } else if (head.next === null) {
        head.next = new HashEntry(key, value);
        break;
      }
      head = head.next;
    }
  }
  this.size = this.size + 1;
  let load_factor = Number(this.size) / Number(this.slots);
  //Checks if 60% of the entries in table are filled, threshold = 0.6
  if (load_factor >= threshold) {
    this.resize();
  }
};

HashTable.prototype.search = function(key) {
  let b_index = this.getIndex(b_index);
  let head = this.buckets[b_index];
  if (head !== null) {
    while (head !== null) {
      if (head.key === key) {
        return head.value;
      }
      head = head.next;
    }
  }
  console.log("Not found");
};

HashTable.prototype.deleteVal = function(key) {
  let b_index = this.getIndex(key);
  let head = this.buckets[b_index];
  if (head.key === key) {
    this.buckets[b_index] = head.next;
    console.log("deleted");
    this.size = this.size - 1;
  }
  let prev = null;
  while (head !== null) {
    if (head.key === key) {
      prev.next = head.next;
    }
    prev = head;
    head = head.next;
  }
  console.log("not found");
  return;
};
