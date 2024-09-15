<!-- 
- Prep: we have a short description of what our objectives are, and a couple of sentences on
spreadsheets & databases tabular databases with rows (records) and columns (properties)
- Backlog Item 1 (or maybe part of prep): Send them to some well-written SQL intro / video
For now, maybe it’s enough to focus on SELECT, WHERE, LIMIT, ORDER BY and one aggregation function (maybe MAX or COUNT)
- Backlog item 2: Some practice exercises on Google Sheets
Understanding a requirement in English / Creating a query to satisfy the requirement
Submit by sharing a read-only link to their Google Sheet -->

+++
title = 'Introduction to databases, using Google Sheets'

time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Explain what databases are'
    2='Explain the difference between a row and column'
    3='Be familiar with Google Sheets'
    4='Be able to use SQL syntax to retrieve information from a database'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### What is a database?

A database is a structured set of data held in a computer. It provides ways to store, retrieve and organize information.

You will actually very likely be using these in your every day life! A few examples:

- The messages you've sent on Slack will be in a database.
- CYF will store your're contact details, that will be on a database!
- You're phones contact list? That will be in a database too!

Have a think about what else you do on your computer and phone, what information is there, where do you think it's stored?

### How do they work?

Most databases arrange data into columns and rows.

- A column is used to store various properties about the data. In the example of your phones contact list, this would be name, mobile number, home phone number etc.

- A row is then a record of this information. So an entry into your phone book, it will have a name e.g. Tom, and a phone number.

| First Name    | Surname | Mobile Number |
| ------------- | ------- | ------------- |
| Tom           | Jones   | +447700000    |
| Ali           | Smith   | +327700000    |

Tom and Ali's details here are records in the database, where the information is stored in rows, and the properties of what we're storing is the columns.

If you've used tools such as Excel or Google sheets, you will have seen this sort of structure before. We'll take a closer look at these in the backlog exercises to do this sprint.

############ The below will be put into issues, just putting it in a PR to get any feedback :) #############

# Backlog 1 - Learn about Google Sheets

## Part 1 (Optional - Depending on knowledge of spreadsheets already.)

Start by making sure we're familiar with Google sheets. The following tutorials will walk you through how to use a spreadsheet, format data, use functions, filters, and create charts using data.

- [Build, organize, and format a spreadsheet using Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/google-workspace-sheets-part-1/google-workspace-sheets-part-1/important-lesson-update.html)

- [Evaluate and interpret data with different spreadsheet functions, filters, and charts using Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/g-suite-certification-sheets-part-2/overview.html)

- [Use advanced functions and conditional formatting in Google Sheets.](https://applieddigitalskills.withgoogle.com/c/college-and-continuing-education-uk/en-uk/g-suite-certification-sheets-part-3/overview.html)

### Part 2 - Learn how to query data in Google Sheets using SQL

Now you've got a good understanding of Google Sheets. We can start to use SQL, a powerful tool you will regularly come across when working with databases.

What the video below, make sure you copy the dataset provided in the video and follow along with the queries as you go.
[Here is a link to the data](https://docs.google.com/spreadsheets/d/1zPeHxhKkYmdiqXNhMwhfC1A0o1wI0zNiD5Gsks2SYoc/template/preview)

- SQL in Google Sheets - <https://www.youtube.com/watch?v=dTNamL30sDg>

# Backlog 2 - SQL Problems using Google Sheets

Using the same data set we used in the Learn about Google Sheets coursework: [Here](https://docs.google.com/spreadsheets/d/1zPeHxhKkYmdiqXNhMwhfC1A0o1wI0zNiD5Gsks2SYoc/template/preview).
We're going to practice extracting data from a database, using SQL.

1. Emily Smith would like to be able to quickly see how many deals she's made. She only cares about `Deal Value` and `Expected Close date` to see when she'll be paid. Create a query that will give only this information.
2. As the accountant working for this business, I need to work out the total sales we've made in each country to pay our taxes. Write a query to return a list of each closed deal (they have status of `"Closed Won"`) and sort them by country so we can work this out easily.
3. As the owner of this business, I would like to work out the total value for all of deals made by each employee, so I know who is performing the best. Write a query to get me this information.

**Please submit this coursework by sharing a read-only link to your Google Sheet**
