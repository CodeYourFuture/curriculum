+++
title = "Inheritance"
time = 30
objectives = [
  "Define inheritance.",
  "Write a class which extends another class.",
  "Explain which method will get called when a subclass overrides some methods in superclass.",
  "Explain the difference between inheritance and composition.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

In this prep we have seen how add methods to classes to encapsulate functionality. We have seen how to use generics to force classes to work with certain types. Keeping code reusability and maintainability in mind, what if we wanted to add a new class that did mostly the same as an existing class, but with some slight changes?

Classes can _extend_ other classes to share most of their functionality but add or replace some of it. A class that carries over something from another class is called _inheritance_.

Read the following code:

```python
from typing import Iterable, Optional

class ImmutableNumberList:
    # We accept any `Iterable[int]` here, so can construct with a list, a set, or anything else that can be iterated.
    def __init__(self, elements: Iterable[int]):
        # We copy the elements so that if someone mutates the passed in elements list, our copy won't be mutated.
        self.elements = [element for element in elements]

    def first(self) -> Optional[int]:
        if not self.elements:
            return None
        return self.elements[0]

    def last(self) -> Optional[int]:
        if not self.elements:
            return None
        return self.elements[-1]

    def length(self) -> int:
        return len(self.elements)
    
    def largest(self) -> Optional[int]:
        # To find the largest element, we need to go through the entire list (which may take some time).
        if not self.elements:
            return None
        largest = self.elements[0]
        for element in self.elements:
            if element > largest:
                largest = element
        return largest


# A SortedImmutableNumberList is the same as an ImmutableNumberList,
# but it changes some aspects.
class SortedImmutableNumberList(ImmutableNumberList):
    def __init__(self, elements: Iterable[int]):
        # We do extra work here when constructing the list,
        # to make sure the elements are sorted.
        # This takes more time than the ImmutableNumberList version would.
        super().__init__(sorted(elements))

    # This method overrides (replaces) the method with the same name on the super-class.
    def largest(self) -> Optional[int]:
        # Because we know the elements were already sorted in the constructor,
        # we can implement finding the largest number faster.
        # We don't need to look through every element - we know the largest element is at the end.
        # Because we did extra work one time before (in the constructor),
        # we can avoid re-doing that work every time someone calls `largest()`.
        return self.last()

    def max_gap_between_values(self) -> Optional[int]:
        if not self.elements:
            return None
        previous_element = None
        max_gap = -1
        for element in self.elements:
            if previous_element is not None:
                gap = element - previous_element
                if gap > max_gap:
                    max_gap = gap
            previous_element = element
        return max_gap


values = SortedImmutableNumberList([1, 19, 7, 13, 4])
print(values.largest())
print(values.max_gap_between_values())

unsorted_values = ImmutableNumberList([1, 19, 7, 13, 4])
print(unsorted_values.largest())
print(unsorted_values.max_gap_between_values())  # This doesn't work - the superclass doesn't define this method.
```

We have two classes that behave the same. They both have a constructor, and four methods (`first`, `last`, `largest`, `length`). `SortedImmutableNumberList` also has an extra method: `max_gap_between_values` which `ImmutableNumberList` does not have.
The method implementations are different for the two classes. They have different trade-offs to consider.

{{<note type="exercise">}}

**Task 14**

A copy of this code is in file `14-analyse.py`

Try using this code and make sure you understand how it works and what it does

Answer the following questions, writing your answers in the file, before checking the answers.

Q1: If you know in advance you need to frequently access the largest item of the list, which class will be more efficient and why?

Q2: If you know in advance you will be initialising many of them repeatedly, which class will be more efficient and why?

<details>

<summary>Expand for some answers after you've listed your own.</summary>
Q1: `SortedImmutableNumberList` sorts the numbers in advance, and the method implementation for largest item only needs to look at the final item of the sorted list. This means accessing it is faster.
Q2: `ImmutableNumberList` doesn't need to sort the numbers immediately on creation. If you only intended to use `first` and `last`, it may be faster.

Of course, it all depends on which functions you think you will need.
You will learn more about these efficiency concepts in the upcoming complexity module.

</details>
{{</note>}}

Many programming libraries will have different versions of classes optimised for different tasks, and even if the API to use them is the same, you should be careful considering which one is appropriate for your specific use case.
As you develop your own code, you may find it beneficial to extend certain classes to assist with certain tasks, and this may help you maintain your code or make it more efficient.
Inheritance is a great way of helping you achieve this.


{{<note type="exercise">}}
**Task 15**

Look at file `15-playcomputer.py`

Play computer with this code

Describe what is happening and why on each line that accesses the person objects

If any lines cause errors, comment out the line and explain why the error happens
{{</note>}}


{{<note type="Reading">}}
Inheritance is only one way of extending classes.
Another technique is called "composition" and this allows you to combine behaviours from many different classes.

Have a read of [this article describing the differences between composition and inheritance](https://sheldonrcohen.medium.com/favoring-composition-over-inheritance-ff2ece6b7b4e) and [this article exploring when each makes sense](https://www.thoughtworks.com/en-gb/insights/blog/composition-vs-inheritance-how-choose).
{{</note>}}
