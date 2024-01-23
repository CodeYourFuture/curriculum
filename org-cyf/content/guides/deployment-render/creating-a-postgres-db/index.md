---
title: PostgreSQL > Render
description: How to create a PostgreSQL Database on Render
emoji: 🐘
---

1. Click on the New + button, then click on PostgreSQL

![Click on PostgreSQL in the New + dropdown](new-postgres.png)

2. Fill out the Name field, which will be used to label the database within Render. Fill out the Database and User fields, which should be the same as your development setup - ask a volunteer if you are unsure. Leave the remaining 3 input fields as is with the default values

![Provide a Name, Database and User](database-name.png)

3. At the bottom of the form, the Free plan should be selected by default. Click Create Database button

![Ensure that the Free plan is selected and click Create Database](free-plan-and-create-database.png)

4. Render will take a few minutes to create your database

![Render creating the database](database-creating.png)

5. After a few minutes your Database should be active

![Render showing the database as active](database-active.png)

6. Scroll down to Connections tab, where you will find Environment Variables for connecting to your database. The Internal & External Database URLs will likely be the most useful for you

![Environment variables in the Connections tab](environment-variables.png)

7. The Connect button could be useful for quick Environment Variable reference

![Connect button showing quick reference to environment variables](connect-button.png)
