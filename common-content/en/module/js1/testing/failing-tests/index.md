+++
title = 'Failing Tests'

time = 45
[objectives]
    1="Interpret the output when a test fails"
    2='Modify a function in response to a failing test'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have written a test and it passed, so can we say that our function works?

The answer is no! We have only tested one aspect of our function: converting an afternoon time. We need to check that it works for morning times as well. We're going to need a second test.

{{<note type="exercise" title="Exercise: Write another test">}}
Write another test to check that `"08:00"` will be correctly converted to `"08:00 am"`

<details>
<summary>Solution:</summary>

```js {title="timeConverter.test.js"}
test("can correctly convert morning time", function(){
    assert.equal(formatAs12HourClock("08:00"),"08:00 am");
});
```

</details>
{{</note>}}

We have a problem when we run the test though - it fails! How can we make sense of the output and figure out what we need to fix?

### Interpreting the output

The first change we see is on the second line of the output. We still have our previous test with a check mark next to it but now we also have our new test with a cross. This tells us which test has caused the failure. We also see some summary statistics telling us how many tests have passed or failed in total.

{{<note type="tip" title="Multiple failures">}}
Testing frameworks doesn't stop when a test fails, they carry on and runs every test in the file. Each failed test will have a log similar to the one in front of us now. It can get confusing when we have lots of failed tests but the summary at the start of the log will help us identify them.
{{</note>}}

The next section tells us exactly what has caused our test to fail.

```console
    AssertionError [ERR_ASSERTION]: '8 am' == '08:00 am'
```

This is an example of an **assertion error**. Our function is returning a value, but not the one that it should be. Recall from the last section that our _actual_ value is what is returned to us by the function and in this example it's `"8 am"`. The _expected_ value was `"08:00 am"`. Our function is returning the wrong thing.

### Fixing the bug

It can be surprisingly hard to identify the root cause of an assertion error. It could be the case that there is a flaw in our logic, for example a condition in an `if`-statement is not defined correctly, but it could just as easily be a typo. We should start by examining the two values and seeing if there are any obvious errors to fix.

{{<note type="tip" title="Debugging tools">}}
Your backlog tasks this week include an exercise using VSCode's built-in debugging tools (TODO: link to the ticket after it's been moved). These are very useful in situations like this where we need to observe how values change as we progress through a program.
{{</note>}}

- **The numbers match**, which indicates that we aren't accidentally subtracting 12 from the value.
- **We have added the correct suffix**. We have "am" at the end of t string, which means we followed the correct branch of the `if`-statement. 
- **Spacing and casing are correct**, so we haven't made a typo formatting the string.

None of these checks are a guarantee that there _isn't_ a problem with any of these steps, but they do suggest that the problem is somewhere else. 

If we look closely at the output we see that the main difference is that the _actual_ output is missing the `:00` part of the string. Compare the two branches of the `if`-statement: In the first branch we add `:00 pm` to the value of `hours` but in the second we only add `am`. Update the second branch:

```js {title="timeConverter.js"}
function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${hours}:00 am`;
}
```

We still aren't quite there! Our values are closer to matching but still not quite there. We're still missing a leading `0` from the _actual_ value.

This is where the debugging tools would be particularly useful. Without them we can't see what's happening inside the function while it runs, but by adding a breakpoint we would be able to check that the value of `hours` is actually what we think it is. In this case it is `8` rather than `08`, so we insert the wrong value into the string literal.

{{<note type="exercise" title="Exercise: Research the problem">}}
Think back to your research on `Number()` earlier in the sprint. What did you find out about it? Can you find anything in the documentation that would explain why lose the first digit in this case, but it worked in the first test?

<details>
    <summary>Solution:</summary>
    The `Number()` converts a string into a number, but this isn't always straight-forward. When we call the `.slice()` function we extract the first two characters of the string representing the time. For `"23:00"` this was `"23"` and everything was fine, but for `"08:00"` it is `"08"`. We don't usually write numbers with a leading 0, so what should `Number()` do with it here? It simply ignores it, returning the value `8` that we are more familiar with. 
</details>
{{</note>}}

We could now write some complex logic to add a `0` back to the front of the string if we have a single-digit number, but before we do that we should revisit our list of requirements. If we look back at what we defined when we wrote the function we see that **we don't need to change the value** if it is before 12:00. Writing the logic would be unnecessary. Instead we can simply append "am" to the value passed into the function.

```js {title="timeConverter.js"}
function formatAs12HourClock(time) {

  const hours = Number(time.slice(0, 2));

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  return `${time} am`;
}
```

Both tests now pass. It's important to run all of our tests whenever we make changes to the code, even if we have only been editing a small part of it. It can be difficult to predict how changes in one function will affect the behaviour of others and tests will help us spot any side-effects.