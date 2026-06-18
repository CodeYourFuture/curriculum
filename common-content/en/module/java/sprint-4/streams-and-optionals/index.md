+++
title = 'Streams and Optionals'

time = 120
objectives = [
  'Use basic stream operations like filter, map, collect to perform operations on collections',
  'Use Java Optional to handle potentially missing objects, for example by providing a default value, or by continuing only if a value is present',
  'And compare the tradeoffs between using Optionals and handling nulls explicitly → especially noting that Optionals can themselves be null..!',
  'Use Lambdas and method references in stream operations',
  'Use comparators to sort objects',
  'Explain an example of java stream processing in terms of initialisation, intermediate and terminal operations.',
  'Explain what lazy evaluation is and how streams use lazy evaluation for efficiency.',
  'And contrast this with JS maps / filters etc - what are the key differences in how they are evaluated?',
  'Explain what is meant by a programming paradigm, what paradigm is associated with most of the Java you have seen so far, and which is associated with streams and optionals'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

## Self Study

_As you read through the resources below try to answer the following questions:_

- What are the main advantages of using `Stream` over for loops? Are there any cases where using a `Stream` may be worse? Think about: readability / performance / maintainability
- What are the main ways to open a stream? Think about collections and arrays
- How are streams evaluated under the covers? i.e. are they executed line by line? 
- What are intermediate and terminal operations?
- How does the way Java streams are evaluated compare to JS map, filter etc?
- What are the tradeoffs in terms of performance, memory etc?
- How do Java streams tie into interfaces? i.e. when streaming a set/list where is the #stream method defined?
- What about Maps, can they be streamed? How?
- How does using an `Optional` to handle 'missing' values compare to explicitly checking for nulls? Can you think of any advantages / disadvantages to using `Optionals`?
- Can an `Optional` itself be null (i.e. `Optional<String) myOptionalString = null`)? What problems does this bring? How does this impact your answer above
- In general it is not recommended to use Optionals as parameters in (especially public) methods - why?

### Reading Materials

- [Lambdas and Method References](https://medium.com/@Zimmendra/understanding-java-lambda-expressions-and-method-references-f59ce7f0c2b0) → just scan through to learn what each is and the syntax
- [Introduction to Streams and Examples of Key Methods](https://www.geeksforgeeks.org/java/stream-in-java/) → you don't need to memorise each method, just use this to learn what streams are, when they are useful and to get a feel for the sorts of operations you can perform
- [Introduction to optionals](https://www.geeksforgeeks.org/java/java-8-optional-class/) → again, use this to learn what they are, why they are used and don't worry _too_ much about the specific method names (that's what your IDE is for!), but definitely do understand what you'd want to use an optional for
- [Comparison of Optionals vs null handling](https://medium.com/javarevisited/null-check-vs-optional-are-they-same-c361d15fade3)
- [An introduction to programming paradigms](https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/) - you don't need to memorise everything here, but having some familiarity with the imperative, declarative and functional paradigms, and being able to recognise examples of each will be useful

## Exercises
Alfa Streams and Lambdas exercises - TODO when we move this to git: need the superclass and the imports, as well as the source for NameFinder, ShapeCounter, Remainders..

```java
/**
 * =======================
 *  Streams
 * =======================
 * <p>
 * Time to venture into the world of functional programming and try using some Streams.
 * <p>
 * Let's go... Have a go at solving the following exercises first using loops, and then convert them to use streams. As you work through, think about how the two approaches compare in terms of readability, how easy the code would be to adapt in future (as we know in enterprise software, code never stays the same forever as new requirements and bugs are worked on!), and compare the trade-offs in efficiency. 
 */
public class TestStreamsExercise extends ExerciseTest {
 
  /**
   * For this first exercise, we will implement the {@link NameFinder#printNamesStartingWithA(Collection)}
   * method. It should take a collection of names and *use a stream* to find the names that start
   * with the letter 'A' and print them. It should not be case-sensitive, so both "Anne" and "andy"
   * would be printed.
   * <p>
   * This test will check your method's output.
   */
  @Test
  public void testPrintNamesStartingWithA() {
    List<String> names = Lists.newArrayList("Antony", "John", "amy", "Ben", "Dan", "Ian", "Andrew", "Peter", "Oliver");
    new NameFinder().printNamesStartingWithA(names);
    checkPrintedOutput(format("Antony%namy%nAndrew%n"));
  }
 
 
  /**
   * Now let's try something a bit more complicated. We need to implement the method
   * {@link NameFinder#vowelNamesCapitalisedDescending(Collection)} so that it will take
   * our list of names, find the ones that start with a vowel, capitalise them (in case the first
   * letter isn't already capitalised) and then return them in a list in reverse-alphabetical
   * order.
   * <p>
   * Got all that? Give it a go and the test below will check your result.
   */
  @Test
  public void testVowelNamesCapitalisedDescending() {
    List<String> names = Lists.newArrayList("Antony", "John", "amy", "Ben", "Dan", "Ian", "Andrew", "Peter", "Oliver");
    List<String> expectedResult = Lists.newArrayList("Oliver", "Ian", "Antony", "Andrew", "Amy");
    assertEquals("Names should be as expected", expectedResult, new NameFinder().vowelNamesCapitalisedDescending(names));
  }
 
 
  /**
   * Here's a problem involving a Map. Let's see if we can solve it using a stream.
   * <p>
   * The method {@link ShapeCounter#countShapesWithSides(Map, int)} should take a map of shapes to
   * their number of sides and a number of sides and will tell us how many shapes in the map have
   * that many sides.
   * <p>
   * Use the test below to check your method is working.
   */
  @Test
  public void testStreamingMapEntries() {
    Map<String, Integer> shapesToSides = new HashMap<>();
    shapesToSides.put("Right-Angled Triangle", 3);
    shapesToSides.put("Isosceles Triangle", 3);
    shapesToSides.put("Square", 4);
    shapesToSides.put("Rhombus", 4);
    shapesToSides.put("Parallelogram", 4);
    shapesToSides.put("Hexagon", 6);
    shapesToSides.put("Octagon", 8);
 
    ShapeCounter shapeCounter = new ShapeCounter();
    assertEquals("Should be two 3-sided shapes", 2, shapeCounter.countShapesWithSides(shapesToSides, 3));
    assertEquals("Should be three 4-sided shapes", 3, shapeCounter.countShapesWithSides(shapesToSides, 4));
  }
 
 
  /**
   * Maths time again. For this test we will need to implement the method
   * {@link Remainders#printRemainders(int)} to print the remainders of the numbers
   * 1-20 when divided by a given divisor. The remainders should all be on one line
   * and should be separated by commas. There should be a line break at the end.
   * <p>
   * For example, for a divisor of 2 it would go:
   * <pre>
   *   1,0,1,0 ... and so on until we have 20 numbers
   * </pre>
   */
  @Test
  public void testPrintingRemainders() {
    Remainders remainders = new Remainders();
    remainders.printRemainders(2);
    remainders.printRemainders(5);
    checkPrintedOutput(format("1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0%n1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0%n"));
  }
 
 
  /**
   * Time to use one of the more 'interesting' terminal operations. In this exercise,
   * you'll need to use {@code .groupingBy()}.
   * <p>
   * To pass this test, implement the {@link Remainders#remainderGroups(int)} method
   * to return a {@code Map<Integer, List<Integer>>} with an entry for each different
   * remainder. The key should be the remainder itself and the value should be a list
   * of all the numbers between 1 and 20 that have that remainder.
   */
  @Test
  public void testGroupingRemainders() {
    Remainders remainders = new Remainders();
 
    Map<Integer, List<Integer>> expectedRemaindersFor5 = new HashMap<>();
    expectedRemaindersFor5.put(0, List.of(5, 10, 15, 20));
    expectedRemaindersFor5.put(1, List.of(1, 6, 11, 16));
    expectedRemaindersFor5.put(2, List.of(2, 7, 12, 17));
    expectedRemaindersFor5.put(3, List.of(3, 8, 13, 18));
    expectedRemaindersFor5.put(4, List.of(4, 9, 14, 19));
    assertEquals("Remainder groups for 5 should be correct", expectedRemaindersFor5, remainders.remainderGroups(5));
 
    Map<Integer, List<Integer>> expectedRemaindersFor8 = new HashMap<>();
    expectedRemaindersFor8.put(0, List.of(8, 16));
    expectedRemaindersFor8.put(1, List.of(1, 9, 17));
    expectedRemaindersFor8.put(2, List.of(2, 10, 18));
    expectedRemaindersFor8.put(3, List.of(3, 11, 19));
    expectedRemaindersFor8.put(4, List.of(4, 12, 20));
    expectedRemaindersFor8.put(5, List.of(5, 13));
    expectedRemaindersFor8.put(6, List.of(6, 14));
    expectedRemaindersFor8.put(7, List.of(7, 15));
    assertEquals("Remainder groups for 8 should be correct", expectedRemaindersFor8, remainders.remainderGroups(8));
  }
 
 
  /**
   * What if we wanted to know 'how many times does each remainder appear?'. We'd need to get a map
   * with an entry for each remainder where the value tells us the count as a Long.
   * <p>
   * That's exactly what the method {@link Remainders#remainderCounts(int)} should do. Let's
   * implement it to give us the count for each remainder for a given divisor.
   */
  @Test
  public void testCountingRemainders() {
    Remainders remainders = new Remainders();
 
    Map<Integer, Long> expectedRemaindersFor5 = new HashMap<>();
    expectedRemaindersFor5.put(0, 4L);
    expectedRemaindersFor5.put(1, 4L);
    expectedRemaindersFor5.put(2, 4L);
    expectedRemaindersFor5.put(3, 4L);
    expectedRemaindersFor5.put(4, 4L);
    assertEquals("Remainder counts for 5 should be correct", expectedRemaindersFor5, remainders.remainderCounts(5));
 
    Map<Integer, Long> expectedRemaindersFor8 = new HashMap<>();
    expectedRemaindersFor8.put(0, 2L);
    expectedRemaindersFor8.put(1, 3L);
    expectedRemaindersFor8.put(2, 3L);
    expectedRemaindersFor8.put(3, 3L);
    expectedRemaindersFor8.put(4, 3L);
    expectedRemaindersFor8.put(5, 2L);
    expectedRemaindersFor8.put(6, 2L);
    expectedRemaindersFor8.put(7, 2L);
    assertEquals("Remainder counts for 8 should be correct", expectedRemaindersFor8, remainders.remainderCounts(8));
  }
}

```

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- In general, do you find streams more or less readable than loops? Think about trivial vs more complex data manipulation
- How about when writing code; do you find it easier to write using streams or loops?
- Are there any hard and fast rules about when and when not to use streams? What are some trade-offs to consider when deciding?
- Can you think of an example of when using an Optional would be useful? How about an example of when using an Optional may actually make things worse?
- Do you need to memorise all the available stream operations? What is a useful tool to find out which methods are available?
