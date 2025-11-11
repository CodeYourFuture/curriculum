+++
title = 'Ubuntu setup'

time = 45
[objectives]
    1='Set up PostgresQL on an Ubuntu OS'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### Install

If you have Ubuntu as your operating system you can install PostgreSQL using the following commands in the terminal (note: the `$` is the system prompt):

```cmd
sudo apt-get install postgresql postgresql-contrib
```

Enter your ubuntu password when asked for it (it's needed for the `sudo` command).

For this command you must confirm that you are happy to install the packages and any needed dependencies that the package manager identifies. Generally just type `Y` or `y` to proceed.

To verify your installation enter the following commands:

```cmd
sudo -u postgres psql --version
```

Again, enter your Ubuntu user password when prompted. The command should display something like this:

`psql (PostgreSQL) 12.2 (Ubuntu 12.2.4)`

### Create Your User and Database

Create the database user with the same name as your Ubuntu username (this makes logging in a bit easier):

```
sudo -u postgres createuser -P --createdb <username>
```

This will ask for your Ubuntu login password to run the sudo command. The other parts of the line are:

- `-u postgres` tells sudo to run createuser as user postgres (set up when you installed postgres) -`createuser` the shell command to create a PostgreSQL user
- `-P ` (upper case) tells createuser to ask for the new user's password
- `--createdb ` grants the user the privileges to create databases
- `<username> ` the new username (hint: make it the same as your o/s username)

You'll be asked for the new database user's password (twice) - you'll need this later for when we connect to the database from Node.

Remember the new username and password details - you will need them later.

### Creating a new database

In a terminal, create a new database named `my_hotels` with the following command:

```
createdb my_hotels
```

Then connect to your database with:

```
psql my_hotels
```

Note that if you chose to use your Ubuntu username for the database you don't need it (or the password) to log in to `psql`. If you used a different username then you'll need to log in with:

```
psql -U <username> my_hotels
```

and you'll be prompted for the password.

The output from this command should look something like this:

```
psql (12.2 (Ubuntu 12.2.4))
Type "help" for help.

my_hotels=>
```

The last line (`my_hotels=>`) is the `psql` command prompt, made up of your database name plus '=>'.

Note that to exit psql back to the terminal prompt use the command `\q`.
