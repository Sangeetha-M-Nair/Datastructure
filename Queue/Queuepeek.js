class Queue {
  data;
  head;
  tail;

  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  enque(elementToAdd) {
    this.data[this.tail] = elementToAdd;
    console.log(elementToAdd, "added");
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) {
      this.data = []; /**This will ensure memory released */
      this.head = 0;
      this.tail = 0;
      console.log("Queue is empty");
    } else {
      console.log(this.data[this.head], "is dequeued");
      this.head++;
    }
  }

  peek() {
    if (this.head != this.tail)
      console.log("Element at top queue", this.data[this.head]);
  }

  printAll() {
    let start = this.head;
    let end = this.tail;
    while (start < end) {
      console.log("Element in Queue", this.data[start]);
      start++;
    }
  }
}

let q = new Queue();
q.enque(90);
q.enque(70);
q.enque(50);
q.peek();
q.printAll();

/** 
q.dequeue()
q.dequeue()
q.dequeue()
q.dequeue()
**/
