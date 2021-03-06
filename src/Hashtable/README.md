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
  getIndex(key) {
    return key % this.slots;
  }
}
```

## Challenges

<details><summary>An Array as a Subset of Another Array</summary>
<p>
```
Stores list1 in hast table and search list 2 in search1.
````

```javascript
function isSubset(list1, list2) {
  let ht = new HashTable();
  if (list2.length > list1.length) {
    return false;
  }
  for (var i = 0; i < list1.length; i++) {
    ht.insert(list1[i], i);
  }
  for (var i = 0; i < list2.length; i++) {
    if (ht.search(list2[i]) === null) {
      return false;
    }
  }
  return true;
}
var list1 = [1, 2, 3, 4, 5, 6];
var list2 = [2, 4, 6];
console.log(isSubset(list1, list2));
```

```
Time complexity
Since this algorithm traverses the whole of the list1 once and list2 is only traversed if
 its size is less than list1.
 Thus we will have 2 \times× n traversal, if list1's length was n, therefore, its time
 complexity is O(n)
```

</p>

</details>

<details><summary>Check if Arrays are Disjointed</summary>
<p>
```
Disjoint means  there should be no common elements in 2 arrays
It is similar to prev one, here search list2 in list1 if element fount not a disjoint
````

```javascript
function isDisjoint(list1, list2) {
  //Write code here
  let ht = new HashTable();
  //Inserting list1's elements in ht
  for (var i = 0; i < list1.length; i++) {
    ht.insert(list1[i], i);
  }
  //Checking to see if all of list2's elements are in the hashtable
  for (var j = 0; j < list2.length; j++) {
    if (ht.search(list2[j]) != null) {
      return false; //return false if there is an element in list2 that is in list1
    }
  }
  return true;
}
```

```
Time complexity
For a lookup list with mm elements, each insertion in the hash table takes a constant
 amount of time. The search operation in the hash table also takes a constant amount of
 time for a subset list with nn elements. Hence, the time complexity is O(m+n).
```

</p>

</details>

<details><summary>Trace the Complete Path of a Journey</summary>
<p>
```
Reverse a map , compare keys in 2 maps if any key doesnt exist then it is source
````

```javascript
function isDisjoint(list1, list2) {
  //Write code here
  let ht = new HashTable();
  //Inserting list1's elements in ht
  for (var i = 0; i < list1.length; i++) {
    ht.insert(list1[i], i);
  }
  //Checking to see if all of list2's elements are in the hashtable
  for (var j = 0; j < list2.length; j++) {
    if (ht.search(list2[j]) != null) {
      return false; //return false if there is an element in list2 that is in list1
    }
  }
  return true;
}
```

```
output
[ [ 'Boston', 'Texas' ],
  [ 'Texas', 'Missouri' ],
  [ 'Missouri', 'NewYork' ],
  [ 'NewYork', 'Chicago' ] ]
```

```
Time complexity  is O(n);
```

</p>

</details>

<details><summary>Find Two Pairs Such That a+b = c+d</summary>
<p>

```javascript
function findPair(my_list) {
  let result = [];
  //Create HashMap with Key being sum and value being a pair i.e key = 3 , value = {1,2}
  //Traverse all possible pairs in my_list and store sums in map
  //If sum already exist then print out the two pairs.
  let hMap = new HashTable();
  for (var i = 0; i < my_list.length; i++) {
    for (var j = i + 1; j < my_list.length; j++) {
      let sum = my_list[i] + my_list[j]; //calculate sum
      if (hMap.search(sum) == null) {
        //If sum is not present in Map then insert it alongwith pair
        hMap.insert(sum, [my_list[i], my_list[j]]);
      } else {
        //Sum already present in Map
        let prev_pair = hMap.search(sum);
        //Since array elements are distinct, we don't
        //need to check if any element is common among pairs
        let secondPair = [my_list[i], my_list[j]];
        result.push(prev_pair);
        result.push(secondPair);
        return result;
      }
    }
  }
  return result;
}

var list = [7, 4, 9, 12, 0, 1];
var res = findPair(list);
console.log(res);
```

```
Time complexity  is O(npow2);
```

</p>

</details>

<details><summary>A Subarray with a Sum of 0</summary>
<p>

