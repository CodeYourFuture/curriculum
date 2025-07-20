+++
title = 'Databases with Google Sheets'
description = 'Introduction to databases, using Google Sheets'
time = 30
emoji= '🗄️' 
[objectives]
    1='Identify databases in everyday life'
    2='Explain the difference between a row and column'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

### What is a database?

A database is a structured set of data held in a computer. It stores, retrieves and organizes information.

You already use databases in your everyday life! A few examples:

- The messages you send on Slack are stored in a database.
- MigraCode stores your name and email on a database!
- Your phone contact list? That will be in a database too!

What else you do on your computer and phone? What information is there? And where do you think it's stored? Write down five other databases you get information from.

### How do they work?

Most databases arrange data into **columns** and **rows**.

| column 1 | column 1 |
| -------- | -------- |
| row 1    | row 1    |
| row 2    | row 2    |

A **row** is a single record of this information which is grouped together, for instance, information about one person.

Within a row, each **column** stores a property of that record. In the example of your phone's contact list, this would be name and number. Each row (or record) has a name and a number. What other properties does your address book store? Open your phone and take a look.

| First Name | Surname | Mobile Number |
| ---------- | ------- | ------------- |
| Tom        | Jones   | +447700000    |
| Ali        | Smith   | +327700000    |

Tom and Ali's details here are records in the database. The properties are listed as columns and the values are in rows. Each row is a new record.

If you've used tools such as Excel or Google Sheets, you will have seen this sort of structure before. We'll take a closer look at these in the backlog exercises for this module. You'll learn how to manipulate data in Google Sheets and use SQL syntax to retrieve information from databases.
