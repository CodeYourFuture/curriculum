+++
title = "Encapsulation"
time = 30
objectives = [
  "Define encapsulation.",
  "Explain how encapsulation can benefit class design.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++


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

> [!NOTE]
> 
> It is important to be clear about the wording here as there are some subtle differences between fields and properties as used in classes.
> A "field" is the underlying part of a class that stores some value.
> A "property" is the publicly accessible part that you can access from outside the class.
>

In python, any field that begins with two underscores is considered _private_, i.e. it can only be used within that specific class instance.


> [!NOTE]
> 
> Using underscores, Python doesn't have a clear way of marking something as private.
> Other programming languages like Java mark this more explicitly with keywords like "private" and "public".
> It's worth becoming familiar with this private/public language even if you're not using it right now.
>

You can now program classes to change behaviour based on the information stored within them.
Compare this with objects, which can only ever store data, and behave the same every time.

Another benefit of encapsulation is letting you make "read only" properties.
Think about the example above.
Imagine you wanted to check if a `Person` class had a certain name using an equality test, but accidentally used a single `=` symbol:
```python
imran.name = "Eliza"
```
Python allows you to update public fields whenever you want.
If `name` were private, and the only way to access it was through a `get_name()` method that returns a string, it would be impossible to accidentally change the value.
In this way, encapsulation can be used to prevent accidental errors in code.

{{<note type="Reading">}}
Read through [Python encapsulation](https://www.w3schools.com/python/python_encapsulation.asp).

Do some further research of your own to learn about encapsulation.
{{</note>}}

{{<note type="exercise">}}
**Task 9**

Having done some research on encapsulation, think about the benefits.

Think of some examples and in your own words write down some benefits and trade-offs of using encapsulation in classes in the file `09-encapsulation.py`

**Stretch Task**

Working in file `09-encapsulation.py`, make the `name` field private, and add a `get_name()` method to allow read-only access.
{{</note>}}

### Why encapsulate?

In your career you will rarely be building code used only once.
It is likely the code you write will sit alongside code written by others as part of a large long-lived codebase.
Classes and encapsulation are really important techniques as you move towards thinking about how others will use your code, and how you plan to make your code maintainable and reusable for future use.

Classes with encapsulation clearly define the outward-facing interface of what you are building.
Think about the documentation you may have read for well-defined APIs like [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) or [argparse](https://docs.python.org/3/library/argparse.html).
You don't need to know how they work internally to make use of them, and the methods and their parameters are clearly stated.
If `argparse` is updated, e.g. to make it more efficient, your code won't break as the public interface won't change.
If `fetch` is changed, e.g. adding a new parameter, type checking will immediately highlight everywhere you need to update your code.

Encapsulation also makes it easy to swap different implementations.
Imagine you started a big project with a python `dict` but later on needed to change it to an [OrderedDict](https://docs.python.org/3/library/collections.html#collections.OrderedDict).
The interfaces are almost exactly the same, so you wouldn't need to change any of the method invocations, making the change much easier and safer.

Encapsulation also helps with testing.
Only the public interface, methods and properties, need to be tested.
You can write the test before you start using test-driven development, defining the public interface and behaviour.
Then you can focus on the implementation inside, and when the test passes you know your class works.
Testing a single class with a well defined interface is much easier than needing to test lots of interconnected separate free functions.

Until now you have been solving small coding challenges with the aim of solving the specific task.
From now on you will start to think more about how you can build a solution that will adapt well to future changes.
Well defined classes that encapsulate your implementations will be a big help.