```
subset of values consecutively to become sum 0
[6, 4, -7, 3, 12, 9] = > 4,-7,3 =0 [consecutively]
[-7, 4, 6, 3, 12, 9] => false [non-consecutively]
```

```
We basically have to check for 3 conditions:

If 0 exists in the array

If the sum becomes zero in the iteration

If the sum reverts back to a value which was already a key in the
 hash table

Any of these three conditions confirms the existence of a subarray that sums up to be zero.
```

```javascript
function findSubZero(my_list) {
  //Use HashMap to store sum as key and index i as value till sum has been calculated
  //Traverse the array and return true if either
  //my_list[i] == 0 or sum == 0 or HashMap already contains the sum
  //If you completely traverse the list and havent found any of the above three
  //conditions then simply return false
  let hMap = new HashTable();
  let sum = 0;
  //Traverse through the given array
  for (var i = 0; i < my_list.length; i++) {
    sum += my_list[i];
    if (my_list[i] == 0 || sum == 0 || hMap.search(sum) != null) {
      return true;
    }
    hMap.insert(sum, i);
  }
  return false;
}

var list = [6, 4, -7, 3, 12, 9];

console.log(findSubZero(list));
```

```
In above hastable has keys
6,10,3,6
6 already exists so ht.sarch is true.
```

```
Time complexity  is O(n);
```

</p>

</details>

<details><summary>Find Two Numbers that Add up to "value"</summary>
<p>

```
In this solution, we scan the whole array once and store visited
elements in a hash set. During the scan, for every element arr[i]
 in arr, we check if value - arr[i] is present in the hash set
 i.e. value - arr[i] is already visited. If value - arr[i] is
  found in the hash set, it means there is a pair (arr[i], value
   - arr[i]) in arr whose sum is equal to the given value.
   If we have exhausted all elements in the array and didn’t find
    any such pair, the function will return false.
```

```javascript
function findSum(arr, value) {
  let ht = new HashTable();
  let result = [];
  for (var i = 0; i < arr.length; i++) {
    if (ht.search(value - arr[i]) !== null) {
      result.push(arr[i]);
      result.push(value - arr[i]);
      return result;
    }
    ht.insert(arr[i], i);
  }
  return false;
}
console.log(findSum([1, 2, 4], 5));
```

```
Time complexity  is O(n);
```

</p>

</details>

<details><summary>Find First Unique Integer in an Array</summary>
<p>

```
first we check the key in hash table , if it exists overide with 0
for the first time search will be null insert 1.
so next time if it repeats it overides with 0.
so data with key 1 is unique
```

```javascript
function findFirstUnique(arr) {
  let ht = new HashTable();
  for (var i = 0; i < arr.length; i++) {
    if (ht.search(arr[i]) === null) {
      ht.insert(arr[i], 1);
    } else {
      ht.insert(arr[i], 0);
    }
  }
  for (var i = 0; i < arr.length; i++) {
    if (ht.search(arr[i]) === 1) {
      return arr[i];
    }
  }
  return null;
}
console.log(findFirstUnique([9, 2, 3, 2, 6, 6, 9, 12, 3]));
```

```
Time complexity  is O(n);
```

</p>

</details>

<details><summary>Remove Duplicates from a Linked List</summary>
<p>

```
we store all elements in HT, if any of value is already
found in HT then we will break link with prevNode
```

```javascript
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
```

```
Time complexity  is O(n);
```

</p>

</details>

<details><summary>Union & Intersection of Linked Lists</summary>
<p>

```
we store all elements in HT, if any of value is already
found in HT then we will break link with prevNode
```

```javascript
function unionList(list1, list2) {
  let ht = new HashTable();
  let list1Iter = list1.getHead();
  while (list1Iter !== null) {
    ht.insert(list1Iter.data, 1);
    list1Iter = list1Iter.nextElement;
  }
  let list2Iter = list2.getHead();
  while (list2Iter !== null) {
    if (ht.search(list2Iter.data) === null) {
      list1.insertAtHead(list2Iter.data);
    }
    list2Iter = list2Iter.nextElement;
  }
}
```

```
The time complexity of inserting n elements of the first list in
 the hash table is O(n), while time complexity of checking second
  list’s m element in the hash table and then inserting them at
   the head would incur a time complexity of O(m).
    Thus overall time complexity would be O(m+n).


```

</p>

</details>
