+++
title = 'Synchronous execution'

time = 10
[objectives]
1="Define asynchrony"
2="Explain how synchronous execution works"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

We can handle latency using {{<tooltip title="asynchronous execution">}}Asynchronous execution is running code in a different order than it was written.{{</tooltip>}} To understand asynchrony we first need to be clear about {{<tooltip title="synchronous execution">}}Synchronous execution is running code in the order it is written.{{</tooltip>}}.

We have written a lot of JavaScript programs that execute sequentially. This means that each line of code is run in order, one after the other.
{{<columns>}}

#### For example:

```js
console.log("first");
console.log("second");
console.log("third");
```

<--->

#### Outputs:

```console
first
second
third
```

{{</columns>}}
Each line of code is run in order. This is synchronous execution. We do this because JavaScript is {{<tooltip title="single threaded">}}
A single thread can do one thing at a time. JavaScript is a single threaded language.
{{</tooltip>}}.

When we call a function, the function will run to completion before the next line of code is executed. But what if we need to wait for something to happen? What if we need to wait for our data to arrive before we can show it? In this case, we can use **asynchronous execution**.
