+++
title = "Programming language concepts"
time = 120
objectives = [
  "Define the term variable.",
  "Describe how a variable relates to a memory location.",
  "Give 3 examples of common operators.",
  "Define the `&&` (`and`), `||` (`or`), and `!` (`not`) operators.",
  "Explain what happens when you call a function.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

Read the learning objectives listed on this page: Bear in mind what you’re trying to achieve while reading this text. If a topic isn’t making much sense, and isn’t in the objectives, you can probably skip over it. If a topic is listed in the objectives, you should keep studying it until you are confident you’ve met the objective.

{{<note type="Reading">}}
Read chapter 9 of How Computers Work.

Do every exercise listed in the chapter.

You can skip the projects (though you're welcome to try any of them if you have time!).
{{</note>}}

Check you have achieved each learning objective listed on this page. If you're not sure about any of them, ask in Slack.

#### Exercise

Label each operator with its correct arity:

{{<label-items heading="Drag the correct arity from 👆🏾 onto each operator 👇🏽">}}
[LABEL=Ternary] The `?` operator in JavaScript.
[LABEL=Binary] The "logical and" operator (`and` in Python, `&&` in JavaScript and C).
[LABEL=Unary] The "logical not" operator (`not` in Python, `!` in JavaScript and C).
[LABEL=Binary] The "plus" operator (`+`).
[LABEL=Binary] The "logical or" operator (`or` in Python, `||` in JavaScript and C).
[LABEL=Binary] The "bitwise and" operator (`&`).
[LABEL=Unary] The "bitwise not" operator (`~`).
{{</label-items>}}

{{<multiple-choice
  question="What is the arity of the `-` operator?"
  answers="Unary | Binary | Ternary | It depends"
  feedback="Sometimes: when used in `value = -1` it's unary. But can it be used other ways? | Sometimes: when used like `value = 2 - 1` it's binary. But can it be used other ways? | No, in the languages we're learning `-` isn't a ternary operator. | Right - sometimes it applies to one value (`value = -1`) and other times it needs two (`value = 2 - 1`)."
  correct="3" >}}

In class, we will have a discussion about each of the below prompts. Think about them, and write down notes in your notebook to help you participate in the discussion.

{{<note type="Exercise">}}
Explain what a variable is and how it's used. Make sure to use the term "memory location" in your explanation.
{{</note>}}

{{<note type="Exercise">}}
Write down what happens when you call a function.

Make sure you include how the "next line of code to run" moves around, parameters/arguments, return values, and scope.
{{</note>}}

{{<note type="Exercise">}}
Write down an explanation of what a class is, which could be understood by someone who's never written any code before.

To help you think about this, consider:
1. What properties may a "recipe" class have, for representing recipes you could cook? How may a person interact with a recipe?
2. What properties may a "Big Mac recipe" have, for representing how to make a Big Mac?
3. What is the difference between a recipe for a Big Mac, and an actual Big Mac you may buy yourself?
4. What is the difference between the idea of _any recipe_, and an actual recipe for a Big Mac?

Include at least one real-world example of when a class is useful.

Make sure you describe the relationship between a class and an instance of a class.
{{</note>}}

{{<note type="Exercise">}}
Instances of classes are often called objects.

This kind of "object" is similar to, but slightly different from what we call an "object" in JavaScript.

Write down the differences between these two meanings of the word object.
{{</note>}}
