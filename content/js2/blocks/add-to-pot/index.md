+++
title = '💰 Adding to pot'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

In this case, our assertion isn’t based on the return value of `addToPot`. We're checking that `updateName` **mutates** the `name property` of the object. In other words, we're testing that `addToPot` has a **side effect**.

To have a side effect, we expect it to mutate the deposits array by adding the amount into the pot.

We can write a first test

We can think about the different ways we could update the ` savingsPot` object. We may want to deposit some money so we can implement a method called `addToPot` which takes some amount and then updates the deposits for the savings pot.

Let’s think about how we can test this method.

Firstly, we’ll need to create a `savingsPot`

```js
const savingsPot = {
  name: "holidays"
  deposits: [],
  withdrawals: []
};


function addToPot() {}

savingsPot.addToPot = addToPot; // mutate the savingsPot with a property that is a reference to the savingsPot function.
```

Now call the method

```js
savingsPot.addToPot(10.0);
```

Check the state has been updated

```js
expect(savingsPot.deposits).toEqual([10.0, 5.03]);
```

So in this test, we’re setting up a pot object, adding a method to it, calling the method, asserting that

In previous tests, our assertions were based on the **return value** of a function. IN this case, our assertion isn’t based on the return value of `addToPot` .We expect `addToPot`
To have a side effect, we expect it to mutate the deposits array by adding the amount into the pot.
