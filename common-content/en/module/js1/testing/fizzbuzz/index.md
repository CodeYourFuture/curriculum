+++
title = 'Test-Driven Development in Practice'

time = 90
[objectives]
    1='Follow the TDD workflow when writing code'
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

We've seen how to write tests, how to interpret the results and how to add testing libraries to our projects. Now it's time to pull it all together...

### The problem

We're going to look at a common coding problem which is based on a children's game called [fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz). In the game players sit in a circle and take it in turns to count up from the number 1. Certain numbers are replaced by the words "fizz" or "buzz" and if a player says their number instead of one of those words they are out of the game.

The logic for this puzzle is fairly simple and as a result it has become a popular choice to assess candidates in technical interviews. We're going to use test-driven development to write a function which takes a number as an argument and returns the appropriate value as a string.

There are many variations on the game but we're going to stick with the standard rules:
- If a number is divisible by 3 return "fizz": `3 --> "fizz"`
- If a number is divisible by 5 return "buzz": `5 --> "buzz"`
- If a number is divisible by 3 **and** 5 return "fizzbuzz": `15 --> "fizzbuzz"`
- If a number is divisible by neither 3 nor 5 return the number as a string: `7 --> "7"`

For the purposes of this example we will assume that our inputs will all be numbers greater than 0. If we were doing this for real we should be checking that and writing tests to ensure we handle those cases too!

### Setting up

Before we start coding we need an environment to work in.

{{<note type="exercise" title="Exercise: Set up the project">}}
Create the necessary directory and files for this project. We'll need a file to write our function in (let's call it `fizzbuzz.js`) and a file for our tests. Don't forget to initialise a Git repository!
{{</note>}}

We have already reached our first major decision point: which testing framework should we use?

As a general rule we don't want to add any more to our projects than we need to. We certainly don't need to consider things like front end simulation or database integrations here, so we don't need tools with that level of complexity. All we need to do is compare the output of a function to an expected value. We _could_ use jest, but that would mean configuring npm, adding packages and writing a script to run our tests. It will be much more straightforward, and ultimately more efficient, to use `node:test` in this case.

### The first test

Before writing any test in this exercise, think back to the diagram in the previous section:

![red-green-refactor cycle](red-green-refactor.png)

When we write our first test we should **watch it fail** before starting to work on the function. Let's start with the first case in our specification: division by 3.


{{<note type="tip" title="The `describe` block">}}
Most testing frameworks will let us organise our tests using a `describe` block. Their structure is similar to a test: their first argument is a string describing the block's content and the second is a function. We will use them to group related tests together like this:

```js {title="fizzbuzz.test.js"}
describe('division by 3', () => { 

   // Tests are defined here 

});
```
{{</note>}}

Our first test will check that `fizzbuzz(3)` will return `"fizz"`. Set it up as shown below:

```js {title="fizzbuzz.test.js"}
import {fizzbuzz} from './fizzbuzz.js';
import assert from 'node:assert';
import {test, describe} from 'node:test';

describe('division by 3', () => { 

    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz");
    });

});
```

Running the test doesn't give us a "pass" or "fail" output though, it throws an error. 

{{<note type="exercise" title="Exercise: diagnose the error">}}
Let's put your debugging skills into practice! Read the error message and research what's causing it.

<details>
<summary>Solution:</summary>

The test can't find a function called `fizzbuzz` being exported from `fizzbuzz.js`. That shouldn't be a surprise though - we haven't written it yet!
</details>
{{</note>}}

This step may seem pointless but it's still an important one to take. We may not learn anything new from watching this test fail, but if it passes at this stage then it tells us that we have made a mistake in setting up the test. 

Let's switch files and fix the problem. We don't want to go too far here, even though it can be tempting. Remember that when we are following TDD we write the tests such that they check our program does everything laid out in its specification. If something is in the spec there should be a test for it. That means that if our tests pass, our program does what it's supposed to do. If our tests fail they will tell us why, so we fix the problem. If we do any more than fix the problem in front of us we may end up writing more code than we need to, which may ultimately not have test coverage.

All of that means that we should **only write enough code to fix the error**:

```js {title="fizzbuzz.js"}
function fizzbuzz(){};

export {fizzbuzz};
```

That's it! It feels strange stopping there but that's all the information we had to work with. We did fix the error though, and now we have a different one to guide our next step. We're getting an assertion error: our expected value is `"fizz"` but our actual value is `undefined`. It's another easy bug to fix, and just like before we'll do just enough to fix it.

