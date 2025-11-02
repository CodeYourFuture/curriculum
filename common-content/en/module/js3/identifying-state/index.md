+++
title = 'Identifying state'

time = 20
[objectives]
    1='Identify the state in a given problem'
[build]
  render = 'never'
  list = 'local'
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

If a website allows log-in, we would not have one state for "is a user logged in" and one state for "what user is logged in". We would have one piece of state: The currently logged in user. We would set that state to `null` if there is no logged in user. We can answer the question "is a user logged in" by checking if the currently logged in user is `null`. We don't need a separate piece of state.

#### State in our example

In our film example, we need two pieces of state:

1. Our list of all films
2. The search term

When we introduce filtering films based on the search term **we will not introduce other new state**. We will not store a filtered list of films in state. Our filtered list of films can be _derived_ from our existing state.
