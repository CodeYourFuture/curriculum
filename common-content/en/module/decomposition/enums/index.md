+++
title = "Enums"
time = 30
objectives = [
  "Identify risks of using strings to represent data.",
  "Define an enum.",
  "Explain how an enum addresses the risks of using strings to represent data.",
  "Write code which checks string validity once, and then uses type-checking to avoid further validity checks.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

In the laptops example, we were using strings to store operating systems. Using strings is often problematic because they can take lots of different values. When we have a known set of possible values it is useful to ensure only those values can occur.

Some common problems with strings:
* Case sensitivity - are `"macOS"` and `"MacOS"` the same? Should they be?
* Spaces - are `"ArchLinux"` and `"Arch Linux"` the same? Should they be?
* Normalised values - are `"Arch Linux"` and `"Arch"` the same? Should they be?
* Typos - is `"Arc Linux"` meant to be `"Arch Linux"`?  Or is it a separate operating system?

In fact, in the previous example, the laptop with id 3 was never put in anyone's preferred list, because its operating system was spelled `Ubuntu` not `ubuntu`.

We can use enums to represent that one some values are allowed, and make sure we're always using the same ones. This is similar to how in HTML we can use an `<input type="number">` instead of an `<input type="text">` to restrict what a user can enter into a form.

In Python, we can define an enum as a new type. This is like `bool` - `bool` is a type which has two possible values (`True` and `False`). We can make enums that have any number of possible values, and we can choose the values' names.

```python
from enum import Enum

class OperatingSystem(Enum):
    MACOS = "macOS"
    ARCH = "Arch Linux"
    UBUNTU = "Ubuntu"
```

This defines a new type called `OperatingSystem` which has three possible values - `MACOS`, `ARCH`, and `UBUNTU`. We can use this type in a type annotation to make sure that we're only passed one of these values. If someone makes a typo in one of these values, mypy will catch it and tell us that `UBUNT` or `macOS` or `NIX` doesn't exist.

```python
from dataclasses import dataclass
from enum import Enum
from typing import List

class OperatingSystem(Enum):
    MACOS = "macOS"
    ARCH = "Arch Linux"
    UBUNTU = "Ubuntu"

@dataclass(frozen=True)
class Person:
    name: str
    age: int
    preferred_operating_system: OperatingSystem


@dataclass(frozen=True)
class Laptop:
    id: int
    manufacturer: str
    model: str
    screen_size_in_inches: float
    operating_system: OperatingSystem


def find_possible_laptops(laptops: List[Laptop], person: Person) -> List[Laptop]:
    possible_laptops = []
    for laptop in laptops:
        if laptop.operating_system == person.preferred_operating_system:
            possible_laptops.append(laptop)
    return possible_laptops


people = [
    Person(name="Imran", age=22, preferred_operating_system=OperatingSystem.UBUNTU),
    Person(name="Eliza", age=34, preferred_operating_system=OperatingSystem.ARCH),
]

laptops = [
    Laptop(id=1, manufacturer="Dell", model="XPS", screen_size_in_inches=13, operating_system=OperatingSystem.ARCH),
    Laptop(id=2, manufacturer="Dell", model="XPS", screen_size_in_inches=15, operating_system=OperatingSystem.UBUNTU),
    Laptop(id=3, manufacturer="Dell", model="XPS", screen_size_in_inches=15, operating_system=OperatingSystem.UBUNTU),
    Laptop(id=4, manufacturer="Apple", model="macBook", screen_size_in_inches=13, operating_system=OperatingSystem.MACOS),
]

for person in people:
    possible_laptops = find_possible_laptops(laptops, person)
    print(f"Possible laptops for {person.name}: {possible_laptops}")
```

We know that when we save data, transfer it across a network, or take user input, everything comes in as bytes. A typical pattern in software is to accept a string in the user input, and convert it to an enum before passing it into any other function. If the string wasn't a valid operating system we know about, we will reject it and give an error when we first accept it. All of our other functions can take an `OperatingSystem` as a parameter, and know that any value it's given _must_ be a valid operating system. This restricts where we need to worry about incorrect input - once we've checked that the string was correct one time, the rest of our code doesn't have to worry about incorrect strings.

{{<note type="exercise">}}
Write a program which:
1. Already has a list of `Laptop`s that a library has to lend out.
2. Accepts user input to create a new `Person` - it should use [the `input` function](https://docs.python.org/3/library/functions.html#input) to read a person's name, age, and preferred operating system.
3. Tells the user how many laptops the library has that have that operating system.
4. If there is an operating system that has more laptops available, tells the user that if they're willing to accept that operating system they're more likely to get a laptop.

You should convert the age and preferred operating system input from the user into more constrained types as quickly as possible, and should output errors to stderr and terminate the program with a non-zero exit code if the user input bad values.
{{</note>}}
