+++
title = 'Key-value pairs'

time = 10
[objectives]
    1='Define an object property'
    2='Identify key-value pairs in an object literal'

[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The `profileData` object is made up of **properties**.
Each **property** is an association between a key and a value.

```js
{
  firstName: "Francesco",
  lastName: "Leoni",
  age: 33,
  cityOfResidence: "Manchester"
};
```

In the {{<tooltip title="object literal">}} An object literal is an object defined by writing a comma-separated list of key-value pairs inside of curly braces.{{</tooltip>}} above, there are 4 properties. The first property consists of `firstName` and `"Francesco"`. `firstName` is the **key**, `"Francesco"` is the **value** associated with the key `firstName`.

In object literals, each **key-value pair** is separated by a comma.

> [!NOTE]
> Defining properties in JavaScript object literals looks a lot like defining properties in a CSS rule:
>
> ```css
> p {
>   color: red;
>   background-color: blue;
> }
> ```
