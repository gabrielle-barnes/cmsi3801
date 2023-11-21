'''
 Deletes a node in the middle of a singly linked list,
 Given only access to that node

 @param node_c The node to be deleted
'''
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


# Creating a linked list object
class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        node = Node(data)
        if not self.head:
            self.head = node
        else:
            pointer = self.head
            while pointer.next:
                pointer = pointer.next
            pointer.next = node


# "Deletes" the middle nodes by moving the data to the next index  
def delete_middle(node_c):
    node_c.data = node_c.next.data
    node_c.next = node_c.next.next
    return True


## TEST CASE ##
linked_list = LinkedList()
linked_list.append('a')
linked_list.append('b')
linked_list.append('c')
linked_list.append('d')
linked_list.append('e')

middle_node = linked_list.head.next.next
delete_middle(middle_node)

pointer = linked_list.head
while pointer:
    print(pointer.data, end=" -> ")
    pointer = pointer.next

print("|")