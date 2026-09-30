+++
title = "Methods"
time = 30
objectives = [
  "Define a method.",
  "Define a free function.",
  "Explain why methods can be more useful than free functions.",
  "Amend a method on a class.",
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

We've also seen types that have methods on them, e.g. `"abc".upper()`. This looks a bit different from functions we define ourselves, e.g. `upper("abc")`.

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
print(imran.is_adult()) # True
```

This has a few advantages over {{<tooltip text="free functions" title="Free function">}}A free function is a function that isn't a method. It isn't bound to a particular type (but may take parameters).{{</tooltip>}}.

{{<note type="exercise">}}

**Task 7**

What is the difference between methods and free functions?

Do some research about the differences.

Can you give some advantages of methods over functions?

Write your thoughts down in `07-methods.txt`
{{</note>}}

Consider this free function called `drivers_license_check` which uses the Person class method `is_adult` outside of the class:

```python
def drivers_license_check(person: Person):
  if person.is_adult() == True:
    return 'Valid drivers license'

  return 'This person is underage!'

print(drivers_license_check(imran)) # returns 'Valid drivers license'
```

{{<note type="exercise">}}

**Task 8**

Work inside the `08-implement.py` file for this task.

Add an `is_adult` method into the class, and make sure your code gives the expected output.

Change the `Person` class to take a date of birth (using [the standard library's `datetime.date` class](https://docs.python.org/3/library/datetime.html#datetime.date)) and store the `date of birth` instead of `age`.

**Try to run your code now** and observe how this change breaks your code. What kind of error do you get? Is it helpful in identifying where your next change needs to be?

Now update _only_ the `is_adult` method to fix the error and check everything works correctly.
{{</note>}}

