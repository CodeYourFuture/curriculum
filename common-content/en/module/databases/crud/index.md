+++
title = 'CRUD operations with NodeJS and PostgreSQL'

time = 120
[objectives]
    1="Create an API endpoint that can create data in a database"
    2="Create an API endpoint that can delete data from a database"
    3="Create tables with a variety of column types and primary and foreign keys"
    4="Define CRUD operations"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<tabs name="CRUD Operations">}}
===[[Insert]]===

## 👩🏽‍✈️👨🏾‍✈️Code along with video mentors

{{<youtube>}}https://www.youtube.com/watch?v=g1eHag5BG6o&list=PLozA7cloMbPhJgWwncnb-N4yI07JpUcs5&index=3{{</youtube>}}

===[[Create]]===
{{<youtube>}}https://www.youtube.com/watch?v=ojLmL6tfj_E&list=PLozA7cloMbPhJgWwncnb-N4yI07JpUcs5&index=4{{</youtube>}}

===[[Update and Delete]]===
{{<youtube>}}https://www.youtube.com/watch?v=7VXTXjnFtZo&list=PLozA7cloMbPhJgWwncnb-N4yI07JpUcs5&index=5{{</youtube>}}

{{</tabs>}}

---

### 💾 CRUD operations

![table-diagram](crud.png "Create, Read, Update, Delete: {{<tooltip title="CRUD">}}

"The acronym CRUD refers to all of the major functions that are implemented in relational database applications. Each letter in the acronym can map to a standard Structured Query Language (SQL) statement and Hypertext Transfer Protocol (HTTP) method [...]."\_ - [Wikipedia](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)
{{</tooltip>}}")

### 🌱 Creating data

In the following, we will add a new API endpoint to create a new customer in the table `customers` of the `{{<our-name>}}_hotel` database. As a reminder, here is an example of a SQL insert statement to add a new customer:

```sql
INSERT INTO customers (name, email, phone, address, city, postcode, country)
  VALUES ('Fred Bloggs', 'fred@bloggs.org', '07123456789', '1 Low Brow',
          'Ashbottom', 'XY2 3ZA', 'UK');
```

### Using body-parser for Form Data

When an endpoint can reasonably expect a large number of data values, for example, when we need to insert a new row into the `customers` table, then using parameters in the URL is not practical. Instead we can use a 'middleware' package such as `body-parser`, which can extract data from the body of the request.

As we create a new record in the database, we will add a new POST endpoint in the `{{<our-name>}}-hotels-api` project from last class. Moreover, we need to be able to pass data to this API endpoint such as the name, address, postcode, etcetera, so we can use this API to create different customers. The data can be sent in the body of the request. To access the parameters in the body of the request with Express.JS, we need to add the module `body-parser` to the `{{<our-name>}}-hotels-api` project:

At the terminal command line:

```
npm install --save body-parser
```

Then include it in the `server.js`:

```js
const bodyParser = require("body-parser");
app.use(bodyParser.json());
```

### 📩 Inserting Rows Using Node.js

We can finally make an endpoint to create a new customer:

```js
app.post("/customers", function (req, res) {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPhone = req.body.phone;
  ...
  const newCountry = req.body.country;

  const query =
    `INSERT INTO customers (name, email, phone, address, city, postcode, country)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

  db.query(query, [newName, newEmail, ..., newCountry])
    .then(() => {
      res.status(201).send("Created a new customer");
    })
    .catch(err => {
      console.log(err);
    })
});
```

### 📮 Using Postman to Test a POST

In Postman:

- Change the method to POST
- Ensure the URL address is your customers endpoint, for example: http://localhost:3000/customers
- Under the address in the Postman window select **Body** then select **raw**
- Ensure that JSON is selected at the right hand end
- Enter the data as JSON in the panel below these settings, for example:

```json
{ "name": "Fred Bloggs", "email": "fred@bloggs.org", "phone": "07123456789" }
```

- Click send

You should see the response "Customer created."

{{<note type="exercise" title="Exercise 2">}}

1.  Install body-parser and enable it in your server.js
2.  Define a new endpoint to create new customer records
    For simplicity, only insert the name, phone & email values. Invent your own values.
3.  After successfully inserting the row send back a message, "New customer added."
4.  Test your endpoint using Postman
5.  Check the data has appeared in the table
    {{</note>}}

### What Can We Do After an Insert?

- We must start checking for errors in the execution of the SQL. This applies to all commands, not just INSERT.
- If the table has an auto-incrementing primary key we can obtain the value for the new row and return it to the browser. This is often required for subsequent actions in the use case.
- The new data can be logged to the console (although this is not common practice).
- ... and so forth ...

### 🧪 Checking for Errors in SQL

The catch block in `db.query` always has an error parameter. If the passed SQL query throws an error then the callback function passed to the `catch` method is invoked with an error object generated by node postgres.
A typical situation might be:

```js
  db
    .query(...);
    .then(/* do things for success*/);
    .catch((err) => res.status(500).json({error: err}));
```

### 👩🏽‍🔬 Validating

What could go wrong with our code so far? There is no validation of any user inputs which could result in errors, duplications or inconsistent data in the database! Here are few examples of things we can verify before creating the customer in the database:

1. Check that the phone number contains only digits, '+', '-', '(' or ')'
2. Check that no customer with the same email already exists in the database
3. ...

Let's start by validating that phone number the consists of only digits, +, -, (, ) or space and if it doesn't, return an error. This check uses a regular expression to replace all valid characters with a '0' (zero) symbol then check the result is made up of only '0' symbols.

```js
if (
  newCustPhone.replace(/[+\-()0-9 ]/g, "0") != // replace all valid chars with 0
  "0".padEnd(newCustPhone.length, "0")
) {
  // compare with all zeros same length as phone
  return res
    .status(400)
    .send("The phone number must only contain 0-9, +, -, (, ) or space.");
}
```

Note: **regular expressions** may be new to you but they are very powerful and also quite complicated. We don't have time to teach you the intricacies of "regex" here but you can find numerous resources [on the web](https://you.com/search?q=regex) and in the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

As you have already learned, this validation can also be performed in the browser because it doesn't involve any database interaction. This is a faster and less costly (in terms of network traffic) approach and should be used where practical. It makes user correction of mistakes quicker and more natural and can be done on a per item basis.

{{<note type="exercise" title="Exercise 3">}}

1.  Modify your endpoint to check for SQL errors. If an error is encountered then console.log it and return it to the browser.
2.  Add phone number validation to your endpoint to check that only digits, +, -, (, ) or space are present. Any other characters should send a suitable message back to the browser and abort the insert.  
    (_You may use copy & paste to get the regular expression - it's not easy to get right by hand._)
3.  Test your endpoint with a variety of data including valid and invalid phone numbers.
    {{</note>}}

### 📨 Check the Customer's Email

We can also validate the new customer's email doesn't already exist in the database, to prevent duplicate data.

```js
app.post("/customers", function (req, res) {
  const newName = req.body.name;
  const newEmail = req.body.email;
  const newPhone = req.body.phone;
  // et cetera ...

  //
  // Validate the new customer's email address by querying the existing customers table
  // to return any rows that contain the same values
  //
db.query("SELECT 1 FROM customers WHERE email=$1", [newEmail])
  .then((result) => {
    if (result.rowCount > 0) {      // note the use of result.rowCount
      return Promise.reject({error: 'Customer already exists'})
    } else {
      return db.query(`INSERT INTO customers (name, email, phone, address, city, postcode, country)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, [newName, newEmail, ..., newCountry],
    }
  })
  .then(() => {
    res.status(201).send("Customer created")
  })
  .catch((error) => {
    // any errors or manual rejections will be intercepted here
    // handle error here
  })
```

#### Note:

- The `SELECT` does not choose any column values, just the literal `1`. We are only interested in the number of rows found (it must be 0 for success).
- If a row is found, then a customer with this email exists so we call `Promise.reject`: this will then trigger the first `catch` block in the promise chain where we can handle the error.
- If a row is not found, then we perform the insertion query, taking care to return the call to `db.query` so we can access its resolve value in the next `.then` block
- This validation is NOT suitable for performing in the browser because it interacts with the database.

{{<note type="exercise" title="Exercise 4">}}

1.  Before adding a new customer ensure there are none with the same email address in the customers table
2.  If a duplicate email is found send an appropriate message to the browser
3.  Use Postman to check that your new code works as expected by trying to insert duplicate emails as well as correct ones
4.  Check the data has been added to the database (use psql)

{{</note>}}

### 🗝️ Return the Primary Key Value for an Insert

If the table uses an auto-incrementing primary key then it is very useful to return the generated value after the `INSERT`. PostgreSQL provides a very simple mechanism to do this (as do most RDBMS's) by appending the `RETURNING` clause to the `INSERT`, as below:

```sql
INSERT INTO customers (name, email, phone)
  VALUES ('Fred Bloggs', 'fred@bloggs.org', '07123456789')
  RETURNING id;
```

The endpoint now uses the query call shown below:

```js
  db.query(`INSERT INTO customers (name, email, phone, address, city, postcode, country)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id`, [newName, newEmail, ..., newCountry])
    .then(result => {
        const newId = result.rows[0].id;
        console.log(`New Customer id = ${newId}`);
        res.status(200).json({lastId: newId});
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
```

{{<note type="exercise" title="Exercise 5">}}

1.  Further extend your `POST` endpoint so that it returns the new customer id value to the browser.
2.  Use Postman to check that the new value is returned.
    {{</note>}}

### 🆕 Updating data

We can now implement an endpoint to update a customer record in the database. For this, we will use a PUT endpoint.

```js
app.put("/customers/:id", function (req, res) {
  const custId = req.params.id;
  const newEmail = req.body.email;
  const newPhone = req.body.phone;

  db.query("UPDATE customers SET email=$2, phone = $3 WHERE id=$1", [
    custId,
    newEmail,
    newPhone,
  ])
    .then(() => res.send(`Customer ${customerId} updated!`))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
});
```

Note:

- This endpoint uses both a URL parameter (`:id`) to supply the customer id and data in the request body to provide the updated column values.
- The order of the placeholders does not have to correspond to their sequence in the SQL. In this case we've put the `custId` value first but it appears last in the SQL (in the `WHERE` clause).

We used URL parameters to query for a specific customer earlier and we used body data to insert a new customer.

What can go wrong in the code above? Again, there is no validation! The user could try to set an empty email or even a string which is not following the format of an email. **Remember, validating data is very important to make sure you don't end up with inconsistent data in your database!**

{{<note type="exercise" title="Exercise 6">}}

1.  Create a new endpoint to update reservations to provide the room number allocated to the guest when they check in. Use the reservation id value to identify the row.
2.  Use Postman to check that the endpoint works correctly and the row is updated.
    {{</note>}}

### 🗑️ Deleting data

To delete a record from the database, we will use a `DELETE` endpoint:

```js
app.delete("/customers/:id", function (req, res) {
  const custId = req.params.id;

  db.query("DELETE FROM customers WHERE id=$1", [custId])
    .then(() => res.send(`Customer ${custId} deleted!`))
    .catch((err) => console.error(err));
});
```

However, if you try to delete a customer which already has some bookings, the previous endpoint will fail. Do you know why? You cannot delete a customer whose ID is used as a foreign key in another table (in this case, in the `reservations` table). Let's delete all the customer bookings first:

```js
app.delete("/customers/:customerId", function (req, res) {
  const customerId = req.params.customerId;

  db.query("DELETE FROM reservations WHERE cust_id=$1", [customerId])
    .then(() => {
      return db.query("DELETE FROM customers WHERE id=$1", [customerId]);
    })
    .then(() => res.send(`Customer ${customerId} deleted!`))
    .catch((e) => console.error(e));
});
```

{{<note type="exercise" title="Exercise 7">}}

1.  Add an endpoint to delete from the reservations table using the value of the id to choose the row to be removed. Only allow deletion of reservations with future checking dates otherwise return an error.
2.  Check the endpoint works correctly using Postman (use psql to verify the row has been deleted).
    {{</note>}}

---

### ⚠️ Warning!

{{<note type="warning" title="Update & Delete are not Safe">}}
This approach we've used to update and delete rows is not safe in a typical multi-user environment. If more than one user at a time is able to perform updates and deletes there could be unintended data loss using this approach.
{{</note>}}

#### Optimistic Locking

The solution is known as "optimistic locking" but we just don't have time in this course to cover it. So long as you are aware of the problem you can use the approach but add plenty of comments to make clear that the code is not yet safe.

Note also that optimistic locking requires changes not only to the code of your Node endpoints but also to the behaviour of the web pages that use and modify the data.
