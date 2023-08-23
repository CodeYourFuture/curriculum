+++
title = '🧪 Testing'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We can think about the different ways we could update the ` savingsPot` object. We may want to deposit some money so we can implement a method called `addToPot` which takes some amount and then updates the deposits for the savings pot.

Let’s think about how we can test this method.

Firstly, we’ll need to create a `savingsPot`

```js
const savingsPot = {
  name: "untitled",
  deposits: [],
  withdrawals: [],
};

function updateName() {}

savingsPot.updateName = updateName; // mutate the savingsPot with a property that is a reference to the savingsPot function.
```

Now call the method

```js
savingsPot.updateName("Trip to Greece");
```

Check the state has been updated

```js
expect(savingsPot).toHaveProperty("name", "Trip to Greece");
```

The assertion above is different from previous assertions: this time we're using the `toHaveProperty` matcher to check a property value on an object.

## 🔨 Implementing the method

Now we can consider implementing `updateName`.

```js
function updateName(potName) {
  // must update the name property
}
```

We can use . notation to update an object property.
We could try

```js
function updateName(potName) {
  savingsPot.name = potName;
}
```

However, if we run this code: it will fail.
