+++
title = 'Props'

time = 15
[objectives]
    1='Pass props to a component'
    2='Read props from a component'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<note type="narrative" title="React Learn">}}
Complete 🧑🏾‍🎓 [Passing props to a component](https://react.dev/learn/passing-props-to-a-component)
{{</note>}}

### 🧠 Think back to your [filterFilms](/filterFilms.html) project.

We used {{<tooltip title="destructuring ">}}Destructuring unpacks values from arrays or objects into individual variables.
{{</tooltip>}} to pull out the properties of an object and pass it to our `createCard()` function. React uses a similar idea.

{{<note type="question" title="Check your understanding">}}

<details><summary>Q: What are props in React?
</summary>
A: Props are values passed from a parent component to a child component.
</details>
<details><summary>Q: How do you pass a prop to a component?
</summary>
A: Add the prop to the JSX tag of the child component.
</details>
{{</note>}}
