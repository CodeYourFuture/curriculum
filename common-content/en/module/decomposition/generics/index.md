+++
title = "Generics"
time = 30
objectives = [
  "Define a generic type.",
  "Explain why generics are useful.",
  "Use a generic in a type annotation.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

Sometimes we want to reason about more complicated type relationships than "this field is a string". Lists and dicts are examples of this. We may want to reason that every value in a list is a string.

Consider this code:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Person:
    name: str
    children: list

fatma = Person(name="Fatma", children=[])
aisha = Person(name="Aisha", children=[])

imran = Person(name="Imran", children=[fatma, aisha])

def print_family_tree(person: Person) -> None:
    print(person.name)
    for child in person.children:
        print(f"- {child.name} ({child.age})")

print_family_tree(imran)
```

There is a bug in this code. Can you spot it?

Run your code through mypy. Does mypy spot it?

In some languages, like Java, C#, Rust, or Go, type information is _required_ - you can't write code without it. This means those languages can do more checks, and give better error messages. We call these {{<tooltip text="statically typed languages" title="Static typing">}}A statically typed language is a language where every variable has a fixed type. It is an error to try to assign a value to a variable with a different type.{{</tooltip>}}

In other languages, like Python and JavaScript, type information is _optional_. Because of this, tools that check types are sometimes less strict. If they don't know what type something has, they stop doing any checks.

That's what's happening here. `Person.children` is a `list`, but mypy doesn't know what type of thing is in the list. It doesn't even know that everything in the list has the same type = `["hello", 7, True]` is a legal list in Python.

We can use {{<tooltip title="Generic types" text="generics">}}A list could store numbers, or strings. We use generic types to say which type a particular instance of a list stores. Even though we can have a list of strings, and a list of numbers, the code for finding the first element is the same. But knowing that a list _only_ contains strings is useful.{{</tooltip>}} to tell mypy what type of thing is in the list:

```python {linenos=table}
from dataclasses import dataclass
from typing import List

@dataclass(frozen=True)
class Person:
    name: str
    children: List["Person"]

fatma = Person(name="Fatma", children=[])
aisha = Person(name="Aisha", children=[])

imran = Person(name="Imran", children=[fatma, aisha])

def print_family_tree(person: Person) -> None:
    print(person.name)
    for child in person.children:
        print(f"- {child.name} ({child.age})")

print_family_tree(imran)
```

Run this code through mypy.

Now that we've told mypy `Person.children` is a list of type `Person` (line 7), it can identify that the `child` variable on line 16 is of type `Person`. Because of this, it can tell us that `child.age` on line 17 doesn't exist.

> [!NOTE]
>
> Most generics don't need the types to be quoted. Normally you'd just write `List[Person]`. But inside a type definition itself (i.e. inside the `Person` class), the `Person` type doesn't exist yet, so we need to quote it.
>
> It's kind of annoying, but don't worry about it too much.

{{<note type="exercise">}}
Fix the above code so that it works. You must not change the `print` on line 17 - we _do_ want to print the children's ages. (Feel free to invent the ages of Imran's children.)
{{</note>}}
