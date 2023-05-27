// represents a single node in the list

class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}



class List {
  head;
  constructor(head) {
    this.head = head;
  }
}

let n1 = new Node(5);
let n2 = new Node(10);
let n3 = new Node(15);

n1.next = n2;
n2.next = n3;


let linkedList = new List(n1);

console.log(linkedList.head.data);
console.log(linkedList.head.next.data);
console.log(linkedList.head.next.next.data);
