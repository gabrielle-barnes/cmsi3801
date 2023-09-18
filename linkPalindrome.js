class Node {
    constructor(nextNode, data) {
        this.nextNode = nextNode || null;
        this.data = data;
    }

    // Adding data into a linked list
    append(data) {
        const newNode = new Node(null, data);
        let currentNode = this;
        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;        
        }
        currentNode.nextNode = newNode;
    }

    // Uses a helper function to check if a linked list is a palindrome
    isPalindrome() {

        // Reverses a linked list and keeps a copy of it
        function reverseAndCopy(node) {
            let prev = null;
            let current = node;
            while (current !== null) {
                const next = current.nextNode;
                current.nextNode = prev;
                prev = current;
                current = next;
            }
            return prev;
        }
        let originalList = this;
        let reversedList = reverseAndCopy(this);

        while (originalList !== null && reversedList !== null) {

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
const headNode = new Node(null, "a");
headNode.append("b");
headNode.append("B");
headNode.append("a");
console.log(headNode.isPalindrome());

const headNode2 = new Node(null, "a");
headNode.append("b");
headNode.append("c");
headNode.append("d");
console.log(headNode.isPalindrome());