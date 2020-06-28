class maxHeap {
  constructor() {
    this.heap = [];
    this.elements = 0;
  }
  getMax() {
    if (this.elements) {
      return this.heap[0];
    }
    return null;
  }
  __percolateUp(index) {
    if (index < 0) {
      return;
    }
    var parent = Math.floor((index - 1) / 2);
    if (this.heap[parent] < this.heap[index]) {
      var temp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = temp;
      this._percolateUp(this.heap[index]);
    }
  }
  __maxHeapify(index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;
    if (this.elements > left && this.heap[largest] < this.heap[left]) {
      largest = left;
    }
    if (this.elements > right && this.heap[largest] < this.heap[right]) {
      largest = right;
    }
    if (largest !== index) {
      let temp = this.heap[largest];
      this.heap[largest] = this.heap[index];
      this.heap[index] = temp;
      this.__maxHeapify(largest);
    }
  }
  insert(val) {
    this.elements = this.elements + 1;
    this.heap.push(val);
    this.__percolateUp(this.elements - 1);
  }
  removeMax() {
    if (this.elements > 1) {
      var max = this.heap[0];
      this.heap[0] = this.heap[this.elements - 1];
      this.elements = this.elements - 1;
      this.__maxHeapify(0);
      return max;
    }
  }
  buildHeap(arr) {
    this.heap = arr;
    this.elements = this.heap.length;
    for (var i = this.heap.length - 1; i >= 0; i--) {
      this.__maxHeapify(i);
    }
  }
}

var heap = new maxHeap();
var arrayList = [6, 9, 3, 4, 13, 22, 1, 30, 17];
heap.buildHeap(arrayList);
console.log(heap.heap);
console.log(heap.removeMax());
console.log(heap.heap);
