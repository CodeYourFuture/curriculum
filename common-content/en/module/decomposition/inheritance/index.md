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

Classes can extend other classes to share most of their functionality but add or replace some of it.

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

The `largest` implementation is different for the two classes. They have different trade-offs. If we will frequently need to get the largest value from the list, `ImmutableNumberList` is going to be slower, because it looks through every element every time it needs to find the largest value. If instead we will frequently need to get the length of the list, `ImmutableNumberList` is going to be faster, because it does less work in the constructor.

{{<note type="Reading">}}
Programmers used to use inheritance a lot. Over time, many people are preferring composition over inheritance.

Have a read of [this article describing the differences between composition and inheritance](https://sheldonrcohen.medium.com/favoring-composition-over-inheritance-ff2ece6b7b4e) and [this article exploring when each makes sense](https://www.thoughtworks.com/en-gb/insights/blog/composition-vs-inheritance-how-choose).
{{</note>}}

{{<note type="exercise">}}
Play computer with this code. Predict what you expect each line will do. Then run the code and check your predictions. (If any lines cause errors, you may need to comment them out to check later lines).

```python
class Parent:
    def __init__(self, first_name: str, last_name: str):
        self.first_name = first_name
        self.last_name = last_name

    def get_name(self) -> str:
        return f"{self.first_name} {self.last_name}"


class Child(Parent):
    def __init__(self, first_name: str, last_name: str):
        super().__init__(first_name, last_name)
        self.previous_last_names = []

    def change_last_name(self, last_name) -> None:
        self.previous_last_names.append(self.last_name)
        self.last_name = last_name

    def get_full_name(self) -> str:
        suffix = ""
        if len(self.previous_last_names) > 0:
            suffix = f" (née {self.previous_last_names[0]})"
        return f"{self.first_name} {self.last_name}{suffix}"

person1 = Child("Elizaveta", "Alekseeva")
print(person1.get_name())
print(person1.get_full_name())
person1.change_last_name("Tyurina")
print(person1.get_name())
print(person1.get_full_name())

person2 = Parent("Elizaveta", "Alekseeva")
print(person2.get_name())
print(person2.get_full_name())
person2.change_last_name("Tyurina")
print(person2.get_name())
print(person2.get_full_name())
```
{{</note>}}
