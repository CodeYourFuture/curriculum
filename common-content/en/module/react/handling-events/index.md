+++
title = 'Handling events'

time = 15
[objectives]
    1='Add event handlers to your JSX'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="narrative" title="React Learn">}}
Complete 🧑🏾‍🎓 [Responding to Events](https://react.dev/learn/responding-to-events)
{{</note>}}

### 🧠 Think back to [JS2](/js2) where you learned how to handle Events

{{<note type="question" title="Check your understanding">}}

<details><summary>Q: How do you attach an event handler to a JSX element in React?
</summary>

A: By passing the handler function as a prop, like `onClick={handleClick}`.

</details>
<details><summary>Q: What is a common mistake when attaching event handlers in JSX?
</summary>

A: Accidentally calling the function `(onClick={handleClick()})` instead of passing it.

</details>
{{</note>}}
