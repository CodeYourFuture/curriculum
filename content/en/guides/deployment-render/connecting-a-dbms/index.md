---
title: client > database
description: Connecting a client to a database on Render
emoji: 🔌
---

{{<note type="tip" title="Tip">}}

This guide uses a database client called [DBeaver](https://dbeaver.io/), but the ideas still apply if you are using another client. If you are using another client, try looking for similarly named controls.

{{</note>}}

1. Navigate to the Database tab and select New Database Connection

![Creating a new Database Connection](new-connection.png)

2. Select PostgreSQL then click the Next button

![Selecting PostgreSQL from the available databases](selecting-postgres.png)

3. Often, after the first installation or use of a specific database type, you may encounter the download of relevant drivers modal. This is perfectly normal, just click Download and proceed to the next step. DBeaver will download and install the relevant drivers needed for using your specific database type

![Downloading PostgreSQL drivers](db-drivers.png)

4. To the right of Main tab, Click on PostgreSQL tab. Check the Show all databases checkbox and return to Main tab

![Enabling option to show all database](show-all-databases.png)

5. Enter your database credentials into the form:
   1. URL: the External Database URL from your Environment Variables section on Render
   1. Host: the same External Database URL, **except** remove everything up to and including the `@` sign then remove everything after `.com`. It should look something like: `dpg-...-a.oregon-postgres.render.com`
   1. Database: the name you used for the Database field when [creating the database](../creating-a-postgres-db.md)
   1. Username: your username
   1. Password: your password

![Form to fill out with your database credentials](db-credentials.png)

6. Click the Test Connection… button. You should see a modal displaying Connected message. Click OK, and then the Finish button

![A successful connection test](connection-test.png)

7. You are now connected to your Render PostgreSQL database on DBeaver!

![Successfully connected DBeaver to Render Postgres](connection-successful.png)

## Warning/Failure messages

- You may see warning/failure messages like the one below (I did!)
- Not to worry, calmly step through the entire process slowly.
- After a few tries, if you don’t succeed, ask for help in the relevant communication channels

![A connection error message](connection-error.png)

# Connecting via node.js
We learnt in the Databases module to use the `pg` library to connect to a local Postgres database.
To connect via render we require an extra flag `ssl: { rejectUnauthorized: false }`, like so:
```javascript
const db = new Pool({
  user: "jz",
  host: "dpg-ck107k7dorps738bnga0-a.frankfurt-postgres.render.com",
  database: "fullstack_3qby",
  password: "NLNXAWPsYPzOn3kKzExavV08DugCC0rx",
  ssl: {
    rejectUnauthorized: false,
  },
});
```

Note that the `host` does not exactly match what is shown on the render.com dashboard - you should use the information in `External Database URL` to connect from your own computer:
![render.com dashboard connections](render-dashboard.png)
However, if you are running your client on render alongside your server, then you will be able to use the `Internal Database URL` instead. In this case, the `host` will indeed match.

You can also directly copy the url into a `connectionString` and it should work in the same way:
```javascript
const db = new Pool({
  connectionString: "postgres://jz:NLNXAWPsYPzOn3kKzExavV08DugCC0rx@dpg-ck107k7dorps738bnga0-a.frankfurt-postgres.render.com/fullstack_3qby",
  ssl: {
    rejectUnauthorized: false,
  },
});
```
