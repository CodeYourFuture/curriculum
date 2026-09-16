+++
title = "Classes and objects"
time = 30
objectives = [
  "Describe the purpose of a class.",
  "Explain the relationship between a class and instances of that class.",
  "Use classes in mypy and python.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

We've already seen that objects can group together related, named data. We can write:

```python
imran = {
  "name": "Imran",
  "age": 22,
  "preferred_operating_system": "Ubuntu",
}

eliza = {
  "name": "Eliza",
  "age": 34,
  "preferred_operating_system": "Arch Linux",
}
```

This allows us to pass around the values of `imran` or `eliza`, and access all of the related information while we do.

We now know that typing can tell us if we make errors like calling `.lower()` on the numeric value `2`.

It would be useful for a type checker to tell us if we try to access a property of an object that that object doesn't have. Can mypy help us here?

{{<note type="exercise">}}
**Task 5**:

Have a look at `05-explain.py`

This code contains some untyped objects.

Try checking it with mypy before running the code and predict what you think will happen when you run the code.
{{</note>}}

This code doesn't work, but mypy can't tell us this. Remember how we said that type checking has its limits?
As far as mypy is concerned, a dictionary is a dictionary - it could contain any keys!

Instead, we can use a {{<tooltip title="class">}}A class is a template for an object. It lets us say what properties (and methods) all instances of that class will contain.{{</tooltip>}}.

> [!TIP]
>
> The word object has a lot of uses.
>
> In JavaScript, we don't have a "dictionary" type, we call them objects. Sometimes these objects are just dictionaries - collections of key-value pairs. Other times they are instances of a specific class.
>
> In general, people use the word object both to mean "collection of key-value pairs" and "instance of a class". You often need to work out which they mean from context.

```python
class Person:
    def __init__(self, name: str, age: int, preferred_operating_system: str):
        self.name = name
        self.age = age
        self.preferred_operating_system = preferred_operating_system

imran = Person("Imran", 22, "Ubuntu")
print(imran.name)
print(imran.address)

eliza = Person("Eliza", 34, "Arch Linux")
print(eliza.name)
print(eliza.address)
```

This code is saying: "There's a category of object called Person. Every instance of Person has a `name`, an `age`, and a `preferred_operating_system`". It then makes two instances of Person, and uses them.

The method called `__init__` is called a constructor - it is what is called when we construct a new instance of the class.


{{<multiple-choice
  question="What of the following best describes an 'instance' of a class?"
  answers="The variables that are accessed using self, like `self.name` | A class with attributes set to values passed into the constructor | The __init__ function that takes some values as arguments | A description of what a class contains"
  feedback=" No, these are called class attributes | Yes, an instance is one specific copy of a class | __init__ is the constructor of a class in python | No, a class already is a description of what it contains. An instance is more specific."
  correct="1" >}}


You can use the names of classes in type annotations just like you can use types like `str` or `int`:

```python
def is_adult(person: Person) -> bool:
    return person.age >= 18

print(is_adult(imran))
```

{{<note type="Exercise">}}

**Task 6**
Have a look at file `06-classes.py`.

Run mypy and fix any errors.

Add a new function called `likes_apple` which takes a person as parameter and returns true only if the preferred operating system is either `iOS` or `macOS`. Add all the appropriate type annotations and make sure mypy has no errors.

Compare objects and classes and explain some advantages and disadvantages of each.

{{</note>}}
