+++
title = "Type-guided refactorings"
time = 30
objectives = [
  "Explain how type annotations and type checking can guide refactorings.",
  "Use mypy to guide a refactoring.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

Using classes and objects can help us to understand and maintain codebases, particularly as they grow.

We've already identified that using methods instead of free functions can help us to encapsulate information. If we change our class from storing age as an `int` to storing date of birth as a `datetime.date`, it's easier to know what we're likely to need to change.

Type checking can also help us with this. If you have some code which accesses `imran.age`, and we remove the `age` field, we can run mypy: It can tell us "Here are all of the places you also need to change your code".

Take this file as an example. It is a program that works out what laptops could be allocated to what people based on their preferred operating system.

```python
from dataclasses import dataclass
from typing import List

@dataclass(frozen=True)
class Person:
    name: str
    age: int
    preferred_operating_system: str


@dataclass(frozen=True)
class Laptop:
    id: int
    manufacturer: str
    model: str
    screen_size_in_inches: float
    operating_system: str


def find_possible_laptops(laptops: List[Laptop], person: Person) -> List[Laptop]:
    possible_laptops = []
    for laptop in laptops:
        if laptop.operating_system == person.preferred_operating_system:
            possible_laptops.append(laptop)
    return possible_laptops


people = [
    Person(name="Imran", age=22, preferred_operating_system="Ubuntu"),
    Person(name="Eliza", age=34, preferred_operating_system="Arch Linux"),
]

laptops = [
    Laptop(id=1, manufacturer="Dell", model="XPS", screen_size_in_inches=13, operating_system="Arch Linux"),
    Laptop(id=2, manufacturer="Dell", model="XPS", screen_size_in_inches=15, operating_system="Ubuntu"),
    Laptop(id=3, manufacturer="Dell", model="XPS", screen_size_in_inches=15, operating_system="ubuntu"),
    Laptop(id=4, manufacturer="Apple", model="macBook", screen_size_in_inches=13, operating_system="macOS"),
]

for person in people:
    possible_laptops = find_possible_laptops(laptops, person)
    print(f"Possible laptops for {person.name}: {possible_laptops}")
```

Let's imagine we want to change our code. We don't want to say "Every person has one preferred operating system" any more. We want to let people have a list of operating systems they prefer (in order). So we could say "Imran prefers Ubuntu most of all, and then Arch Linux, but will not use macOS".

{{<note type="exercise">}}
Try changing the type annotation of `Person.preferred_operating_system` from `str` to `List[str]`.

Run mypy on the code.

It tells us different places that our code is now wrong, because we're passing values of the wrong type.

We probably also want to _rename_ our field - lists are plural. Rename the field to `preferred_operating_systems`.

Run mypy again.

Fix all of the places that mypy tells you need changing. Make sure the program works as you'd expect.
{{</note>}}

The bigger (and more complicated) our codebase is, the more useful it is that mypy tells us what code needs changing. This is even more useful when we start working with code we didn't write ourselves, or we wrote long ago. Instead of needing to read all of the code and search around to try to work out where we need to change an `age` to `date_of_birth`, or a `preferred_operating_system` to a `preferred_operating_systems` (and maybe change from an `==` check to an `in` check), mypy can just tell us "here are all of the places that are wrong".
