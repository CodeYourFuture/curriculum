+++
title = 'Keys'

time = 10
[objectives]
    1='Explain why React needs keys'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="narrative" title="React Learn">}}
Complete 🧑🏾‍🎓 [Keeping list items in order with key](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)
{{</note>}}

{{<note type="warning" title="Keys">}}
JSX elements directly inside a map() call always need keys!
{{</note>}}

{{<note type="question" title="Check your understanding">}}

<details><summary>Q: Why are keys important in React's list rendering?
</summary>
A: Keys help React track and update list items efficiently.
</details>
<details><summary>Q: What should a key in a React list be like?
</summary>
A: A key should be stable, predictable, and unique for each list item.
</details>
{{</note>}}
