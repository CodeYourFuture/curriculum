+++
title = "Data validation"
headless = true
time = 60
facilitation = false
hidden_from_overview = true
objectives = [
    "Explain the trade-offs of doing validation on the frontend or backend.",
]
+++

If we only do the validation on the backend, the user won't know anything is wrong until they submit the form.

If we only do validation on the frontend, it would be possible for users to add invalid quotes by using `curl` themselves, or building their own frontend.

So we normally do validation _twice_ - once in the frontend to give fast feedback (e.g. by adding the `required` attribute to an `<input>` tag), and once in the backend (to make sure no one can sneak bad data to us).

{{<note type="Exercise">}}
Add validation that authors and quotes are both non-empty, to both your frontend, and your backend.

Make sure when someone tries to post an empty quote, make sure they quickly know what's wrong.

Make sure if someone tries to use `curl` to post an empty quote, it doesn't get saved either.

If the backend rejects a request from the frontend, we should show the user why.
{{</note>}}
