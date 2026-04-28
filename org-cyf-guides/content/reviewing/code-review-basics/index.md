+++
title="Code Review Basics"
description="Learn how to review code effectively, including AI-generated code"
time=60
objectives=[
    "Explain what code review is and why it matters",
    "Identify common issues to look for when reviewing code",
    "Apply constructive feedback in code reviews",
    "Review AI-generated code critically"
]
+++

# Code Review Basics

Code review is a crucial skill for any developer. At CYF, we review code to learn from each other and improve our skills - not just to find bugs.

## Why Code Review Matters

- **Learning** - Reading other people's code teaches you new approaches
- **Feedback** - Get different perspectives on your work
- **Collaboration** - Working together produces better code
- **Professional skill** - Code review is standard practice in every tech job

## What to Look For

When reviewing code, look for these things:

### 1. Does the code work?

- Does the code do what it's supposed to do?
- Are there obvious bugs or edge cases missing?

### 2. Is the code clear?

- Are variable names descriptive?
- Is the code well-organized?
- Are there helpful comments where needed?

### 3. Is the code simple?

- Could this be done in a simpler way?
- Is there repeated code that could be refactored?

### 4. Does it follow best practices?

- Consistent formatting
- Proper error handling
- Security considerations

## How to Give Good Feedback

### Ask Questions, Don't Demand

**Good:** "What would happen if this input is empty? Could we add a check for that?"

**Not as good:** "This will crash if the input is empty. Fix it."

### Be Specific

**Good:** "This function is 50 lines long. Consider splitting it into smaller functions for readability."

**Not as good:** "This code is too long."

### Appreciate Good Work

**Good:** "Nice use of destructuring here - much cleaner than the alternative!"

## Reviewing AI-Generated Code

AI tools like GitHub Copilot, ChatGPT, and others can generate code quickly. But AI code needs careful review:

### Common AI Code Issues

- **Doesn't understand your specific requirements** - AI generates generic solutions
- **May use outdated patterns** - Technology changes fast
- **Can introduce security vulnerabilities** - Never trust AI code blindly
- **May not handle edge cases** - AI often assumes happy path
- **Inconsistent style** - May not match your project's conventions

### Questions to Ask When Reviewing AI Code

1. Does this code actually solve our specific problem?
2. Are there security concerns (hardcoded passwords, SQL injection, etc.)?
3. Does this follow our project's coding standards?
4. What happens with unusual inputs or edge cases?
5. Can I understand what this code is doing?

### Example AI Code Review

```javascript
// AI-generated code (potentially problematic)
function getUser(id) {
  return fetch('/api/users/' + id);  // Vulnerable to injection!
}
```

**What to look for:**
- Security vulnerabilities (like string concatenation in URLs)
- Missing error handling
- No input validation
- Hardcoded values that should be configurable

## Further Reading

If you want to dive deeper into code review, check out these resources:

- [CYF Style Guide](https://curriculum.codeyourfuture.io/guides/reviewing/style-guide/) - what code style looks like in the workplace
- [What to Look For Checklist](https://curriculum.codeyourfuture.io/guides/reviewing/checklist/) - detailed guidance on specific issues to catch during review

## Practice Exercise

Find an open pull request in the [#cyf-code-review](https://codeyourfutur-yov6609.slack.com/archives/C07QX99JK7B) channel and practice reviewing it using this guide.

Remember: Code review is a conversation, not a judgment. We're all learning!
