+++
title = '🛑 Word limits'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
+++

Let’s define a problem.

We’ll start with an input element as defined by some HTML. We’ll have a word limit on this input box so that users can’t exceed a certain number of words. As users type in the box, they should get feedback on the number of words they’ve got left.

Given an input box,
When I type characters into the input box
Then I should be notified about how many characters I’ve got left.
This is how we could roughly think of our current approach:

Access the input box
Count the number of characters
Tell the user how many characters they’ve got left

To solve this problem, we’ll need to access and manipulate the web page.
