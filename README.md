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

Without Considering Constants.

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

consider this loop

x=0  ==>  1

x < n ==> as x is incrementing by k times so it will be k+2k+3k+....mk where m < n ,so value for x < n takes (n/k) + 1

x+=k  => n/k

and statements inside loop runs c (n/k)

Time complexity is


1+(n/k)+1 + (n/k) + (n/k) + c(n/k)

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

### Nested For-loop with dependent variables

```
for (var i=0; i<n; i++){
    for (var j=0; j<i; j++){
        //Statement(s) that take(s) constant time
    }
}
```

outer loop runs n times and inner loop runs i times
Inner loop doesnt run in 1st iteration
in 2nd iteration - > it runs 1 time
3rd iteration - > 2 times
4th iteration -> 3 times
nth iteration -> n-1 times
so
c+2c+3c+⋯+(n−1)c times

```
Time complexity is c*[n*(n-1)/2]
O(n*2)
```

### Nested For-loop With Index Modification

```
for (var i=0; i<n; i++){
    i*=2;
    for (var j=0; j<i; j++){
        // Statement(s) that take(s) constant time
    }
}
```

if outer loop -> 0 then inner loop runs 0
outerloop ->1 , inner loop ->2
outerloop->3 , innerloop-> 6
outerloop->7 , innerloop ->14
outer loop -> n-1 , innerloop 2(n-1)

```
Time complexity is
outerloop runs n times , roughly inner loops run n power 2 times as i is getting doubled so
O(n power 2)
```

### Loops with log(n) time complexity

```
i = //constant
n = //constant
k = //constant
while (i < n){
    i*=k;
    // Statement(s) that take(s) constant time
}
```

A loop statement that multiplies/divides the loop variable by a constant such as the above takes
log (n) base K
​​ (n) time because the loop runs that many times. Let’s consider an example where n = 16, and k = 2:

| count | i   |
| ----- | --- |
| 1     | 1   |
| 2     | 2   |
| 3     | 4   |
| 4     | 8   |
| 5     | 16  |

```
Time complexity is log n base K

log 16 base 2 = 4
```

### Big (O) of Nested Loop with Addition

```
const n = 10;
const pie = 3.17;
var sum = 0;


for (var i = 1; i < n; i += 3) {
    console.log(pie);
    for (var j = 1; j < n; j += 2) {
        sum = sum + 1;
        console.log(sum);
    }
}
```

in outer loop 
i< n runs

![firstequation](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bn%7D%7B3%7D%20&plus;1) times
i+=3 runs runs ![firstequation](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bn%7D%7B3%7D) times

in inner loop 
j<n runs ![first](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bn%7D%7B3%7D%20%5Cleft%281&plus;%5Cfrac%7Bn%7D%7B2%7D%5Cright%29) times
j += 2 runs ![first](https://latex.codecogs.com/gif.latex?%5Cfrac%7Bn%7D%7B3%7D%20%5Cleft%28%5Cfrac%7Bn%7D%7B2%7D%5Cright%29) times

so time complexity is 

![first](https://latex.codecogs.com/gif.latex?1&plus;1&plus;1&plus;1&plus;%281&plus;%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%281&plus;%5Cfrac%7Bn%7D%7B2%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%28%5Cfrac%7Bn%7D%7B2%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%28%5Cfrac%7Bn%7D%7B2%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%28%5Cfrac%7Bn%7D%7B2%7D%29)

```
Removing All constants and lower order coefficients it is 
O(n power 2)
```

### Big (O) of Nested Loop with Subtraction

```
const n = 10;
const pie = 3.14;
let sum = 0;


for (var i = n; i >= 1; i -= 3) {
    console.log(pie);
    for (var j = n; j >= 0; j--) {
        sum = sum + 1;
    }
}
console.log(sum);
```
so time complexity is 


![first](https://latex.codecogs.com/gif.latex?1&plus;1&plus;1&plus;1&plus;%281&plus;%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%282&plus;%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%281&plus;%5Cfrac%7Bn%7D%7B3%7D%29&plus;%28%5Cfrac%7Bn%7D%7B3%7D%29%281&plus;%5Cfrac%7Bn%7D%7B3%7D%29&plus;1)



so removing constants and lower order coefficint it is 
O(n power 2)

### Big (O) of Nested Loop with Multiplication
```
const n = 10;
const pie = 3.14;
let sum = 0;

var i = 1;

while (i < n) {
    console.log(pie);
    for (var j = 0; j < i; j++) {
        sum = sum + 1;
    }
    i *= 2;

}
console.log(sum)
```




















