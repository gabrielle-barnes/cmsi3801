class LinkedList { 
    constructor(next, data) {
        this.next = next;
        this.data = data;
    }

    append(data) {
        let tail = new LinkedList(null, data);
        let current = this; // refferring to myself, this variable is a placeholder
        while (current.next !== null) {
            current = current.next;
        }
        //current.next == null at end of linked list, adding new end
        current.next = tail;
    }
}

function palindrome(head) {
    let current = head;
    let stack = [];
    // builds up stack representation of the linked list
    // stores linked list order in reverse
    while (current !== null) {
        // Looping through everything don't stop at .next
        stack.push(current.data);
        current = current.next;
    }
    current = head;
    for (i = 0; i < stack.length; i++) {
        if (current.data !== stack.pop()) {
            return false;
        }
        current = current.next;
    }
    return true;
}

let notPalindrome = new LinkedList(null, "a");
notPalindrome.append("b");
notPalindrome.append("c");

console.log(palindrome(notPalindrome)); // should return false

let isPalindrome = new LinkedList(null, "a");
isPalindrome.append("b");
isPalindrome.append("a");

console.log(palindrome(isPalindrome)); // should return true