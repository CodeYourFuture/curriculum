+++
title = ' Context'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

In our test, we call the method like this `savingsPot.updateName("Trip to Greece")`;

We say that `savingsPot` is the **context object**.
This means that `savingsPot` is the object that is being acted upon by the `updateName` method.

We’re using . notation to access the property of the savingsPot object. Inside the method `addToPot` we need access to the argumen (amount of money) and a way to refer to the savingsPot itself

## Enter `this`

```js
function updateName(potName) {
  console.log(potName);
}
```

```js
function addToPot() {
  console.log(this);
}
```

The `this` keyword gives us a reference to the object the method was called upon. In other words,
If we declare a function, then add this function to an object and invoke the function on the object using .notation.

The `this` keyword will point to this object.

`this` allows us to refer to the object inside the method.
