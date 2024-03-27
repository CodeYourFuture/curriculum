---
emoji: 🚀
title: Deploying to Supabase
description: Learn how to create a database on Supabase
weight: 9
---

## Intro

[Supabase](https://supabase.com/) is a cloud provider offering multiple services. One of its core services is [PostgreSQL databases](https://supabase.com/docs/guides/database/overview). Supabase's free tier is far more generous than Render's. However, if the database is not accessed for a week it will hibernate the database and you will need to manually restart it from the Supabase dashboard.

## 📝 Registration

To set up your database do the following:

1. Go to their website at https://supabase.com/ and click **Start your project**
1. Sign up using GitHub
1. On the resulting page, it will ask you to create your first project.
1. Set the name of the database to `your-project-name`
1. On the database password part click **Generate a password**. Make sure you copy and store this value in a secure place, preferably a password manager
1. As a region pick `East US (Northern Virginia)` if you are using Netlify for your backend, as this is the closest region to it. If you are using other backend providers you should check which region they are in and select the closest one to them here.
1. Finally, click **Create a new project**

## 🔌 Connecting to your database

Once your project is ready go to the project's dashboard. Then on the left-hand side click Settings (it's the icon with a cogwheel) and then go to the **Database** tab.

1. Scroll down to the **Connection Pooling** part
1. Select **Session** as the **Pool Mode**
1. Copy the **Connection String**. It will look like this:

```
postgres://postgres.fjdshfkjsfhkuse:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
```

Replace the `[YOUR-PASSWORD]` part with the one you set up during registration. IF you have forgotten that, there will be a "Reset database password" button on this website to set it up again.

Make sure to click **Save** as well, if you need to change the **Pool Mode** setting.

![Settings page](connection-string.png)

## 🗝️ Accessing the database

Gather the following details:

1. The server. This will be something like `aws-0-eu-west-2.pooler.supabase.com` for Supabase.
2. The username. This will be something like `postgres.fjdshfkjsfhkuse`.
3. The database name. This will be `postgres`.
4. Your password. This is what you have entered when creating the database.

Now connect to your database server from the command line like this:

```bash
psql -h server_from_above -U username_from_above database_name_from_above
```
