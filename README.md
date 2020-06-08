# Datastructures

There are so many algorithms , so we need to decide which algorithm is helpful based on

1. Time complexity
2. space complexity
   Ideal behaviour is it should take less time and less memory.

### how can we evaluate time and space complexity

### for single loop

Need to calculate best case , worst case and average case
so mostly not cosider primitive operations in anlysis like assignment.

### Example

```
var n = 10
var sum = 0

// for loop
for(var i=0;i<n;i++)
  sum+=2

```

lets calculate time complexity
lets calculate primitive operations

var n = 10 -> 1
var sum = 0 - >1
var i=0 - >1

i<n -> 3 [ get 2 values and comparision ] it will do for n+1 times so 3(n+1) .
i++ - > 3 [ caluclates n times as for last iteration it will not increment ]
sum+=2 -> 3 [ does n times ] 3n

so time complexitity is
1+1+1+3(n+1)+3n
3+3n+3+3n+1 = 6n+6

```
Time complexity is 6n+6
```

### for nested loop

```
var n = 5
var m = 7
var sum = 0
for(var i = 0; i < n; i++)
  for(var j = 0; j < m; j++)
    sum += 1

console.log(sum)
```

for(var i = 0; i < n; i++) - > 6n+4

for(var j = 0; j < m; j++) - > as it is nested it will loop for every iteration so n (6m+4)
sum += 1 - > n(3m)
console.log(sum) - > 2

```
Time complexity is
1+1+1+6n+4 + n(6m+4) + 3nm +2
9nm+10n+9
```

### Big O notation

Above process is cumbersome
, so for calculationg time complexity we use bog o notation
In big o notation

```
1.Dropping the multiplicative constants with all terms.
2.Dropping all but the highest order term.

n2 +5n+ 5 = o(n2)
```

```
Sometimes the constant coefficients do become important. For example, consider algorithms A and B that have a worst-case running time of 100000n + 4 and 10n + 6, respectively. Asymptotically, both are O(n)O(n). However, the worst-case running time for algorithm B is numerically better than A.
```

### General Tips

1. Every time a list or array gets iterated over c \times lengthc×length times, it is most likely in O(n)O(n) time.
2. When you see a problem where the number of elements in the problem space gets halved each time, it will most probably be in O(log n)O(logn) runtime.
3. Whenever you have a single nested loop, the problem is most likely in quadratic time.

### List of Important Complexities

### 1. Simple for-loop with an increment of size 1

```
for (var x = 0; x < n; x++) {
    //statement(s) that take constant time
}
```

Time compllexity

x = 0 - > 1
x<n -> n+1
x++ -> n

```
Time complexity is
n+n+1+1 =  2n+2
O(n)
```

### For-loop with increments of size k

```
for (var x = 0; x < n; x+=k) {
    //statement(s) that take constant time
}
```

Time complexity is

2+n(2+c / k) = O(n)

### Nested for loops

```
for (var=0; i<n; i++){
    for (var=0; j<m; j++){
        //Statement(s) that take(s) constant time
    }
}
```

Inner loop is 2m+2 + K
outer loop runs n times so
n(2m+2 + k) so

```
Time complexity is O(nm)
```
