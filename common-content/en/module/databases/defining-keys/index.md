+++
title = 'Defining Primary and Foreign Keys'

time = 45
[objectives]
    1='Aggregate data over multiple rows and use aggregate values to restrict the results'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Defining Primary and Foreign Keys

### Defining Primary Keys

Use the following templates to define a Primary Key.

For a single-column PK use:

```sql
CREATE TABLE <table name> (
  ...
  <column name>   <data type>   PRIMARY KEY,
  ...
)
```

For example:

```sql
CREATE TABLE rooms (
  room_no       INTEGER   PRIMARY KEY,
  ...
);
```

To define a multi-column primary key you must define a constraint separate from the column definitions, as below:

```sql
CREATE TABLE <table name> (
  ...
  <pk col 1>     <data type>,
  <pk col 2>     <data type>,
  ... ,
  PRIMARY KEY (<pk col 1>, <pk col 2>),
  ...
);
```

For example:

```sql
CREATE TABLE invoice_items (
  inv_id        INTEGER REFERENCES invoices(id),
  item_no       INTEGER,
  ... ,
  PRIMARY KEY (inv_id, item_no),
  ...
);
```

There can be only one primary key in a table definition. The `PRIMARY KEY` definition implies NOT NULL so no column in a table's PK can be set to NULL.

**Note: a partial primary key can be a foreign key as well.**

### Defining Foreign Keys

To define foreign keys use either:

For a single-column foreign key:

```sql
  <column name>   <data type>   REFERENCES <table name> (<column name>);
```

where the &lt;column name&gt; in the REFERENCES clause is the column name in the referenced table, not the one being defined at this point. For example, in the `reservations` table:

```sql
  ...
  cust_id         INTEGER NOT NULL   REFERENCES customers (id),
  ...
```

For multi-column foreign keys we must again use a separate constraint definition, as shown:

```sql
CREATE TABLE customer_challenges (
  id           SERIAL PRIMARY KEY,
  inv_id       INTEGER,
  item_no      INTEGER,
  ...
  FOREIGN KEY (inv_id, item_no) REFERENCES invoice_items (inv_id, item_no),
  ...
);
```

---

### Exercise 8

1.  Try to delete the customer Mary Saveley. What happens and why?
2.  Insert a new room, number 313 as room type 'SUPER PREMIER'.
3.  Define primary and foreign keys required by the charge_items table
4.  Insert some rows into the charge_items table. You can invent the details.
