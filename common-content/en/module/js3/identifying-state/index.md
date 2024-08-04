+++
title = '🔎 Identifying state'

time = 15
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the state in a given problem'
[build]
  render = false
  list = 'never'
  publishResources = false

+++

> 🕞 State: data which may change over time.

We store each piece of state in a variable. When we render in the UI, our code will look at the state in those variables. When the state changes, we render our UI again based on the new state.

"What the state used to be" or "How the state changed" isn't something we pay attention to when we render. We always render based only on the current state.

We want to have as few pieces of state as possible. We want them to be fundamental.

Some guidelines for identifying the state for a problem:

#### ✔️ If something can change it should be state.

In our film example, the search term can change, so it needs some state associated with it.

#### ❌ But if something can be _derived_ it should _not_ be state.

In our film example, we would not store "is the search term empty" and "what is the search term" as separate pieces of state. We can work this answer out ourselves. This answer can be **derived**. We can answer the question "is the search term empty" by looking at the search term. We don't need two variables: we can use one.

#### 🖇️ If two things always change together, they should be one piece of state.

If our website had light mode and dark mode, we would not have one state for "is dark mode enabled" and one state for "is light mode enabled". We would have one piece of state: a {{<tooltip title="boolean">}}true or false. On or off.{{</tooltip>}}

In our film example, we need two pieces of state:

1. Our list of all films
2. The search term

When we introduce filtering films based on the search term **we will not introduce new state**. Our filtered list of films can be _derived_ from our existing state.
