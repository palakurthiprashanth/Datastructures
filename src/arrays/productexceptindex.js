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
