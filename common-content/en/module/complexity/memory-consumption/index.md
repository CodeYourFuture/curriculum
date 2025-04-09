+++
title = "Memory consumption"
[build]
  render = 'never'
  list = 'local'
  publishResources = false
time = 45
emoji= "🥪"
[objectives]
    1="Quantify the memory used by different arrays"
+++

> There are only so many bits you can fit on a chip.

Computers are real things, not diagrams or mathematical models. This means a computer has a physical size and a finite amount of memory.

When your program runs, it uses some of this memory to store data, like variables and data structures. On your laptop, you have, basically, three places you can put data:

1. CPU cache
1. Main memory
1. I/O storage (like your hard drive)

Think of it like this. You have a sandwich on your plate (CPU). You have two more in your fridge (main memory), and there are ten more in the shop nearby (I/O storage). There are yet more sandwiches at the distribution centre (I/O network)! Your plate is small and nearby. You can get that sandwich quickly but you only have one. It takes a bit longer, but you can go to your fridge to get another. But there's a limit. If you invite more people or you are very greedy, you are going to have to go back to the shops.

Given this constraint, we need to understand how much memory we are consuming, or how many sandwiches we are eating, in our programs. There are ways to reduce the bytes we use, and we can learn them.

Let's quantify the memory used by different arrays:
