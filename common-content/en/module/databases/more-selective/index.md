+++
title = 'Being More Selective'

time = 30
[objectives]
    1='Create an API endpoint that can add data to a database'
    2='Validate data before adding it to a database'
    3='Identify a risk of SQL injection attacks, and define one defence'
    4='Create an API endpoint that retrieves data from a database with multiple parameters'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<youtube>}}https://www.youtube.com/watch?v=iFnBgGIpuJQ&list=PLozA7cloMbPhJgWwncnb-N4yI07JpUcs5&index=2{{</youtube>}}

Returning all the customers is fine for a small table (even the 130+ customers) but if we have a large number of rows, thousands or millions, then that approach is very clumsy.

If we know the value of the `id` column for the customer we can retrieve just that one row (we know there is only one row because `id` is the Primary Key).

Create a new endpoint to get the customer by using the id value:

```js
app.get("/customers/:id", function (req, res) {
  // TODO - add code here
});
```

Here the endpoint includes `:id`, which identifies an extra parameter in the URL that will provide the id value, as in `http://localhost:3000/customers/3`. We just need a way to get the value from the URL.

Express provides a simple way to get such parameters from the request:

```js
const custId = parseInt(req.params.id);
```

Note that the `id` in `req.params.id` must match the name after the colon in the endpoint `"customers/:id"`.

Next we need to query the `customers` table and provide the value of the id into a `WHERE` clause so that we retrieve only the one row that matches:

```js
db.query("SELECT * FROM customers WHERE id = $1", [custId])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
```

In the above code notice that:

- The `SELECT` now uses a `WHERE` clause
- The value we are wanting to look for appears as `$1` - this is a placeholder for the 'id' value
- The second parameter is the array `[custId]` that provides the id value

Let's complete the endpoint to return the retrieved values:

```js
app.get("/customers/:id", function (req, res) {
  const custId = parseInt(req.params.id);
  db.query("SELECT * FROM customers WHERE id = $1", [custId])
    .then((result) => {
      console.log(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});
```

In `db.query` you can use placeholders $1, $2, ... $9, $10, $11, ... etc to mark the place where a parameter value should be used. The parameters to replace the placeholders are supplied in the second argument, the array of values. In this case there is only one value (but it must still be put into an array) so we have `[custId]` as the replacement value for the first placeholder, `$1`. If there is more than one placeholder there must be the same number of array elements and they must be in the order of the placeholder numbers.

### String Placeholders

With String placeholders you don't put apostrophes around the placeholder:

```js
app.get("/customers/by_city/:city", (req, res) => {
  const cityName = req.params.city;
  db.query("SELECT * FROM customers WHERE city LIKE $1 || '%'", [cityName])
    .then(() => {})
    .catch((err) => {});
});
```

### Use Placeholders to Avoid SQL Injection

#### What is SQL Injection

If an end user can enter unrestricted text into a data field on a form there is the possibility that they could put a nasty SQL command inside the data. For example, if the field is used to enter the customer name the user could type:
`J Doe'; delete from customers; select 'x' from customers`
as the name value. It looks a bit unlikely but any user with a little bit of SQL knowledge could eventually work out the format needed.

If the code used string concatenation to for the final SQL command it could be something like:

```js
const myQuery = `UPDATE customers SET name = '${inputName}' WHERE id =  + ${ID}`;
```

Then `myQuery` would become:
`UPDATE customers SET name = 'J Doe'; DELETE FROM customers; SELECT 'x' FROM customers WHERE id = 123`
(Note that semicolon **can** be used between SQL commands in this context)

By using placeholders instead of string concatenation we can prevent this kind of attack. This is VERY important in web-facing apps that use SQL.

{{<note type="exercise" title="Define and test endpoints (20m)">}}

1.  Make sure you have defined the endpoints for:
1.  Getting all customers
1.  Getting a single customer by id
1.  Using a method similar to the one used to get a customer by id, define an endpoint that can get customers by matching part of the name (e.g. /customers/by-name/:name).
    **Remember there may be more than one matching row!**
1.  Test all these endpoints with Postman and ensure the results are as expected.

    {{</note>}}
