---
title: PostgreSQL > Render
description: How to create a PostgreSQL Database on Render
emoji: 🐘
weight: 3
---

1. ![Click on PostgreSQL in the New + dropdown](new-postgres.png "Click on the **New +** button, then click on PostgreSQL")

2. Fill out the Name field, which will be used to label the database within Render. Fill out the Database and User fields, which should be the same as your development environment - ask a volunteer if you are unsure. Leave the remaining 3 input fields as is with the default values ![Provide a Name, Database and User](database-name.png "Provide a Name, Database and User")

3. ![Ensure that the Free plan is selected and click Create Database](free-plan-and-create-database.png "At the bottom of the form, the Free plan should be selected by default. Click Create Database button")

4. ![Render creating the database](database-creating.png "Render will take a few minutes to create your database")

5. ![Render showing the database as active](database-active.png "After a few minutes your Database should be active")

6. ![Environment variables in the Connections tab](environment-variables.png "Scroll down to Connections tab, where you will find Environment Variables for connecting to your database. The Internal & External Database URLs will likely be the most useful for you")

7. If you are using a Render database outside of Render, you'll need to use the External Database URL. If you are using the database inside of Render, you should use the Internal Database URL.

8. ![Connect button showing quick reference to environment variables](connect-button.png "The Connect button could be useful for quick Environment Variable reference")
