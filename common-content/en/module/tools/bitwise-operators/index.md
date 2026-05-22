+++
title = "Bitwise operators"
time = 120
objectives=[
  "Describe the meaning of the `&`, `|`, `^`, and `~` bitwise operators.",
  "Manually perform the function of the `&`, `|`, `^`, and `~` bitwise operators on two integers.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

{{<multiple-choice
question="What does the following decimal expression evaluate to?: `9 | 14` (Hint: Convert to binary)"
answers="23 / 15 / 8"
feedback="Not quite - if a bit is set in both numbers, we don't add them. / Right! 1001 | 1110 = 1111 - we take all of the bits that are set in either number. / Not quite - check again what | does."
correct="1"
delimiter="/"
>}}

{{<multiple-choice
question="What does the following decimal expression evaluate to?: `9 & 14` (Hint: Convert to binary)"
answers="16 / 15 / 8"
feedback="Not quite - if a bit is set in both numbers, we don't add them. / Not quite - check again what & does. / Right! 1001 & 1110 = 1000 - we take all of the bits that are set in both numbers."
correct="2"
delimiter="/"
>}}

{{<multiple-choice
question="What does the following decimal expression evaluate to?: `9 ^ 14` (Hint: Convert to binary)"
answers="15 / 7 / 8"
feedback="Not quite - check again what ^ does. / Right! 1001 ^ 1110 = 0111 - we take all of the bits that are set in exactly one of the numbers. / Not quite - check again what ^ does."
correct="1"
delimiter="/"
>}}

{{<multiple-choice
question="What does the following decimal expression evaluate to?: `~9` (Hint: Convert to binary)"
answers="6 / -10 / -9"
feedback="Right! ~1001 flips every bit, which produces 0110 which is 6. / Interesting - how did you come to this answer? If you can't explain why 6 and -10 are both valid answers, learn more about two's complement, truncation, and sign-extension. / Not quite - check again what ~ does."
correct="0"
delimiter="/"
>}}
