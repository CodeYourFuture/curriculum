---
title: client > database
description: Connecting a client to a database on Render
emoji: 🔌
weight: 4
---

{{<note type="tip" title="Tip">}}

This guide uses a database client called [DBeaver](https://dbeaver.io/), but the ideas still apply if you are using another client. If you are using another client, try looking for similarly named controls.

{{</note>}}

1. ![Creating a new Database Connection](new-connection.png "Navigate to the Database tab and select New Database Connection")

1. ![Selecting PostgreSQL from the available databases](selecting-postgres.png "Select PostgreSQL then click the Next button")

1. Often, after the first installation or use of a specific database type, you may encounter the download of relevant drivers modal. This is perfectly normal, just click Download and proceed to the next step. DBeaver will download and install the relevant drivers needed for using your specific database type ![Downloading PostgreSQL drivers](db-drivers.png "click Download and proceed to the next step")

1. ![Enabling option to show all database](show-all-databases.png " To the right of Main tab, Click on PostgreSQL tab. Check the Show all databases checkbox and return to Main tab")

1. Enter your database credentials into the form:

   1. URL: the External Database URL from your Environment Variables section on Render
   1. Host: the same External Database URL, **except** remove everything up to and including the `@` sign then remove everything after `.com`. It should look something like: `dpg-...-a.oregon-postgres.render.com`
   1. Database: the name you used for the Database field when [creating the database](../creating-a-postgres-db.md)
   1. Username: your username
   1. Password: your password ![Form to fill out with your database credentials](db-credentials.png "Fill out your form with database credentials")

1. ![A successful connection test](connection-test.png "Click the Test Connection… button. You should see a modal displaying Connected message. Click OK, and then the Finish button")

1. You are now connected to your Render PostgreSQL database on DBeaver! 🎉

![Successfully connected DBeaver to Render Postgres](connection-successful.png)

## Warning/Failure messages

- You may see warning/failure messages like the one below
- Calmly step through the entire process slowly.
- After a few tries, if you don’t succeed, ask for help in the relevant communication channels

![A connection error message](connection-error.png)

## 🔌 Connecting via node.js

In the Databases module, we used the `pg` library to connect to a local Postgres database.
To connect via render we require an extra flag `ssl: { rejectUnauthorized: false }`, like so:

```javascript
const connectionString =
  "postgres://jz:someverysecretpassword@dpg-ck107k7dorps738bnga0-a.frankfurt-postgres.render.com/fullstack_3qby";

const db = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
```

When connecting to Render's database from your local machine you should use the information in `External Database URL`:
![render.com dashboard connections](render-dashboard.png)

However, if you are running your client on render alongside your server, then you will be able to use the `Internal Database URL` instead.

Note that when committing code to GitHub you should avoid adding any kind of secrets. The `connectionString` above for example contains your database password, and anyone knowing that information will be able to access your database directly.

To avoid this you should set up these values using environment variables. Firstly, in your code change the following:

```js
const connectionString = process.env.DATABASE_URL;
```

Then go to your project's configuration in Render, and set up the `DATABASE_URL` environment variable:

![render.com environment settings](changing-environment-variables.png)

Make sure you use the `Internal Database URL` setting. This will let Render know what the database's location is.

To set this value locally you can use the following code:

```bash
export DATABASE_URL=<The external database URL>
```

Note this will only set up this value for the current session. Every time you reload your terminal you will need to re-do this call. To avoid needing to do this all the time, you can opt in using a project called [Dotenv](https://github.com/motdotla/dotenv)
