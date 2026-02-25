+++
title = "N+1 Query Problem"
time = 60
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Define the n+1 query problem"
    2="List effective strategies to reduce database queries"
+++

You fetch data from an endpoint, but where does the endpoint get its data? Usually from a database, by sending a query. 

> 💡 Databases also take time to find data

[Database calls](https://learn.microsoft.com/en-us/sql/relational-databases/sql-server-storage-guide?view=sql-server-ver16#disk-io) are expensive. When our backend needs data from the database, it sends a query. If we're not careful, we can end up making many more queries than necessary.

### 🟣 Purple Forest Profile Picture
We are building a new feature of "user profile picture". We already show blooms from people you follow. Now each bloom also needs to show the author's name and profile picture.

Let's say we are using a SQL database. A simple, but 
inefficient, way to fetch this data from the database might be:

1. Get the IDs of the 50 people you follow: `SELECT user_id FROM follows WHERE follower_id = current_user_id (1 query)`
1. Get the latest 10 bloom IDs for each of those 50 people:` SELECT bloom_id FROM blooms WHERE author_id = ? ORDER BY timestamp DESC LIMIT 10` (50 separate queries, one for each followed user)
1. Now we have, say, 100 unique bloom IDs. For each of those 100 blooms, get the bloom content: `SELECT * FROM blooms WHERE bloom_id = ?` (100 separate queries!)
1. And for each of those 100 blooms, get the author's details: `SELECT name, avatar_url FROM users WHERE user_id = ?` 

This pattern: one initial query followed by N queries inside a loop is the "N+1 Query Problem". In this example, it's more like 1 + N + M + P queries! It results in hundreds of separate trips to the database.

{{<note type="activity" title="Draft this feature">}}

1. In your notebook, plan how _you_ would build this feature in your local copy of Purple Forest.
1. Now build out the feature from the back end to the front. Don't worry about the layout, just focus on finding the most efficient route through the system.

{{</note>}}

### 🌊 Flooding and Performance

Even if each individual database query is reasonably fast. Making hundreds of them back-to-back has serious consequences.

We've already seen that every query adds network delay and processing time. This is the latency problem we considered before. But there's also a problem with the number of queries. There are only so many queries you can fit in a queue. Sending a burst of hundreds of simple queries can _overwhelm_ the database server. This is sometimes called "flooding" the database. 

The server has to handle each request individually, consuming resources (CPU, memory, connections). If many users trigger this N+1 pattern at once, the database can slow down for everyone, or even fall over entirely.

This N+1 problem can happen with any database interaction if you loop and query individually. Understanding this helps you write code that doesn't accidentally overload the database.

{{<
  multiple-choice
  question="What is the N+1 Query Problem?"
  answers="Fetching N items plus 1 extra backup item. | Making 1 query to get a list, then N separate queries to get details for each item in the list. | A query that is N times too complex. |  Trying N+1 different network endpoints."
  feedback="No, but flip this and try again? | Right! That's a clear description. | No, this is so vague it describes nothing. | No, it's not about network endpoints."
  correct="1">}}

### 📦 What to do instead

The real `/home `endpoint avoids these problems by using efficient strategies:

**Batching**: Ask for many items in one request. "get blooms for users Daniel, Ali, and Sally".  
**Caching**: Store results so you don't have to ask the network again. Ask for only new changes in future.  
**Pagination**: Ask for only the first page of results. Load more later if the user scrolls or clicks "next".  

All these are ways to save the data we need, close to where we need it. But each strategy also has downsides.

* Batching may reduce our responsiveness. It will probably take longer to fetch three users' blooms than one user's blooms. If we'd just asked for one user's blooms, then the next user's, we probably probably could've showed the user _some_ results sooner. Batching forces us to wait for _all_ of the results before we show anything.
* Caching may result in stale results. If we store a user's most recent blooms, and when they re-visit the page we don't ask the database for the most recent blooms, it's possible we'll return old results missing the newest blooms.
* Pagination means the user doesn't have complete results up-front. If they want to ask a question like "has this user ever bloomed the word cheese", they may need to keep scrolling and searching to find the answer (with each scroll requiring a separate network call and database lookup).
