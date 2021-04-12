class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    //push the value into the values property on the heap
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    // We will begin by adding new elements to the end of the array
    let idx = this.values.length - 1;
    const element = this.values[idx];
    //console.log("element", element);
    while (idx > 0) {
      //remember to find a parent index we have the formula Math.floor(n -1)/2
      //we floor it because indices must be whole numbers
      let parentIdx = Math.floor((idx - 1) / 2);
      //we access the parent element by its index
      let parent = this.values[parentIdx];
      //the loop will run until the element has found its place
      //beneath a parent with a greater value
      // REMEMBER, in a MaxBinary heap, the parent must be greater
      //than each of its children
      if (element <= parent) break;
      //thisloop will continue until either the element in question has a smaller value
      // than its parent or an equal value to its parent
      // we switch their positions in the values array
      //the larger element bubbles up one level and the loop continues
      // only next time we are comparing the parent of this loop with its parent
      console.log("before", "this.values[parentIdx]", this.values[parentIdx]);
      console.log("before", "this.values[idx]", this.values[idx]);
      console.log("before", "idx", idx);
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
      console.log("after", "this.values[parentIdx]", this.values[parentIdx]);
      console.log("after", "this.values[idx]", this.values[idx]);
      console.log("after", "idx", idx);
      console.log("values array", this.values);
    }
  }
  extractMax() {
    // set a variable max to equal the first element from the values array
    //remember, in a max heap, the root will always contain the highest value
    const max = this.values[0];
    //remove the last element from the values and contain it in a variable
    const end = this.values.pop();

    // we need this condition to take care of the edge case when there is only one element
    //in  the this.values array. Without this conditional
    //we would simply be removing the only element with end= this.values.pop()
    //and then adding it back with this.values[0] =  end
    if (this.values.length > 0) {
      this.values[0] = end;
      //Now we must bubbleDown
      this.bubbleDown();
    }

    console.log(max);
    return max;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * idx + 1;
      let rightChildIndex = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      //this conditional makes sure that the index for left child is
      // not greater than the amount of elements we have in our values array
      //aka it checks whether leftChildIndex is out of bounds
      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          //this variable swap is going to keep track
          //of the position that we are going to swap with
          //so far a swap will only be made if the left child is larger than the element
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
      }
      // now there are two scenarios where we would want to swap with right
      //1. the left child was smaller than the element (and no swap has occured)
      //but the right child was larger than the element
      //2. the left child was larger than the element(aka a swap has occured)
      //but the right child  was larger than the left child
      if (
        (swap === null && rightChild > element) ||
        (swap !== null && rightChild > leftChild)
      ) {
        swap = rightChildIndex;
      }
      //if no swap has occured by this point then
      //the parent is greater than both of its children
      // and the order of elements in this.values follows the rules of a max heap
      // our work is done here we may break out of our loop
      if (swap === null) break;
      //if not then we must actually make the swap and continue to the next iteration

      console.log("before swap", this.values[idx], "this.values[idx]");
      console.log("before swap", element, "element");
      console.log("before swap", this.values, "this.values");

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;

      console.log("after swap", this.values[idx], "this.values[idx]");
      console.log("after swap", element, "element");
      console.log("after swap", this.values, "this.values");
    }
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }
  bubbleDown() {
    let idx = 0;
    let element = this.values[0];
    let length = this.values.length;
    while (true) {
      let leftChildIdx = 2 * idx + 1; //2n + 1
      let rightChildIdx = 2 * idx + 2; //2n +2
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap == null && rightChild > element) ||
          (!swap == null && rightChild > leftChild)
        ) {
        }
        if (
          (swap == null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }

        if (swap === null) break;

        this.values[idx] = this.values[swap];
        this.values[swap] = element;
        idx = swap;
      }
    }
  }
}
//       55                                               12
//   41      39                                      41        39
// 33 27    18  12    first step of bubbleDown    33    27   18

// this.values = [55, 39, 41, 18, 27, 12, 33]
// let heap = new MaxBinaryHeap();
// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);
// console.log(heap);

// heap.extractMax();
// heap.extractMax();
// console.log(heap.values);

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (parent <= element) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMin() {
    let min = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    console.log(min);
    return min;
  }
  bubbleDown() {
    let indx = 0;
    let element = this.values[0];
    let length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * indx + 1;
      let rightChildIdx = 2 * indx + 2;
      let rightChild, leftChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
      }

      if (
        (swap == null && rightChild < element) ||
        (swap !== null && rightChild < leftChild)
      ) {
        swap = rightChildIdx;
      }

      //Swap Places:

      //place swap's element in the indx position
      this.values[indx] = this.values[swap];
      //place the element we've been comparing in swap's postion
      this.values[swap] = element;
      // replace the index contained in the comparison variable called idx
      // with the "swap" index
      // indx starts at 0 and becomes larger as we go deeper into the heap
      indx = swap;
      //swap will only equal null once every node is in its correct place
      if (swap == null) break;
    }
  }
}

let minHeap = new MinBinaryHeap();
minHeap.insert(41);
minHeap.insert(39);
minHeap.insert(33);
minHeap.insert(18);
minHeap.insert(27);
minHeap.insert(12);
minHeap.insert(55);

console.log(minHeap);
minHeap.extractMin();

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return min;
  }
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
