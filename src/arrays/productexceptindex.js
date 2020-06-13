function findFirstUnique(arr) {
  var index2 = 0;
  for (var i = 0; i < arr.length; i++) {
    while (index2 < arr.length) {
      if (i !== index2 && arr[i] === arr[index2]) {
        break;
      }
      index2++;
    }
    if (index2 === arr.length) {
      return arr[i];
    }
    //alert(arr[i]);
  }
}

findFirstUnique([9, 2, 3, 6, 2, 6, 9, 0, 3]);
