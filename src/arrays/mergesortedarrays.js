/**
 * arr1 = [1,3,4,5]  
   arr2 = [2,6,7,8]

   arr = [1,2,3,4,5,6,7,8]
 */

function mergeArrays(arr1, arr2) {
  let result = arr1.concat(arr2);
  result.sort();
  //alert(result);
}
let arr1 = [1, 3, 4, 5];
let arr2 = [2, 6, 7, 8];
mergeArrays(arr1, arr2);
