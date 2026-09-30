+++
title = "Methods"
time = 30
objectives = [
  "Define a method.",
  "Define a free function.",
  "Explain why methods can be more useful than free functions.",
  "Amend a method on a class.",
  "Explain how encapsulation can benefit class design.",
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

**Task 7**

What is the difference between methods and free functions?

Do some research and think of the advantages of using methods instead of free functions.

Write your thoughts down in `07-methods.txt`

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

**Task 8**

Work inside the `08-implement.py` file for this task.

1. Add the `drivers_license_check` free function and the `is_adult` method into your code, and make sure your code currently gives the expected output.
1. Change the `Person` class to take a date of birth (using [the standard library's `datetime.date` class](https://docs.python.org/3/library/datetime.html#datetime.date)) and store the `date of birth` in a field instead of `age` (it should be a `str`). Don't change anything else.
1. **Try to run your code**, how does this change break your code. What kind of error do you get? Is it helpful in identifying where your next change needs to be?
1. Update the `is_adult` method so the error is fixed. Using the `drivers_license_check` function check everything runs as expected, it should return "Valid drivers license". _You should not change `drivers_license_check`_.
{{</note>}}



## Encapsulation

An advantage of classes over objects is encapsulation.

Imagine you have written your Person class that stores age information.

For privacy reasons, you don't want to reveal the exact age of the person, only whether they are or are not over 18 years old.

This means we need to store the "age" value in a class, but somehow keep it _private_ to that class. The only _public_ information we want is whether or not they are over 18. How can we achieve this?

Look at the following code:

```python
class Person:
    def __init__(self, name: str, age: int):
        self.name = name
        self.__age = age
        
    def is_adult(self):
      return self.__age >= 18

imran = Person("Imran", 22)
print(imran.name)
# print(imran.age) # fails
# print(imran.__age) # fails
print(imran.is_adult()) # works and prints True

eliza = Person("Eliza", 12)
print(eliza.name)
# print(eliza.age) # fails
# print(imran.__age) # fails
print(eliza.is_adult()) # works and prints False
```

In python, any class property that begins with two underscores is considered _private_, i.e. it can only be used within that specific class instance.

> [!NOTE]
>
> Using underscores, Python doesn't have a clear way of marking something as private.
> Other programming languages like Java mark this more explicitly with keywords like "private" and "public".
> It's worth becoming familair with this private/public language even if you're not using it right now.
>

You can now program classes to change behaviour based on the information stored within them.
Compare this with objects, which can only ever store data, and behave the same every time.

Another benefit of encapsulation is letting you make "read only" properties.
Think about the example above.
Imagine you wanted to check if a `Person` class had a certain name using an equality test, but accidentally only used a single `=` symbol:
```python
imran.name = "Eliza"
```
Python allows you to change properties whenever you want.
If `name` were private, and the only way to access it was through a `get_name()` method that returns a string, it would be impossible to accidentally change the value.
In this way, encapsulation can be used to prevent accidental errors in code.

{{<note type="exercise">}}
**Task 9**

Start by reading [Python encapsulation](https://www.w3schools.com/python/python_encapsulation.asp) and think about some of the benefits that encapsulation can add to a class.

Do some further research of your own to learn about encapsulation.

Think of some examples and in your own words write down some benefits and trade-offs of using encapsulation in classes in the file `09-encapsulation.py`

**Stretch Task**
Make the name property private, and add a get_name() method to make it read only.
{{</note>}}

