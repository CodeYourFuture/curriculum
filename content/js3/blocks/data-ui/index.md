+++
title = '💾 ➡️ 💻 Data to UI '
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain how data is rendered into a user interface'
+++

When we're building user interfaces we're often taking data and {{<tooltip title="rendering">}}**rendering** is the process of building a visual representation or interface from some code{{</tooltip>}} it in the user interface. We're going to start with some data and explore how this data structure is rendered on the page.

### ℹ️ Show listings

Suppose you're building a user interface to display information about local shows in a city.

Let's consider the following problem:

> _Given_ a list of shows data
> _When_ the page first loads
> _Then_ it should display the list of events, including the data of the name, date and location of the event

A typical event can be modelled as a JavaScript object with the following properties:

```js
// js object with event data
{
  name: "Little Simz",
  date: "5th November",
  location: "02 Victoria Warehouse",
  city: "Manchester"
}
```

So our list of event data can be modelled as an array of objects, each with a similar shape:

```js
const events = [
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
  {
    name: "Little Simz",
    date: "5th November",
    location: "02 Victoria Warehouse",
    city: "Manchester",
  },
];
```
