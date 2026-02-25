+++
title = "Single-use data analysis programs"
headless = true
time = 60
facilitation = false
[objectives]
    1="Write a program to extract information from a JSON file"
    2="Identify the trade-offs between using existing shell tools and writing custom programs"
    3="Choose whether to use existing tools or write a custom program to solve a particular problem"
+++

We've seen two different ways of analysing some input to produce an output.

Sometimes we can use, or combine, existing tools to get answers. For instance, we can count the words in a file with `wc`.

Sometimes we can write custom tools when existing tools don't quite do what we want. For instance, we wrote a program to count specific words.

When we want to answer some question, sometimes it's useful to write a program we may only use once. (Or we may re-use in the future.)

It's not always obvious whether it's easier to try to use tools that already exist, or to write our own.

> [!TIP]
>
> This is like in real life! Imagine if you had two differently sized bottles, and wanted to pour all of the liquid from one to the other without spilling any.
>
> You can imagine making the perfect tube that has exactly the right size connector at each end to connect to the bottles.
>
> Or maybe you already have a funnel that's about the right size - not perfect, but close enough, and you can probably use.
>
> But if you got a really wide or really narrow bottle, maybe that funnel wouldn't be good enough and you would need to make a custom solution.

Sometimes the format of our data makes it easier or harder to use existing tools.

Let's look at some sample data:

```json
[
    {
        "name": "Daniel",
        "score": 100
    },
    {
        "name": "Kristina",
        "score": 120
    },
    {
        "name": "Iulia",
        "score": 95
    },
    {
        "name": "Aleks",
        "score": 190
    },
    {
        "name": "Daniel",
        "score": 80
    },
    {
        "name": "Fatima",
        "score": 110
    }
]
```

Here are a few questions we may want to answer about this data:
1. What was the name of the first person to play the game?
2. What was the name of the last person to play the game?
3. Who had the highest score?
4. The names of everyone who played the game directly after Daniel?

We can probably answer all of these questions with `jq`. We can also definitely write a program to answer all of these questions for us.

The first three are similarly hard to solve in `jq` or with a programming language.

The last one is quite hard to solve in `jq`.

{{<note type="Exercise">}}
Solve all of the first three questions in both `jq` and your choice of JavaScript or Python.

Which approach do you think is quicker to write? Which is easier to think about?
{{</note>}}

{{<note type="Exercise">}}
Solve the fourth question in your choice of JavaScript or Python.

Now spend no more than 20 minutes trying to solve it with `jq`.

What do you think makes this harder to solve in `jq`?

What {{<tooltip title="heuristics">}}A heuristic is a guideline. It's not an exact rule, but a "good enough" idea to guess what approach you should use to answer a question.{{</tooltip>}} can you think of about when to use existing tools vs writing your own?

{{</note>}}