```js {title="fizzbuzz.js"}
function fizzbuzz(){
  return "fizz";
};

export {fizzbuzz};
```

Our test passes, and it's time to write some more. 

{{<note type="tip" title="Using Git with TDD">}}
We have a test and it's passing, so now would be an _excellent_ time to make a commit! Our commits should represent stable points we can roll back to if necessary, so committing when all our tests pass means that our code was working at that point in time. If we make a change and something goes wrong we know that everything will be fine if we revert to this commit.  
{{</note>}}

Only testing a behaviour for one possible input is quite risky so we'll write some more tests for division by three.

```js {title="fizzbuzz.test.js"}
describe('division by 3', () => { 

    test('3 returns fizz', () => {
        assert.equal(fizzbuzz(3), "fizz");
    });

    test('6 returns fizz', () => {
      assert.equal(fizzbuzz(6), "fizz");
    });

    test('99 returns fizz', () => {
      assert.equal(fizzbuzz(99), "fizz");
    });

});
```

Three tests, three passes! Time to check out those other behaviours.

### Testing the next requirement

Our next bullet point is about division by five. We're testing a different behaviour now so we'll add another `describe` block to contain the tests.

```js {title="fizzbuzz.test.js"}
describe('division by 5', () => { 

    test('5 returns buzz', () => {
        assert.equal(fizzbuzz(5), "buzz");
    });

});
```

We have another assertion error, this time we expect `"buzz"` but our actual value is `"fizz"`. That shouldn't be a surprise - the only thing our function does is return `"fizz"`!

{{<note type="exercise" title="Exercise: fix the error">}}
Update the `fizzbuzz` function so that the test passes. Remember that we only need to write enough code to make the test pass!

<details>
<summary>Solution:</summary>

The only thing we know for sure from our tests is that when `fizzbuzz()` receives `5` as an argument it should return `"buzz"`, so that's the **only** thing we will check for in the function. We don't have test coverage for anything else.

We also uncover another problem: we haven't defined a parameter for the function! This wasn't a problem before because we were returning `"fizz"` for everything, but now we need to check the value passed to the function. This goes to show that even if we _think_ we have good test coverage we can still miss some fairly major issues.

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number === 5){
    return "buzz";
  }
  return "fizz";
};
```

</details>
{{</note>}}

Note that we still run all of our tests. We need to be sure we haven't introduced a bug anywhere else when making changes.

It's time to write more tests for division by 5:

```js {title="fizzbuzz.test.js"}
describe('division by 5', () => { 

    test('5 returns buzz', () => {
        assert.equal(fizzbuzz(5), "buzz");
    });

    test('10 returns buzz', () => {
        assert.equal(fizzbuzz(10), "buzz");
    });

    test('95 returns buzz', () => {
        assert.equal(fizzbuzz(95), "buzz");
    });

});
```

We have failing tests again, with the same assertion error as before.

This time our fix is a bit more complicated than it was when we added more tests for division by three. We _could_ add `else-if` clauses for each additional number we test but that wouldn't scale well at all. Instead we need to make our check more generic to account for _any_ number which is divisible by five.

{{<note type="exercise" title="Exercise: Make the check generic">}}
Research how to check if one number is divisible by another and update the `if` statement to return `"buzz"` for any value divisible by five.

<details>
<summary>Solution:</summary>

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 5 === 0){
    return "buzz";
  }
  return "fizz";
};
```

</details>
{{</note>}}


### Refactoring to meet requirements

Refactoring is an important part of the development lifecycle. Solving a problem is one thing, but solving it _well_ often needs us to make changes for efficiency. We need to consider our future selves too - we need to be able to understand what we wrote!

Often we will be forced into a refactor by the discovery of a bug. These could be fairly small changes but they could also be pretty big. By following TDD we aim to catch as many of these while still in development and get most of our refactoring done as early as possible.

{{<note type="exercise" title="Exercise: Testing the next requirement">}}
Create another `describe` block and write tests for the `"fizzbuzz"` output. Use `15`, `30` and `90` as the inputs.

<details>
<summary>Solution:</summary>

```js {title="fizzbuzz.test.js"}
describe('division by 3 and 5', () => { 

    test('15 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(15), "fizzbuzz");
    });

    test('30 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(30), "fizzbuzz");
    });

    test('90 returns fizzbuzz', () => {
        assert.equal(fizzbuzz(90), "fizzbuzz");
    });

});
```

</details>
{{</note>}}

