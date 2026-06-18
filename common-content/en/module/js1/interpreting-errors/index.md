+++
title = 'Interpreting errors'

time = 20
[objectives]
1='Interpret an error trace to identify which line in which file caused the error'
2="Identify an error message from an error trace"
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

### An error is thrown

Let's revisit our password checker, but this time we'll create a variable to hold our response and print it at the end:

```js {title="passwordChecker.js" linenos=table,hl_lines=["1"],linenostart=1}
const password = "secretword123";
const userInput = "thisiswrong";
const adminPassword = "override";
const response = "";

if (userInput === password){ 
  response = "Correct password entered";
} else if (userInput === adminPassword){
  response = "Admin access granted";
} else {
  response = "Incorrect password!";
}

console.log(response);
```

When we run the file with Node we get an error in the console:

```console
% node passwordChecker.js

/Users/yourname/cyf/passwordChecker.js:11
  response = "Incorrect password!";
           ^

TypeError: Assignment to constant variable.
    at Object.<anonymous> (/Users/colinfarquhar/clients/cyf/content_testing/passwordChecker.js:11:12)
    at Module._compile (node:internal/modules/cjs/loader:1829:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1969:10)
    at Module.load (node:internal/modules/cjs/loader:1552:32)
    at Module._load (node:internal/modules/cjs/loader:1354:12)
    at wrapModuleLoad (node:internal/modules/cjs/loader:255:19)
    at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:154:5)
    at node:internal/main/run_main_module:33:47

Node.js v25.9.0
```

{{<note type="definition" title="Definition: Throwing Errors">}}
When this happens we say the program has **thrown** an error.
{{</note>}}

When an error is thrown the program stops. For errors like this one where there is a fundamental problem in the structure of the code this is unavoidable, but in some situations we can let the user know something went wrong without crashing the program. This is called **catching** an error and we will learn more in a later module.

When an error like this is thrown an error report is sent to the user. It will act like a map for us and lead us to where the error happened.

As programmers we will see a lot of errors. It's useful for us to be able to read them.

### Interpreting the output

Each line of output here tells us something useful.

The first line is:

```console
/Users/yourname/cyf/passwordChecker.js:11
```

Your output was probably different. But it will have the same parts: some text, then a colon (`:`), then a number.

{{<note type="exercise" title="Exercise: Locating the error">}}

1. Work out what the parts of this line mean.

2. Why are they different in this example than on your computer?

3. How can we use both pieces of information?

{{</note>}}

Often, looking at one line of a file is enough to understand what's wrong. The error message gives us the file name (`passwordChecker.js`) and the line number (11) so we can identify exactly where the problem is. It also shows us a copy of the line that caused the problem:

```console
response = "Incorrect password!";
```

Then the output tells us the error message:

```console
TypeError: Assignment to constant variable.
```

We may not know what this means yet, but it's something we can learn about.

Each line starting with "at" is showing us a "Stack trace". We'll skip over this for now. In the future we'll see how it can be useful to us.

Finally, we have this line:

```console
Node.js v25.9.0
```

{{<note type="exercise" title="Exercise: Identifying our tools">}}

What does this line mean? Why might it be useful to know this information?

{{</note>}}
