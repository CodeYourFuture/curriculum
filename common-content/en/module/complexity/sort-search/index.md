+++
title = "Sort Search and Efficiency"
headless = true
time = 30
emoji= "🐀"
[objectives]
    1="Identify a pre-computation which will improve the complexity of an algorithm"
+++

Let's think about Purple Forest from the Legacy Code module.

When we build the timeline of blooms on the homepage, we call an endpoint `/home`. This returns an array of objects, blooms, produced by people we follow, plus our own blooms, sorted by timestamp.

There are many different ways we could get and display this information, and some ways are better than others.

We could have coded these steps:

1. Request all the blooms in the database
1. Request a list of all the people we follow
1. Filter all the blooms by the people we follow, plus our own name
1. Sort by timestamp
1. Display blooms

We could have written our JS to:

1. Request a list of all the people we follow
1. For each person we follow, request their blooms
1. Request our own blooms
1. Merge all the arrays
1. Sort by timestamp
1. Display blooms!

Given what we've just thought about, how efficient are these programs? How could you make them more efficient?

Imagine you need to find a specific book, "The Efficient Detective," in a large library containing thousands of books (n books).

Searching an Unsorted Library: If the books are just randomly placed on shelves, how do you find your book? You likely have to look at each shelf, maybe scan every title one by one. In the worst case, you might have to check almost all n books. This is like a Linear Search, and its time complexity is O(n). If the library doubles in size, it takes roughly double the time to find the book.

Searching a Sorted Library: Now, imagine the library is perfectly sorted (e.g., using the Dewey Decimal System or alphabetically by author). You don't need to check every book. You can use the sorting system to quickly narrow down the section, then the aisle, then the shelf. This is like Binary Search (which we saw works similarly to the O(log n) wine puzzle solution). You can eliminate half the possibilities with each step. The time complexity is O(log n). Even if the library doubles in size, it only takes one extra step to find the book!

The Connection: Sorting the data first allows for much faster searching later!

The Catch: The Cost of Sorting
Organizing that messy library wasn't free! It took significant effort (time) for the librarians to sort all n books initially. Efficient sorting algorithms (like Merge Sort or Tim Sort, which Python uses) typically have a time complexity of O(n log n).

The Trade-off:
You often face a choice:

Keep the data unsorted: Searching is slow (O(n)), but there's no upfront sorting cost.
Sort the data first: Pay an upfront cost (e.g., O(n log n)) to sort, but then enjoy very fast searches (O(log n)) afterwards.
Activity: When is Sorting Worth It?

Consider these scenarios. Would you bother sorting the data first before searching? Why or why not? Discuss the trade-offs in your notebook.

You have a small shopping list of 10 items written randomly. You need to check once if "butter" is on the list.
You manage a huge online store's customer database with millions of entries. Your system needs to look up customer details by their unique ID thousands of times every minute.
You have a list of 100 attendees for a one-off event. You need to quickly look up about 5-10 specific names during the event to check them in.

Key Idea: The relationship between sorting and searching is a fundamental example of how choosing the right algorithm and data structure, considering their complexities, dramatically impacts performance. If you need to search data frequently, the initial cost of sorting is often well worth the time saved on subsequent searches.

{{<label-items heading="Drag the time complexity notations onto the correct code examples">}}
[LABEL=O(1)]

- Accessing a list element by index: `my_list[5]`
  [LABEL=O(log n)]

- Binary search.

[LABEL=O(n)]

- Finding the largest number in an unsorted list.

[LABEL=O(n2)]

- Bubble Sort, comparing every element to every other element.  
  [LABEL=O(2n)]

- Naive recursive Fibonacci calculation.

{{< /label-items >}}
