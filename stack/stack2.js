class Stack {
  data;
  top;
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push(elementToAdd) {
    this.top++;
    this.data[this.top] = elementToAdd;
    console.log(elementToAdd, " is added to stack");
  }

  pop() {
    if (this.top === -1) {
      console.log("Empty stack");
    } else {
      console.log(this.data[this.top], "is removed");
      this.data.splice(this.top, 1);
      //remove the current top amd dec top =top-1
      this.top--;
    }
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

stack.pop();
stack.pop();
stack.pop();
stack.pop();
