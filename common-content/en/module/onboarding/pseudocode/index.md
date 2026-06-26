+++
title = 'Planning a function'
time = 30
[objectives]
    1="Define 'pseudocode'"
    2="Plan code using pseudocode" 
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

When we write code we are doing it to solve a problem. Before we start writing it's important to think about the problem in simple terms. For our password checker:

> Given a password entered by a user, I want to check if it is valid or not

The password we picked was `secretword123`, so if the user types that we want our program to behave a certain way. If they type anything else then it should do something different.

### Planning the process

In the previous section we used the `Math.round` function to round decimals to whole numbers. When we called the function a set of instructions were carried out and we got our result. The value of the result changed when we changed the value of the input. 

The `Math.round` function was provided for us as part of the core JavaScript language. We are able to use it but we didn't have to think about what the instructions were. Checking passwords isn't a core part of JavaScript so we will have to define the instructions ourselves.

Before we think about how the code should be structured we need to think about the overall process. We think about the input we will receive, what we want to happen and what the output should be using the **Given-When-Then** structure:

- **Given** an input
- **When** I execute some code
- **Then** this should be the result

These steps can be as simple or as complex as necessary. In our example:

> **Given** a password entered by a user
> 
> **When** I compare it to the variable containing the correct password
> 
> **Then** the program should tell me if the user entered the correct password or not

### Writing pseudocode

Once we have defined the criteria for our function we can start thinking about how the code should look. We want to be sure we have a good understanding of what we should be writing before we start, so we will plan our function using **pseudocode**.

{{<note type="definition" title="Definition: Pseudocode">}}
When we write pseudocode we follow the same structure as the code would (eg. correct indentation) but we write in a way that is closer to natural language. We can still use keywords such as `if` and `else` to show which structures we need but we use plain English as much as possible.
{{</note>}}

We'll also need to create a new file to work in. We'll call it `passwordCheckerFunction.js`.

We're going to use comments to describe what each section of code should do. As we write the function we'll leave the comments in place to act as a guide then delete them when we're finished. We don't need to be too specific with coding terms here, we want to concentrate on the process.

```js {title="passwordCheckerFunction.js"}
// Already have the password stored in a variable
// Receive the value which the user entered
// Compare the two values
// If they match print "Correct password entered"
// If they don't match print "Incorrect password, please try again"
```

Now we have a plan, let's look at how we define our new function.