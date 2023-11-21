/* Creates a linked list and the reversed version of the linked list
 *  compares the data in the nodes to determine if a palindrome or not
 *
 */

class Node {
  constructor(nextNode, data) {
    this.nextNode = nextNode || null;
    this.data = data;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adding data into a linked list
  append(data) {
    const newNode = new Node(null, data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode;
    }

    currentNode.nextNode = newNode;
  }

  reverseList(node) {
    let prev;
    let current = node;
    while (current) {
      const next = current.nextNode;
      current.nextNode = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  isPalindrome() {
    let originalList = this.head;
    let reversedList = this.reverseList(this.head);

    while (originalList && reversedList) {
      if (originalList.data.toLowerCase() !== reversedList.data.toLowerCase()) {
        return false;
      }

      originalList = originalList.nextNode;
      reversedList = reversedList.nextNode;
    }

    return true;
  }
}

// Test Cases:
const linkedList1 = new LinkedList();
linkedList1.append("a");
linkedList1.append("b");
linkedList1.append("B");
linkedList1.append("a");
console.log(linkedList1.isPalindrome()); // Should return true

const linkedList2 = new LinkedList();
linkedList2.append("a");
linkedList2.append("c");
linkedList2.append("d");
linkedList2.append("e");
console.log(linkedList2.isPalindrome()); // Should return false
