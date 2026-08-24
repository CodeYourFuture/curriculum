+++
title = 'Fixing the error'

time = 30
[objectives]
1='Fix the error flagged by the interpreter'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

We saw this error:

```
TypeError: Assignment to constant variable.
```

Now that we understand it, let's fix it.

If a variable has been declared to be a constant we are not allowed to reassign it, but that's what we're attempting to do on line 11: 

```js {title="passwordChecker.js" linenos=table,hl_lines=["11"],linenostart=1}
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

{{<note type="exercise" title="Exercise: Fix the error">}}
Using what you have learned about variables already in this sprint, try to fix the error.

If you see a different error message you can apply the same techniques we used in the last section to understand it.
{{</note>}}