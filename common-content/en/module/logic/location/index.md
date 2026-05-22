+++
title = "Binary Information Theory"
time = 10
[build]
render = 'never'
list = 'local'
publishResources = false
+++

At its heart, our rat puzzle demonstrates how binary data encoding works. Each rat represents one binary digit (a bit). They either live (1) or die (0). With 10 rats, we have 10 bits of information.

### 🧮 The Power of Binary

- 1 bit can represent 2^1 = 2 possibilities (0 or 1)
- 2 bits can represent 2^2 = 4 possibilities (00, 01, 10, 11)
- 3 bits → 2^3 = 8 possibilities
- 10 bits → 2^10 = 1024 possibilities!

### 🎯 Key Insight

This is why 10 rats are enough for 1000 bottles. Each possible combination of rat survival/death can uniquely identify one bottle number. We're seeing the same principle that allows computers to encode vast amounts of information using just 1s and 0s.

#### 🐀 Memory Locations

Just like how computers use binary addressing to locate specific memory locations, we're using our "rat bits" to encode the location (bottle number) of our poison. Each bit helps narrow down the possibilities until we have a unique address.
