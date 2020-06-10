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
//alert(findSum([1, 2, 3, 4, 5], 7));
