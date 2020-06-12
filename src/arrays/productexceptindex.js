function findProduct(arr) {
  var temp = 1;
  var product = [];
  for (var i = 0; i < arr.length; i++) {
    product[i] = temp;
    temp = temp * arr[i];
  }
  temp = 1; // 1,1,3,12
  for (var j = arr.length - 1; j > -1; j--) {
    product[j] = product[j] * temp;
    temp = temp * arr[j];
  }
  //alert(product);
}

findProduct([1, 3, 4, 5]);
