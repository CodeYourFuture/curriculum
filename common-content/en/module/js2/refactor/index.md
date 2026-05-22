+++
title = 'Refactor'

time = 30
[objectives]
    1='Identify and remove duplicated code'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have two identical blocks of code:

```js {linenos=table,linenostart=1 hl_lines=["2-5", "8-10"]}
const textarea = document.querySelector("textarea");
const remainingCharacters = textarea.maxLength - textarea.value.length;

const charactersLeftP = document.querySelector("#character-limit-info");
charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

We know that functions can be used to avoid duplication. We have actually already extracted a function for this functionality for the event handler! Now let's call it from the other place we do the same thing:

```js
const textarea = document.querySelector("textarea");

updateCharacterLimit();

function updateCharacterLimit() {
  const remainingCharacters = textarea.maxLength - textarea.value.length;
  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${remainingCharacters} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

{{<note type="tip" title="Remember">}}
When we think we've completed a goal or sub-goal, we should look at our code and see if we can improve it before we continue.
{{</note>}}
