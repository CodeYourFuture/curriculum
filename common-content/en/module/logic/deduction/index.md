+++
title = "Deduction"
time = 25
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Define deduction"
    2="Use deduction to solve a matrix puzzle"
+++

> Deduction is reasoning from **general** rules to a **specific** conclusion that is _definitely_ true

```mermaid
flowchart LR
    d1[Rule 1: If A then B]
    d2[Rule 2: We have A]
    d1 --> dc[Therefore we must have B]
    d2 --> dc
```

In [Murdle](https://murdle.com/), we use deduction to solve murders. Given general rules about the crime scene and specific clues, we can {{<tooltip title="deduce">}}Use rules you know are true to prove something specific _must_ also be true.{{</tooltip>}} who the murderer must be.

> _Given_ the body was found in the kitchen  
> _And_ only Miss Saffron had been in the kitchen  
> _Then_ Miss Saffron must be the murderer

This is deduction: starting with general rules and arriving at a specific conclusion that must be true. Unlike guessing or inferring patterns, deduction gives us certainty. If our premises are true, our conclusion must be true.

In Murdle, every puzzle can be solved through pure deduction. There's no need to guess. The clues and rules will lead you to a single possible murderer.

Go play Murdle.

{{<blocklink
  src="https://murdle.com/"
  name="Murdle"
  caption="A deductive logic puzzle game"
  time="5" >}}
