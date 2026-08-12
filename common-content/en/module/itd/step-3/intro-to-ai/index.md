+++
title ="Introduction to AI"
description= "Learn what AI is at a general level, and how we can use it as a learning tool"
time= 15
[build]
  render = 'never'
  list = 'local'
  publishResources = false 
+++

You may have heard of, or used, generative AI tools (shortened to AI or AI tools from now on) like ChatGPT, Copilot or Gemini. These are powerful tools that we have seen both disrupt and assist the learning of trainees at {{<our-name>}}.

> [!WARNING]
> Protect sensitive information: Never paste personal data, private project code, or information belonging to organisations into public AI tools. This includes anything related to your employer or work placement.

## AI: A predictive word-generator

AI assistants, like those mentioned above, are often large language models (LLMs). LLMs are "trained" on huge amounts of data to predict what word should come next in a sentence. Because they can read and generate text data, it feels like you're messaging a smart "person", but it is just software that has an algorithm for guessing what words should follow your input ({{<tooltip title="prompt">}} The input we give an AI assistant. {{</tooltip>}}). Like a big "word generator".

## AI makes mistakes

Not only does AI tools predict the text to generate but it could be trained on out-of-date, limited or even wrong data. This means these tools can make mistakes or make up things that don’t exist ({{<tooltip title="hallucinations">}}When a large language model (LLM) perceives patterns or objects that are nonexistent, creating nonsensical or inaccurate outputs. {{</tooltip>}}). For instance, a famous hallucination from 2024 was that many AI tools said there were two 'r's in the word strawberry.

**AI hallucinations can be costly to a programmer.**

It has been reported that AI can make up names of code packages which don't exist, and direct a programmer to use the package in their code. This comes with a security risk: people can create malicious packages with names AI tends to generate often to exploit their "predictions" and get coders to import viruses into their code.

This means we should **keep a critical eye on all output from AI tools**.

Spotting issues with AI output is a key skill when using these tools. To thrive as a professional you need to have good judgement of what is a correct output. We can build this skill over time with feedback, discussion, insight from people with more experience than us, and constant questioning of "why" things are built the way they are.

Here are two ways to think critically about AI output:

### 1. Challenge AI output

We have observed that more experienced developers interact with AI very critically: they push back, ask for alternatives, get justification for the response from AI tooling.

Build this habit early. Don't just use AI output without questioning it.

Ask AI for a different approach. Ask it to defend its answer. Ask it what could go wrong.

### 2. Always Verify

AI makes mistakes. It can produce code that looks correct but contains subtle errors, outdated practices, or security vulnerabilities. It can confidently agree with ideas that are wrong. Your job is always to check against documentation, against your own understanding, by running tests and more.

Look for **verified sources**:

- Ask AI to cite its sources and then check you trust where it found its information.
- Cross-check what you're reading with real documentation straight from the creators of the library/language/software you're using. A core coding skill.
- Use Slack to ask questions to your ITD peers and volunteers, what insights can you gain from the community.

## Bad prompts can create bad AI output

AI can also be led to give incorrect information when a prompt isn't accurate. Which means we need to **ask good questions** (or prompts).

As ITD learners, we are early in the {{<our-name>}} journey, we are likely still building our foundational software engineering knowledge. This means it is more likely we will ask AI inaccurate questions and AI will give misleading results. It's something to be aware of and cautious about - the accuracy of the questions we ask is important.

For now, remember to challenge and verify what AI tools give us back. If we can't explain it, or verify the information with our own fact-finding, we shouldn't use it.
