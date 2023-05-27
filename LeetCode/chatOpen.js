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
  };

  pop = () => {
    let element = this.data[this.top];
    this.data.splice(this.top, 1);
    this.top--;
    return element;
  };

  isEmpty = () => {
    return this.top === -1;
  };
}

let stack = new Stack();
let string = "{[}";
let stringData = string.split("");

const isOpeningBracket = (char) => {
  return char === "(" || char === "[" || char === "{";
};

const isClosingBracket = (char) => {
  return char === ")" || char === "]" || char === "}";
};

const isMatchingPair = (opening, closing) => {
  return (
    (opening === "(" && closing === ")") ||
    (opening === "[" && closing === "]") ||
    (opening === "{" && closing === "}")
  );
};

const isValidParentheses = (s) => {
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (isOpeningBracket(char)) {
      stack.push(char);
    } else if (isClosingBracket(char)) {
      if (stack.isEmpty() || !isMatchingPair(stack.pop(), char)) {
        return false;
      }
    }
  }
  return stack.isEmpty();
};

console.log(isValidParentheses(stringData.join("")));
