+++
title = "N+ Query Problem"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 30
emoji= "⏳"
[objectives]
    1="Define the n+1 query problem"
    2="List effective strategies to reduce database queries"
+++

You fetch data from an endpoint, but where does the endpoint get its data? Usually from a database, by sending a query. 

> 💡 Databases take time to find data

Database calls can be slow. When our backend needs data from the database, it sends a query. If we're not careful, we can end up making many more queries than necessary.

### Purple Forest Profile Picture
Imagine building a new feature of user profile picture. We need to show blooms from people you follow. Now each bloom also needs to show the author's name and profile picture.

Let's say we are using a SQL database. A simple, but very inefficient, way to fetch this data from the database might be:

1. Get the IDs of the 50 people you follow: `SELECT user_id FROM follows WHERE follower_id = current_user_id (1 query)`
1. Get the latest 10 bloom IDs for each of those 50 people:` SELECT bloom_id FROM blooms WHERE author_id = ? ORDER BY timestamp DESC LIMIT 10` (50 separate queries, one for each followed user)
1. Now we have, say, 100 unique bloom IDs. For each of those 100 blooms, get the bloom content: `SELECT * FROM blooms WHERE bloom_id = ?` (100 separate queries!)
1. And for each of those 100 blooms, get the author's details: `SELECT name, avatar_url FROM users WHERE user_id = ?` 

This pattern: one initial query followed by N queries inside a loop is the "N+1 Query Problem". In this example, it's more like 1 + N + M + P queries! It results in hundreds of separate trips to the database.

### Flooding and Performance

Each individual database query is fast. Making hundreds of them back-to-back has serious consequences.

We've already seen that every query adds network delay and processing time. This is the latency problem we considered before. But there's also a problem with the number of queries. There are only so many queries you can fit in a queue. Sending a burst of hundreds of simple queries can _overwhelm_ the database server. This is sometimes called "flooding" the database. 

The server has to handle each request individually, consuming resources (CPU, memory, connections). If many users trigger this N+1 pattern at once, the database can slow down for everyone, or even fall over entirely.

This N+1 problem can happen with any database interaction if you loop and query individually. Understanding this helps you write backend code that doesn't accidentally overload the database.

### What to do instead

The real `/home `endpoint avoids these problems by using efficient strategies:

**Batching**: Ask for many items in one request. "get blooms for users Daniel, Ali, and Sally".  
**Caching**: Store results so you don't have to ask the network again. Ask for only new changes in future.  
**Pagination**: Ask for only the first page of results. Load more later if the user scrolls or clicks "next".  

All these are ways to save the data we need, close to where we need it.  We'll think about this more next time. 
