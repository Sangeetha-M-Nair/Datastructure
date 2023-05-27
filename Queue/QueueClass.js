class Queue {
  data;
  tail;
  head;

  constructor() {
    this.data = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(elementToAdd) {
    this.data[this.tail] = elementToAdd;
    this.tail++;
    console.log(elementToAdd, "added to queue");
  }

  dequeue() {
    if (this.head === this.tail) {
      //this will ensure memory released
      this.data = [];
      this.head = 0;
      this.tail = 0;

      console.log("Empty queue");
    } else {
      console.log("Element ", this.data[this.head], " is dequeued");
      this.head++;
    }
  }
}

let queue = new Queue();
queue.enqueue(90);
queue.enqueue(40);
queue.enqueue(87);

queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
