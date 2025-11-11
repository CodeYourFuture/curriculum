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

Mypy is a tool which enables type checking in Python code.

{{<note type="Reading">}}
Read the first sections of [The Comprehensive Guide to mypy](https://dev.to/tusharsadhwani/the-comprehensive-guide-to-mypy-561m) up to and including the "Any type" section.
{{</note>}}

{{<note type="exercise">}}
Do not run the following code.

This code contains bugs related to types. They are bugs mypy can catch.

Read this code to understand what it's trying to do. Add type annotations to the method parameters and return types of this code. Run the code through mypy, and fix all of the bugs that show up. When you're confident all of the type annotations are correct, and the bugs are fixed, run the code and check it works.

```python
def open_account(balances, name, amount):
    balances[name] = amount

def sum_balances(accounts):
    total = 0
    for name, pence in accounts.items():
        print(f"{name} had balance {pence}")
        total += pence
    return total

def format_pence_as_string(total_pence):
    if total_pence < 100:
        return f"{total_pence}p"
    pounds = int(total_pence / 100)
    pence = total_pence % 100
    return f"£{pounds}.{pence:02d}"

balances = {
    "Sima": 700,
    "Linn": 545,
    "Georg": 831,
}

open_account("Tobi", 9.13)
open_account("Olya", "£7.13")

total_pence = sum_balances(balances)
total_string = format_pence_as_str(total_pence)

print(f"The bank accounts total {total_string}")
```
{{</note>}}
