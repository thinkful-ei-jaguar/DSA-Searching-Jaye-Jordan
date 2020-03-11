//Linear Search 
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

//Binary Search 
function binarySearch(array, value, start=0, end=array.length-1) {
  if (start > end) {
    return -1;
  }

  //find the midpoint and the item att the midpoint 
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //if the middle element is the target them return that location
  if (item == value) {
    return index;
  }

  //if the middle element is less than the target then the target lies 
  //on the right side so eliminate all left side and only 
  //consider after the middle to the end of the array
  else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  }
  //if the middle element is greater than the target then the 
  //target is on the left side so the left of the middle 
  else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

//Binary Search Tree - DFS (including orders) and BFS
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  //Depth-first search
  dfs(values=[]) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);

    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }

  dfsPreOrder(){
    // Pre-order
    // Process Node
    // Recursively step left
    // Recursively step right
    console.log(this.key);
    if (this.left) {
      this.left.dfsPreOrder();
    }
    if (this.right) {
      this.right.dfsPreOrder();
    }
  }

  dfsInOrder(){
    // Recursively step left 
    // Process Node
    // Recursively step right
    if (this.left) {
      this.left.dfsInOrder();
    }
    console.log(this.key);
    if (this.right) {
      this.right.dfsInOrder();
    }
  }

  dfsPostOrder() {
    if (this.left) {
      this.left.dfsPostOrder();
    }
    if (this.right) {
      this.right.dfsPostOrder();
    }
    console.log(this.key);
  }

  // Breadth-first search
  bfs(tree, values = []) {
    const queue = new Queue(); // Assuming a Queue is implemented (refer to previous lesson on Queue)
    const node = tree.root;
    queue.enqueue(node);
    while (queue.length) {
      const node = queue.dequeue(); //remove from the queue
      values.push(node.value); // add that value from the queue to an array

      if (node.left) {
        queue.enqueue(node.left); //add left child to the queue
      }

      if (node.right) {
        queue.enqueue(node.right); // add right child to the queue
      }
    }

    return values;
  }
}