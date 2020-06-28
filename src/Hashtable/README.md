## Hashing

In linear DS , time complexity for storing is O(n) , and in binary DS it is O(logn).
There should be a way , where searching takes place in constant time irrespective
of length.

In hashing search takes constant time.

Hashing is process of storing object according to unique key.

It stores values in key-value pairs.Key is unique.

The concept of hashing has given birth to several new data structures, but the most prominent one is the hash table.

## Hash Tables

If algorithm prioritizes the search operations then Hash Tables are best.

Hash tables implement using Arrays as accessing takes const time.

Performance of hash table depends on

1. Hash function
2. size of hash table
3. collision method.

## Hash function

It is implemented using Array.
If you know the index then we can retrieve value in O(1) time.
But how we know the index , we can now the index based on Hash function.

## Common Hashing functions

1. Arithmetic Modular

In this we calculate index where value is stored using

index = key MOD tableSize.

so index is always between 0 to tablesize-1.

```javascript
function hashModular(key, length) {
  return key % length;
}
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = null;
}
let key = 35;
let index = hashModular(key, 10);
alert(index); // 5
```

## Hash Table Using Bucket Chaining

Hash entry class

```javascript
class HashEntry {
  constructor(key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
  }
}
```

Full implementation

```javascript
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
}
```
