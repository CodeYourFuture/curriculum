+++
title = "Enums"
time = 30
objectives = [
  "Identify risks of using strings to represent data.",
  "Define an enum.",
  "Explain how an enum addresses the risks of using strings to represent data.",
  "Write code which checks string validity once, and then uses type-checking to avoid further validity checks.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

In the laptops example, we were using strings to store operating systems. Using strings is often problematic because they can take lots of different values. When we have a known set of possible values it is useful to ensure only those values can occur.

Some common problems with strings:
* Case sensitivity - are `"macOS"` and `"MacOS"` the same? Should they be?
* Spaces - are `"ArchLinux"` and `"Arch Linux"` the same? Should they be?
* Normalised values - are `"Arch Linux"` and `"Arch"` the same? Should they be?
* Typos - is `"Arc Linux"` meant to be `"Arch Linux"`?  Or is it a separate operating system?

Did you spot in the bug in task 12? The laptop with id 3 was never put in anyone's preferred list, because its operating system was spelled `Ubuntu` not `ubuntu`.

We can use enums to represent that one some values are allowed, and make sure we're always using the same ones. This is similar to how in HTML we can use a `<select>` menu with `<options>` instead of an `<input type="text">` to restrict what a user can enter into a form.

In Python, we can define an enum as a new type. This is like `bool` - `bool` is a type which has two possible values (`True` and `False`). We can make enums that have any number of possible values, and we can choose the values' names.

```python
from enum import Enum

class OperatingSystem(Enum):
    MACOS = "macOS"
    ARCH = "Arch Linux"
    UBUNTU = "Ubuntu"
```

This defines a new type called `OperatingSystem` which has three possible values - `MACOS`, `ARCH`, and `UBUNTU`. We can use this type in a type annotation to make sure that we're only passed one of these values. If someone makes a typo in one of these values, mypy will catch it and tell us that `UBUNT` or `macOS` or `NIX` doesn't exist.

> [!NOTE]
> 
> There are lots of ways different programming deal with the concept enums.
> Some, like JavaScript, have no built-in way to use enums.
> Python treats enums as a special kind of class mapping definitions to a value.
> Others, like Rust, have more advanced typing systems that can treat enumerations as standalone types.


We know that when we save data, transfer it across a network, or take user input, everything comes in as bytes. A typical pattern in software is to accept a string in the user input, and convert it to an enum before passing it into any other function. If the string wasn't a valid operating system we know about, we will reject it and give an error when we first accept it. All of our other functions can take an `OperatingSystem` as a parameter, and know that any value it's given _must_ be a valid operating system. This restricts where we need to worry about incorrect input - once we've checked that the string was correct one time, the rest of our code doesn't have to worry about incorrect strings.

{{<note type="exercise">}}
**Task 13**

Look at file `13-implement.py`

It currently handles operating systems as strings.

Refactor the code to use enums for operating systems.

Check with mypy and test it to ensure the program still works correctly.

Replace the list of existing people with [the `input` function](https://docs.python.org/3/library/functions.html#input) to read a person's name, age, and preferred operating system.

Make sure your implementation has a good user experience, and properly validates the inputs, mapping an OS to one of the enum values.

If an operating system can't be matched at all, your script should handle it appropriately and not crash.
{{</note>}}
