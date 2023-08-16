+++
title = 'reduction'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

## List of strings

Arrays can store data types other than numbers.
Suppose we have a list of items representing the cost of a bill.
Instead of using the number data type, we might use an array of **strings**.

```js
const items = ["£19.03", "10.3", 5.03, "£17.09"];
```

## reducing a list

We can mutate elements in an array.
However, we often want to **reduce** elements in an array to produce a single value.

For example, we might start off with a list of items and then build a function that will **return** the total of the bill.
So we can implement a function `calculateBillTotal` that takes an input an array of strings and **returns** the total bill.

- inputs: array of strings (representing items in a bill)
- return value: string (representing the final value)

## testing an empty list

We can implement a test using Jest.

```js
test("returns 0 for no items", () => {
  expect(calculateBillTotal([])).toBe(0);
});
```

To implement this functionality, we can write:

```js
function calculateBillTotal() {
  return 0;
}
```

We don't need to do any other work at this stage - nor do we need to parametrise the function at this point.

## checking the result

We can write another test to check we're calculating the correct total for some list of prices in the bill.

```js
test("returns 0 for no items", () => {
  expect(calculateBillTotal([])).toBe(0);
});

test("returns the total bill for a non-empty list of prices", () => {
  expect(calculateBillTotal(["£10.00", "£5.06"])).toBe("£15.06");
  expect(calculateBillTotal(["£5.00", "£6.00"])).toBe("£11.00");
});
```
