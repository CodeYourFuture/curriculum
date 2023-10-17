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

As a user, we interact with the elements on a web page. We _click_ on buttons, _input_ text, _submit_ forms etc.

To react to an event, we can declare a function that we want to run whenever a certain event occurs. We call this function an **event handler**. In the example below, we _name_ this function `handleKeyup`:

```js {linenos=table, hl_lines=["3"] linenostart=1}
const input = document.querySelector("input");

function handleKeyup() {}
```

We need to tell the browser to call `handleKeyup` whenever a **keyup** event {{<tooltip title="fires">}}"fires" means "an event is triggered"{{</tooltip>}}. We do this using `addEventListener`:

```js {linenos=table,linenostart=1 hl_lines=["5"]}
const input = document.querySelector("input");

function handleKeyup() {}

document.addEventListener("keyup", handleKeyup);
```

Let's break down the arguments that are passed to `addEventListener`.

- [`"keyup"`](https://developer.mozilla.org/en-US/docs/Web/API/Element/keyup_event) - this is the type of event
- `handleKeyup` - the second argument is a function. It is a function that is called when an event occurs.

In JavaScript, we can pass functions as arguments to other functions. In this case, we're passing a function `handleKeyup` to `addEventListener` as an input. We can think of this as saying: whenever a key is released on the `input` element, then the function `handleKeyup` will get called. Any code we want to run in response to the `keyup` event will need to be executed inside `handleKeyup`.

{{<tabs>}}

{{<tab name="javascript">}}

We can add a log to `handleKeyup` to check it is called every time the `"keyup"` event fires.

```js
const characterLimit = 200;
const input = document.querySelector("#word-limit-input");

function handleKeyup() {
  console.log("keyup event has fired... calling handleKeyup...");
}

input.addEventListener("keyup", handleKeyup);
```

{{</tab>}}

{{<tab name="html-css">}}

```html
<section>
  <h3>Character limit</h3>
  <label for="comment-input"
    >Please enter your comment in the text area below
  </label>
  <textarea
    id="comment-input"
    name="comment-input"
    rows="5"
    maxlength="200"
  ></textarea>
  <p id="character-limit-info">You have 200 characters remaining</p>
</section>
```

{{</tab>}}

{{<tab name="✏️ check">}}

In your local project, define your own event handler and then call event listener to register that event handler for a `keyup` event.
Add a `console.log` to the event handler and **check** the event handler is being called when the event fires.
Check the console tab in dev tools to see the log appear in the console.

{{</tab>}}

{{</tabs>}}
