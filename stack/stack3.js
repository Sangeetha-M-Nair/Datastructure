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
  /**
   * Peek method will print the value pointed by top
   * It does not remove value or alter stack
   */
  
  peek() {
    if (this.top > -1)
      console.log("Current element at top", this.data[this.top]);
    else console.log("Empty stack");
  }
  /**
   * Print all elements in stack. Does not modify it
   */
  printEntireStack() {
    let i = this.top;
    while (i > -1) {
      console.log("Element in stack is  ", this.data[i]);
      i--;
    }
  }

  pop() {
    if (this.top === -1) {
      console.log("Empty stack");
    } else {
      console.log(this.data[this.top], "is removed");
      this.data.splice(this.top, 1);
      //Splice takes index and number of elemets to delete from that index;
      this.top--;
    }
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.peek();
stack.printEntireStack();

/*stack.pop();
stack.pop();
stack.pop();
stack.pop();
*/
