+++
title = 'Fetching data'
headless = true
time = 20
facilitation = false
emoji= '🧩'
[objectives]
    1='Update a problem statement using web APIs to fetch data'
+++

If we start with some data like an array then we can render it in the user interface. However, it will be more typical for us to fetch data across a network and then display it in a browser. In other words, we'll have to request some data from a server and then render it in the user interface. To access data across a network, we'll make use of **web APIs**.

Let's revisit a previous problem:

> _Given_ a list of film data
> _When_ the page first loads
> _Then_ it should display the list of films now showing, including the film title, times and film certificate

Now instead of starting with a list of film data, we'll have to fetch this list of film data from a remote API. We can restate the problem as follows:

> _Given_ a **web API that serves** film data
> _When_ the page first loads
> _Then_ it should request and display the list of film data, including the film title, times and film certificate
