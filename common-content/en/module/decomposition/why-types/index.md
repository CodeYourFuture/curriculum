+++
title = "Why we use types"
time = 30
objectives = [
  "Explain how type annotations help understand a function's expectations.",
  "Explain how type annotations help prevent bugs.",
]

[build]
  list = "local"
  publishResources = false
  render = "never"
+++

In real life, as well as programming, there are some impossible operations. Can you divide seven by yellow? Can you set fire to a sound? These don't make sense. The same is true in programming.

Given these functions:

```python
def half(value):
    return value / 2 

def double(value):
    return value * 2 

def second(value):
    return value[1]
```

Consider these blocks of code:

```python
print(half(22))
print(half("hello"))
print(half("22"))
```

Is `half("22")` hoping to return 11 (because the string should be converted to a number)? Or return 2 (because it's the first half of the string)? Or error, because it doesn't make sense?

What is `half("hello")` meant to do? It probably doesn't make sense.

```python
print(double(22))
print(double("hello"))
print(double("22"))
```

Does `double("hello")` make sense? If so, what do you expect it to return?

```python
print(second(22))
print(second(0x16))
print(second("hello"))
print(second("22"))
```

How about `second(22)`? Should it treat 22 like a stringified version of the decimal representation of the number 22 and return 2? If so - `22` is the same as `0x16`. Should `second(0x16)` convert `0x16` to decimal before returning the second character? Or should it remember that the original number was input as hexadecimal and return `6`?

## Intent

The _intent_ of these functions is probably that `half` and `double` are expected to operate on numbers, and `second` is expected to operate on strings (and/or maybe lists).

But Python lets us write all of these things. Some of them, like `half("hello")` will error when they run, maybe breaking our program. Others, like `double("22")` will succeed but in surprising ways which may cause our program to give more subtly incorrect results later on.

{{<note type="exercise">}}
Predict what `double("22")` will do. Then run the code and check. Did it do what you expected? Why did it return the value it did?
{{</note>}}

In such a simple program as above, it's easy for us to run the program manually and see the errors (if we add enough logging). But as programs get bigger, these things get harder to spot.

This gets even harder when code is only sometimes executed. For instance, consider this NodeJS program:

```js
import process from "node:process";
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What URL should we fetch?\n> ", async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    if (response.body.toLowerCase().includes("permission")) {
      console.error("You didn't have permission to get that URL");
    } else {
      console.error(`The request failed - body: ${response.body}`);
    }   
    process.exit(1);
  }

  const body = await response.json();
  // TODO: Do something with the response.

  rl.close();
});
```

There is a bug here. `response.body` is a `Promise` not a string. So if a user ever tries to fetch a URL which returns a non-200 status code, our program will crash:

```console
% node fetch.js
What URL should we fetch?
> http://www.google.com/beepboop
file:///Users/dwh/tmp/jsplay/fetch.js:12
    if (response.body.toLowerCase().includes("permission")) {
                      ^

TypeError: response.body.toLowerCase is not a function
    at file:///Users/dwh/tmp/jsplay/fetch.js:12:23
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)

Node.js v22.11.0
```

The code we wrote was wrong. It could never have been correct. After a `fetch`, `response.body.toLowerCase()` _never_ makes sense. Ideally we shouldn't have needed to wait until running the code (in fact, running exactly that line of code with exactly that data) to find this out.

## Types

This is where types come in.

Imagine if we could run some analysis over our code that told us "You're calling `double` with a string, but `double` expects a number, you have a bug". Or told us "You're calling `response.body.toLowerCase()` but `response.body` is a `Promise` which doesn't have a method `toLowerCase`, you have a bug".

Now we wouldn't need to keep running our program with lots of different inputs every time we change it. The type analysis could tell us "You have a bug here, you should fix it". Without having to run the program, and without having to think about different possible inputs.

## Support for type checking

Different languages have different levels of support for checking types.

Some languages, like Java, C++, Rust, and Go, _require_ you to write what types you expect function parameters to have.

Other languages, like JavaScript and Python, don't _require_ this but they have tools which _allow_ you to add this information by using a tool like mypy or JSDoc.

Languages with optional type checking perform good checks when you do add this type information. If you don't add type annotations in all of your code, they will perform fewer checks. Sometimes they will infer the correct types based on what you _have_ annotated. Other times they will just ignore code with no annotations and not give you errors about it even if it's wrong.

## Limits of type checking

Types can be really useful for detecting bugs. But there are limits to what kind of bugs type checking can detect.

Take this code:

```python
def double(number):
    return number * 3

print(double(10))
```

This code has a bug.

{{<note type="exercise">}}
Read the above code and write down what the bug is. How would you fix it?
{{</note>}}

Even though we're calling `double` with the correct type, something is wrong. Either the name of `double` is wrong (it should be called `triple`), or what it's doing is wrong (it should do `* 2` not `* 3`).

Type checking can't catch this bug. All of the types are correct. Not all bugs are type errors. But checking for type errors can get rid of a lot of bugs.
