+++
title = "Generics"
time = 30
objectives = [
  "Define a generic type.",
  "Explain why generics are useful.",
  "Use a generic in a type annotation.",
  "Create your own generics.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

### Limitations of Type Annotations
Sometimes we want to reason about more complicated type relationships than "this field is a string". Lists and dictionaries are examples of this. We may want to reason that every value in a list is a certain type. We could model a family as being a list of members all of type `Person`, for instance.

{{<note type="exercise">}}
**Task 11**

Have a look at the code in `11-predict.py`

There is a bug in this code. Can you spot it?

Run your code through mypy. Does mypy spot it?

Offer an explanation for what is happening.
{{</note>}}

In some languages, like Java, C#, Rust, or Go, type information is _required_ - you can't write code without it. This means those languages can do more checks, and give better error messages. We call these {{<tooltip text="statically typed languages" title="Static typing">}}A statically typed language is a language where every variable has a fixed type. It is an error to try to assign a value to a variable with a different type.{{</tooltip>}}

In other languages, like Python and JavaScript, type information is _optional_. Because of this, tools that check types are sometimes less strict. If they don't know what type something has, they stop doing any checks.

That's what's happening in task 11. `FamilyTree.members` is a `list`, but mypy doesn't know what type of thing is in the list. It doesn't even know that everything in the list has the same type = `["hello", 7, True]` is a legal list in Python. Many people would consider a pet to be a member of the family, so it seems correct, but due to the different types, this code breaks down and mypy can't spot the problem.

### Using Generics

We can use {{<tooltip title="Generic types" text="generics">}}A list could store numbers, or strings. We use generic types to say which type a particular instance of a list stores. Even though we can have a list of strings, and a list of numbers, the code for finding the first element is the same. But knowing that a list _only_ contains strings is useful.{{</tooltip>}} to tell mypy what type of thing is in the list. We could add an import and modify the `FamilyTree` class from task 11 as follows:

```python
@dataclass(frozen=True)
class FamilyTree:
    parent: Person
    members: list[Person]
```

Try updating your code for task 11 with this change and see if mypy spots the problem

Now that we've told mypy `FamilyTree.members` is a list of type `Person`, it can identify that the `child` variable printed out must be of type `Person`. Because of this, it can tell us that `child.age` on doesn't exist when the pet is accidentally included in the list.


> [!NOTE]
>
> If you want to _recursively_ reference a type within a class, we need to quote it for mypy to recognise it.
> So for example, if we wanted a `Person` object to include a list of children, we would write it as `List["Person"]`.
>
> It's kind of annoying, but don't worry about it too much.



### Generic Functions

You have seen how we can use generics in type annotations. But what if we wanted to make the code we write support generics as well?

Think about a common task you may have done, getting the last element from a list. You can do this using indexing: `[-1]`.
It should be pretty simple to turn this into a free function, but how do we annotate the types?
This function needs to work with any typed list, not just lists of integers or strings.
It would be too much work to write a separate function for every possible type of list.

Instead, we write a _generic function_.
To make a generic function we pick a symbol, like the letter `T`, to represent a given type.
After the function name, we add {{<tooltip text="type parameters" title="Type Parameters">}}Just like you can define parameters for the values passed to a function, you can define parameters that describe the generic types used within a function. These come before the main parameters and use square brackets: `[T]`. Some languages use angle brackets instead: `<T>`.{{</tooltip>}} the function using `[T]`.
From then on, everywhere in the function that has a `T` becomes the given type.

Here is an example of a generic function:

```py
def get_last[T](my_list: list[T]) -> T:
  return -1

get_last([0,1,2,3,4,5])
get_last(["a","b","c"])
```

This function contains a bug.
Mypy can find the error that this function always returns an integer, rather than returning the same type as is held in the list.
In this way we can write a generic free function that can be used with any type, and which works well with mypy.


### Writing a Generic Class

We're starting to move beyond writing free functions, though. How does this work with classes?

The kind of relationship structure we created with families and members, a {{<tooltip title="Trees" text="tree">}}A list can store a linear array of values. A tree stores values in a heirarchy, like a family tree.{{</tooltip>}}, is common across many types of data, for example how species of animal are related to each other, or how a dictionary might store words.

Thinking about keeping our code reusable, is there a way we could define such structures, and be able to force them to work with certain types, without needing to write a special class for each individual data type? Just like lists can take a generic to force them to be a certain type, we can write classes that accept generics.

Look at the following code:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Animal:
    name: str
    size: str

@dataclass(frozen=True)
class Person:
    name: str
    age: int

@dataclass(frozen=True)
class Tree[T]:
    parent: T
    children: list[T]

    def print_tree(self):
        print(self.parent)
        for child in self.children:
            print(child)

fatma = Person(name="Fatma", age=4)
aisha = Person(name="Aisha", age=6)
imran = Person(name="Imran", age=30)
family_tree = Tree[Person](parent=imran, children=[fatma, aisha])

cats = Animal(name="Cat", size="Small")
dogs = Animal(name="Dog", size="Medium")
mammals = Animal(name="Mammals", size="Variable")
species_tree = Tree[Animal](parent=mammals, children=[cats, dogs])

family_tree.print_tree()
species_tree.print_tree()
```

The Tree here has the type paramter `T`. Just like with a generic function, this tells python that every reference to `T` within the class becomes a given type.

See we then create two different trees: a `Tree[Person]` and a `Tree[Animal]`. In these trees, the parent and list of children must contain `Person` and `Animal` types respectively.

It also means instead of having to create a new method to print out every single tree type, we can create a single method - `Tree.print_tree()`.

{{<note type="exercise">}}
**Task 12**

We are going to improve the printing of the code in the file in `12-fix.py`.

Experiment with mypy and make sure that the family tree only takes `Person` types and the species tree only takes `Animal` types.

Currently the `Tree.print_tree()` method doesn't look very pretty.

Update the code, adding `__str__()` methods in `Animal` and `Person` to allow the `Tree.print_tree()` method to display an output that looks like this:

```text
Imran (30 years old)
- Fatma (4 years old)
- Aisha (6 years old)
Mammals (Variable size)
- Cat (Small size)
- Dog (Medium size)
```

**Stretch task**

Think of another type of data that can be organised into a tree.

Add a new class for this, instantiate some variables, and have the existing `Tree` class print it out.
{{</note>}}
