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
output
TypeError: Assignment to constant variable.
```
```