+++
title = "Comparing programming languages"
headless = true
time = 20
facilitation = false
emoji= "⚖️"
objectives=[
    "Identify whether variables have fixed types in C, Python, and JavaScript.",
    "Identify and explain the differences between a function definition in C and Python.",
    "Compare compiled and interpreted languages.",
    "Explain one advantage of compiled languages, and one advantage of interpreted languages.",
]
+++

Variables are names for memory locations. What's inside the memory location can be changed.

{{<multiple-choice
question="Which languages allow assigning a new value with a different type to a variable."
answers="All programming languages | Only JavaScript | C and Python | JavaScript and Python | C and JavaScript"
feedback="No - some languages require any new value for a variable has the same type as the old value. | JavaScript does allow this, but it isn't the only language to allow it. | No - one of these languages doesn't allow this. | Right - JavaScript and Python are both dynamically typed languages. C is a statically typed language. | No - one of these languages doesn't allow this."
correct="3"
>}}

{{<note type="Exercise">}}
Write the same function twice, once in C and once in Python. The function should take two numbers as parameters, and return the sum of those two numbers.

Write down what's different about the two function definitions.
{{</note>}}

Some programming languages are compiled. Others are interpreted.

{{<note type="Exercise">}}
Write down an explanation of what it means to be compiled or interpreted.

List all of the programming languages you know about - is each one compiled or interpreted?

What are the advantages and disadvantages of being compiled or interpreted? Write them down.
{{</note>}}
