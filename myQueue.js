class myQueue {
    constructor() {
        this.storage = [];
        this.temporary = [];
    }
    // The items go back and forth between two stacks in order to keep the FIFO order
    enqueue(to_enqueue) {
        while (this.storage.length != 0) {
            const item = this.storage.pop();
            this.temporary.push(item);
        }
        this.storage.push(to_enqueue);
        while (this.temporary.length != 0) {
            const item = this.temporary.pop();
            this.storage.push(item);
        }
    }
    // Returns the first item added in the queue
    dequeue() {
        return this.storage.pop();
    }
}
// TO DO make display function
// Test Case:
const queue1 = new myQueue()
queue1.enqueue("s");
queue1.enqueue("p");
queue1.enqueue("i");
queue1.enqueue("c");
queue1.enqueue("e");
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());

console.log("\n");

const queue2 = new myQueue()
queue2.enqueue("c");
queue2.enqueue("a");
queue2.enqueue("t");
console.log(queue2.dequeue());
console.log(queue2.dequeue());
console.log(queue2.dequeue());