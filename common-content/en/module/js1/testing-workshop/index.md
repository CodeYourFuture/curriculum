+++
title = 'Testing Workshop'

time = 60
[objectives]
    1='Practice solving problems while testing'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

{{<youtube>}}https://youtu.be/SMy1jWCg8kI{{</youtube>}}

To get the most out of this workshop - don't just watch, code along 💻
You can use the code samples below as a starting point.

### Exercise 1

```js
// Create a function that takes three numbers as parameters
//   and returns the largest of the three
```

### Exercise 2

- Start with an empty folder
- Create a new NodeJS project: `npm init -y`
- Install Jest as a dependency: `npm i jest --save-dev`
- In package.json, change `"test": "echo \"Error: no test specified\" && exit 1"` to `"test": "jest"`
- Create a file for our first exercise: `example1.test.js`
- You can run your tests using `npm test`
