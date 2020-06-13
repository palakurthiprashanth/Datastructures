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
