# Datastructures

There are so many algorithms , so we need to decide which algorithm is helpful based on

1. Time complexity
2. space complexity
   Ideal behaviour is it should take less time and less memory.

### how can we evaluate time and space complexity

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
