/* Takes the head of a linked list as input and returns true if
 *  the linked list is a palindrome and false otherwise
 *
 *  Uses a stack to compare the linked list elements in reverse order
 *
 */

class Node {
  constructor(next, data) {
    this.next = next;
    this.data = data;
  }

  append(data) {
    let current = this;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(null, data);
  }
}

function palindrome(head) {
  let current = head;
  const stack = [];
  // Builds up stack representation of the linked list
  // Stores linked list order in reverse
  while (current) {
    // Looping through everything don't stop at .next
    stack.push(current.data);
    current = current.next;
  }
  current = head;
  while (stack.length > 0) {
    if (current.data !== stack.pop()) {
      return false;
    }
    current = current.next;
  }
  return true;
}

const notPalindrome = new Node(null, "a");
notPalindrome.append("b");
notPalindrome.append("c");

console.log(palindrome(notPalindrome)); // Should return false

const isPalindrome = new Node(null, "a");
isPalindrome.append("b");
isPalindrome.append("a");

console.log(palindrome(isPalindrome)); // Should return true
