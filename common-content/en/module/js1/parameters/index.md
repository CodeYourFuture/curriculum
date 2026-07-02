+++
title = 'Parameterising a function'

time = 30
[objectives]
    1='Identify the value assigned to a parameter when a function is invoked'
    2='Explain how the output of a function will change with the ordering of its parameters'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Our `checkPassword` function is nice and reusable now with its ability to check any value we pass to it as an argument, but in practice we will see lots of functions which need more than one piece of information to do their job. How we provide this information is critical. In a future sprint we will look at ways of testing our code to ensure we have set everything up correctly but we can avoid a lot of problems by paying close attention to how we use our functions.

Let's create a new function to work with for this example. In a new file let's define a function which will print a greeting for someone with a different message depending on what time of day it is.

```js
function greet(timeOfDay, name){
  console.log(`Good ${timeOfDay}, ${name}.`);
}
```

#### Ordering

If a function expects to receive two pieces of information then it expects to receive them in the order they are defined. In our example we have said the first argument `greet` receives will represent the `timeOfDay` parameter and the second argument will be for `name`. We can test it to see what happens:

```js
greet("afternoon", "Colin");
// "Good afternoon, Colin."
```

{{<note type="exercise" title="Exercise: Changing the order of arguments">}}
Try to predict what will happen if we swap the order of the arguments when calling the function. 

<details>
  <summary>Answer:</summary>

  ```js
  greet("Colin", "afternoon");
  // "Good Colin, afternoon."
  ```
</details>
{{</note>}}

As far as the function is concerned everything is fine: it needed two pieces of information and it got two, so it's happy. The output doesn't make sense to us as users though! 

The output may not make much sense, but it could be worse. What might happen if one of the arguments was expected to be a number? If we're not careful when passing arguments we can cause errors by trying to do something we're not able to do to a value. 

#### Wrong number of arguments

Some languages are very strict about passing the right number of arguments to a function when it is called. JavaScript is not one of those languages. JavaScript is quite forgiving and will do its best with what we give it.

{{<note type="exercise" title="Exercise: Missing arguments">}}
Try to predict what will happen if we omit the second argument when calling our function. **Hint**: think about the value of a variable which we declare but never initialise. 

<details>
  <summary>Answer:</summary>

  ```js
  greet("afternoon");
  // "Good afternoon, undefined."
  ```

  When the function is called `timeOfDay` and `name` are both declared but we only have a value to assign to `timeOfDay`. `name` will remain `undefined` while the code is executed.
</details>

Now predict what will happen if we omit the _first_ argument. 

<details>
  <summary>Answer:</summary>

  ```js
  greet("Colin");
  // "Good Colin, undefined."
  ```

  Remember that ordering matters. The interpreter will assign the first value it receives to the first parameter, it doesn't know there was meant to be something else there first.
</details>

{{</note>}}

{{<note type="exercise" title="Exercise: Extra arguments">}}
Try to predict what will happen if we pass a third argument to our function. 

<details>
  <summary>Answer:</summary>

  ```js
  greet("afternoon", "Colin", 2026);
  // "Good afternoon, Colin."
  ```

  The function only expects two pieces of information and once it has them it doesn't care about anything else we give it. Remember about the ordering though! It only expects two values and it will take the **first** two values, whatever they are.
</details>

{{</note>}}

#### Default values

There are many reasons why we might be missing a piece of data which is actually quite important for our program. In production code we would usually have several checks in place to ensure we didn't even try to call our function if something was missing but it never hurts to have another one.

In our `greet` example we were able to get away with the missing value because we can still print `undefined` but that won't always be the case. We can't add two numbers together if once of them is `undefined`, for example. To help avoid this we can assign **default values** to parameters when we define a function. If a function expects to receive a value when it is called but doesn't it will substitute the parameter's default, avoiding the value being `undefined`.

{{<note type="exercise" title="Exercise: Assigning defaults">}}
Research how to assign default values to a parameter and update the function definition so that it prints "user" instead of "undefined" if the `name` argument is not passed. **Hint**: The [functions page of the MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions) could be a good place to start!

<details>
  <summary>Solution:</summary>

  ```js
  function greet(timeOfDay, name="user"){
    console.log(`Good ${timeOfDay}, ${name}.`)
  }
  ```

</details>

{{</note>}}


