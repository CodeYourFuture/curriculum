+++
title = "Jest's Application Programming Interface"

time = 15
[objectives]
    1='Explain why we use APIs in programming'
    2='Identify some commonly used APIs'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

With Jest installed, we need to figure out _how to use the Jest framework_ to write tests.
This means we need to look at {{<tooltip title="APIs">}}An **API** is a boundary between a programmer and an application, enabling a programmer to use an application’s functionality without being concerned with how the application was built.{{</tooltip>}} again.

API stands for

- **Application**
- **Programming**
- **Interface**.

We've encountered the word **interface** already.

But we can break down each word in this acronym to understand it altogether.

- An **application** is a program or piece of software designed to serve some purpose.

- **Programming** refers to the process of writing code or software.

- An 🕹️**interface** is a shared boundary between two or more systems.

We've encountered several functions like `console.log` and `Math.round` already.
`console.log` and `Math.round` are **API**s.

`console.log` is actually implemented in a different language (C++), but that doesn't matter - its functionality is exposed to us when we write JavaScript, and we don't need to care how it's actually implemented or how it works.

Jest provides an **API** so we can write tests.
So we have to find out about the Jest API to start writing tests with Jest.

> [!NOTE]
>
> ## 🧐 Other APIs
>
> Try and list other examples of APIs you've used since the start of the course.
> Start a thread in Slack to discuss with your class.
