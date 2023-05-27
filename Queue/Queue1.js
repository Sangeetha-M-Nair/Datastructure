let data = [];
let head = 0;
let tail = 0;

function enqueue(elementToAdd) {
  data[tail] = elementToAdd;
  tail++;
  console.log(elementToAdd, "added to queue");
}

function dequeue() {
  if (head === tail) {
    console.log("Empty queue");
  } else {
    console.log("Element ", data[head], " is dequeued");
    head++;
  }
}
enqueue(90);
enqueue(40);
enqueue(87);

// when u add anything tail has to increment
// when u delete head will increment

dequeue();
dequeue();
dequeue();
dequeue();
