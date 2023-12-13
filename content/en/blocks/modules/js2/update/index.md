+++
title = '🏷️ Updating the interface'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Access and modify the innerText of a html element'
+++

We can calculate the remaining characters available every time a user's key is released from the keyboard in the `textarea`. Finally, we must update the `p` element in the user interface with the number of characters remaining.

> Step 5: Update the interface with the number of characters left

To achieve this goal, we'll need to access the `p` element with id `"character-limit-info"` and then update the inner text. As before, we can use `document.querySelector` to access an element in the DOM using an appropriate CSS selector:

```js {linenos=table,linenostart=1, hl_lines=["8-9"] }
const characterLimit = 200;
const textarea = document.querySelector("textarea");

function updateCharacterLimit() {
  const charactersLeft = characterLimit - textarea.value.length;
  console.log(`${charactersLeft} characters remaining`);

  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${charactersLeft} characters remaining`;
}

textarea.addEventListener("keyup", updateCharacterLimit);
```

{{<tabs name="activity">}}

{{<tab name="🗣️ explain">}}

Explain why the code to access the `p` element is written _inside_ the scope of `updateCharacterLimit`.

{{</tab>}}

{{</tabs>}}
