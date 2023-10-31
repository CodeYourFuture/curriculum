+++
title = 'One to one'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Define a one to one mapping'
+++

There is a {{<tooltip title="one to one association">}}A **one-to-one mapping** associates every element in a set to exactly one element in another set{{</tooltip>}}between the data array and the UI components. We can represent this diagrammatically by pairing up the data elements with their corresponding UI components:

```mermaid
---
title: One to one mapping between data and the UI components
---
flowchart LR
   A[datum1] == createFilmCard(datum1) ==> B[UI component 1]
   C[datum2] == createFilmCard(datum2) ==> D[UI component 2]

```
