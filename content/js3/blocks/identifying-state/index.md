+++
title = 'Identifying state'
headless = true
time = 15
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify the state in a given problem'
+++

We've been talking about state as being some data which may change, based on which we may render something in the UI.

We typically store each piece of state in a variable. When we render in the UI, our code will look at the state in those variables.

Ideally we want to have as few pieces of state as possible, and we want them to be as fundamental as they can.

Some guidlines for identifying the state for a problem:
1. Anything which can change probably needs some state representing that it can change. In our film example, the search term is something that can change, so it needs some state associated with it.
2. Anything which can be worked out ("derived") from other state should _not_ itself be state. In our film example, we would not sure "is the search term empty" and "what is the search term" as separate pieces of state, because we can answer the question "is the search term empty" by looking at the search term. We don't need two variables, we can use one.
3. If two things always change together, they should probably be one piece of state. For example, if our website had light mode and dark mode, we would not have one state for "is dark mode enabled" and one state for "is light mode enabled" - we would have one piece of state (maybe a boolean).

In our film example, we currently need two pieces of state:
1. Our list of all films.
2. The search term.

When we introduce filtering films based on the search term **we will not introduce new state** - our filtered list of films can be _derived_ from our existing state.
