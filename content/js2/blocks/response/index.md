+++
title = '📤 Reacting to events'
headless = true
time = 60
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the syntactic features of a call to addEventListener'
    2='Explain when an event listener is called'
+++

As a user, we interact with elements in a user interface. We click on things, we input text and we complete forms etc.

To react to an event, we need to specify a function that must run when a certain event occurs. We can do this using `.addEventListener`

```js
const input = document.querySelector("input");

input.addEventListener("keyup", function handleKeyup() {});
```

Let's break down the arguments that are passed to `addEventListener`.

- [`"keyup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) - this is the type of event
- `function handleKeyup() {}` - the second argument is an **event handler**. It is a function that is called when an event occurs.

In JavaScript, we can pass functions as arguments to other functions. In this case, we're passing a function `handleKeyup` to `addEventListener` as an input. We can think of this as saying: whenever a key is released on the `input` element, then the function handleKeyup will get called.

We can check that the function is being called just by adding a log to the function:

{{<tabs>}}

{{<tab name="javascript">}}

```js
const characterLimit = 120;
const input = document.querySelector("#word-limit-input");

function handleKeyup() {
  const charactersLeft = characterLimit - input.value;
  console.log(`${charactersLeft} characters remaining`);
}

input.addEventListener("keyup", handleKeyup);
```

{{</tab>}}

{{<tab name="html-css">}}

```html
<section>
  <h4>Character limit</h4>
  <input id="word-limit-input" type="text" />
  <label id="word-limit-label" for="input">120 characters remaining</label>
</section>
```

{{</tab>}}

{{</tabs>}}
