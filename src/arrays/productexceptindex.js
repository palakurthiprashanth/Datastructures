function findMinimum(arr) {
  arr.sort(function(a, b) {
    return a - b;
  });
  //alert(arr[0]);
  return arr[0];
}
findMinimum([9, 2, 3, 6, -1]);
