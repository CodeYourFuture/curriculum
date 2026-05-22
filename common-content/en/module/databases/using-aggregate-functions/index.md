+++
title = 'Using Aggregate Functions'

time = 45
[objectives]
    1='Aggregate data over multiple rows and use aggregate values to restrict the results'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Basic Aggregate Functions

How to calculate totals, averages, etc. over multiple rows.

You frequently need to get a single piece of information that is derived from multiple rows in a table. For example, when you need to know the total of all invoices for August 2018:

```sql
SELECT sum(total)
   FROM invoices
   WHERE invoice_date BETWEEN
         '2018-08-01' AND '2018-08-31';
```

The aggregate functions are:

- sum : Calculate the total of the values in a column
- avg : Calculate the average (mean) of the values in a column
- min : Determine the minimum value of a column
- max : Determine the maximum value of a column
- count : Count the number of values (non-null) in a column

All the above are in the SQL standard, most implementations provide others. SUM and AVG can only apply to numeric data, the others can apply to any datatype.

Further examples:

"What is the average length of stay at our hotel?" :

```sql
SELECT avg(checkout_date - checkin_date)
  FROM reservations;
```

"What are the lowest and highest room rates we charge?" :

```sql
SELECT min(rate) AS lowest,
       max(rate) AS highest
  FROM rooms;
```

You can use the count(x) function to count non-null values:

```sql
SELECT count(id) AS id_ct, count(postcode) AS post_ct
  FROM customers;

   id_ct | post_ct
  -------+---------
     133 |     126
  (1 row)
```

Notice that these two results show different values - there are NULL values for postcode but id is mandatory for all rows.

If you just want to count the number of rows, use `count(*)`. This is often used to find how many rows match a `WHERE` clause:

```sql
SELECT count(*) FROM customers WHERE country = 'Belgium';
```

{{<note type="exercise" title="Hotel Exercise 1">}}

1.  Get the numbers of rows in each of the tables: rooms, room_types, customers and reservations.
2.  How many reservations do we have for next month?
3.  How many invoices are still unpaid from over a month ago and what is the total owed?
4.  What is the maximum gap in days between a customer booking a room and the checkin date for that booking?

{{</note>}}

### Grouping Rows for Aggregation

You can calculate aggregates over subsets of rows using the `GROUP BY` clause:

```sql
SELECT count(*) FROM rooms
  GROUP BY room_type;
  count
  -------
      14
      14
       8
      10
       2
  (5 rows)
```

What do you notice?

The query calculated the counts correctly but we have no idea which room type each value represents. To solve this we are allowed to include the `GROUP BY` expressions in the list of selected values, as below:

```sql
SELECT room_type, count(*) FROM rooms
  GROUP BY room_type;
 room_type    | count
--------------+-------
 PREMIUM      |    14
 PREMIER      |    14
 PREMIER PLUS |     8
 PREMIUM PLUS |    10
 FAMILY       |     2
(5 rows)
```

Notice the `room_type` used for `GROUP BY` is also included in the `SELECT` list of values.

We can group by multiple expressions, for example:

```sql
SELECT trunc(room_no/100) AS floor,
       to_char(checkin_date, 'YYYY-MM') AS month,
       count(*), sum(no_guests), avg(no_guests)
  FROM reservations
  GROUP BY floor, month;
```

Notice that the `GROUP BY` is using the column aliases `floor` and `month` that have been defined in the select list. This works in many, but not all, SQL implementations. (In those that don't allow aliases you must use the full expression, for example: `trunc(room_no/100)` instead of `floor`)

You can use a `WHERE` clause to restrict the rows that are included in the aggregate function. For example, if we need the above query for only the 2nd and 3rd floors:

```sql
SELECT trunc(room_no/100) AS floor,
       to_char(checkin_date, 'YYYY-MM') AS month,
       count(*), sum(no_guests), avg(no_guests)
  FROM reservations
  WHERE room_no BETWEEN 200 AND 399
  GROUP BY floor, month;
```

Note that it is NOT usually possible to use column aliases in the where condition.

A `WHERE` clause is applied before any aggregation, if you need to restrict results using an aggregate function you can't do that using the `WHERE` clause.

In the above, to return only results with the number of reservations greater than, say, 4 we use the `HAVING` clause:

```sql
SELECT trunc(room_no/100) AS floor,
       to_char(checkin_date, 'YYYY-MM') AS month,
       count(*), sum(no_guests), avg(no_guests)
   FROM reservations
   GROUP BY floor, month
   HAVING count(*) > 4;    --<< Note the HAVING keyword
```

The order of clauses in the `SELECT` statement is:

```sql
SELECT ...
   FROM ...
   [WHERE ...]
   [GROUP BY ...
   [HAVING ...] ]
   [ORDER BY ...]
```

The square brackets indicate optional clauses. Note that `HAVING` is only relevant when you have a `GROUP BY` and must follow it in the `SELECT` statement.

It can be confusing at first knowing whether to use a `WHERE` clause or a `HAVING` clause with `GROUP BY`.

- Use the `WHERE` clause when values you want to test are available without having to use any aggregate functions (e.g. plain column values).

- Use `HAVING` when the values you want to test are the results of aggregate functions (e.g. `count(*)`, `sum(amount)`, `min(x)`, etc...).

---

{{<note type="exercise" title="Hotel Exercise 2">}}

1.  What is the grand total of all invoices for each month?
2.  How many guests could be accommodated at one time on each floor?
3.  Which rooms have been occupied for less than 10 nights and for how many nights have they been occupied?

{{</note>}}
