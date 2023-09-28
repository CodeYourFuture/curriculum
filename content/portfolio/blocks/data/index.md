+++
title = '🗃️ Data'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Identify core components required to provide data and functionality to the user interface'
+++

For your user interface to work, you will need to interact with other services.

Here are the kinds of functionality you may need to provide via your user interface:

### 📖 Reading

A means of **reading data** - the user interface may need to fetch data from some external source so it can be rendered in the interface.

### 💾 Persisting

A means of **persisting changes**. Users will need to make changes to data or create new data. For example, a user might need to **create** a comment on an article. And then they may need to **update** the like on an existing comment. In each of these cases, the data is stored or **persisted** somewhere in a database. Your user interface will need a way to create/update data in the database.

{{<note type="activity" title="Discuss">}}

- What are the key components of the application, how are they connected, is it a static or a dynamic application, what kind of data are you storing?
- What sort of data does the client application need - what kind of data is it fetching?
- What is the purpose of each component in your application, how will it communicate with other components in the architecture?

  {{</note>}}
