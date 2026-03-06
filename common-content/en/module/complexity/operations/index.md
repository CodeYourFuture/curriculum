+++
title = '"Expensive" Operations'
time = 30
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Explain what the significant/expensive operations for a particular algorithm are likely to be"
    2="Quantify the number of significant operations taken by a particular algorithm"
+++

Let's think about Purple Forest from the [Legacy Code](https://github.com/CodeYourFuture/Module-Legacy-Code/) module.

When we build the timeline of blooms on the homepage, we call an endpoint `/home`. This returns an array of objects, blooms, produced by people we follow, plus our own blooms, sorted by timestamp. We stuff this in our state object (and cache _that_ in our local storage).

There are many different ways we could get and show this information in our frontend. Some ways are {{<tooltip title="better">}}
Here we are defining better as faster. We might at other times define better as _simpler_, _clearer_, or _safer_.
{{</tooltip>}} than others.

What if we had tried any of the following strategies:

#### 1. Get ALL Blooms, then Filter

1. Request all the blooms in the database
1. Request a list of all the people we follow
1. Filter all the blooms by the people we follow, plus our own name
1. Sort by timestamp
1. Display blooms

#### 2. Loop Network Requests

1. Request a list of all the people we follow
1. For each person we follow, request their blooms
1. Request our own blooms
1. Merge all the arrays
1. Sort by timestamp
1. Display blooms

#### 3. Get ALL Blooms & People, then Loop & Filter

1. Request all the blooms in the database
1. Request all the people in the database
1. Request a list of all the people we follow
1. For each bloom.sender, loop over all the people and check if they are in our "following" list
1. Sort by timestamp
1. Display blooms

Given what we've just thought about, how efficient are these programs? Which is going to be fastest or slowest? Which is going to use the most or least memory? How could you make them more efficient? Write your ideas down in your notebook.

Our end state is always to show the latest blooms that meet our criteria. How we produce that list determines how quickly our user gets their page. This is very very important. After just **three seconds**, half of all your users have given up and left.

The Purple Forest application does not do most of this work on the front end, but it does still do it somewhere. (We can make our work cheaper, but never free.) The application uses common strategies to minimise:

1. Steps taken to find and sort the data
1. Quantity of data requested
1. Number of network calls

This is because some operations are more {{<tooltip title="expensive">}}Expensive operations consume a lot of computational resources like CPU time, memory, or disk I/O.{{</tooltip>}} than others.

The _order_ also matters. In all of the above strategies, we filter the blooms _before_ sorting them. Sorting isn't a constant-time operation, so it takes more time to sort more data. If in the first strategy we had sorted _all_ of the blooms before we filtered down to the just the ones we cared about, we would have spent a lot more time sorting blooms we don't care about.
