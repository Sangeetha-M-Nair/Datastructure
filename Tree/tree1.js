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

let n1 = new Node(10);
let n2 = new Node(11);
let n3 = new Node(12);
let n4 = new Node(14);

n1.children.push(n2);
n1.children.push(n3);
n2.children.push(n4);

let tree = new Tree(n1);
tree.print(tree.root);

//            n1
//        n2       n3
//        n4
