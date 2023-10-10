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
        if self.head is None:
            self.head = node
        else:
            temp = self.head
            while(temp.next is not None):
                temp = temp.next
            temp.next = node

# "Deletes" the middle nodes by moving the data to the next index  
def delete_middle(node_c):
    node_c.data = node_c.next.data
    node_c.next = node_c.next.next
    return True


## TEST CASE ##
l = LinkedList()
l.append('a')
l.append('b')
l.append('c')
l.append('d')
l.append('e')

middle_node = l.head.next.next
delete_middle(middle_node)

temp = l.head
while temp is not None:
    print(temp.data, end=" -> ")
    temp = temp.next

print("|")