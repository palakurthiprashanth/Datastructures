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
  //alert(secondmax);
  return secondmax;
}
findSecondMaximum([9, 2, 8, 3, 6]);
