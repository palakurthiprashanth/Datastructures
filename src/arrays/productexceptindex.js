function findProduct(arr) {
  var res = [];
  var index = 0;
  var temp = 1;
  debugger;
  for (var i = 0; i < arr.length; i++) {
    while (index < arr.length) {
      if (i !== index) {
        temp = temp * arr[index];
      }
      index++;
    }
    res.push(temp);
    temp = 1;
    index = 0;
  }
  //alert(res);
}

findProduct([1, 2, 3, 4]); // [24,12,8,6]
