+++
title = 'Knowing What to Test'

time = 15
[objectives]
    1="Identify gaps in test coverage"
    2="Define an edge case"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have multiple tests, so _now_ can we confidently say that our function works?

The answer is still no! We need to be sure that our function does everything that the specification says it should, but we also need to think about how it handles unusual inputs or internal errors in the logic. We often need to write lots of tests for each function to be sure they won't break. It's a lot of work, but the payoff is reliable code which we can be sure won't fail in production.

### What do we still need to test?

It can be difficult to know when we're done writing tests, but at a minimum you should be able to cover every scenario covered by the requirements of your project. Another approach is to ask yourself a series of "what if?" questions and see if your tests cover that scenario. In our case we might ask "What if...

- ...the expected value is a single-digit afternoon time, eg `"02:00 pm"`?
- ...the argument is not a valid time, eg `"25:00"`?
- ...the argument isn't a time at all, eg. `"hello"`?
- ...the argument isn't a string?
- ...and many more questions like these

The `assert` library has other functions available to support tests like these, eg. `assert.throws()` checks that an error is thrown by a function at an appropriate time. As your applications get more complex you will likely need to bring in external tools to test specific elements of your code, eg. simulating a button being clicked in a web browser. We will look at how we can add additional testing tools in the next sprint.

An application's **test coverage** gives us an indication of how many of the functions in a program have been tested and how extensively. More test coverage is always better!

### Edge cases

A lot of the strange behaviour we see from programs is cause by a small subset of possible inputs. Think about our time conversion function: how should it handle `"00:00"`? As a human reader we know that this should be converted to `"12:00 am"`, but the logic we have written would convert it to `"00:00 am"`. We need to think about how we handle this special case.

This is an example of an **edge case**, where we have a possible value which needs special consideration. Often these values don't need any adjustments to the code, but in others (like this one) we need to make changes to ensure they are handled correctly. Many of the tests you write will be designed to handle these edge cases.

{{<note type="exercise" title="Exercise: Testing edge cases">}}
Update `formatAs12HourClock` to handle this edge case and write a test to ensure it does.

<details>
<summary>Solution:</summary>

```js {title="timeConverter.js"}
function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  
  // This is not the only way to complete this check.
  // If you did it a different way why not share your solution in Slack?
  if (time === "00:00"){
    return `12:00 am`;
  }

  if (hours > 12) {
    return `${hours - 12}:00 pm`;
  }
  
  return `${time} am`;
}

export {formatAs12HourClock}
```

```js {title="timeConverter.test.js"}
//...
test("can correctly convert midnight", function(){
    assert.equal(formatAs12HourClock("00:00"),"12:00 am");
});
```

</details>

{{</note>}}

If a function has multiple inputs then it's possible that two or more of these could represent edge cases. We call these scenarios **corner cases** - multiple edges are meeting each other.