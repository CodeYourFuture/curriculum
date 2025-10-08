+++
title = "Dataclasses"
time = 30
objectives = [
  "Define a value type.",
  "Use `@dataclass` in Python to make a value type.",
  "Customise a `@dataclass` in Python with extra methods."
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

We've seen that grouping together fields and methods into a class can help us encapsulate them. We can define a class whose purpose is just to group together related data, and provide access to it.

Our `Person` class is an example of this. We just store some data in it (and maybe add some methods that just read that data).

If a class is just a place to group related data, it is sometimes called a {{<tooltip title="Value object" text="value object">}}A value object is an object which exists just to store data. They are normally immutable (never change).{{</tooltip>}}. We normally consider two value objects to be equal to each other if their fields contain the same values.

There are several functions we can implement on classes that have obvious implementations for value objects.

Equality is one: ideally two value objects are the same if their fields are the same. But this is not the case with objects by default:

```python
class Person:
    def __init__(self, name: str, age: int, preferred_operating_system: str):
        self.name = name
        self.age = age 
        self.preferred_operating_system = preferred_operating_system

imran = Person("Imran", 22, "Ubuntu")
imran2 = Person("Imran", 22, "Ubuntu")
print(imran == imran2)  # Prints False
```

Similarly, it's useful when we print a value object to see its type and fields. But this is not the case with objects by default:

```python
class Person:
    def __init__(self, name: str, age: int, preferred_operating_system: str):
        self.name = name
        self.age = age
        self.preferred_operating_system = preferred_operating_system

imran = Person("Imran", 22, "Ubuntu")
print(imran)  # Prints <__main__.Person object at 0x1048b5a90>
```

Python has a useful {{<tooltip text="decorator" title="Decorator">}}A decorator is an annotation you can add to some Python code to give it extra behaviour.{{</tooltip>}} called `dataclass` which generates some of these functions for us. In fact, it even generates the constructor for us.

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Person:
    name: str
    age: int
    preferred_operating_system: str

imran = Person("Imran", 22, "Ubuntu")  # We can call this constructor - @dataclass generated it for us.
print(imran)  # Prints Person(name='Imran', age=22, preferred_operating_system='Ubuntu')

imran2 = Person("Imran", 22, "Ubuntu")
print(imran == imran2)  # Prints True
```

The `dataclass` decorator generated a constructor, a `__str__` method (which is called when string formatting the value), and a custom `__eq__` method (which is called when comparing two values). This saves us having to write all of that code.

Other languages have a similar idea of a value type, and tools to help make them, such as [Java's record classes](https://docs.oracle.com/en/java/javase/17/language/records.html) and [C#'s' structure types](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/builtin-types/struct).

{{<note type="exercise">}}
Write a `Person` class using `@datatype` which uses a `datetime.date` for date of birth, rather than an `int` for age.

Re-add the `is_adult` method to it.
{{</note>}}
