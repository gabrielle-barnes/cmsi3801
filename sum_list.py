'''
 Given two numbers, where the digits are stored in reverse order
 Adds the numbers and returns the sum as a linked list

 @param l1, l2 The linked lists to be added together
'''

class Node:
    def __init__(self, data, next):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        node = Node(data, None)
        if self.head == None:
            self.head = node
        else:
            temp = self.head
            while(temp.next != None):
                temp = temp.next
            temp.next = node
            # appending to the end of the list

    # Builds a string representation of the linked list
    def __repr__(self): 
        temp = self.head
        s = ''
        while(temp != None):
            s += "(%d) -> " % temp.data
            temp = temp.next
        s += "|"
        return s
        
# Adding the linked list nodes, while keeping track of a carry
def addition(l1, l2):
    temp1 = l1.head
    temp2 = l2.head
    answer = LinkedList()
    carry = 0  
    while(temp1 != None and temp2 != None):
        my_sum = temp1.data + temp2.data + carry

        if(my_sum >= 10):
            digit = my_sum - 10 
            carry = 1
        else:
            digit = my_sum
            carry = 0
        
        temp1 = temp1.next
        temp2 = temp2.next
        answer.append(digit)
        
    return answer
    

l1 = LinkedList()
l2 = LinkedList()

l1.append(7)
l1.append(1)
l1.append(6)

l2.append(5)
l2.append(9)
l2.append(2)

print(l1)
print(l2)
print("\n")

my_answer = addition(l1, l2)
print(my_answer)
