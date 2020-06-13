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
