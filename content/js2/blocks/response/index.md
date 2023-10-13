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

As a user, we interact with elements in a user interface. We _click_ on buttons, _input_ text, _submit_ forms etc.

To react to an event, we can declare a function that we want to run whenever a certain event occurs. We can name this function `handleKeyup`.

```js {linenos=table, hl_lines=["3"] linenostart=1}
const input = document.querySelector("input");

function handleKeyup() {}
```

Then we need to tell the browser to call `handleKeyup` whenever a **keyup** event fires. We can do this with `addEventListener`:

```js {linenos=table,linenostart=1 hl_lines=["5"]}
const input = document.querySelector("input");

function handleKeyup() {}

document.addEventListener("keyup", handleKeyup);
```

Let's break down the arguments that are passed to `addEventListener`.

- [`"keyup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) - this is the type of event
- `handleKeyup` - the second argument is a function. It is a function that is called when an event occurs. We call this function an **event handler**.

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
