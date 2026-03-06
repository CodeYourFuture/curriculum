+++
title = "Classes and objects"
time = 30
objectives = [
  "Describe the purpose of a class.",
  "Explain the relationship between a class and instances of that class.",
  "Use classes in mypy.",
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

We've also already seen that it is useful to know that you can't call `.lower()` on the value `2`.

It would be useful for a type checker to tell us if we try to access a property of an object that that object doesn't have:

```python
imran = {
  "name": "Imran",
  "age": 22,
  "preferred_operating_system": "Ubuntu",
}

print(imran["name"])
print(imran["address"])
```

This code doesn't work, but mypy can't tell us this. As far as it is concerned, a dictionary is a dictionary - it could contain any keys!

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

{{<note type="Exercise">}}
Save the above code to a file, and run it through mypy.

Read the error, and make sure you understand what it's telling you.
{{</note>}}

You can use the names of classes in type annotations just like you can use types like `str` or `int`:

```python
def is_adult(person: Person) -> bool:
    return person.age >= 18

print(is_adult(imran))
```

{{<note type="Exercise">}}
Add the `is_adult` code to the file you saved earlier.

Run it through mypy - notice that no errors are reported - mypy understands that `Person` has a property named `age` so is happy with the function.

Write a new function in the file that accepts a `Person` as a parameter and tries to access a property that doesn't exist. Run it through mypy and check that it does report an error.
{{</note>}}
