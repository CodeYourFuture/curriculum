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

## A problem type checking can't spot

Sometimes we want to reason about more complicated type relationships than "this field is a string". Lists and dicts are examples of this. We may want to reason that every value in a list is a string.

Consider this code:

```python
from dataclasses import dataclass

@dataclass(frozen=True)
class Animal:
    name: str
    species: str

@dataclass(frozen=True)
class Person:
    name: str
    age: int

@dataclass(frozen=True)
class FamilyTree:
    parent: Person
    members: list
    
pet = Animal(name="Gromit", species="Dog")
fatma = Person(name="Fatma", age=4)
aisha = Person(name="Aisha", age=6)
imran = Person(name="Imran", age=30)

family = FamilyTree(parent=imran, members=[fatma, aisha, pet])

def print_family_tree(family: FamilyTree):
    print(family.parent.name)
    for child in family.members:
        print(f"{child.name} ({child.age} years old)")
        
print_family_tree(family)
```

{{<note type="exercise">}}
**Task 10**
Have a look at the above code, you can find a copy in `10-predict.py`

There is a bug in this code. Can you spot it?

Run your code through mypy. Does mypy spot it?

Offer an explanation for what is happening.
{{</note>}}

In some languages, like Java, C#, Rust, or Go, type information is _required_ - you can't write code without it. This means those languages can do more checks, and give better error messages. We call these {{<tooltip text="statically typed languages" title="Static typing">}}A statically typed language is a language where every variable has a fixed type. It is an error to try to assign a value to a variable with a different type.{{</tooltip>}}

In other languages, like Python and JavaScript, type information is _optional_. Because of this, tools that check types are sometimes less strict. If they don't know what type something has, they stop doing any checks.

That's what's happening here. `FamilyTree.members` is a `list`, but mypy doesn't know what type of thing is in the list. It doesn't even know that everything in the list has the same type = `["hello", 7, True]` is a legal list in Python. Many people would consider a pet to be a member of the family, so it seems correct, but due to the different types, this code breaks down and mypy can't spot the problem.

## Using Generics

We can use {{<tooltip title="Generic types" text="generics">}}A list could store numbers, or strings. We use generic types to say which type a particular instance of a list stores. Even though we can have a list of strings, and a list of numbers, the code for finding the first element is the same. But knowing that a list _only_ contains strings is useful.{{</tooltip>}} to tell mypy what type of thing is in the list:

```python
from dataclasses import dataclass
from typing import List

@dataclass(frozen=True)
class Animal:
    name: str
    species: str

@dataclass(frozen=True)
class Person:
    name: str
    age: int

@dataclass(frozen=True)
class FamilyTree:
    parent: Person
    members: List[Person]
    
pet = Animal(name="Gromit", species="Dog")
fatma = Person(name="Fatma", age=4)
aisha = Person(name="Aisha", age=6)
imran = Person(name="Imran", age=30)

family = FamilyTree(parent=imran, members=[fatma, aisha, pet])

def print_family_tree(family: FamilyTree):
    print(family.parent.name)
    for child in family.members:
        print(f"{child.name} ({child.age} years old)")
        
print_family_tree(family)
```

Try updating the code with this change and see if mypy spots the problem

Run this code through mypy.

Now that we've told mypy `FamilyTree.members` is a list of type `Person`, it can identify that the `child` variable printed out must be of type `Person`. Because of this, it can tell us that `child.age` on doesn't exist when the pet is accidentally included in the list.


> [!NOTE]
>
> Most generics don't need the types to be quoted. For example, you can write `List[Person]`.
> But if you want to recursively reference a type within the class, before the class has been defined, we need to quote it for mypy to recognise it.
> So for example, if we wanted a family tree to go several levels deep, e.g. to include grandchildren, we would write it as `List["FamilyTree"]`.
>
> It's kind of annoying, but don't worry about it too much.


## Writing our own classes that use generics

The kind of relationship structure we created with families and members, a {{<tooltip title="Trees" text="tree">}}A list could store numbers, or strings. We use generic types to say which type a particular instance of a list stores. Even though we can have a list of strings, and a list of numbers, the code for finding the first element is the same. But knowing that a list _only_ contains strings is useful.{{</tooltip>}}, is common across many types of data, for example how species of animal are related to each other, or how a dictionary might store words.

Thinking about keeping our code reusable, is there a way we could define such structures, and be able to force them to work with certain types, without needing to write a special class for each individual data type? Just like lists can takea generic to force them to be a certain type, we can write classes that accept generics.

Look at the following code:

```python
from dataclasses import dataclass
from typing import List

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
    children: List[T]

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

The Tree here has a special type annotation given by `T`. This is a generic, telling python that whatever type is given, every reference to `T` within the class becomes that type.

Observe that we then create two different trees: a `Tree<Person>` and a `Tree<Animal>`. In these trees, the parent and list of children must contain `Person` and `Animal` types respectively.

It also means instead of having to create a new function torpint out every single tree type, we can create a single function - `Tree.print_tree()`.

{{<note type="exercise">}}
**Task 11**
Experiment with mypy and make sure that the family tree only takes `Person` types and the species tree only takes `Animal` types.

We are going to improve the printing in the above code, you can find a copy in `11-fix.py`

Currently the `Tree.print_tree()` function doesn't look very pretty.

Change the Animal and Person classes, using whichever approach you think is best, to allow the `Tree.print_tree()` method to display an output that looks like this:

```
Imran (30 years old)
- Fatma (4 years old)
- Aisha (6 years old))
Mammals (Variable size)
- Cat (Small size)
- Dog (Medium size)
```

**Stretch task**

Think of another type of data that can be organised into a tree.

Add a new class for this, instantiate some variables, and have the existing `Tree` class print it out.
{{</note>}}
