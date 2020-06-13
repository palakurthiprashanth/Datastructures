function maxMin(arr) {
  var res = [];
  for (var i = 0; i < Math.floor(arr.length / 2); i++) {
    res.push(arr.length - i);
    res.push(arr[i]);
  }
  if (arr.length % 2) {
    res.push(Math.floor(arr.length / 2) + 1);
  }
  //alert(res);
}
maxMin([1, 2, 3, 4, 5, 6, 7, 8, 9]);
