+++
title = "Responsibilities of frontends, backends, and databases"
headless = true
time = 15
[objectives]
    1="Categorise functionality into where it should belong"
+++

When trying to decide which components we need, and in which component functionality should live, it's useful to think about the capabilities and limitations of each.

A few guiding principles:
* If you need multiple users or computers to share some information, you need a backend to coordinate this.
* If you need your data to be reliably persisted, you need a database (or other storage component) to store it.
* If you need things to respond very quickly to a user interaction, you probably want to do this in a frontend.

Try to identify which components we would need for each of these applications:

{{<multiple-choice
   question="A website hosting a book, so that you can read the book through a web browser."
   answers="Just a frontend. | A frontend and a backend. | A frontend and a backend and a database."
   feedback="Right - if we're just serving some static content, and it never changes, we only need a frontend. | Probably not - if we're just hosting the book, we probably don't need a backend. But there are many requirements which may need one (e.g. password-protecting our book). | Probably not - if we're just hosting the book, we probably don't need a backend. But there are many requirements which may need one (e.g. password-protecting our book, counting how many times it's been read, allowing comments, etc)."
   correct="0" >}}

{{<multiple-choice
   question="A digital whiteboard which multiple users can collaborate on."
   answers="Just a frontend. | A frontend and a backend. | A frontend and a backend and a database."
   feedback="Probably not - for multiple users to be able to see the same view of what's on the whiteboard, there probably needs to be a backend. If it was just a whiteboard you could draw on on your own laptop, a frontend would probably be enough. | Maybe, but the whiteboard probably wouldn't be very resilient (e.g. if we needed to restart the server, we may lose everyone's whiteboards. | Right - we have multiple users so we need a backend, and we almost always want a database so that our data can persist."
   correct="2" >}}

{{<multiple-choice
   question="A website which lets you log in to GitHub and shows all of your GitHub contributions."
   answers="Just a frontend. | A frontend and a backend. | A frontend and a backend and a database."
   feedback="Probably not - you need to authenticate to GitHub to find out your username, you probably need a backend. | Right - you need a backend to be able to authenticate to GitHub. You generally can't do authentication without a backend. | Probably not - because GitHub stores the data, you probably don't need to store it yourself. But you may want to, e.g. to cache data, or to store other data useful in your website."
   correct="1" >}}
