+++
title = "What is a backend?"
headless = true
time = 20
facilitation = false
objectives = [
    "Define the backend of a website.",
    "Explain the terms _client_ and _server_."
]
+++

We know that a frontend is a collection of static files that can be handed to a web browser, and which the web browser will evaluate.

A backend is a program which a frontend can communicate with. The frontend can ask it for (or tell it) information, and the backend can respond.

A backend can be written in any programming language. It doesn't need to be the same programming language as the frontend is written in (but it can be).

Most backends are long-running. They are programs that keep running for a long time, waiting for a frontend to communicate with them. This is important - if the program wasn't running, the frontend wouldn't be able to communicate with it.

Not all websites have a backend. There are lots of websites which are just a frontend. But if we need to overcome any of the limitations we've explored, our system will need a backend. Sometimes we need to write the backend ourselves. Other times we can use one someone else has written.

There's nothing special about a backend. It's just a program that can be communicated with. You've already written plenty of programs.

A backend is just a program, but it gets its input from an HTTP request over the network, instead of from a command line flag or file. And it writes its output in an HTTP response over the network, instead of to stdout or a file.

> [!NOTE]
> Backend and Frontend are terms that get used differently in different contexts.
>
> In this section, we're mostly talking about websites here, but other software systems also have backends and frontends.
>
> Other similar terms are **client** and **server**. People often talk about a web browser, or a frontend, as being a client, and a backend as being a server.
>
> In general a "server" is something waiting to be communicated with, and a "client" is something that will communicate with it.
>
> Sometimes one program acts as both a client and a server! A web browser may ask (be a client) a backend (a server) for some information. And that backend may ask (be a client) _another_ backend (a server) for information to help it answer the question.
