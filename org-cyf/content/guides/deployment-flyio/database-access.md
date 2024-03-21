---
emoji: 🚀
title: Accessing fly.io databases
description: Learn how you can access the fly.io PostgreSQL database
weight: 3
---

## 🗝️ Accessing database

If you have been following the setup guides you would have both a backend and a database system running under fly.io.

Your database can hold data for multiple applications, so first you need to get a list of them:

```bash
flyctl postgres db list -a YOURNAME-PROJECTNAME-db
```

(Make sure you use your database's name after the `-a` that you have set up before)

On the list you will find under the NAME column three values: `postgres`, `repmgr` and finally the name of your application's datastore. It will be something like `YOURNAME_PROJECTNAME` - same as your application name but all of the dashes are replaced with underscores.

Take a note of this name as you will need it later.

## Uploading database

To connect to the database you will need to use `flyctl`:

```bash
flyctl postgres connect -a YOURNAME-PROJECTNAME-db -d YOURNAME_PROJECTNAME
```

Where the first value is the name of the database you set up in level 150, and the second value if the datastore name you obtained in the last section.

The command above will start you up with a proper `psql` console where you can run commands.

You can also pipe in SQL files. For example if you have an `initdb.sql` file containing SQL commands to initiate a database you can do:

```bash
flyctl postgres connect -a YOURNAME-PROJECTNAME-db -d YOURNAME_PROJECTNAME < initdb.sql
```
