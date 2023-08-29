+++
title = 'Events'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

An event is something that occurs in a programming environment, If a user clicks on a button, this is an event. If the user types something into an input box, then each time they press the keyboard , this is an event.

In the case of the input box, there are lots of events occurring.
The inpt box’s text is changing.
Whenever a keyboard button is released by the user.

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
