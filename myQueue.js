/* Implements a queue data structure using two stacks
 *  Achieves the FIFO behavior by transferring elements back and forth
 *
 *  @param toEnqueue The item to be pushed onto the stacks
 *
 */

class MyQueue {
  constructor() {
    this.storage = [];
    this.temporary = [];
  }

  // The items go back and forth between two stacks in order to keep the FIFO order
  enqueue(toEnqueue) {
    while (this.storage.length > 0) {
      this.temporary.push(this.storage.pop());
    }

    this.storage.push(toEnqueue);

    while (this.temporary.length > 0) {
      this.storage.push(this.temporary.pop());
    }
  }

  // Returns the first item added in the queue
  dequeue() {
    return this.storage.pop();
  }
}

// Test Case:
const queue1 = new MyQueue();
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

const queue2 = new MyQueue();
queue2.enqueue("c");
queue2.enqueue("a");
queue2.enqueue("t");
console.log(queue2.dequeue());
console.log(queue2.dequeue());
console.log(queue2.dequeue());
