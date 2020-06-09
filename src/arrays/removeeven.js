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
