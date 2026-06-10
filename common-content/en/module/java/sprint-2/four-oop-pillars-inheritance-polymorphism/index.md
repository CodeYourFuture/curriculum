+++
title = 'The Four OOP Pillars - Inheritance & Polymorphism'

time = 120
objectives = [
    'Explain the difference between method overriding and overloading',
    'And write overridden and overloaded methods',
    'Explain Java decides which method implementation to run',
    'Explain what upcasting and downcasting are, and when they occur',
    'Explain how polymorphism enables flexible, reusable designs',
    'Inspect types using _instance of_'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Inheritance on its own is rarely the goal, polymorphism is.

Polymorphism allows you to:

- Treat different objects in a common way, e.g. based on their common inheritance.
- Write code that works with future extensions, for instance logging behaviour in classes that extend a base application logger class
- Write classes that do not need to know about those extensions, operating only on the base class

Once polymorphism is understood, many Java features that previously seemed complex start to feel natural and predictable.

## Self Study

_As you read through the resources below try to answer the following questions:_

- How can inheritance help you avoid repeating the same behaviour in multiple classes?
- What additional benefits does inheritance provide when it allows polymorphism? How does this affect the way objects are used in code?
- What problem does method overriding solve that method overloading does not?
- Why is frequent downcasting often a sign of a design problem

### Reading Materials

- [Baeldung - Inheritance](https://www.baeldung.com/java-inheritance)
- [Baeldung - Polymorphism](https://www.baeldung.com/java-polymorphism)
- [GeeksForGeeks - Upcasting Vs Downcasting in Java](https://www.geeksforgeeks.org/java/upcasting-vs-downcasting-in-java/)
- [Baeldung - Overloading vs Overriding](https://www.baeldung.com/java-method-overload-override)
- [Medium - Composition: Understanding Has-A vs. Is-A in Java](https://medium.com/@noble_frost_lion_664/composition-understanding-has-a-vs-is-a-in-java-1a1d8e2eab50)

### Video Materials

- [Java Polymorphism Fully Explained In 7 Minutes](https://www.youtube.com/watch?v=jhDUxynEQRI)
- [Programming with Mosh](https://www.youtube.com/watch?v=pTB0EiLXUC8)
  - Focus on the principles in the video rather than the javascript coding examples
- [Java OOP in 10 minutes](https://www.youtube.com/watch?v=CWYv7xlKydw)
  - May be useful to help solidify concepts with java examples


## Exercises

{{<note type="exercise" title="Exercise 3.1 - From Downcasting to Polymorphism">}}

Set up a classes for an animal show:

- Create a base class `Animal` with a name field and getter, include the name of the animal in your constructor
- Create Dog extends `Animal` with a method `bark()` that prints something using the name
- Create Cat extends `Animal` with a method `meow()` that prints something using the name
- Create an AnimalShow class with a method: `public void perform(Animal animal)`

Implement perform using instanceof and casting so that:

- If the animal is a `Dog`, it calls `bark()`
- If the animal is a `Cat`, it calls `meow()`
- Otherwise it prints a default message

Confirm this runs as expected for each of your animal types, then:

- Add a new animal type, e.g. Parrot extends `Animal` with method `squawk()`
- Call `show.perform(new Parrot("Polly"))`
- Observe the output - is the `squawk()` method called?

Refactor this design to use a single method on `Animal` that is overridden by all subclasses.

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why did the original instanceof and casting approach fail when you added a new animal type?
- What does this reveal about how scalable this design is?
- How did moving behaviour into the base `Animal` class change the design?
- Why did the perform method stop needing to know the concrete animal types?
- How does this refactor demonstrate the real value of polymorphism?
{{</note>}}

{{<note type="exercise" title="Exercise 3.2 - Overloading vs Overriding">}}

Starting with:

```java
class PaymentMethod {
    void pay(double amount) {
        System.out.println("Paying " + amount ");
    }
}
```

Overload the pay method:

- Add an overloaded `pay(double amount, String currency)`
- Implement the method to reference the currency when paying
- Instantiate a `PaymentMethod` class in your main method and call both methods of pay

Override the pay method:

- Create `DirectDebit` extending `PaymentMethod`
- Override `pay(double amount)`
- Instantiate a `DirectDebit` class and call both methods of pay

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How does Java choose between overloaded methods?
- How does Java choose an overridden method at runtime?
- Why can overloading sometimes be confusing or misleading when reading code?
- How does this exercise reinforce the difference between "same method name" and "same behaviour"?
{{</note>}}

{{<note type="exercise" title="Exercise 3.3 - Composition vs Inheritance">}}

Building on the last exercise, we now need to support a checkout process. A checkout must be able to take a payment using a payment method.

Tasks:

- Create a Checkout class.
- Decide how Checkout should relate to PaymentMethod. Should Checkout extend PaymentMethod, or should it contain a PaymentMethod?
- Implement the chosen relationship, if your Checkout class contains a PaymentMethod remember to instantiate it inside your constructor
- Add a method processPayment(double amount) in Checkout that uses the payment method to make a payment.
- In your main method:
- Create a PaymentMethod
- Create a Checkout
- Call your processPayment method
- Stretch task - implement a different extension of PaymentMethod, and add a method to Checkout that lets you update the PaymentMethod before making a payment

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why did you choose HAS-A (or IS-A) for the Checkout and PaymentMethod relationship?
- What reasoning helped you decide which relationship makes sense?
- How does your choice affect the design and functionality of the Checkout class?
- What would happen if you chose the wrong relationship?
- How do IS-A and HAS-A relationships help you think about code reuse and composition in real applications?
- Can you imagine other classes where this distinction is important?
{{</note>}}