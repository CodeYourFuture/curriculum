# Sorting Cards

## Learning objectives

```objectives
- [ ] Analyse the actual cost (comparisons + swaps) of particular sorting algorithms.
- [ ] Categorise different sorting algorithms by computational complexity.
- [ ] Identify when different sorting algorithms are suitable.
- [ ] Devise a specialised sorting algorithm for specific kinds of data.
```

## Outline

You will need a deck of cards for this workshop per group.

Split into groups of no more than 4 people.

We are going to try sorting some cards using different algorithms to compare them.

You will do a few different analyses over each algorithm:

Shuffle the deck of cards and pick 13 random cards.

## Algorithms (45 minutes)

For each algorithm, in order perform the following steps:
1. Predict its worst-case computational complexity (number of comparisons and swaps performed).
2. Predict what order of cards you think would give the _best_ performance for the algorithm.
3. Predict what order of cards you think would give the _worst_ performance for the algorithm.
4. Shuffle the cards and perform the algorithm on them manually.
5. Arrange the cards in the best and worst performances you predicted, and perform the algorithm on them manually.
6. Compare your predictions with your observations.

### Bubble sort (20 minutes)

Bubble sort keeps going through the whole list, checking whether each pair of elements is correctly sorted. If not, it swaps them. It keeps going through the list over and over again until it's sorted.

Because the highest/lowest element "bubbles" to the top in each loop, the highest/lowest encountered in each loop will be in it's correct place at the end of the loop. Each subsequent loop only needs to loop over the remaining unsorted elements (i.e. one less than the previous loop).

Pseudocode (from Wikipedia):

```
function bubble_sort(A : list of sortable items)
    n := length(A)
    repeat
        swapped := false
        for i := 1 to n-1 inclusive do
            if A[i-1] > A[i] then
                swap  A[i-1] and A[i]
                swapped := true
            end if
        end for
        n = n - 1
    until not swapped or n == 1
end function
```

### Insertion sort (10 minutes)

Insertion sort treats a subset of the array as sorted (initially just one element), and each time removes a new element, finds its correct location in the sorted subset, and _inserts_ it there.

Pseudocode (from Wikipedia):

```
function insertion_sort(A : list of sortable items)
    i := 1
    while i < length(A)
        j := i
        while j > 0 and A[j-1] > A[j]
            swap A[j] and A[j-1]
            j := j - 1
        end while
        i := i + 1
    end while
end function
```

### Merge sort (15 minutes)

Merge sort splits all of the input into one-element sub-lists. It then takes pairs of those sub-lists and merges them in-order so that each merged list is sorted. It keeps merging those (increasingly large) sub-lists until there's one list, which will be sorted.

Pseudocode (from Wikipedia):

```
function merge_sort(A : list of sortable items)
    // Base case. A list of zero or one elements is sorted, by definition.
    if length of A ≤ 1 then
        return A

    // Recursive case. First, divide the list into equal-sized sublists
    // consisting of the first half and second half of the list.
    // This assumes lists start at index 0.
    left := A[..(len m / 2)] // From the start excluding the m/2th element.
    right := A[(len m / 2)..] // From the m/2th element to the end, including the m/2th element.

    // Recursively sort both sublists.
    left := merge_sort(left)
    right := merge_sort(right)

    // Then merge the now-sorted sublists.
    return merge(left, right)
end function
```

## Comparing the algorithms (15 minutes)

Discuss:
1. Which algorithm performed better for your randomly shuffled data?
2. Which has the best worst-case complexity?
3. When would each algorithm make sense to use in real life?

## Sorting one suit (30 minutes)

Instead of picking 13 random cards, pick all 13 cards from one suit, so that each card has a unique number.

The best worst-case we've seen so far is worse than `O(n)`.

Try to devise an algorithm for sorting these 13 cards which is `O(n)`. If you do, explain to the group why it's `O(n)`, explaining what properties of the cards you're relying on to get this performance. Demonstrate this bound by sorting some cards.

<details>

<summary>Facilitation hints</summary>

We're aiming for pigeonhole sort or counting sort here. Because we know the values are unique and contiguous, we know what the correct position is for each card (the ace should be in index 0, the 2 in index 1, the 3 in index 2, etc), so don't need to perform any comparisons at all - just insert each value into its correct place.

This generalises to data where there's a known (e.g. uniform) distribution of values, such as a whole deck of cards. In less precisely controlled distributions, we may not know _exactly_ the destination position for values, but if we can guess well enough, we can do a broad pigeonhole/counting sort and then a few smaller comparison sorts of buckets.

</details>
