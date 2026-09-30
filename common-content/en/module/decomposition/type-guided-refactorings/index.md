+++
title = "Type-guided refactoring"
time = 30
objectives = [
  "Explain how type annotations and type checking can guide refactoring.",
  "Use mypy to guide a refactoring.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

Using classes and objects can help us to understand and maintain codebases, particularly as they grow. The process of taking some old code, and updating it in a maintainable way is called "refactoring".

We previously saw that using methods instead of free functions can help us to encapsulate information. But changing functions into methods, and modifying classes can be tricky, as it is easy to forget places where code needs to be updated during refactoring. 

Type checking can help us with this. If you have some code which accesses `imran.age`, and we remove the `age` field, we can run mypy: It will tell us "Here are all of the places that reference `age` you also need to change your code".

Look at file `13-refactor.py` as an example. It is a program that works out what laptops could be allocated to what people based on their preferred operating system.

Let's imagine we want to change our code. We don't want to say "Every person has one preferred operating system" any more. We want to let people have a list of operating systems they prefer (in order). So we could say "Imran prefers Ubuntu most of all, and then Arch Linux, but will not use macOS".

{{<note type="exercise">}}
**Task 13**
A copy of this file is present in `13-refactor.py`.

Change the type annotation of `Person.preferred_operating_system` from `str` to `List[str]`.

Run mypy on the code.

It tells us different places that our code is now wrong. Fix it to remove any errors.

Now we changed the types, we probably also want to _rename_ our field to something appropriate.

Run mypy again.

Fix all of the places that mypy tells you need changing.

Then, make sure the program works as you'd expect.
{{</note>}}

The bigger (and more complicated) our codebase is, the more useful it is that mypy tells us what code needs changing. This is even more useful when we start working with code we didn't write ourselves, or we wrote long ago. Instead of needing to read all of the code and search around to try to work out where we need to change an `age` to `date_of_birth`, or how to access a single variable that has become a list of many, mypy can tell us "here are all of the places that are wrong".
