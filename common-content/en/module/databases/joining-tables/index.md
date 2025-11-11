+++
title = 'Joining Tables'

time = 45
[objectives]
    1='Combine tables together using `INNER JOIN`'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Introduction

So far we've only looked at one table in any query. Many problems require data from several tables - how do we do that?

For example, if I want to phone or email customers who have not yet paid their invoices, which tables do I need to look at?

Use joins to combine data from more than one table. Joins use column values to match rows in one table to rows in another.

The join columns are usually referred to as foreign keys and primary keys.

![ER Diagram](er-diagram.png)

![Join Diagram](join-diagram.png)

### Foreign and Primary Keys

Each table should have a **Primary Key**. This is one or more columns whose values, which cannot be NULL, are combined to provide a unique identifying value for each row. Natural primary keys are often difficult to find so many tables use an arbitrary integer whose value is automatically generated when the row is created. When joining tables we need to match a single row to one or more other rows, usually in another table - for example, matching a customer to her/his reservations. The single row (customer) is usually identified by its primary key value.

**Foreign Keys** are the columns in a table that reference corresponding columns in another table (although self-referencing foreign keys can reference the same table). For example, the `res_id` column in the invoices table references the `id` column in the reservations table (see diagram above).

The referenced column is almost always the primary key of the referenced table because a foreign key must always reference exactly one row in the referenced table (primary keys guarantee that).

### Using JOIN in SQL

To join reservations and invoices in SQL:

```sql
SELECT r.cust_id, r.room_no, i.invoice_date, i.total
  FROM reservations r JOIN
       invoices i ON (r.id = i.res_id);
```

**_Notice:_**

- The new keyword JOIN with ON (predicate)
- Table aliases (`r` and `i`) used to qualify columns

The new syntax follows the following pattern:

```sql
SELECT ...
  FROM ... [JOIN ... ON (...)]...
  [WHERE ...]
  [GROUP BY ... [HAVING ...] ]
  [ORDER BY ...]
```

Use the JOIN to define the combined row source then you can use WHERE, DISTINCT, GROUP BY, ORDER BY, etc... as with single-table queries. For example:

```sql
    SELECT r.cust_id, r.room_no, i.invoice_date, i.total
      FROM reservations r JOIN
           invoices i ON (i.res_id = r.id)
      WHERE r.checkin_date > '2018-07-01'
        AND i.total < 500
      ORDER BY i.invoice_date DESC, r.cust_id;
```

There is no theoretical limit to the number of tables that can be joined in a query, although practical considerations like
complexity and performance must be considered. It is quite common, though, to find up to seven or eight tables joined in a query.

Multi-table joins just extend the syntax to add more tables, as below:

```sql
SELECT c.name, c.phone, c.email, i.invoice_date, i.total
  FROM customers c JOIN
       reservations r ON (r.cust_id = c.id) JOIN
       invoices i ON (r.id = i.res_id)
  WHERE i.invoice_date < current_date - interval '1 month'
    AND i.paid = FALSE
  ORDER BY i.invoice_date DESC, c.id;
```

**_Note_**
You have just learned about what is called the INNER JOIN, which is the most common kind of join. Indeed, you can use the keyword INNER in the JOIN syntax, as follows:

```sql
SELECT c.name, c.phone, c.email, i.invoice_date, i.total
  FROM customers c INNER JOIN
       reservations r ON (r.cust_id = c.id) INNER JOIN
       invoices i ON (r.id = i.res_id)
  WHERE i.invoice_date < current_date - interval '1 month'
    AND i.paid = FALSE
  ORDER BY i.invoice_date DESC, c.id;
```

The INNER keyword is not required (it's the default) but some organisations might require it for the sake of coding standards.

There are other kinds of JOIN, specifically the OUTER JOIN and the CROSS JOIN but these are less frequently used in applications.
If you want to find out about these kinds of JOIN refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/12/queries-table-expressions.html).

---

### Exercise 5

1.  Try and understand each of the queries above in your `psql` prompt
2.  Which customers occupied room 111 and what are their details?
3.  List the customer name, room details (room number, type and rate), nights stay and departure dates for all UK customers.
4.  List name, phone and email along with all reservations and invoices for customer Mary Saveley.

---

## The Vexing Question of NULL

A column can be assigned a NULL value to indicate it has no value. This can happen when the data for this column is unknown at the time the row is created, for example, employee leaving date, order shipment date, etc... It can also be used when the data is optional.

Be careful with expressions - any expression that includes a NULL value results in NULL as the expression value.

Because NULL is 'no value' it cannot be compared to anything else. For example, you will never get any results from:

```sql
SELECT * FROM customers WHERE postcode = NULL;
```

nor will you get any from:

```sql
SELECT * FROM customers WHERE postcode != NULL;
```

Instead you must use:

```sql
  ... WHERE postcode IS NULL
```

or

```sql
  ... WHERE postcode IS NOT NULL
```

This behaviour has some impacts on operations like JOIN, where NULL values won't match. You could work around this, but see the warning below, by using:

```sql
  ... ON (a.col = b.col OR
          a.col IS NULL AND b.col IS NULL)
```

**_WARNING:_**
_However, be aware that this is not a sensible situation - join columns containing NULL should be expected to not match or should be disallowed (see Primary Keys above)_

You can explicitly provide NULL as a value in INSERT and UPDATE statements, for example:

```sql
    INSERT INTO rooms (room_no, rate, room_type, no_guests)
      VALUES (213, 95.00, NULL, 2);

    UPDATE rooms SET room_type = NULL, no_guests = NULL
      WHERE room_no = 204;
```

In INSERT statements if you omit a column from the column list (following the table name) then that column will be given either:

- an autogenerated value (if it has datatype SERIAL)
- a default value if one has been specified in the CREATE TABLE command
- NULL if neither of the above apply

### Functions to Handle NULL

There are some functions that can operate on NULL values, especially the `coalesce(x, y)` function. This function looks at the first argument `x` and if it is NULL returns the value of the second argument `y` otherwise it returns the value of `x`. For example:

```sql
SELECT room_no, rate, coalesce(room_type, 'None') type
  FROM rooms
  WHERE no_guests IS NULL;
```

Notes:

- The coalesce function can take more than two arguments and returns the first of these (from left to right) that is not null.
- This feature is provided by most SQL vendors but goes by different names, e.g. ifnull(x, y) in MySQL, nvl(x, y) in Oracle, etc...

---

### Exercise 6

1.  Which customers have not yet provided a phone number?
2.  Update room 304 such that it does not have a room_type.
3.  List customers (name and city) qand their reservations replacing the room number with 'Not Assigned' if it is NULL.
