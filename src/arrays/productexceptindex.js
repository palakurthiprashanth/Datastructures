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
