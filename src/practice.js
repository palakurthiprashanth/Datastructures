class twostacks {
  constructor(s) {
    this.arr = [];
    this.size = s;
    this.top1 = -1;
    this.top2 = s;
  }
  push1(value) {
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = value;
    }
  }
  push2(value) {
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = value;
    }
  }
  pop1() {
    if (this.top1 >= 0) {
      let value = this.arr[this.top1];
      this.top1--;
      return value;
    } else {
      return -1;
    }
  }
  pop2() {
    if (this.top2 < this.size) {
      let value = this.arr[this.top2];
      this.top2++;
      return value;
    } else {
      return -1;
    }
  }
  print() {
    console.log(this.arr);
  }
}

let mystack = new twostacks(3);
mystack.push1(0);
mystack.push2(2);
mystack.push1(1);
mystack.print(); // 0,1,2
mystack.pop1();
mystack.print();
