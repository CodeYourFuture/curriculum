+++
title = 'Using a Package'
time = 30
[objectives]
    1="Use `import` to include a package in a project"
    2="Use third-party code to add functionality to a project"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

We have added a package to our project, now it's time to use it.

### `import`ing the package

Before we can use the package we need a file to work in. Create a new file called `checkingOddNumbers.js` in your `packages-practice` directory.

We also need to make a change to the `package.json` file. The way we load the package into our code depends on how the project is configured, so we need to update the `type` property on line 12. Change its value to `module` as shown below:

```json {title="package.json"}
{
  // ...
  "type": "module",
  // ...
}
```

Now we can hook up our package. At the top of `checkingOddNumbers.js` we need to add an `import` statement. Any time we need to use code which is defined in a different file we need to import it.

```js {title="checkingOddNumbers.js"}
import isOdd from 'is-odd';
```

Generally we will specify which functions we want to import (`isOdd` in this case) to avoid bloating our program too much. When importing from a package we only need to provide the name of the package in quotes, when importing from another file in our project we need to give its relative path.

### Using the package

Once we have imported the code we can use it just like any other function we defined ourselves. Try it by calling it a couple of times and printing the values.

```js {title="checkingOddNumbers.js"}
import isOdd from 'is-odd';

console.log(isOdd(1));
// true

console.log(isOdd(2));
// false
```

In the rest of this sprint we will be following a similar workflow: add a package using npm; import it into our files; use the functions it provides.

{{<note type="exercise" title="Exercise: Using a package">}}
Try to recreate the workflow for yourself.

1. Create a new directory called `translating-five`
2. Initialise an npm project there - you can use the default values
3. Install the [five](https://www.npmjs.com/package/five) package. It does fun things with the number 5
4. Create a new file to work in and import the package
5. Use the documentation on npmjs to help you translate "five" into the following languages. You should print `Five in <language> is <answer>`:
   - Dutch
   - Japanese
   - Binary
{{</note>}}