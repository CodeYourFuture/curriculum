+++
title = "Type checking with mypy"
time = 60
objectives = [
  "Run mypy to detect type errors in Python.",
  "Annotate function signatures with types in Python.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

## Support for type checking

Different languages have different levels of support for checking types.

Some languages, like Java, C++, Rust, and Go, _require_ you to write what types you expect function parameters to have.

Other languages, like JavaScript and Python, _don't require_ this but they have tools which _allow_ you to add this information by using a tool like mypy or JSDoc.

Some very low level machine languages like assembly don't have any typing at all.

Languages with optional type checking perform good checks when you add this type information. If you don't add type annotations in your code, they will perform fewer checks. Sometimes they will infer the correct types based on what you _have_ annotated. Other times they will just ignore code with no annotations and not give you errors about it even if it's wrong.

## Trying out Mypy
Mypy is a tool which enables type checking in Python code.

{{<note type="Reading">}}
Read the first sections of [The Comprehensive Guide to mypy](https://dev.to/tusharsadhwani/the-comprehensive-guide-to-mypy-561m) up to and including the "Any type" section.
{{</note>}}

{{<note type="exercise">}}

**Task 4**:

Have a look at `04-addmypy.py`

This code contains bugs related to types. They are bugs mypy can catch.

Read this code to understand what it's trying to do. Add type annotations to the method parameters and return types of this code. Run the code through mypy, and fix all of the bugs that show up. When you're confident all of the type annotations are correct, and the bugs are fixed, run the code and check it works.
{{</note>}}
