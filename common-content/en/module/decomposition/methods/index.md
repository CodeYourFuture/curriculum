+++
title = "Methods"
time = 30
objectives = [
  "Define a method.",
  "Define a free function.",
  "Explain why methods can be more useful than free functions.",
  "Implement a method on a class.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

We've seen that we can take instances of classes as function parameters:

```python
def is_adult(person: Person) -> bool:
    return person.age >= 18
```

We've also seen types that have methods on them, e.g. `"abc".upper()`. This looks a bit different from functions we define ourselves (which may look like `upper("abc")`).

Methods are just like functions, but they are attached to a class.

We could rewrite our `is_adult` function as a method on `Person`:

```python
class Person:
    def __init__(self, name: str, age: int, preferred_operating_system: str):
        self.name = name
        self.age = age
        self.preferred_operating_system = preferred_operating_system

    def is_adult(self):
        return self.age >= 18

imran = Person("Imran", 22, "Ubuntu")
print(imran.is_adult())
```

This has a few advantages over {{<tooltip text="free functions" title="Free function">}}A free function is a function that isn't a method. It isn't bound to a particular type (but may take parameters).{{</tooltip>}}.

{{<note type="exercise">}}
Think of the advantages of using methods instead of free functions. Write them down in your notebook.

<details>

<summary>Expand for some answers after you've listed your own.</summary>

* Ease of documentation - it makes it easier to find all of the things related to a string (or a Person) if they're attached to that type.
* Encapsulation - if we change the implementation of `Person` (e.g. we start storing a date of birth instead of an age), it's more obvious what things we need to change.
</details>
{{</note>}}

{{<note type="exercise">}}
Change the `Person` class to take a date of birth (using [the standard library's `datetime.date` class](https://docs.python.org/3/library/datetime.html#datetime.date)) and store it in a field instead of `age`.

Update the `is_adult` method to act the same as before.
{{</note>}}
