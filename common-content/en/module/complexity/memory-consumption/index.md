+++
title = "Memory consumption"
description="Memory is finite"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 30
emoji= "🥪"
[objectives]
    1="Quantify the memory used by different arrays"
+++

> 📏 There are only so many bits you can fit on a chip.

Computers are real things, not diagrams or mathematical models. This means a computer has a limited physical size and a finite amount of memory. When your program runs, it uses some of this memory to store data.

Think back to Chapter 7 of <cite>How Your Computer Really Works</cite>.

```mermaid
graph LR
CPU -->|️ Fastest: Smallest| Cache -->|Fast: Small| RAM -->|Slow : Big| Disk -->|Slowest: Vast| Network
```

At each stage there are **limits** to **how fast** you can get the data and **how much** data you can store. Given this constraint, we need to consider how much memory our programs consume.

### 🧘🏽 Simpler is smaller

Consider these data structures. Order them from least to most memory needed:

```js
const userIds = [101, 102, ..., 1100]; // An array of 1000 numbers
const userRoles = ["Admin", "Editor", "Viewer"]; //An array of 3 short strings
const userProfiles = [ {id: 1, name: "Farzaneh", role: "Admin", preferences: {...}}, {id: 2, name: "Cuneyt", role: "Editor", preferences: {...}} ]; // An array of 2 complex objects
```

Different kinds of data have different memory footprints:

- Numbers or booleans use less memory than objects
- The longer a string, the more bytes it consumes.
- Objects and arrays need memory for their internal organisation _as well_ as the data itself.

More complicated elements or more properties need more memory. It matters what things are made of. All of this data added up is how much _space_ our program takes.

It also matters how many _steps_ our program takes. Another way to think of this is how much _time_ it takes to get the answer...
