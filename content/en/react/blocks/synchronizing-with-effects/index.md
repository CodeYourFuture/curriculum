+++
title = "🤹🏼 Synchronising with effects"
headless = true
time = 40
facilitation = false
emoji= '🧩'
[objectives]
    1='Define the purpose of the useEffect hook in React'
    2='Describe the difference between effects and events in React'
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
