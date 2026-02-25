+++
title="Multiple Choice"
description="Create a multiple choice question with options"
menu=["shortcodes"]
+++

This is a simple "check understanding" block that allows you to create a multiple choice question with options and feedback. Short assessments like this are a pedagogically sound strategy to boost retention and understanding.

If you need to use `|` characters in your answers/feedback, you can specify the `delimiter` key to use a different delimiter between them.

### Invoke

```go
  {{</*
  multiple-choice
  question="What is the purpose of an energiser?"
  answers="To get everyone engaged and ready to learn | To burn an hour of the morning | To upset everyone | To make everyone sleepy"
  feedback="Right! The purpose of an energiser is to get everyone engaged and ready to learn. | Think again: what are energisers for? | No, that's not the purpose of an energiser | Not quite! Energisers are meant to wake people up, not make them sleepy."
  correct="0"
  */>}}
```

{{<multiple-choice
question="What is the purpose of an energiser?"
answers="To get everyone engaged and ready to learn | To burn an hour of the morning | To upset everyone | To make everyone sleepy"
feedback="Right! The purpose of an energiser is to get everyone engaged and ready to learn. | Think again: what are energisers for? | No, that's not the purpose of an energiser | Not quite! Energisers are meant to wake people up, not make them sleepy."
correct="0">}}
