+++
title="Acceptable AI Use"
time=5
objectives = [
  "Explain acceptable and unacceptable uses of AI during the SDC.",
  "Recognise how to check whether your AI use is appropriate or not for the SDC."

]
[build]
  render = 'never'
  list = 'local'
  publishResources = false
+++

By the SDC, you have the foundational understanding needed to use AI more actively because you can now evaluate and challenge what it produces. This is where learning to use AI as a professional tool becomes part of your training. Your responsibility does not change. You must be able to **explain, modify, debug, and defend any code you submit**, regardless of whether AI helped produce it.

To read the full AI guidelines for trainees please see here: [AI Use Guidelines for Trainees](/ai-use-guidelines). This page is the SDC-specific guidance for AI use.

#### AI IS appropriate for:

- Exploring architectural approaches and trade-offs ("What are the pros and cons of approach A vs B for this problem?")
- Generating repetitive code that you already understand and could write yourself.
- Reviewing and improving code you have already written. _Example prompts: “Here is my code. What improvements could make it more readable or maintainable?”_
- Identifying potential edge cases you might not have considered, after you have already attempted to think through them yourself.
- Using AI APIs to build ambitious project features

#### Always required:

- You must be able to explain all code in your submissions
- You must be able to modify and debug AI-generated code independently
- Treat AI like a colleague whose work you are responsible for reviewing, not an authority whose output you submit unchecked

> [!IMPORTANT]
>
> ##### You must ensure you are still learning:
>
> At this stage, you can use AI more actively, but check yourself:
>
> Are you asking AI to do things you could do yourself but want done faster (good productivity use), or things you couldn't do yourself (sign you're skipping learning)?
>
> **The repetition test still applies:** If you'll need AI to do the same type of task next time, you haven't learned enough yet.

#### Using AI for code review:

Ask AI to review your code rather than write new code. Frame it like this:

- "Here is my code [paste]. What might I be missing? What edge cases should I consider?"
- "Here is my code [paste]. How could I improve its readability without changing what it does?"
- "Explain the security implications of this approach [paste]."

{{<multiple-choice
  question="What is NOT an example of acceptable use of AI in the SDC?"
  answers="Here is my code. What improvements could make it more readable or maintainable? | Explain the security implications of this approach [paste]. | Here's the task, generate a a function that passes the requirements."
  feedback="This is actually a good way to use AI to improve code you've already written. | This prompt is a good way to check how you could improve your approach to be more secure. | Correct, this is an unacceptable way to use AI, you skip the problem solving and understanding aspects of the work - both are important to your learning."
  correct="3" >}}
