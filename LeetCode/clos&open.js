// https://redquark.org/leetcode/0020-valid-parentheses/
// stack

class Stack {
  data;
  top;
  constructor() {
    this.data = [];
    this.top = -1;
  }

  push = (elementToAdd) => {
    this.top++;
    this.data[this.top] = elementToAdd;
    console.log(elementToAdd, "is added");
  };

  pop = () => {
    let element = this.data[this.top];
    this.data.splice(this.top, 1);
    this.top--;
    return element;
  };
}

let stack = new Stack();
let string = "[{(}]";
let valid = true;
let stringData = string.split("");

for (let i = 0; i < stringData.length; i++) {
  let element = stringData[i];
  console.log("element" + element);

  if (element === "[" || element === "{" || element === "(") {
    stack.push(element);
    console.log("stack", stack);
  } else {
    let topFromStack = stack.pop();
    console.log(topFromStack);
    if (topFromStack === "[" && element !== "]") {
      valid = false;
      break;
    }
    if (topFromStack === "{" && element !== "}") {
      valid = false;
      break;
    }
    if (topFromStack === "(" && element !== ")") {
      valid = false;
      break;
    }
  }
}

console.log("Valid", valid);
