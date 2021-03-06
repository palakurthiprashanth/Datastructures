### Important Array functions

### push
Use this function to add a single element to the end of an array.

Time complexity is O(1) as only length will be updated and add new element

### pop
Returns and removes the element from the end of an array
Time complexity is O(1) as it will update length and remove last index

### unshift
Inserts the given element at the beginning of the array.

Time complexity is O(n) as length needs to be updated and should shift all elements to right

### shift 
Returns and removes the element from the beginning of the array.

Time complexity is O(n) as length needs to be updated and should shift all elements to left and remove index at 0

### delete

Deletes all elements in array , but it leaves empty spaces
```
var array = [1, 3, 5, 'seven']
delete array[3]
console.log(array);

[ 1, 3, 5, <1 empty item> ]
```

Time complexity is O(n) , as it remove 1st element and moves all elements to left and so on.

### reverse

Reverses an array.

Time complexity O(n) , as it should traverse all elements in array.

### splice

can be used to add or remove elements.

1st parameter - > index where we need to add/remove

2nd parameter  -> No of elements to be removed, if nothing then keep it 0.

remaing parameters - > elements to be added

```
var array = [1, 3, 5, 'seven', 10]
console.log(array);
//to add new elements
array.splice(2,0,'four');
console.log(array);
//to remove elements 
array.splice(2,3);
console.log(array);
//to add and remove elements simultaneously
array.splice(2,0,7, 'ten',8);
console.log(array);

Output
[ 1, 3, 5, 'seven', 10 ]
[ 1, 3, 'four', 5, 'seven', 10 ]
[ 1, 3, 10 ]
[ 1, 3, 7, 'ten', 8, 10 ]
```

Time complexity is O(n) , as it adds / remove elements in orginal array

### slice

Used to slice out an array into new array.

1st parameter - starting index wher slice should start.

2nd parameter - end index o the slice , this index will be excluded in new array.
if 2nd parameter is not present it will slice till end of array.

```
var array = [1,'two',3,4,5,'six','seven',8,'nine',10]
console.log(array);
//slicing with only the first parameter
var newArray = array.slice(4);
console.log(newArray);
//slicing with both the paramters
var newArray2 = array.slice(4,7);
console.log(newArray2);

output

[ 1, 'two', 3, 4, 5, 'six', 'seven', 8, 'nine', 10 ]
[ 5, 'six', 'seven', 8, 'nine', 10 ]
[ 5, 'six', 'seven' ]
```

Time complexity is O(n)


### concat

concats arrays into new array and doesnot affect source array

```
var array = [1,'two',3,4,5];
var array2=['six','seven',8,'nine',10]
console.log(array);
console.log(array2);
//concatenate array and array2
var mergedArray=array.concat(array2)
console.log(mergedArray)

//concatenate two more arrays 
mergedArray=mergedArray.concat([11,'twelve'], [13,14,15])
console.log(mergedArray)


Output

[ 1, 'two', 3, 4, 5 ]
[ 'six', 'seven', 8, 'nine', 10 ]
[ 1, 'two', 3, 4, 5, 'six', 'seven', 8, 'nine', 10 ]
[ 1,
  'two',
  3,
  4,
  5,
  'six',
  'seven',
  8,
  'nine',
  10,
  11,
  'twelve',
  13,
  14,
  15 ]
```

Time complexity is O(m+n) , m -> size of first array , n -> size of second array.
it copies all m , n elements to new array.

### for of statements

```
The for…of statement creates a loop to iterate over iterable objects, such as Arrays and Array-like objects.
```

```
var array = [1,'two',3,4,5, 'six','seven',8,'nine',10]

for(let ele of array){
  console.log(ele)
}


Output

1
two
3
4
5
six
seven
8
nine
10
```

Time complexity is O(n)

### const vs var vs Let

### const
const is block scoped , once declared cannot be redeclared

```
//code will throw an error
const pi=3.14
console.log(pi)
pi=3;
```
```
output
TypeError: Assignment to constant variable.
```

### var

var is function scoped
if declared outside fn it will be in global scope

```
function foo(){
   var n=6;
   console.log(n);
}

var n=5;
console.log(n);
foo();
```
```
output
5
6
```
The value of n outside the function scope remains the same regardless of what the value of n is inside the function scope.
Also, as stated, variables can be redeclared using var

### Let
ES6 introduced let.
let is block scoped , similar to const it cannot be redeclared

```
//code will throw an error
let a=2;
let a=3;
```
```
output

SyntaxError: Identifier 'a' has already been declared
```

```
//code will throw an error
function foo(n) {
    if (n == 6) {
        let num = 2;
    }
    console.log(num);
}

var n = 6;
console.log(n);
foo(6);
```
```
output

ReferenceError: num is not defined
```

```
Above will work with var
```
Finally, variable declaration using let, const, or var depends on what scope you want. 


## Challenges

<details><summary>Challenge 1: Remove Even Integers From an Array</summary>
<p>


