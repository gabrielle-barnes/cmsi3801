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
        if not self.head:
            self.head = node
        else:
            pointer = self.head

            while (pointer.next):
                pointer = pointer.next
            pointer.next = node
            # Appending to the end of the list

    # Builds a string representation of the linked list
    def __repr__(self):
        pointer = self.head
        string_repr = ''
        while pointer:
            string_repr += "(%d) -> " % pointer.data
            pointer = pointer.next
        return string_repr + "|"

# Adding the linked list nodes, while keeping track of a carry
def addition(link_list1, link_list2):
    pointer1 = link_list1.head
    pointer2 = link_list2.head
    added_list = LinkedList()
    carry = 0
    while (pointer1 and pointer2):
        sum = pointer1.data + pointer2.data + carry

        if sum >= 10:
            digit = sum - 10
            carry = 1
        else:
            digit = sum
            carry = 0

        pointer1 = pointer1.next
        pointer2 = pointer2.next
        added_list.append(digit)

    return added_list


link_list1 = LinkedList()
link_list2 = LinkedList()

link_list1.append(7)
link_list1.append(1)
link_list1.append(6)

link_list2.append(5)
link_list2.append(9)
link_list2.append(2)

print(link_list1)
print(link_list2)
print("\n")

print(addition(link_list1, link_list2))
