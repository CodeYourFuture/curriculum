+++
title = "tr"
time = 20
objectives = [
  "Replace all occurrences of one character with another using `tr`.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

`tr` translates (replaces) characters.

Learn about `tr` from its man page (and the backlog exercises).

{{<multiple-choice
   delimiter="~"
   question="What would the command `echo 'hello' | tr 'eo' 'yz'` output?"
   answers="hello ~ hyllz ~ hyzllyz"
   feedback="Not quite - check how multiple characters in a string are interpreted. ~ Right! Multiple characters in the first arguments means look for any of them. ~ Not quite - check how multiple characters in a string are interpreted."
   correct="1" >}}

{{<multiple-choice
   delimiter="~"
   question="What command could we write to delete all of the vowels from the input?"
   answers="`tr -d 'aeiou'` ~ `tr 'aeiou' ''` ~ `tr -d '[aeiou]'`"
   feedback="Right - we list all of the vowels as things to delete. ~ No - the no-flag form of tr doesn't allow an empty second string. ~ No - this will remove all of the vowels, but also remove other characters. tr doesn't accept regular expressions."
   correct="0" >}}