```javascript
//[1,2,4,5,10,6,3]  ==>  [1,5,3]

function removeEven(array) {
  let newArr = [];
  for (let num of array) {
    if (num % 2 !== 0) {
      newArr.push(num);
    }
  }
  //alert(newArr);
}

const arr = [1, 2, 4, 5, 10, 6, 3];
removeEven(arr);

// Time Complexity is O(n)

// Using filter()

function removeEvenFilter(arr) {
  let result = arr.filter(v => v % 2 !== 0);
  return result;
}
removeEvenFilter(arr);

```

```
In both case time complexity is O(n)
```
</p>
</details>

<details><summary>Challenge 2: Merge Two Sorted Arrays</summary>
<p>


```javascript
//[1,2,4,5,10,6,3]  ==>  [1,5,3]

/**
 * arr1 = [1,3,4,5]  
   arr2 = [2,6,7,8]

   arr = [1,2,3,4,5,6,7,8]
 */

function mergeArrays(arr1, arr2) {
  let result = arr1.concat(arr2);
  result.sort();
  //alert(result);
}
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];
mergeArrays(arr1, arr2);
```
</p>
</details>

<details><summary>Challenge 2: solution with spread</summary>
<p>


```javascript
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArrays([4,5,6],[-2,-1,0,7]))
```

```
The sort() function in javascript compares the values as strings in lexicographical order.
Due to this reason 50 will be considered greater than the 300 since 5 is greater than 3. 
Thus, sort() function will produce unexpected output.We can resolve this issue by using a 
function to compare two values in the argument of the sort() function. In this way, arrays values will
 be sorted according to the value returned from the compare function.
```
```
Time complexity
The time complexity for this solution will be O(n log n ) since we are using the sort() function.
```
</p>
</details>

<details><summary>Challenge 3: Find Two Numbers that Add up to "value"</summary>
<p>

```
Brute force
```

```javascript
function findSum(arr, value) {
    for (var j =0; j<arr.length; j++) {
       for (var k = j+1; k<arr.length; k++) {
            if ((arr[j] + arr[k]) == value)
                return [arr[j], arr[k]]
        }
    }
    return false;
}
```

```
Time complexity is O(n power 2)
```
</p>
</details>

<details><summary>Challenge 3: Optimized solution</summary>
<p>

```
with sorting
it wil sort array then adds first and last element in array if sum is less than value then it will increment index from start , if it is greaer it will decrement index from last and process continues till indexes are equal
```

```javascript
function findSum(arr, value) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var index1 = 0;
  var index2 = arr.length - 1;
  var sum = 0;
  var res = [];
  while (index1 !== index2) {
    sum = arr[index1] + arr[index2];
    if (sum < value) {
      index1++;
    } else if (sum > value) {
      index2--;
    } else {
      res.push(arr[index1]);
      res.push(arr[index2]);
      return res;
    }
  }
  return false;
}
findSum([1, 2, 3, 4, 5], 7);
```

```
Time complexity is 
O(logn) for sorting.
O(n) for looping
so in worst case scenario it is O(nlongn)
```
</p>
</details>

<details><summary>Challenge 4: Array of Products of All Elements</summary>
<p>


```javascript
function findProduct(arr) {
  var res = [];
  var index = 0;
  var temp = 1;
  debugger;
  for (var i = 0; i < arr.length; i++) {
    while (index < arr.length) {
      if (i !== index) {
        temp = temp * arr[index];
      }
      index++;
    }
    res.push(temp);
    temp = 1;
    index = 0;
  }
  //alert(res);
}

findProduct([1, 2, 3, 4]); // [24,12,8,6]
```

```
Time complexity is 
O(n power 2)
```
</p>
</details>

<details><summary>Challenge 4: Optimized way</summary>
<p>

```
In this way instead of nesting we seperate the loops 
in first loop it is product to left side
in second loop it is product to right side
```

```javascript
function findProduct(arr) {
  var temp = 1;
  var product = [];
  for (var i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }
  temp = 1; // 1,1,3,12
  for (var j = arr.length - 1; j > -1; j--) {
    product[j] = product[j] * temp;
    temp = temp * arr[j];
  }
  //alert(product);
}

findProduct([1, 3, 4, 5]);

```

```
Time complexity is 
n+n = 2n // remove constant so 
O(n);
```
</p>
</details>

<details><summary>Challenge 5: Find Minimum Value in Array</summary>
<p>

```javascript
function findMinimum(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  //alert(arr[0]);
  return arr[0];
}
findMinimum([9, 2, 3, 6, -1]);

```

```
Time complexity is 
O(nlogn)
```
</p>
</details>

<details><summary>Challenge 5: Optimised</summary>
<p>

```
In this instead of sort , we assume first elem is minimum and loop array compare element if less than min and update value.
```

```javascript
function findMinimum(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  //alert(min);
  return min;
}
findMinimum([9, 2, 3, 6, -1]);


```

```
Time complexity is 
O(n)
```
</p>
</details>

<details><summary>Challenge 6: Find First Unique Integer in an Array</summary>
<p>

```
take fst element in array and loop through all elements 
if elaments are equal loop nested loop as it is not unique, if nested loop has iterated full its length menas element is unique
```

