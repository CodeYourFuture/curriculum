+++
title = 'Creating a table'

time = 45
[objectives]
    1='Aggregate data over multiple rows and use aggregate values to restrict the results'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Use the CREATE TABLE command, which in the simplest case has the general form:

```sql
CREATE TABLE <tablename> <column definition>, <column definition>, ...);
```

To create an `inventory` table for our hotel we might need:

```sql
CREATE TABLE inventory (
  id            SERIAL PRIMARY KEY,
  description   VARCHAR(30) NOT NULL,
  cost          NUMERIC(6,2)
);
```

**_Note: you may never need to do this. Database design is a task that requires specialist skills and considerable experience._**

### Naming Tables and Columns

In the `CREATE TABLE` command you must give the name of the table (e.g. `inventory`) and the names of each of the columns (in the parenthesised column definitions) (e.g. `id`, `description`, `cost`).

Names of tables and columns (and any other objects in the database) must start with a letter, can contain letters, digits and the underscore symbol (\_) up to 64 bytes (in PostgreSQL). Names are not case-sensitive so that NAME, name and NaMe are all the same.

### Data Types of Columns

In the above example:
Column | Data Type | Other
--- | --- | ---
`id` | SERIAL | PRIMARY KEY
`description` | VARCHAR(30) | NOT NULL
`cost` | NUMERIC(6,2) |

The `id` column uses SERIAL as its data type, making it an autoincrementing integer that increments by 1, starting from 1, for each time a new row is inserted into the table. For this to work, the `id` column must be omitted from the INSERT command. `id` is also designated as the PRIMARY KEY of the table (note that SERIAL doesn't make the column the primary key). PRIMARY KEY also implies that the column cannot be set to NULL.

The `description` column is a variable length character value (VARCHAR) that can hold up to a maximum of 30 characters. The NOT NULL constraint means the value cannot be left empty, each row must have a description.

The `cost` column is NUMERIC(6,2), a number that can accurately store up to 6 digits, two of which are the fractional part. For example, it can hold 1234.56, -23.45 or 0.01. Note that the NUMERIC data type stores and computes values using decimal values and does not lose accuracy in the same was as, say, floating point values. NUMERIC values take longer in calculations because they don't use simple binary values - user either integer or floating point for speed with compute-heavy numbers.

**NEVER** use floating point for financial values.

### **Other Common Data Types**

There are several more standard data types (plus a few non-standard ones), including:
Type | Notes
--- | ---
INTEGER | binary integer with 32 bits (range approx -2 x 10<sup>9</sup> &ndash; +2 x 10<sup>9</sup>)
DATE | dates with no time component
TIMESTAMP | date and time (accurate to milliseconds)
BOOLEAN | TRUE, FALSE or NULL
TEXT | variable length text with no length limit (up to max allowed for the RDBMS - about 1Gb in PostgreSQL)

You can read more about data types in the PostgreSQL documentation. Refer to https://www.postgresql.org/docs/12/datatype.html
for more information.

### Changing a Table Definition

Using the ALTER TABLE command to add and remove columns:

```sql
ALTER TABLE inventory ADD COLUMN room_no INTEGER;

ALTER TABLE customers DROP COLUMN phone;
```

There are some constraints on adding and removing columns, for example, you cannot add a NOT NULL column to a table that already contains some rows.

---

### Exercise 7

1.  Create a table for charge points. This must record the hotel shops, bars, cafes and restaurants that a customer can use during their stay.
2.  Include an auto-incrementing primary key
3.  Include the charge point name, a description and maximum customer credit value
4.  Insert charge points for 'Shop', 'Pool Bar', 'Elysium Restaurant' and 'Room Service' with credit limits of £1000 for each.
5.  Create a table for charge items that records amounts charged to rooms by customers using our shop, bars, restaurants, etc. This must include the room number of the room charged, the charge point used, the amount, the date and time of the charge and any customer comments.
