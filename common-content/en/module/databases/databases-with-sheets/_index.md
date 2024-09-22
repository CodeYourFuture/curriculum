+++
title = 'Introduction to databases, using Google Sheets'

time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain what databases are'
    2='Explain the difference between a row and column'
    3='Identify the formula input in Google Sheets'
    4='Use SQL syntax to retrieve information from a database'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### What is a database?

A database is a structured set of data held in a computer. It stores, retrieves and organizes information.

You already use databases in your everyday life! A few examples:

- The messages you send on Slack are stored in a database.
- CYF stores your name and email on a database!
- Your phone contact list? That will be in a database too!

What else you do on your computer and phone? What information is there? And where do you think it's stored? Write down five other databases you get information from. 

### How do they work?

Most databases arrange data into columns and rows.

- A column is used to store various properties about the data. In the example of your phones contact list, this would be name, mobile number, home phone number etc.

A **row** is a single record of this information. 

| First Name    | Surname | Mobile Number |
| ------------- | ------- | ------------- |
| Tom           | Jones   | +447700000    |
| Ali           | Smith   | +327700000    |

Tom and Ali's details here are records in the database.  The properties are listed as columns and the values are in rows. Each row is a new record. 

If you've used tools such as Excel or Google sheets, you will have seen this sort of structure before. We'll take a closer look at these in the backlog exercises to do this sprint.

############ The below will be put into issues, just putting it in a PR to get any feedback :) #############

# Backlog 1 - Learn about Google Sheets

## Part 1 (Optional - Depending on knowledge of spreadsheets already.)

Start by making sure we're familiar with Google sheets. The following tutorials will walk you through how to use a spreadsheet, format data, use functions, filters, and create charts using data.

- [Build, organize, and format a spreadsheet using Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/google-workspace-sheets-part-1/google-workspace-sheets-part-1/important-lesson-update.html)

- [Evaluate and interpret data with different spreadsheet functions, filters, and charts using Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/g-suite-certification-sheets-part-2/overview.html)

- [Use advanced functions and conditional formatting in Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/g-suite-certification-sheets-part-3/overview.html)

### Part 2 - Learn how to query data in Google Sheets using SQL

Now you've got a good understanding of Google Sheets, we can use [SQL](https://www.w3schools.com/sql/sql_intro.asp). SQL is a powerful tool you will regularly come across when working with databases, either as a programmer or in many other data roles.

Watch the video [SQL in Google Sheets](https://www.youtube.com/watch?v=dTNamL30sDg).  Copy the dataset provided in the video and follow along with the queries as you go.

- [SQL in Google Sheets](https://www.youtube.com/watch?v=dTNamL30sDg)
- [Here is a link to the data](https://docs.google.com/spreadsheets/d/1zPeHxhKkYmdiqXNhMwhfC1A0o1wI0zNiD5Gsks2SYoc/template/preview)

Do up to at the step `least GROUP BY clause and aggregation`. We can skip PIVOT, LIMIT and OFFSET for now, you wont need these for the next piece of coursework but feel free to look at them if you're curious and not short on time.

# Backlog 2 - SQL Problems using Google Sheets

Using the same data set we used in the Learn about Google Sheets coursework: [Here](https://docs.google.com/spreadsheets/d/1zPeHxhKkYmdiqXNhMwhfC1A0o1wI0zNiD5Gsks2SYoc/template/preview).
We're going to practice extracting data from a database, using SQL.

1. Emily Smith would like to be able to quickly see how many deals she's made. She only cares about `Deal Value` and `Expected Close date` to see when she'll be paid. Create a query that will give only this information.
2. As the accountant working for this business, I need to work out the total sales we've made in each country to pay our taxes. Write a query to return a list of each closed deal (they have status of `"Closed Won"`) and sort them by country so we can work this out easily.
3. As the owner of this business, I would like to work out the total value for all of deals made by each employee, so I know who is performing the best. Write a query to get me this information.

**Please submit this coursework by sharing a read-only link to your Google Sheet**
