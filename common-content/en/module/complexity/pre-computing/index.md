+++
title = "Pre-computing"
time = 60
[build]
  render = 'never'
  list = 'local'
  publishResources = false
[objectives]
    1="Identify a pre-computation which will improve the complexity of an algorithm"
+++

> Pre-computation means doing some work upfront to make future work faster.

### 💪🏾 Doing Work Ahead of Time

So far we have thought about saving the results of computations to access them again more quickly. But if we can predict what computations we will need, we can do them _before_ we need them and access them instantly. 

We _invest_ time now to _save_ time later. This could be a complete answer, an index of answers, or some intermediate computation that makes finding our final result faster. 

### 🗃️ 🔍 Example: Sort Before Search

Often, the work we pre-compute is sorting data to make searching operations faster. 

Searching for a username in an unsorted list of one million users requires checking each one. This has `O(n)` complexity, and will on average take half a million comparisons.

But what if we sorted our list? Now, searching for a specific username in the sorted list can use [binary search](logic/sprints/1/prep/#bisection). Binary search repeatedly halves the search space, which is `O(log n)` complexity - taking only about twenty comparisons for a million items.

But sorting isn't free! Sorting typically takes `O(n * log n)`, which is slower than `O(n)`.

If we need to search the list many times, the time spent sorting once is easily paid back by the much faster searches later. But if we're only searching one time, sorting before we search will be slower than just searching once. Pre-sorting is useful when we have data that is read frequently but updated less often.

Pre-computing always involves **trade-offs**: you invest time and memory upfront to gain speed later.

#### Draw-backs of pre-sorting

One of the trade-offs with pre-sorting is that it can make _updates_ more expensive. This is fine if we aren't going to update our list, but may be a problem if we will perform updates.

Imagine if you have an array which you have pre-sorted to make searching easier:

```js
const numbers = [1, 17, 38, 401];
```

Suppose we want to add the number `20` to the array.

If we didn't care about keeping our array sorted, we could just add it to the end, an `O(1)` operation:

```js
numbers.push(20);
```

If we care about keeping our array sorted, inserting new values may become slower. We may need to first binary search to find where to insert it (an `O(log n)` operation), and then insert the new value in place. Inserting the new value in place is probably an `O(n)` operation, because we need to move all of the values that come after it:

```js
const position = binarySearchPosition(numbers, 20); // O(log n)
numbers.splice(position, 0, 20); // O(n)
```

### Skip Lists

Different data structures have different performance characteristics for different operations.

Part of the complexity of inserting sorted positions above is that we're using an array - arrays are expensive to insert values into anywhere other than the end, because that requires us to move all of the other elements.

[Linked lists](https://en.wikipedia.org/wiki/Linked_list) are a data structure with different performance characteristics. With linked lists, adding or removing elements at arbitrary positions is cheaper. Once you've found the right place to insert, you just update a few pointers and the new element has been added. But this comes with a cost - linked lists don't have {{<tooltip title="Random access" text="random access">}}Random access is the ability to ask for any element (e.g. to write `numbers[2]`). Data structures without random access require you to start at a position and keep asking "what is the next element" until you get to the element you want. This is slower.<br /><br />Aside: RAM stands for Random Access Memory because it's a kind of memory you can access in this way.{{</tooltip>}}. So binary search is slower - you can't just find the middle element in the list, you need to repeatedly ask for the next element until you get to the middle. Quicker splice came at the cost of slower binary search.

This led to the development of a new kind of data structure called a [Skip list](https://brilliant.org/wiki/skip-lists/). A skip list is a sorted linked list, but where we keep track of which elements are at different points in the list. This allows us to easily jump to, say, the middle of the list if we need to (or a bit before it). Skip lists are another example of precomputing - every time we insert or delete an element into the data structure, we do a bit of extra book-keeping to update which elements we keep track of. In exchange for this extra work on insertion/deletion, our look-ups get faster.
