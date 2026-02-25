+++
title = "Everything is public"
headless = true
time = 15
facilitation = false
hide_from_overview = true
objectives = [
    "Explain why needing secrets may require backend.",
]
+++

A frontend is served, completely, to a web browser which then interprets it.

This causes problems if there is information we don't want to give to the user.

An example is a password.

Imagine if we had a website, and wanted users to enter a password in order to access it.

Somewhere, we'll need to write some logic which compares the password the user entered with the actual password.

If we _only_ have a frontend, this poses two problems:

1. We need to give the web browser the actual password, in order for it to be able to compare them. And everything we give to the web browser, a user could also see if they wanted (e.g. by monitoring their network traffic).
2. A website can't trust a web browser. Once a website hands information over to a client, it doesn't know what the client will do with it.

   For instance if a frontend has three pieces of data, but wants you to tick a box before it shows them to you, the user can probably bypass that agreement by running some custom code in the web inspector console.

   If we need to _guarantee_ the user ticked a box before being shown data, we can't include the data in our frontend until _after_ the box has been ticked. Which means we need to ask a backend for it.
