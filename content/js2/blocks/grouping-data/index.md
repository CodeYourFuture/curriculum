+++
title = '💾 Related pieces of data'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain why we want to use a data structure'
+++

In programming, we're continually defining data in our programs. We use variable declarations to refer to pieces of data all the time.

Often we have pieces of data that are related in some way.

Let's consider an itemised list of data in a bill.

4,5,6,6,7

## limitations of many variables

We can store the data in our program by writing out the list of data as so.

```js
const item0 = 4.6;
const item1 = 5.03;
const item2 = 7.99;
const item4 = 8.01;
```

We can organise the data with identifiers `item` and then a number at the end. Then in our program we can refer back to the data in the program.

However, this is clearly inefficient.

If the number of bill items is very large, we have to keep introducing new variables.

If a particular item, doesn't appear on the list then how do we remove this piece of data from our program. In JavaScript, we cannot delete an existing variable from memory during the program runtime.

Instead we have to group together the data using a **data structure**.

{{<note>}}
A **data structure** is a away of organising and manipulating data.
{{</note>}}
