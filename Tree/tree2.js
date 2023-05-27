class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

class Tree {
  constructor(root) {
    this.root = root;
  }

  print(node) {
    if (node.children.length > 0) {
      console.log("Node value", node.data);
      console.log("Children");
      for (let i = 0; i < node.children.length; i++) {
        this.print(node.children[i]);
      }
    } else {
      console.log("Leaf node", node.data);
    }
  }
}

let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

n1.children.push(n2);
n2.children.push(n3);
n3.children.push(n4);
n4.children.push(n5);
n5.children.push(n6);
n5.children.push(n7);
n5.children.push(n8);

let tree = new Tree(n1);

tree.print(tree.root);
