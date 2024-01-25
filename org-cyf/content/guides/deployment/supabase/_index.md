---
emoji: 🚀
title: Create database on Supabase
description: Learn how to create a database on Supabase
weight: 9
---

## Intro

Supabase is a cloud provider providing multiple services. One of it's core services are PostgreSQL databases. Supabase's free tier is much more generous to Render's, however if the database is not accessed for a week it will hibernate the database and you will need to manually restart it on its frontend.

## Registration

To set up your database do the following:

1. Go to their website at https://supabase.com/ and click "Start your project"
2. Sign up using GitHub
3. On the resulting page it will ask you to create your first project.
4. Set the name of the database to `your-project-name`
5. On the database password part click "Generate a password". Make sure you copy and store this value in a secure place, preferably a password manager
6. As a region pick `"East US (Northern Virginia)"` if you are using Netlify for your backend, as this is the closest region to it. If you are using other backend providers you should check which region they are in and select the closest one to them here.
7. Finally click "Create a new project"

## Connection string / `DATABASE_URL`

Once your project is ready go to the project's dashboard. Then on the left hand side click Settings (it's the icon with a cogwheel) and then go to the "Database" tab.

Scroll down to the "Connection Pooling" part, make sure to select "Session" as the "Pool Mode", and finally copy the "Connection String". This will looks something like:

```
postgres://postgres.fjdshfkjsfhkuse:[YOUR-PASSWORD]@aws-0-eu-west-2.pooler.supabase.com:6543/postgres
```

You need to replace the `[YOUR-PASSWORD]` part with the one you set up during registration. IF you have forgotten that, there will be a "Reset database password" button on this website to set it up again.

Make sure to click "Save" as well, if you needed to change the "Pool Mode" setting.

![Settings page](connection-string.png)

## Accessing the database

Gather the following details:

1. The server. This will be something like `aws-0-eu-west-2.pooler.supabase.com` for Supabase
2. The username. This will be something like `postgres.fjdshfkjsfhkuse`.
3. The database name. This will be `postgres`.
3. Your password. This is what you have entered when creating the database.

Now you have all of the details that you need to use on the command line to login to your server:

```bash
psql -h server_from_above -U username_from_above database_name_from_above
```
