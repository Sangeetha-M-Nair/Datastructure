// node to the left is less than parent node and right is more than parent node
// each node with two nodes
// example
//     3
// 2        4

// We create a class for each node within the tree
class Node {
  // Each node has three properties, its value, a pointer that indicates the node to its left and a pointer that indicates the node to its right
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// We create a class for the BST
class BinarySearchTree {
  // The tree has only one property which is its root node
  constructor() {
    this.root = null;
  }
  // The insert method takes a value as parameter and inserts the value in its corresponding place within the tree
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  // The find method takes a value as parameter and iterates through the tree looking for that value
  // If the value is found, it returns the corresponding node and if it's not, it returns undefined
  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  contains(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
  }
}

let tree = new BinarySearchTree();

tree.insert(10);
console.log("Current value of root", tree.root.value);
tree.insert(5);
console.log("To the left", tree.root.left.value);
tree.insert(3);
console.log("To left most", tree.root.left.left.value);
tree.insert(16);
console.log("Right", tree.root.right.value);
tree.insert(18);
console.log("Right", tree.root.right.right.value);

console.log("Searching for 10", tree.find(10));
console.log("Contains  3", tree.contains(3));