```javascript
function findFirstUnique(arr) {
  var index2 = 0;
  for (var i = 0; i < arr.length; i++) {
    while (index2 < arr.length) {
      if (i !== index2 && arr[i] === arr[index2]) {
        break;
      }
      index2++;
    }
    if (index2 === arr.length) {
      return arr[i];
    }
    alert(arr[i]);
  }
}

findFirstUnique([9, 2, 3, 6, 2, 6, 9, 0, 3]);


```

```
Time complexity is 
O(n power 2) as nested loop
```
</p>
</details>

<details><summary>Challenge 7: Find Second Maximum Value in an Array</summary>
<p>

```
This can be done by sorting
then time complexity nlogn

we can do by looping twice
```


```javascript

function findSecondMaximum(arr) {
  var firstMax = Number.NEGATIVE_INFINITY;
  var secondMax = Number.NEGATIVE_INFINITY;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > firstMax) {
      firstMax = arr[i];
    }
  }
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] < firstMax && arr[j] > secondMax) {
      secondMax = arr[j];
    }
  }
  //alert(secondMax);
}
findSecondMaximum([9, 2, 3, 6]);


```

```
Time complexity is 
n+n = O(n);
```
</p>
</details>

<details><summary>Challenge 7: single loop</summary>
<p>

```
combining 2 loops to 1
```


```javascript

function findSecondMaximum(arr) {
  var max = Number.NEGATIVE_INFINITY;
  var secondmax = Number.NEGATIVE_INFINITY;
  for (var val of arr) {
    debugger;
    if (val > max) {
      max = val;
    }
    if (val > secondmax && val !== max) secondmax = val;
  }
  alert(secondmax);
  return secondmax;
}
findSecondMaximum([9, 2, 8, 3, 6]);



```

```
Time complexity is 
O(n);
```
</p>
</details>

<details><summary>Challenge 8: Right Rotate an Array by n</summary>
<p>

```
Given an array, can you rotate its elements
 from right to left by one index? 
 
Using splice and concat

```

```javascript

function rightRotate(arr, n) {
    return (arr.splice(arr.length - n)).concat(arr.splice(0, arr.length))
}
  console.log(rightRotate([1,2,3,4,5], 3))
 o/p -> [ 3, 4, 5, 1, 2 ]

```

```
Time complexity is 
O(n);
```
</p>
</details>

<details><summary>Challenge 8: Mannual rotation</summary>
<p>


```javascript

function rightRotate(arr, n) {
  var rotatedArray = [];
  for (var i = arr.length - n; i < arr.length; i++) {
    rotatedArray.push(arr[i]);
  }
  for (var i = 0; i < arr.length - n; i++) {
    rotatedArray.push(arr[i]);
  }
  //alert(rotatedArray);
}
rightRotate([1, 2, 3, 4, 5], 3);


```

```
Time complexity is 
O(n);
```
</p>
</details>

<details><summary>Challenge 9: Re-arrange positive and negitive numbers</summary>
<p>


```javascript

function reArrange(arr){
  var neg = []
  var pos = []
  for(let ele of arr){
    if( ele < 0)
      neg.push(ele)
    else
      pos.push(ele)
  }
  return neg.concat(pos)
}

console.log(reArrange([10,-1,20,4,5,-9,-6]))


```

```
Time complexity is 
O(n);
```
</p>
</details>

<details><summary>Challenge 9: without seperate arrays</summary>
<p>

```
As there is no seperate arrays space consumed
is less.
here we swap all negitive elements
with previous element.
```

```javascript

function reArrange(arr) {
  var temp;
  var leftPos = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      temp = arr[i];
      arr[i] = arr[leftPos];
      arr[leftPos] = temp;
      leftPos++;
    }
  }
  // alert(arr);
}

reArrange([10, -1, 20, -4]);

```

```
The time complexity of this 
algorithm is O(n), 
with no extra space used
```
</p>
</details>

<details><summary>Challenge 10: Rearrange Sorted Array in Max/Min Form</summary>
<p>

```
Arrange elements in such a way that the
 maximum element appears at first,
 then minimum at second, then second 
 maximum at third position and 
 second minimum at fourth, 
and so on.

Input 
A sorted array
```


```javascript

function maxMin(arr) {
  var res = [];
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    res.push(arr.length - i);
    res.push(arr[i]);
  }
  if (arr.length % 2) {
    res.push(Math.floor(arr.length / 2) + 1);
  }
  alert(res);
}
maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]);


```

```
The time complexity of this 
algorithm is O(n)
```
</p>
</details>

```
Array questions
```

```
function foo(value, arr) {
    value = 1
    arr[0] = 44
}
var v = 3
var arr = [1, 2, 3]
foo(v, arr)
console.log(v, arr[0])

// 3 44
```
```
var values = [];
 
function f(i, values) {
    values.push(i)
    console.log(values)
    return values
}
f(1, values)
f(2, values)
f(3, values)

// [1] [1, 2] [1, 2, 3]
```