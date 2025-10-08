+++
title = "1000 Bottles of Wine"
time = 60
[build]
render = 'never'
list = 'local'
publishResources = false
+++

Now we're going to solve a puzzle together. We're going to think through a few different ways to approach it. This is a well-known puzzle and it's certainly possible to google the answer. However, we'd suggest: don't do that - you would steal from yourself the opportunity of learning this important idea.

{{<note title="A long awaited party" type="activity">}}
**The King** has stocked his wine cellar with one thousand bottles of wine for his birthday party tomorrow. However, the King's evil brother, the Duke, has poisoned one of the bottles! The poison is lethal and will kill anyone who takes even one sip within one hour. You, the Butler, must find the poisoned bottle and save the party! But how?
{{</note>}}

> #### Conditions:
>
> 🍾 You have **1000** wine bottles, one of which is poisoned.  
> 🐀 You have **500** rats you can use to test the wine.  
> ⌛ The poison is lethal and will kill within **1** hour.

{{<tabs name="boolean">}}
===[[Write down your solution]]===

In your notebook, write down your solution to this problem. Here are the constraints again:

🍾 You have **1000** wine bottles, one of which is poisoned.  
🐀 You have **500** rats you can use to test the wine.  
⏳ The poison is lethal and will kill within **1** hour.

===[[🍾 🍾 🐀 Look at a solution]]===

### 🍾 🍾 🐀

One way to think of this is to reduce this problem to its simplest case. If you have 2 bottles and 1 rat, you can test the wine by giving the rat a sip from one bottle. Wait one hour. If the rat is alive, the bottle is safe. If the rat is dead, the bottle is poisoned.

With 500 rats, it's similar, but not the same. Divide the 1000 bottles into 500 groups of 2. In round 1, give each rat a sip from one bottle in each group. Wait one hour. If the rat is alive, the bottle is safe. If the rat is dead, you found the poisoned bottle. If all rats are alive, the poisoned bottle is in the 500 bottles that were not tested. You still have 500 rats, so you can have each rat test the other bottle in their group.

This solution will take a maximum of 2 hours.

{{</tabs>}}

> #### New condition
>
> You now have just **10** rats to test the wine.

{{<tabs name="decimation">}}
===[[Write down your solution]]===

In your notebook, write down your solution to this problem. Here are the constraints again:

🍾 You have **1000** wine bottles, one of which is poisoned.  
🐀 You have **10** rats you can use to test the wine.  
⏳ The poison is lethal and will kill within **1** hour.

===[[Look at a solution]]===

With just 10 rats, we need a way to make our solution more efficient. We can break our problem into 10 smaller problems. Think of it as a search pattern, narrowing down our suspects with each round of testing.

**Round 1:** Let's divide our 1000 bottles into 10 groups of 100. Each rat tests one _group_ : a sip from every bottle in its group of 100. An hour later, with one dead rat, we have narrowed our search to 100 bottles. We've saved 900 bottles of wine and we still have 9 rats to help us.

**Round 2** Let's do it again: take our suspicious 100 bottles and create ten groups of ten. Our nine rats each drink from one whole group (and one group goes un-drunk). Our doomed rat perishes again, and after another hour, we've found the right group of ten. We now have 8 rats.

**Round 3** Now we're down to just 10 bottles. Eight rats test a bottle each, leaving two untested. If a rat dies, we've found the poisoned bottle. If not, we have two bottles left for the last round.

**Round 4: Base case** We can use just one rat to test one bottle. If we have a dead rat, it's the poisoned bottle. If not, the last untasted bottle is the culprit.

Through careful division and patience, we've turned an overwhelming search into a manageable investigation. Four hours, and we'll have our answer.

{{</tabs>}}

> #### New condition
>
> The birthday party is now in **1** hour, so you only have time for one test!

{{<tabs name="binary">}}
===[[Write down your solution]]===
Think about how you can use some of the thinking tools you just learned to solve this problem.

You will need boolean logic, deduction, and binary at least. Here are the constraints again:

🍾 You have **1000** wine bottles, one of which is poisoned.  
🐀 You have **10** rats you can use to test the wine.  
⏳ The poison is lethal and will kill within **1** hour.
⌛ You only have **1** hour so can only do **1** round of testing.

===[[Look at a solution]]===

If we only have one hour, we can only do a single round of testing! Our strategy of narrowing down can't work. We're going to have to think about what we have learned about binary to solve this problem.

I really advise that you write this out yourself in binary as you follow the solution through.

Let's reduce our case. Let's say we have 3 bottles and 2 rats.

We're going to number the bottles in binary. Each rat will test a different _bit_ of the binary number. Rat 1 will test the 1s place, Rat 2 the 2s place.

| Decimal | Binary | Rat 1 | Rat 2 |
| ------- | ------ | ----- | ----- |
| 1       | 001    | x     |       |
| 2       | 010    |       | x     |
| 3       | 011    | x     | x     |

If _only_ rat 1 dies, we know the poison is in the 1s place. It's bottle 1. If _only_ rat 2 dies, the poison is in the 2s place: bottle 2 is poisoned. If _both_ die, bottle 3 is our culprit.

To be clear: instead of testing bottles one by one, we will have the rats sip from _multiple_ bottles at once, just as with our progressive elimination search. But in this test, each rat's survival or death becomes a piece of information that we can _combine_ to locate the poisoned bottle.

Take a moment to check this out for yourself with 8 bottles and 3 rats.

===[[8 bottles, 3 rats]]===
| Decimal | Binary | Rat 1 | Rat 2 | Rat 3 |
| ------- | ------ | ----- | ----- | ----- |
| 1 | 001 | <input type="checkbox"> | <input type="checkbox">| <input type="checkbox">|
| 2 | 010 |<input type="checkbox"> | <input type="checkbox"> |<input type="checkbox"> |
| 3 | 011 | <input type="checkbox"> | <input type="checkbox"> |<input type="checkbox"> |
| 4 | 100 |<input type="checkbox"> | <input type="checkbox">| <input type="checkbox"> |
| 5 | 101 | <input type="checkbox"> |<input type="checkbox"> | <input type="checkbox"> |
| 6 | 110 |<input type="checkbox"> | <input type="checkbox"> | <input type="checkbox"> |
| 7 | 111 | <input type="checkbox"> | <input type="checkbox"> | <input type="checkbox"> |
| 8 | 100 |<input type="checkbox"> |<input type="checkbox"> |<input type="checkbox"> |

Now, what about 16 bottles? How many rats do you need?

We can also frame this as: how many rats do we need for `n` bottles? With 1000 bottles, do you definitely need 10 rats? How would you prove that?

{{</tabs>}}
