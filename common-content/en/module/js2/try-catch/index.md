+++
title = 'try/catch'

time = 15
[objectives]
    1='Use a try/catch block to handle a thrown error'
    2='Explain why errors should not be silently ignored'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

`calculateMedian` now throws when it can't do its job. By default, a thrown error crashes the program. Sometimes that's exactly right. But sometimes we know what to do when something goes wrong, and we'd rather do that than crash.

Suppose we're producing a report of median salaries for several teams, and one team's data is bad:

```js
const salaryDatasets = [
  [42000, 51000, 60000],
  [],
  [38000, 45000],
];
```

If we call `calculateMedian` on each dataset in a loop, the empty array will throw, and the whole report will crash. The bad data for one team stops us reporting on all the others.

### Catching errors

We can {{<tooltip title="catch">}}Catching an error stops it travelling any further up through the calling functions. Execution continues from the catch block, and the program does not crash.{{</tooltip>}} a thrown error with a `try...catch` block:

```js
for (const salaries of salaryDatasets) {
  try {
    const median = calculateMedian(salaries);
    console.log(`The median salary is ${median}`);
  } catch (error) {
    console.error(`Skipping a dataset: ${error.message}`);
  }
}
```

JavaScript _tries_ to run the code inside the `try` block. If any of it throws, execution jumps immediately to the `catch` block; the remaining statements in the `try` block do not run. The thrown error is passed in as `error`, and we can read the message we wrote with `error.message`.

Run this and you'll see the report is produced for the first and third datasets, with a warning about the empty one in between. One bad dataset no longer stops the whole program:

```console
The median salary is 51000
Skipping a dataset: calculateMedian requires a non-empty array
The median salary is 41500
```

### Don't hide errors

A `catch` block must _do_ something with the error: log it, use a fallback, or tell the user. Look at this version:

```js
try {
  const median = calculateMedian(salaries);
  console.log(`The median salary is ${median}`);
} catch (error) {}
```

This is worse than not catching at all. The error is silently thrown away, so bad data no longer crashes the program _and_ nobody finds out about it. This is called {{<tooltip title="swallowing an error">}}Catching an error and doing nothing with it. The problem still happened, but now there is no crash and no message, so nobody knows.{{</tooltip>}}, and it turns loud, easy-to-find bugs back into quiet, hard-to-find ones. If you can't do anything useful with an error, don't catch it.
