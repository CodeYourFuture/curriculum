+++
title = 'Declaring functions'

time = 40
[objectives]
    1='Label and describe the syntactic features of a function declaration'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We have our pseudocode from the previous section and it's time to write our first function.

```js {title="passwordCheckerFunction.js"}
// Already have the password stored in a variable
// Receive the value which the user entered
// Compare the two values
// If they match print "Correct password entered"
// If they don't match print "Incorrect password, please try again"
```

It can be tempting to jump straight to the interesting bit, but just like any other set of instructions we need to start at the beginning. In this case we need to declare a variable to store our password.

```js {title="passwordCheckerFunction.js"}
// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered
// Compare the two values
// If they match print "Correct password entered"
// If they don't match print "Incorrect password, please try again"
```

To create our function we need to use a function declaration. In JavaScript we declare functions like this:

```js 
function checkPassword(input) {}
```

The `function` declaration consists of the following syntactic elements:

- `function` keyword - begins the function declaration
- `checkPassword` - the **name** of the function
- `()` - any input to the function will go between these parentheses. We still need them if a function has no input, we just leave them empty. We call these inputs **parameters**.
- `{}` - the **body** of the function is written inside the braces. The code we want to execute will be written here.

{{<note type="note" title="Functions in other languages">}}
If you have worked with another programming language in the past you have probably worked with functions already, but defined them differently. Every language will have a different syntax for the definition but the purpose is the same.
{{</note>}}

We can add our function declaration to our code.

```js {title="passwordCheckerFunction.js"}
// Already have the password stored in a variable
const password = "secretword123";

// Receive the value which the user entered
function checkPassword(userInput){
  // Compare the two values
  // If they match print "Correct password entered"
  // If they don't match print "Incorrect password, please try again"
}
```

We changed a couple of things here:
- Instead of `input` we named our function's parameter `userInput`. Just like any other variable, we want to use meaningful names which tell us what the value represents.
- We wrapped the braces `{}` around the other steps in the pseudocode. These lines say what we want the function to do, so we place them inside it.
- We **indented** those lines inside the braces. Indentation gives us a visual indication of where a block starts and ends.

Now it's time to fill in the detail of what our function will do! We have already seen how to do this using an `if` statement in the last sprint.

{{<note type="exercise" title="Exercise: Complete the body of the function">}}
Add the code to complete the steps described by the pseudocode. Remember to line the comments up with the code!

<details>
  <summary>Example solution:</summary>

  ```js {title="passwordCheckerFunction.js"}
  // Already have the password stored in a variable
  const password = "secretword123";

  // Receive the value which the user entered
  function checkPassword(userInput){
    // Compare the two values
    if (userInput === password) {
      // If they match print "Correct password entered"
      console.log("Correct password entered");
    } else {
      // If they don't match print "Incorrect password, please try again"
      console.log("Incorrect password, please try again");
    }
  }
  ```
</details>
{{</note>}}

Now we have defined our function we can call it in exactly the same way as we called `Math.round()` before. Try it with different inputs to check that it works!

```js {title="passwordCheckerFunction.js"}
checkPassword("secretword123");
// "Correct password entered"

checkPassword("WrongGuess99");
// "Incorrect password, please try again"
```

{{<note type="definition" title="Definition: Arguments">}}
When we call a function we have a special name for the values we place in the parentheses: **arguments**. When we provide a value as an input we are **passing an argument** to the function.

There is an important distinction between parameters and arguments:
- A function's **parameters** are the placeholder values used when we **define** the function
- A function's **arguments** are the actual values in the program when we **call** the function
{{</note>}}
