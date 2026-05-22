+++
title = 'Inserting, Updating and Deleting Rows'

time = 45
[objectives]
    1="Insert, Update and Delete rows in a pre-existing table using INSERT, UPDATE and DELETE"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Inserting data

To add new data to a table use the INSERT command that has the following format:

```sql
INSERT INTO table_name (column_name, ...)
       VALUES (value, ...)
```

For example:

```sql
INSERT INTO customers (name, email, address, city, postcode, country)
  VALUES ('John Smith','j.smith@johnsmith.org',
          '11 New Road','Liverpool','L10 2AB','UK');
```

Note:

1. You do not need to supply the value for the automatically generated `id` column, it is populated from a sequence generator object.
2. The order of values in the `VALUES (...)` clause must correspond to the columns in the column name list. The first value is stored in the first named column, the second value in the second named column and so forth.

{{<note type="exercise" title="Hotel 3">}}

1. Insert yourself in the `customers` table. Query the table to check your new data.
2. Insert a new room type of PENTHOUSE with a default rate of 185.00.

{{</note>}}

### Updating Existing Data

When you need to change values in a table, use the `UPDATE` command. The general construction to update a row is:

```sql
UPDATE table
  SET column1 = value1,
      column2 = value2
  WHERE condition;
```

Note that `UPDATE` usually requires a `WHERE` clause to specify the row or rows to be updated. As with `SELECT`, if you don't specify a condition to restrict the rows, the command applies to all the rows in the table.

For example, to update the name and country of the customer with ID 3:

```sql
UPDATE customers
  SET name='Bob Marley',
      country='Jamaica'
  WHERE id=3;
```

{{<note type="exercise" title="Hotel 4">}}

1.  Update the postcode of the customer named `Alice Evans` to `M21 8UP`
2.  Update room 107 to allow up to 3 guests
3.  For the customer named `Nadia Sethuraman`, update her address to `2 Blue Street`, her city to `Glasgow` and her postcode to `G12 1AB` in one query
4.  Update all the future bookings of customer with ID 96 to 3 nights (starting on the same check-in date) in one query

{{</note>}}

### Deleting a row

The syntax to delete a row is:

```sql
DELETE FROM table WHERE condition;
```

For example, to delete the booking with ID 4:

```sql
DELETE FROM reservations WHERE id=4;
```

{{<note type="tip" title="NOTE">}}
If you don't supply a `WHERE` clause with `DELETE` or `UPDATE` the command will be applied to **all** the rows in the table which is rarely what you want.
{{</note>}}

{{<note type="exercise" title="Hotel 5">}}

1.  Delete the bookings of customer ID `108` that do not have a room number assigned
2.  Delete all the bookings of customer Juri Yoshido (customer id 96)
3.  Delete the customer details for Juri Yoshido

{{</note>}}
