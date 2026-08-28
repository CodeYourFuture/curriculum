+++
title = 'Failing Tests'

time = 40
[objectives]
    1="Interpret Jest's output when a test fails"
    2='Modify a function in response to a failing test'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have written a test and it passed, so can we say that our function works?

The answer is no! We have only tested one aspect of our function: converting an afternoon time. We need to check that it works for morning times as well. We're going to need a second test.

{{<note type="exercise" title="Exercise: Write another test">}}
Write another test to check that `"08:00"` will be correctly converted to `"8:00 am"`

<details>
<summary>Solution:</summary>

```js {title="timeConverter.test.js"}
test("can correctly convert morning time", function(){
    expect(formatAs12HourClock("08:00")).toEqual("08:00 am");
});
```

</details>
{{</note>}}

We have a problem when we run `npm test` though - it fails! How can we make sense of the output and figure out what we need to fix?

### Interpreting the output

The first change we see is right at the start of the output. Instead of a green PASS we now have a red FAIL next to the file name, indicating that at least one test didn't pass. If we read further down we see that we still have our previous test with a check mark next to it but now we have our new test with a cross. This tells us which test has caused the failure.

{{<note type="tip" title="Multiple failures">}}
Jest doesn't stop when a test fails, it carries on and runs every test in the file. Each failed test will have a log similar to the one in front of us now. It can get confusing when we have lots of failed tests but the summary at the start of the log will help us identify them.
{{</note>}}

The next line is the most important: it tells us exactly what has caused our test to fail.

```console
    expect(received).toEqual(expected) // deep equality

    Expected: "8:00 am"
    Received: "8 am"
```

This is an example of an **assertion error**. Our function is returning a value, but not the one that it should be. Recall from the last section that our _expected_ value is defined using the `toEqual()` matcher and in this example it's `"8:00 am"`. The _actual_ value according to the log was `"8 am"`.

### Fixing the bug

It can be surprisingly hard to identify the root cause of an assertion error. It could be the case that there is a flaw in our logic, for example a condition in an `if`-statement is not defined correctly, but it could just as easily be a typo. We should start by examining the two values and seeing if there are any obvious errors to fix.

TODO: 

- Numbers match, so not doing calculation at wrong time
- Adding correct suffix so in correct branch of conditional
- Not adding 00 to string
- Show other types of error?