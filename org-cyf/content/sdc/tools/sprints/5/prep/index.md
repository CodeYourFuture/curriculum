+++
title = "Prep"
description = "Overview description of the prep work for the sprint"
layout = "prep"
menu_level = ["sprint"]
weight = 1
[[blocks]]
name = "Why we use types"
src = "module/decomposition/why-types"
[[blocks]]
name = "Type checking with mypy"
src = "module/decomposition/type-checking-with-mypy"
[[blocks]]
name = "Classes and objects"
src = "module/decomposition/classes-and-objects"
[[blocks]]
name = "Methods"
src = "module/decomposition/methods"
[[blocks]]
name = "Dataclasses"
src = "module/decomposition/dataclasses"
[[blocks]]
name = "Generics"
src = "module/decomposition/generics"
[[blocks]]
name = "Type-guided refactorings"
src = "module/decomposition/type-guided-refactorings"
[[blocks]]
name = "enums"
src = "module/decomposition/enums"
[[blocks]]
name = "Inheritance"
src = "module/decomposition/inheritance"
+++
## Static checking

You have now seen how to handle errors when your program is running, using exceptions and `try`/`catch`. This is called **dynamic checking** because the problem is found while the program runs.

With static checking, tools such as `mypy` can find some problems before the program runs. This means we can catch certain errors earlier, rather than waiting for them to happen at runtime.

Think about the errors you have just learned to handle: which of these could we catch before running our program?
