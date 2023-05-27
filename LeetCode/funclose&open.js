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
    //    console.log(elementToAdd, "is added");
  };

  pop = () => {
    let element = this.data[this.top];
    this.data.splice(this.top, 1);
    this.top--;
    return element;
  };
}

function findStringIsValid(string) {
  let stack = new Stack();

  let valid = true;
  let stringData = string.split("");
  for (let i = 0; i < stringData.length; i++) {
    let element = stringData[i];
    if (element === "[" || element === "{" || element === "(") {
      stack.push(element);
    } else {
      let topFromStack = stack.pop();
      if (
        (topFromStack === "[" && element !== "]") ||
        (topFromStack === "{" && element !== "}") ||
        (topFromStack === "(" && element !== ")")
      ) {
        valid = false;
        break;
      }
    }
  }

  //  console.log("Valid", valid);
  return valid;
}

let strings = ["{}", "{]", "{[]}", "[{}]", "[{()}]", "{}[]"];

for (let i = 0; i < strings.length; i++) {
  let element = strings[i];
  console.log(element, findStringIsValid(element));
}

