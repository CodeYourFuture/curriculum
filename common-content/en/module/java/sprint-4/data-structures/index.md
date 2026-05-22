+++
title = 'Data Structures'

time = 120
objectives = [
  'Compare and contrast common data structures in Java: Maps, Sets and Lists, explaining their similarities and differences in terms of ordering, duplicates, memory allocation and data retrieval mechanism',
  'And to discuss in Big-O terms, the time complexity of basic insert / update / remove operations on common collections',
  'Given a scenario involving data, to choose the most appropriate data structure based on the above characteristics',
  'Instantiate different implementations of Maps, Lists and Arrays',
  'Use generics to enforce what can and can't be contained within Collections'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- What are some real life examples of when a `Map`, `List` and `Set` should be used to store data?
  - As an example: which would be best for a) Storing the names of varieties of fruit sold by a greengrocer, b) A register of students first names in a school class, c) The names of the students and the grades they achieved
- Can you think of another example for when to use a `Map`, `List` and `Set`?
- What are the properties of Maps, Lists, Sets that make each suitable for different types of data? Think about ordering, duplicates and key/values here.
- And how do they compare in terms of time complexity when inserting / removing / updating items? Use Big-O notation here.
- Is it possible to instantiate a `Map` / `List` / `Set` directly? If not, why not?
- How does this relate to interfaces? Where does the `Collections` interface fit in?
- What are the most common implementations? Can you find a `Set` implementation that has a different ordering property to normal?
- What is the `#equals` method and how does it differ to == ?
- How do Sets and Maps make use of the equals method?
- What is the relationship between `#equals` and `#hashcode`?
- Why can't we always just use == ?
- What happens in the following cases: a) `x == foo`, b) `x.equals(foo)`, c) `foo.equals(x)` ? (where in each case x is a null variable and foo is a non-null variable)
- Why bother with `Collections` at all, can't we just use Arrays? What advantages do these pre-built data structures provide?
- Bonus: Is it possible to create `Collections` of primitive types? Why?

### Reading Materials

#### Collections
- [GeeksforGeeks - Collections Framework](https://www.geeksforgeeks.org/collections-in-java-2/)
  - Read the motivation for why Collections are useful (remember, we always want to start with _why_!)
  - Look at the sections on the main interfaces and implementations, and look at the class diagrams to see how they relate to one another
  - **Just focus on Sets, Lists, Maps for now; ignore queues and concurrency.**
- [Generics With Collections](https://www.geeksforgeeks.org/advance-java/generics-with-collections/)
  - We aren't focussed too much on generics at this stage, but a very basic understanding is needed to work with Collections, so focus mainly on how to enforce what types can be contained within a collection e.g. how do I create a List of Strings? What about a Set of Animals? Or a List of Sets of integers?!
  - Ignore the section on generic methods
- [Java Collections Complexity](https://www.baeldung.com/java-collections-complexity)
  - Worth reading the whole article to see how different types of Collection compare, and try to understand _why_ the time complexity is what it is so that you can reason it yourself from first principles if necessary
  - Don't worry about memorizing all of the Big-O time complexity for every collection though, use [this table](https://stackoverflow.com/questions/559839/big-o-summary-for-java-collections-framework-implementations) instead:

#### Equals and hashCode
- [Equality In Java: Operators, Methods And What To Use When](https://stackify.com/equality-in-java-operators-methods-and-what-to-use-when/)
  - This provides a good explanation and example as to why the equals method exists and how it differs to ==
- [Java Hashcode](https://codegym.cc/groups/posts/java-hashcode)
  - Introduction and overview of what a hashcode is
- [Why Use Hashcode In Java](https://medium.com/@alan.camalionte/why-use-hashcode-in-java-5f927879554a)
  - Provides an explanation of why #hashCode exists and how it relates to #equals
  - There is some mention here of 'buckets' and other details of how HashSet and HashMap implementations work → if you are interested you can research in more detail but it is not required learning at this stage, though it may provide a good discussion topic in a workshop!

#### Data structures
- [List Interface in Java](https://www.geeksforgeeks.org/java/list-interface-java-examples/)- Show how to construct and modify each data structure → these will be useful to read when completing the exercises below
- [Baeldung - Guide to Java HashSet](https://www.baeldung.com/java-hashset)
- [Baeldung - Guide to Java HashMap](https://www.baeldung.com/java-hashmap)

## Exercises

{{<note type="exercise" title="Exercise 2.1">}}

You are given three arrays containing data relating to students and their grades: _firstNames_, _lastNames_ and _grades_. Each student is represented by the same index in each array, so `firstNames[i]` has the surname `lastNames[i]` and grade `grades[i]`. Create a class (with an appropriate name) that takes the three arrays as constructor parameters and has the following methods to collect the data into more sensible structures (note you will need to choose the appropriate return type!):

- `getFirstNames(String[] firstNames, String[] lastNames, int[] grades)`
- `getDistinctFirstNames(String[] firstNames, String[] lastNames, int[] grades)`
- `getDistinctFirstNamesInAlphabeticalOrder(String[] firstNames, String[] lastNames, int[] grades)` → Hint: no for loops needed; consider an appropriate collection implementation
- `getLastNameToGrade(String[] firstNames, String[] lastNames, int[] grades)` (Note you can assume there are no duplicate last names)

Create a main method that calls each method above and prints the output to the console. The data to use should be:

- firstNames = {Anuket, Eryn, Filip, Raquel, Eryn}
- lastNames = {Hassan, Doe, Pappas, Clarke, Jones}
- grades = {22, 45, 35, 22, 41}

#### Reflection

_Suppose there are a set of twins in the class, so there are some duplicate lastNames. Can we still build a map of students to their grades?_
{{</note>}}


{{<note type="exercise" title="Exercise 2.2">}}
- Create a `Student` class with fields `firstName` and `lastName`
- Implement the following method: `Map<Student, Integer> getStudentToGrade`
- What methods do you need to define on `Student` for this map to work safely?
- Update the data set to include the twins and print the result of `getStudentToGrade` to the console
{{</note>}}

{{<note type="exercise" title="Exercise 2.3">}}

- Now let's ditch the arrays completely and work only with collections: in your main method, call each of the methods you've already created and assign the results to new variables. This will be our starting data.
- Suppose a new student joins the class. Modify each of the collections you've created to include the new student and their grade
- Now suppose a student leaves the class. Modify each of the collections to remove that student.
- Now suppose that one of the students was found to have cheated in their exam and their grade needs to be modified. Update the collections to set the grade of one of the students to 0.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Would it have been possible to use Arrays to model the same data?
- Would it have been easier, harder or the same? Why?
- What was your thought process when deciding which data structure was most appropriate for modelling particular data? What things did you consider?
- Suppose the initial data set was input incorrectly and the same student's name and grade was input twice. How would your `Map<Student, Grade>` handle this? Why?
- What is the difference between variables: a) `List firstNames`, b) `List<String> firstNames`, c) `ArrayList<String> firstNames` ? Which is preferable? Bonus: how about `List<?> firstNames` ?
{{</note>}}

{{<note type="exercise" title="Exercise 2.4">}}
- Given the same data as above, without using for loops, find:
  - The highest and lowest grades
  - The first and last names of the student with the highest grade
  - Any firstNames that belong to more than one student
{{</note>}}