class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        //push the value into the values property on the heap
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){

        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            //the loop will run until the element has found its place 
            //beneath a parent with a greater value
            // REMEMBER, in a MaxBinary heap, the parent must be greater 
            //than each of its children 
            if(element <= parent) break;
             //thisloop will continue until either the element in question has a smaller value 
             // than its parent or an equal value to its parent
            // we switch their positions in the values array
            //the larger element bubbles up one level and the loop continues
            // only next time we are comparing the parent of this loop with its parent
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
           
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);