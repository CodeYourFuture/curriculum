+++
title = "Adding quotes"
headless = true
time = 60
facilitation = false
hide_from_overview = true
objectives = [
    "POST data from a frontend to a backend in JSON format.",
]
+++

{{<note type="Exercise">}}
Add a form to your frontend which allows users to add quotes to the backend's list of quotes.

Note: Your backend expects the quotes to be submitted as JSON. This means you will need to use a `fetch` request from JavaScript to do the POSTing.

You can't just use a `<form method="POST">` tag because that would post the information in a different format. (It would also redirect the user to a page which just says "ok" after submitting the quote, which isn't a great user experience!)
{{</note>}}

After a user tries to add a quote, if they successfully added the quote we should give the user some feedback so they know it was successful.

If a user tried to add a quote and the `fetch` failed (perhaps because the backend wasn't running), or the response said there was an error, we should give the user some feedback so they know something went wrong (and maybe what they should do about it).

Now that our backend allows users to post quotes, we want to restrict what they can post.

For instance, we don't want to let people post quotes which are empty.

We need to validate the inputs our users give us.

{{<note type="Think">}}
Where do you think we want to do this validation?

On the frontend? On the backend? Or both?
{{</note>}}
