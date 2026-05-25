+++
title = 'The Builder Pattern'

time = 120
objectives = [

]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++


## Self Study

_As you read through the resources below try to answer the following questions:_

- What is mean by the term 'immutable' and why is it desirable to have immutable classes in Java?
- Can a class have more than one constructor? Are there any constraints - can you think of an example of two constructors for a class that would not be valid?
- What problems can having either multiple, similar constructors, or constructors with lots of parameters cause?
- How does the builder pattern help to solve these problems?
- What do the terms 'fluid interface' and 'method chaining' mean?
- Are there any downsides to using the builder pattern? When is it not appropriate to use?

### Resources

- [CodeGuru provides a good overview of the pattern](https://refactoring.guru/design-patterns/builder)

## Exercises
{{<note type="exercise" title="Exercise 3.1">}}

- Refactor the following code to use the builder pattern:
  - Make all fields final
  - Private constructor taking a static inner `Builder`
  - Required params: id, name, price
  - Optional params: description, category, onOffer (default values)
  - Validation in `build()`: id not empty, name not empty, price > 0
- Then use your builder to create:
  - A laptop on offer for £1000
  - A computer mouse not on offer for £20
- And verify the fields have been set correctly in the following ways
  - Debugging and inspecting your objects post-creation directly
  - Overriding the `toString` method and printing the output to the console

```java
public class Product {
    private String id;
    private String name;
    private double price;
    private String description;
    private String category;
    private boolean onOffer; 
    
    public Product(String id, String name, double price) { }
    public Product(String id, String name, double price, String description) { }
  
}
```
{{</note>}}

{{<note type="exercise" title="Exercise 3.2">}}

- Add two new fields to your `Product` class, one mandatory, one optional, and update your laptop and mouse to use them
{{</note>}}

## Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- What are the main advantages and potential disadvantages of the builder pattern?
  - Think of an example where the builder pattern would not be appropriate
- Is there a factory alternative that may be used in some instances for classes with several similar constructors?
  - When would you prefer this to the builder pattern?
- What happens if you forget a required parameter in a builder built class?
- Why should the fields be final and what benefits does this bring?
- Bonus: In the example above we store a monetary amount as a double - what are some potential problems with this? In general is there a preferred approach for modelling money in Java?
  - Similarly, can you think of a more appropriate type to model the product category?
