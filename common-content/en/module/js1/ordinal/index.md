+++
title = 'Ordinal numbers'

time = 20
hide_from_overview = true
[objectives]
    1='Convert positions to ordinal numbers'
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

🏢 Let's imagine you're working in a 10 storey office building. There are 10 different levels. We need a way to describe each level of the building. We start on the **ground floor** of the building - level with the ground. We use an **ordinal number** to describe the other levels in the building.

To form the ordinal number we take a number and add the correct {{<tooltip title="suffix" >}}The suffix comes from the word used to describe each number, like fir**st**, seco**nd**, thi**rd** etc.{{</tooltip>}}

☝🏿 Up from the ground floor, we are then on the 1**st** floor (fir**st** floor)
☝🏽 Up from the **1st floor**, we are on the 2**nd** floor (seco**nd** floor)

{{<tabs name="Ordinals">}}
===[[🙋🏾 Ordinals Exercise 1]]===

| number | + **suffix** | = ordinal number |
| ------ | ------------ | ---------------- |
| 1      | **st**       | 1**st**          |
| 2      | **nd**       | 2**nd**          |

What will the [ordinal number](#ordinals-2) be for:

a) 21?
b) 40?
c) 49?  
d) 13?

===[[📆 Days of the month]]===

Use ordinal numbers to write the days of the month for the following events:

a) Tomorrow
b) A week from now
c) Easter Sunday 2024
d) When is Eid expected to occur in 2024

===[[💾 Ordinal Numbers Reference]]===

1. 1**st**
2. 2**nd**
3. 3**rd**
4. 4**th**
5. 5**th**
6. 6**th**
7. 7**th**
8. 8**th**
9. 9**th**
10. 10**th**

{{</tabs>}}

### 📋 Specification

Let's consider a function called `getOrdinalNumber` that needs to work like this:

- it takes one argument - a whole number, like 1, 2, 3, etc
- it returns a _string_ that represents the ordinal number

```js
getOrdinalNumber(1); // returns "1st";
getOrdinalNumber(2); // returns "2nd";
getOrdinalNumber(6); // returns "6th";
```

The requirements above form a {{<tooltip title="specification" >}}
A **specification** is a set of requirements for how a piece of software should behave.
{{</tooltip>}}. Now we have a specification for how the function should work we can create many cases showing how we expect the function `getOrdinalNumber` to behave when it is called with different inputs.
