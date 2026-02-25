+++
title = "NodeJS"
headless = true
time = 20
facilitation = false
objectives = [
    "Identify and explain why someone may use NodeJS",
]
+++

We know that JavaScript is an interpreted language. Running it needs some interpreter to read our lines of code and execute them.

We've already seen that web browsers can run JavaScript. Web browsers provide a runtime environment for JavaScript. 

NodeJS is another runtime environment for running JavaScript. It allows us to run JavaScript files from a terminal.

There are some similarities and differences between how NodeJS runs JavaScript, and how web browsers run JavaScript. For instance:
* Both support the same core language (e.g. defining variables, if statements, for loops, etc).
* Web browsers {{<tooltip title="expose">}}To expose an API means to provide functions or values to the programmer. Sometimes we expose these over the internet, using HTTP+JSON. Other times we expose them directly as symbols you can import into your program.{{</tooltip>}} extra APIs that can be used from JavaScript, e.g. the DOM.
* NodeJS exposes extra APIs that can be used from JavaScript, e.g. reading and writing files in the filesystem.
* Some APIs are implemented differently, e.g. if you call `console.log` in a web browser it will log to the web inspector console (hidden by default), whereas in NodeJS it will log to stdout (the default output of a program).

People use NodeJS so that they can run code they've written in a terminal. Some example reasons:
* Because they want to use NodeJS's extra capabilities in their code (e.g. reading files).
* Because they want to use a JavaScript as part of a shell pipeline.
* Because they want their program to run for a long time on a server.

You've already written JavaScript programs and run them in the NodeJS runtime environment - every time you run a command like `node index.js` or `npm test` you're running JavaScript with NodeJS.

Most of the programs you wrote and ran like this in the Introduction to Programming course were short-lived experiments (learning a concept and trying it out), or tests.

We're going to start thinking about writing programs _intended to be run like this_.
