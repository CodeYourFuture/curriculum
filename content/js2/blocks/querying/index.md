+++
title = ' Querying the DOM'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We start with a web page with the following elements:

HTML page here.

We can use the Dev Tools tab to look through the DOM and look at the elements on the page.
We can also start using the console tab to access the DOM too. If we click on the console tab, we can access the DOM by typing document directly into the console.

### Query selector

Let’s start by accessing the input element on the page and see if we can access the input text.

To access DOM elements, we can use a method on the DOM API - document.querySelector(‘input’);

We can call this method directly in the console in Dev Tools.

-- add a screenshot here of calling document.qu

However, we can also link this web page to a JS script and write JavaScript there.

```js
const input = document.querySelector("input");
console.log(input);
```

Input is of type NodeElement - which is a JavaScript object with special properties. The key thing is that this NodeElement corresponds to the element on the page. We can log some proprieties of the input - such as the valu attribute.
console.log(input.value);

The return value of this function is now the value that the user has inputted into the input box. We can call getUserInput a number of times and also update the input element to observe the difference in the function’s return value.
