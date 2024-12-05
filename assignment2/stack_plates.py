'''
 Creates multiple stacks in a stack

'''
import functools

class SetOfStacks:
    # where 5 is capacity
    def __init__(self):
        self.index = 0
        self.stacks = [[]]
        self.capacity = 5

    def __len__(self):
        return functools.reduce(lambda a, b: len(a) + len(b), self.stacks)

    def set_push(self, item):
        if len(self.stacks[self.index]) < self.capacity:
            self.stacks[self.index].append(item)
        else:
            self.index += 1
            self.stacks.append([item])

    def set_pop(self):
        if len(self.stacks[self.index]) == 0:

            if self.index == 0:
                return None

            self.index -= 1
        self.stacks[self.index].pop()

## TEST CASES: ##
stack_set = SetOfStacks()

# Test pushing elements
stack_set.set_push(1)
stack_set.set_push(2)
stack_set.set_push(3)
stack_set.set_push(4)
stack_set.set_push(5)
stack_set.set_push(6)

print(len(stack_set))

# Test popping elements
stack_set.set_pop()
stack_set.set_pop()
stack_set.set_pop()
stack_set.set_pop()
stack_set.set_pop()
popped_value = stack_set.set_pop()  # The last pop, which should be 6

# Check the length of the SetOfStacks after popping all elements
print(len(stack_set))
