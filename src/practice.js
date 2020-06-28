function hashModular(key, length) {
  return key % length;
}
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = null;
}
let key = 35;
let index = hashModular(key, 10);
alert(index); // 5
