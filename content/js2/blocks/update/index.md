+++
title = '🏷️ Updating the interface'
headless = true
time = 45
facilitation = false
emoji= '🧩'
[objectives]
    1='Access and modify the innerText of a html element'
+++

We can calculate the remaining characters every time a user's key is released from the keyboard. Finally, we must update the label element in the user interface with the number of characters remaining.

> Step 5: Update the interface with the number of characters left

To achieve this goal, we'll need to access the `p` element with id `"character-limit-info"` and then update the label text. As before, we can use `document.querySelector` to access an element in the DOM:

```js {linenos=table,linenostart=1, hl_lines=["8-9"] }
const characterLimit = 120;
const input = document.querySelector("input");

function handleKeyup() {
  const charactersLeft = characterLimit - input.value;
  console.log(`${charactersLeft} characters remaining`);

  const charactersLeftP = document.querySelector("#character-limit-info");
  charactersLeftP.innerText = `You have ${charactersLeft} characters remaining`;
}

input.addEventListener("keyup", handleKeyup);
```

{{<tabs name="activity">}}

{{<tab name="explain">}}

Explain why the code to access the `p` element is written _inside_ the scope of `handleKeyup`.

{{</tab>}}

{{</tabs>}}
