+++
title = 'Data'

time = 30
[objectives]
    1='Identify core components required to supply data and functionality to the user interface'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

For your application to work, your user interface will interact with other services. These services provide data and ways to update this data via the user interface.

Here are the kinds of things these services may do:

### 📖 Reading

A means of **reading data**. The user interface might fetch data from some external source and render it in the interface.

### 💾 Persisting

A means of **persisting changes**. Users will need to create or update existing data. For example, a user might need to **create** a comment on an article. Another user may need to **update** the like/dislike on an existing comment. In each of these cases, any changes are **persisted** in a database. The user interface enables users to read and persist data without worrying about the

{{<note type="activity" title="Discuss">}}

- What are the key components of the application, how are they connected, is it a static or a dynamic application, what kind of data are you storing?

- What sort of data does the client application need - what kind of data is it fetching?

- What is the purpose of each component in your application, how will it communicate with other components in the architecture?
- How do your different pieces of data relate to each other? If you're storing things in a database, what tables will you need, and what relationships will there between the tables?

  {{</note>}}
