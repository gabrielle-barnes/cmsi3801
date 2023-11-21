'''
 A stack with a function that returns the minimum element in O(1)

 @param x The data in the stack
'''
class MinStack:
    def __init__(self):
        self.main_stack = []
        self.min_stack = []

    def my_push(self, x):
        self.main_stack.append(x)
        if len(self.min_stack) == 0 or x <= self.min_stack[-1]:
            self.min_stack.append(x)

    def my_pop(self):
        while (self.main_stack and self.min_stack):
            if (self.main_stack[-1] == self.min_stack[-1] and len(self.main_stack) != 0):
                self.min_stack.pop()
            return self.main_stack.pop()

    def min(self):
        return self.min_stack[-1]

## TEST ##
stack = MinStack()
stack.my_push(8)
stack.my_push(2)
stack.my_push(10)
# Should return 2

print(stack.min())
