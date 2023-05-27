var data = [];
var top = -1;
// means empty


function push(elementToAdd) {
  top++; //increase the top by 1
  data[top] = elementToAdd;
  console.log("Added ", elementToAdd);
}

function pop() {
  if (top === -1) {
    console.log("Stack is empty..nothing to pop");
  } else {
    console.log(data[top], "is removed from stack");
    top--;
  }
}

push(20);
push(45);
pop();
pop();
pop();
