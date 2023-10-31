+++
title = '🗼 Call stack'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

When playing computer, we can see that when we call `map` then the function `double` is also invoked too. So whilst one function is called we make a call to another function and then \*_return_ back to the previous frame. In other words, we need to keep track of the which function is currently executing.
