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

{{<note type="activity" title="Inspect with Dev Tools">}}

We can use the Dev Tools tab to look through the DOM and look at the elements on the page.
We can also start using the console tab to access the DOM too. If we click on the console tab, we can access the DOM by typing document directly into the console.

{{</note>}}

### Query selector

Recall: step 2: Step 2: Access the input element

The DOM is an interface. We can use methods from the DOM API to interact with the web page and access elements.

Let’s start by accessing the input element and its value.

To access DOM elements, we can use a method on the DOM API - [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

We can create a javascript file, `script.js`, to call DOM methods to interact with the web page.

```js
const input = document.querySelector("input");
console.log(input);
```

`document.querySelector` returns an element object, which represents the element in the document. We can access various properties of the `input` object. In particular we want to access the value a user types into the input box. We can do this by accessing the value property:

```js
const input = document.querySelector("input");
console.log(input.value); // evaluates to the value typed by the user
```
