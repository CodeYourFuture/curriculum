+++
title = "Methods"
time = 30
objectives = [
  "Define a method.",
  "Define a free function.",
  "Explain why methods can be more useful than free functions.",
  "Explain how encapsulation can benefit class design.",
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
print(imran.is_adult()) # True
```

This has a few advantages over {{<tooltip text="free functions" title="Free function">}}A free function is a function that isn't a method. It isn't bound to a particular type (but may take parameters).{{</tooltip>}}.

{{<note type="exercise">}}
Think of the advantages of using methods instead of free functions. Write them down in your notebook.

<details>

<summary>Expand for some answers after you've listed your own.</summary>

- Encapsulation - if we change the implementation of `Person` (e.g. we start storing a date of birth instead of an age), it's more obvious what things we need to change.
- Ease of documentation - it makes it easier to find all of the things related to a string (or a Person) if they're attached to that type.
</details>
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

1. Add the `drivers_license_check` free function and the `is_adult` method into your code just like above, make sure your code currently gives the expected final print.
1. Change the `Person` class to take a date of birth (using [the standard library's `datetime.date` class](https://docs.python.org/3/library/datetime.html#datetime.date)) and store the `date of birth` in a field instead of `age` (it should be a `str`). Don't change anything else.
1. **Try to run your code**, how does this change break your code. What kind of error do you get? Is it helpful in identifying where your next change needs to be?
1. Update the `is_adult` method so the error is fixed. Using the `drivers_license_check` function check everything runs as expected, it should return "Valid drivers license". _You should not change `drivers_license_check`_.
   {{</note>}}

{{<note type="Encapsulation in play 👀">}}
Take a moment to consider what we've done here. How has **encapsulation** helped us make changes to our class?

We've changed a property of Person, seen errors inform us about how that change affected a method on the class, and then amended that method so we were maintaining the behaviour of the class. The behaviour of `drivers_license_check` did not need to change - we can change the internal implementation of the class without affecting external code.

_Encapsulation is a widely known principle in object-oriented programming, consider reading around in online to find out more_

{{</note>}}
