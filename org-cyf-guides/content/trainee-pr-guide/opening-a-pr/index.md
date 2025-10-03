+++
title = "Opening PR"
description="How to submit your work the right way"
emoji = "🔀"
weight = 2
+++

### Selecting source and target branches
- **Source branch**: Your branch
- **Target branch**: The branch you want to compare to -- normally CodeYourFuture's `main`.

### PR Title
A consistent title format makes pull requests easier to track, search, and review.

{{<note type="note" title="In CYF Course">}}
In CYF courses, you can typically find the title format in the PR template.

For example,
```
  Region | Cohort | FirstName LastName | Sprint | Assignment Title
```  
means the title should have 5 components separated by a vertical bar character (`|`)

- **`Region`**: One of 
  - `Cape Town`, `South Africa`, `ZA`
  - `Glasgow`, `Scotland`
  - `London`
  - `North West`, `NW`, `Manchester`
  - `Sheffield`
  - `West Midlands`, `WM`, `Birminghams`
- **`Cohort`**: In the form `year`-`course name`-`cohort starting month` (e.g., `25-ITP-Sep`)
- **`FirstName LastName`**: 🙄
- **`Sprint`**: `Sprint 1`, `Sprint 2`, ...
- **`Assignment Title`**:
  - Project's name
  - The name of the backlog issue is generally a good thing to use.
  - The **title** (if any) stated in the "How to Submit" section in the backlog corresponding to
    the exercise

{{</note>}}

### PR Description

The **PR description** is where you explain what your changes are and why you made them.
It helps reviewers quickly understand the context without having to read all the code.

The PR template in CYF courses typically contain the following sections:

#### 1. Self-checklist

The self-checklist helps you remember important steps, shows reviewers you've prepared your work, 
and speeds up the review process - while building good professional habits for real-world projects.

You should only tick items you've truly completed, check every box before submitting, 
and treat the checklist as both your responsibility and a learning tool - ask for help if you're 
unsure.

{{<note type="note" title="In CYF Course">}}
Complete every task described in the checklist, and mark each one as done.

To check a box in Markdown, change:
```
- [ ] My changes meet the requirements of the task
```
to
```
- [x] My changes meet the requirements of the task
```
{{</note>}}

#### 2. Changelist

The **Changelist** section is a short, bullet-point summary of the key changes in your PR, 
helping reviewers quickly understand what you did and why.

{{<note type="note" title="In CYF Course">}}
Replace the placeholder text `Briefly explain your PR` by a brief description of your changes.
{{</note>}}

#### 3. Questions

The **Questions** section lets you highlight parts of your work you’re unsure about, 
so reviewers can give you targeted feedback and help you learn.

{{<note type="note" title="In CYF Course">}}
Replace the placeholder text by your questions, or delete the section if you don't have any.
{{</note>}}
