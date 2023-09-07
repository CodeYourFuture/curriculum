+++
title = '📤 Reacting to events'
headless = true
time = 10
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

Reacting to interactions

Recall: As a user, we interact with elements on a web page. We click on things, we input text and we complete forms etc.
Currently, we have two functions - getUserInput, and countWords - we can call these functions manually. However, this doesn’t fulfill step 3. In reality, we actually want the user to get feedback when they interact with the input element, In other words, everytime the user types in the box, we expect them to get feedback if they’ve typed another word.

Reacting to an event

We can react to an event using an event handler. An event handler is a function that gets called when some event occurs. We attach event handlers to a particular element using the addEventListinder method. Let’s look at an example:

```js
const input = document.querySelector(‘input’);

input.addEventListener(‘keyup’,function handlerKeyUp() {
	console.log(‘... on key up …’);
});
```

addEventListenser takes 2 arguments - a string and also a function. We’ve seen a similar situation earlier

```js
test("dssss", function () {});
```
