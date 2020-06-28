## Heap

https://awwapp.com/b/uxbiygrbjy7w3/?dis=%5B%5B%22no-init-modal%22%5D%2C%5B%22join-board%22%5D%5D

```
https://www.youtube.com/watch?v=NEtwJASLU8Q
```

```javascript
class maxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }
  getMax() {
    if (this.elements !== 0) {
      return this.heap[0];
    }
    return null;
  }
  __percolateUp(index) {
    if (index <= 0) {
      // 0 -> root
      return;
    }
    let parent = Math.floor((index - 1) / 2);
    if (this.heap[parent] < this.heap[index]) {
      let temp = this.heap[index];
      this.heap[index] = this.heap[parent];
      this.heap[parent] = temp;
      this.__percolateUp(parent);
    }
  }
  insert(value) {
    this.elements = this.elements + 1; // increse space by 1 bit
    this.heap.push(value);
    this.__percolateUp(this.elements - 1);
  }
}

var heap = new maxHeap();
heap.insert(12);
heap.insert(10);
heap.insert(-10);
heap.insert(100);
console.log(heap);
```
