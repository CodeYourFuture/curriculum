+++
title = "Synchronising with effects"

time = 40
[objectives]
    1='Define the purpose of the useEffect hook in React'
    2='Describe the difference between effects and events in React'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="narrative" title="React Learn">}}
Complete 🧑🏾‍🎓 [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects)
{{</note>}}

Effect here means "side effect". We use the `useEffect()` hook to run code that has side effects, like fetching data from an API. We use these sparingly, because they can make our code harder to reason about.

{{<note type="question" title="Check your understanding">}}

<details><summary>Q: What is the purpose of the useEffect hook in React?
</summary>
A: It's used for handling side effects in components, like synchronising with external systems.</details>
<details><summary>Q: What's the difference between effects and events in React?
</summary>
A: Effects handle side effects after a component renders, while events handle user interactions within a component.</details>
{{</note>}}
{{<note type="tip" title="Use Effects Sparingly">}}
As you build and review your React Hotel apps, use [You Probably Don't Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) to help you critique the code you read.
{{</note>}}