Assertion errors again, this time expecting `"fizzbuzz"` and receiving `"buzz"`. No problem though, we've done this before. Let's add another clause to our `if` statement to handle this case.

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 5 === 0){
    return "buzz";
  } else if (number % 15 === 0){
    return "fizzbuzz";
  }
  return "fizz";
};
```

Running our tests gives us a surprising result though: we have the same three failures with the same three assertion errors. It looks like the `fizzbuzz()` function is sending all of these inputs down the wrong branch of the `if` statement.

At this point it would be useful to use VSCode's debugging tools to step through the code as the test runs and watch how each line is evaluated. That can be an incredibly useful tool when dealing with complex logic and complex function calls but in this situation we can already see what's going wrong. The question we have is _why_. Remember that you aren't limited to the tools in front of you when debugging, and in this case a bit of old-fashioned Googling will probably get us to an answer quicker than the debugger.

The issue is a mathematical one: 15 is divisible by 5, so if a number is divisible by 15 then it is _also_ divisible by 5. Remember that an `if` statement stops once a condition is satisfied, so by checking division by 5 first we are also catching values which are divisible by 15 and sending them down the wrong path. 

{{<note type="exercise" title="Exercise: Re-order the clauses">}}
Update the `if` statement so that we check for divisibility by 15 before divisibility by 5.

<details>
<summary>Solution:</summary>

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 15 === 0){
    return "fizzbuzz";
  } else if (number % 5 === 0){
    return "buzz";
  }
  return "fizz";
};
```
</details>
{{</note>}}

Now our tests pass! We're very nearly there, we just have one more requirement to cover: returning the number as a string if not divisible by three or five. Let's write some tests:

```js {title="fizzbuzz.test.js"}
describe('returning the number as a string', () => { 

    test('1 returns "1"', () => {
        assert.equal(fizzbuzz(1), "1");
    });

    test('4 returns "4"', () => {
        assert.equal(fizzbuzz(4), "4");
    });

    test('91 returns "91"', () => {
        assert.equal(fizzbuzz(91), "91");
    });

});
```

We have three failing tests as expected and all three are failing with similar assertion errors: in each case the actual value is `"fizz"`. At the moment we're using this as a catch-all value if a number isn't divisible by fifteen or five, but really it should only be returned if the number is divisible by three. We need to update our logic again.

We could easily pass these new tests by changing the final return statement:

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 15 === 0){
    return "fizzbuzz";
  } else if (number % 5 === 0){
    return "buzz";
  }
  return number.toString();
};
```

This highlights the importance of running all our tests though, as our "division by three" tests are now failing. We fixed one problem but broke something else. We're going to need to add another clause to the `if` statement to get all our tests passing:

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 15 === 0){
    return "fizzbuzz";
  } else if (number % 5 === 0){
    return "buzz";
  } else if (number % 3 === 0){
    return "fizz";
  }
  return number.toString();
};
```

### Refactoring for quality

Remember what we said earlier: refactoring is an important step in writing good-quality code. At the moment we have a solution which works, but could it be better? 

We can start by looking at the conditions we are checking. The first clause may be technically correct, but our specification didn't say anything about checking for division by 15. Instead it spoke about division by 3 **and** by 5. Mathematically speaking it may be the same thing, but we can certainly make it clearer that this clause relates to that requirement.

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 3 === 0 && number % 5 === 0){
    return "fizzbuzz";
  } else if (number % 5 === 0){
    return "buzz";
  } else if (number % 3 === 0){
    return "fizz";
  }
  return number.toString();
};
```

We can do something about the length of the function too. 

{{<note type="exercise" title="Exercise: Guard clauses">}}
[Guard clauses](https://blog.webdevsimplified.com/2020-01/guard-clauses/) are a useful tool to avoid overly-complex conditional statements. Read the linked article and use guard clauses to condense the logic in the function to four lines.

<details>
<summary>Solution:</summary>

```js {title="fizzbuzz.js"}
function fizzbuzz(number){
  if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
  if (number % 5 === 0) return "buzz";
  if (number % 3 === 0) return "fizz";
  return number.toString();
};
```
</details>
{{</note>}}

### Summary

This may feel like a lot of work for a small problem but it has already demonstrated some of the potential issues we can run into. Imagine, for example, that we hadn't written tests for the `"fizzbuzz"` cases and just assumed our code was correct. We may not have caught the bug until an actual user was interacting with it and by that point there are many more layers of infrastructure clouding the picture.

By writing the tests first we can make sure that our program's requirements are captured and represented in a way that gives developers clear feedback if there is a problem with the code. Testing like this is an important skill and it is one we will reinforce throughout the rest of this course.