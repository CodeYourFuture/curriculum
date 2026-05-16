# CYF Java course Sprint 1: Introduction to IDE, basic java concepts & debugging

## Prep

### Overview

Welcome to Sprint 1! In this sprint, you'll take your first steps into Java development. Since you already have experience with programming concepts from the CodeYourFuture curriculum, we'll focus on bridging your existing knowledge (mostly in JavaScript) with Java's syntax and tools. The goal of the sprint is to get you writing, running, and debugging Java applications quickly, without diving too deeply into computer science theory or Java Virtual Machine (JVM) internals.

By the end of this sprint, you'll be comfortable setting up a Java project in an IDE, running your first program, and understanding the basics of Java syntax and structure.

### Learning Objectives

- Import a Java project into an Integrated Development Environment (IDE) and run a Java application
- Explain what a main method is and why it's required
- Identify non-compiling code an IDE and use the IDE error analysis to explain common compilation errors
- Write basic Java logic using common coding concepts such as loops and conditionals
- Including using common Java keywords, primitive types, and syntax
- Write a method signature and explain each of the components that form it: visibility, name, parameters
- Import a project into an IDE and run it
- Use debugging tools in an IDE to troubleshoot code.

### Why Java and How It Differs from JavaScript

Before diving in, let's set the stage. Java and other programming languages such as JavaScript share some conceptual similarities-e.g. the use of loops, conditionals, and functions-but Java has its own syntax, type systems, and execution models. Java is a statically typed, compiled language, which means you'll encounter concepts like **compilation errors** and **method signatures** that don't exist in scripting languages like JavaScript. This sprint will help you make that mental shift.

### Section 1: Getting Started with the IDE and main methods

An IDE (Integrated Development Environment) is your main tool for Java development. It simplifies tasks like writing code, compiling, debugging, and managing dependencies.

Every Java application starts with a main method. Understanding its role and how methods are structured is key to writing functional programs. The main method is the entry point of every Java application.

#### Objectives

- Install and set up IntelliJ IDEA.
- Navigate the IDE interface: project explorer, editor, console, and debugger.
- Create a basic Java project and run a simple program.
- Explain the role of the main method in Java applications.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- You've probably used an IDE before when coding in other languages - what makes an IDE particularly useful when coding in Java?
- What is a Java main method for?
- What are some differences between how a program is run in Java vs other languages you've seen before?

##### Reading material

- <https://www.w3schools.com/java/java_intro.asp>
- <https://www.freecodecamp.org/news/compiled-versus-interpreted-languages/>
- [Getting started with IntelliJ IDEA](https://www.jetbrains.com/help/idea/getting-started.html)
- [Top 5 reasons you need an IDE](https://medium.com/@synergenttechsolution30/java-ides-top-5-reasons-you-need-an-ides-95426a0e6d5a)
- <https://www.baeldung.com/java-main-method>

#### Exercise 1.1

**Goal:** Get comfortable with IntelliJ and running Java code.

- Install IntelliJ IDEA and create a new Java project.
- Create a main method and add logic so that it prints: "Hello, Java!"
- You'll need to Google for how to print to the console in Java!
- Run the program from the IDE.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Share three useful Intellij keyboard shortcuts
- Getting familiar with keyboard shortcuts will save you lots of time and improve your flow when writing code - it's well worth taking the time to learn!
- If you rename your main method will it still run?
- What do the keywords public, static and void mean?

### Section 2: Java keywords and syntax

Java has strict syntax rules and reserved keywords that define its structure. Understanding these early will prevent common errors.

Compilation is the process of converting the Java code you write into a format that your computer can execute. Compile time is when Java checks your code for errors before running your program, which is different from languages like Python or JavaScript that check for errors while the program is actually running. This provides us with the significant benefit of being able to spot (some!) errors without running the code. It also means Java IDEs come with a set of powerful tools to aid development.

Java has two types of data type: primitive and reference. Without going into too much detail right now, primitive types are usually much faster for the computer to deal with and should be used in situations where performance is important. Moreover, the primitive types are the basic 'building blocks' of Java and all reference types are ultimately made up of primitive types. You can identify primitive types because they are always in lowercase, unlike reference types which are in UpperCamelCase. The primitive types are defined by the Java language itself and we cannot create any new ones ourselves or change any existing ones. We'll focus on the following primitive types for now:

- int
- long
- double
- boolean
- char

Java is a statically typed language, which means that variable types are known at compile time. As such, the type must be provided by the programmer when writing the code.

For example, if you are to define a string, you must explicitly state that the variable is of type string:

String myVariable = "hello world";

#### Objectives

- Identify Java reserved keywords in an IDE
- Explain and use common keywords like _public, private, static, void, for, if,_ and primitive types
- Declare variables and print them out to the console.
- Write a conditional statement
- Write a for loop and a switch statement
- Explain the trade-offs between switch statements and if/else statements

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What is a keyword in java?
- Choose 3 keywords and explain what they represent
- What is meant by the term 'primitive type'?

##### Reading material

- [Dynamic vs. static typing](https://docs.oracle.com/cd/E57471_01/bigData.100/extensions_bdd/src/cext_transform_typing.html)
- [Java keywords with explanations](https://www.w3schools.com/java/java_ref_keywords.asp)
- <https://www.baeldung.com/java-primitives>
- <https://www.baeldung.com/java-for-loop>
- <https://www.geeksforgeeks.org/java/decision-making-javaif-else-switch-break-continue-jump/>

#### Exercise 2.1

**Goal:** Practice basic syntax and keywords.

- Create a program that:
- Declares variables of different primitive types (int, double, boolean, char).
- Prints their values to the console.
- Add comments explaining what each keyword does (e.g., public, static, void).

#### Exercise 2.2

**Goal:** Identify and fix compilation errors.

- Remove a semicolon or misspell a keyword in your code.
- Observe the compilation error in IntelliJ.
- Fix the error and re-run the program

#### Exercise 2.2

**Goal:** Compare Java control flow with JavaScript.

- Write a program that:
- Uses a for loop to print numbers 1 to 10.
- Uses an if-else statement to check if a number is even or odd.
- **Bonus:** Rewrite the same logic in JavaScript and note the differences in syntax.

#### Exercise 2.3

- Write a program that uses a switch statement to print the name of the day based on an integer (1 = Monday, etc.).
- Explain why switch in Java differs from JavaScript (e.g. type safety).

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- List the primitive types you've seen and explain what they represent
- What is an enhanced for loop in Java? Would an enhanced for loop be useful for this exercise? Why? When would an enhanced for loop be useful?
- Did you encounter any compilation errors when writing your code? How did you fix them? Did the IDE help?

### Section 3: Method Signatures

Understanding method signatures is essential for ensuring the code is readable & maintainable. When writing code, we should expect that someone else will need to understand and adapt it - we work in teams, not in isolation. Therefore, it's important to write code that is clear and understandable.

It's important when writing Java code to document classes and methods so others understand the intended purpose of the code, this can been done with JavaDoc - have a read through how to format [different types of JavaDoc](https://www.baeldung.com/javadoc).

#### Objectives

- Write methods and explain the structure and components of method signatures.
- Write and run custom methods with parameters and return types.
- Document methods using JavaDoc

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What are the components of a method signature? Are any of them optional?
- What is Javadoc? Who is it for and why is it useful?

##### Reading material

- [Introduction to methods in java](https://www.baeldung.com/java-methods)
- [Method signatures in java](https://www.baeldung.com/java-main-method)
- [Writing java methods](https://www.w3schools.com/java/java_methods.asp)
- [Introduction to JavaDoc](https://www.baeldung.com/javadoc)

#### Exercise 3.1

**Goal:** Write a method signature which takes parameters.

- Create a private method called greetUser that:
- Accepts a String name as a parameter.
- Returns a greeting message like "Hello, Alice!".
- Call this method from a main method and print the result.
- Explain each part of the method signature for the _name_ method.

#### Exercise 3.2

- Create a method calculateSum that takes two integers and returns their sum.
- Add JavaDoc comments explaining the method.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why are private methods useful? Why not just have everything in the _main_ method?
- Javadoc should describe the _why_ not the _what_ of your code - why?

### Section 4: Debugging Java Code Using the IDE

Debugging is an essential skill for any developer. IntelliJ provides powerful tools to help you find and fix issues quickly. In your IDE, there are two ways to run a program:

- Run
- Debug

If you use the debug option, you will be able to set breakpoints at which the program will pause execution. When the program stops on a breakpoint, you can:

- View the value of all variables that are in scope
- View the current execution stack
- Evaluate a specific piece of code
- Step line-by-line through the code

When stepping through code, you can:

- Step over: steps over the next single line
- Step into: step into a method that is being invoked on the current line
- Run to cursor: continues execution until it reaches the cursor
- Evaluate: evaluates a selected portion of code. You can also write arbitrary code to evaluate.

#### Objectives

- Use debugging tools in the IDE to fix runtime issues
- Set breakpoints and inspect variables.
- Step through code execution to identify logic errors.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What are some Intellij shortcuts to help with debugging?
- How does debugging in Java compare to debugging you've seen in other languages?

##### Reading material

- [Introduction to debugging in java](https://www.w3schools.com/java/java_debugging.asp)
- [Debugging a java application with IntelliJ](https://www.jetbrains.com/help/idea/debugging-your-first-java-application.html)
- [Understanding compilation](https://www.baeldung.com/java-compiled-interpreted)

#### Exercise 4.1

**Goal:** Learn to use breakpoints and inspect variables.

- Write a program that calculates the sum of numbers from 1 to 100 and prints the result
- Introduce a bug (e.g., start the loop at -1 instead of 1).
- Use IntelliJ's debugger to:
- Set a breakpoint inside the loop.
- Inspect the value of the sum variable and the result variable, seeing how they change as you step through.
- Step through the code to find the error.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How might you have found the issue if you didn't have a debugger?
- What was the process you followed when debugging code? e.g. how did you decide where to put breakpoints?

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

### Sprint Challenge

Create private methods for each of the below, and call them from a main method. Remember to use sensible method and variable names, and add documentation where necessary!

- Write a program that prints all prime numbers up to 1000
- For a given input number, return the number in reverse. So, an input of 3956 should return 6593.

Remember to use the debugger if something goes wrong!

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!
- **Demo: Demo a main method and talk through each of the components that make up a method signature → this could be your solution to an exercise, or something completely new!**

# CYF Java Course Sprint 2: Intro to Object-Orientated Programming

## Prep

### Sprint Overview

Up till now your programs lived in a single class and followed a fairly linear flow. In Sprint 2, you'll learn about the relationship between classes and objects, and how we can use these to build systems that can be safely modified and extended.

Instead of thinking in terms of "what code runs next", you'll start thinking in terms of:

- What objects exist in the system?
- What responsibilities does each object have?
- How do objects interact safely and predictably?

By the end of this sprint you'll also have covered inheritance, polymorphism and some useful java key words.

### Learning Objective 1: Classes & Objects

#### Learning Objectives

- Explain what a class represents in Java
- Create object using constructors
- Use constructor overloading and constructor chaining to set particular fields on objects
- Explain how object references work when objects are assigned or passed around

#### Why This Matters

Classes and objects are the fundamental units of structure in Java. Every non-trivial Java program is a collaboration between objects.

Many early Java bugs come from misunderstandings about:

- How many objects actually exist
- Whether two variables refer to the same object
- When modifying one thing unexpectedly affects another
- One way of guarding against this is by using immutable objects, a concept we'll introduce later in the sprint

This section helps you build a correct mental model of object creation and identity, which becomes especially important when the objects are passed between services.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What is the difference between a class and an object in Java?

- Explain how they relate to each other, and why many objects can be created from the same class.

- What actually happens when you create an object using new and a constructor?

- Include what the constructor is responsible for, and why a class might have more than one constructor.

- When one object variable is assigned to another or passed into a method, what is being shared?

- Explain how references work, and why changing an object through one variable can affect another.

##### Reading Materials

- **Baeldung - Classes & Objects -** <https://www.baeldung.com/java-classes-objects>
- Focus on: fields, methods, constructors
- **Baeldung - Constructors -** <https://www.baeldung.com/java-constructors>
- Focus on: overloading and chaining
- **W3Schools - Constructors -** <https://www.w3schools.com/java/java_constructors.asp>
- An alternative resource for classes, objects and constructor material
- **Baeldung - Immutable Objects -** <https://www.baeldung.com/java-immutable-object>
- Focus on: how objects can be immutable, and the benefits of that immutability

##### Video Materials

- Coding with John - Constructors  
   <https://www.youtube.com/watch?v=pgBk8HC7jbU>

#### Exercises

##### Exercise 1.1 - Product Class

Create a Product class with:

- Fields: name, price, stockCount
- Getters and setters for each field
- A toString method that includes each of the fields
- Two constructors:

- Name and price only, defaulting stockCount to 0
- Name, price and stock

Create several products and print them, then modify your first constructor so that it takes advantage of constructor chaining.

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How did constructor overloading change the way Product objects could be created?
- What problem does constructor chaining with this() solve?
- When you created multiple Product objects, how did the constructor arguments affect the state of each object?

##### Exercise 1.2 - Reference Behaviour

Starting with the following in your main method:

Product p1 = **new** Product("Laptop", 900);

Product p2 = p1;

&nbsp;

p2.setPrice(1100);

&nbsp;

System.out.println(p1.getPrice());

System.out.println(p2.getPrice());

Tasks:

- Predict the output
- Run the code to verify
- Change how p2 is instantiated so that making changes to it does **not** affect p1

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why did changing p2 also change p1?
- What does this tell you about what p1 and p2 actually store?
- How did your fix prevent changes to p2 from affecting p1?
- What new object(s) existed after your change compared to before?
- How could this kind of reference behaviour cause bugs in a larger codebase if it's not well understood?

### Learning Objective 2: The Four OOP Pillars - Encapsulation & Abstraction

#### Learning Objectives

- Explain what encapsulation means and why protecting object state matters
- Explain what abstraction means and how it reduces system complexity
- Identify class responsibilities and object boundaries
- Explain why we use access modifiers to control visibility
- Explain why fields are usually private
- Design classes that expose a clear public API while hiding internal implementation

#### Why This Matters

The four pillars are descriptions of patterns that appear in well-designed systems. Understanding these principles gives you:

- A shared vocabulary for talking about design
- A way to reason about why code is structured the way it is
- A foundation for understanding interfaces, collections, and services later in the course

We're going to initially focus on two of these:

- **Encapsulation** protects domain models and services
- **Abstraction** underpins dependency injection and service boundaries

If these concepts feel abstract now, that's normal, their value becomes clearer as you apply them repeatedly in code.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, describe abstraction and encapsulation
- How might abstraction help if your current project became part of a larger system?
- What problems arise when object state can be modified freely from outside the class?
- How would private fields and the use of setters improve safety over public fields?
- What problems do encapsulation and abstraction help prevent in real programs?

##### Reading Materials

- **Baeldung - OOP Concepts -** <https://www.baeldung.com/java-oop>
- Focus on: abstraction and encapsulation
- Skip: advanced class types
- **GeeksforGeeks - OOP Concepts -** <https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/>
- Focus on: abstraction and encapsulation
- **Baeldung - Access Modifiers** <https://www.baeldung.com/java-access-modifiers>
- **Baeldung - Encapsulation & Information Hiding** <https://www.baeldung.com/java-information-hiding-vs-encapsulation>

#### Exercises

##### Exercise 2.1 - Fix the direct balance access using encapsulation

Starting with:

**class** BankAccount {

&nbsp; **public** **double** balance;

}

&nbsp;

**class** BankService {

&nbsp; **void** withdraw(BankAccount account, **double** amount) {

&nbsp; account.balance = account.balance - amount;

&nbsp; }

&nbsp;

&nbsp; **void** deposit(BankAccount account, **double** amount) {

&nbsp; account.balance = account.balance + amount;

&nbsp; }

}

&nbsp;

**public** **class** Main {

&nbsp; **public** **static** **void** main(String\[\] args) {

&nbsp; BankAccount account = **new** BankAccount();

&nbsp; account.balance = 100;

&nbsp;

&nbsp; BankService service = **new** BankService();

&nbsp; service.withdraw(account, 150);

&nbsp;

&nbsp; System.out.println("Balance: " + account.balance);

&nbsp; }

}

Tasks:

- Make balance private in BankAccount
- Add methods to BankAccount to allow for deposits, withdrawals and balance checks without direct field access
- Add validation to these methods:

- deposit amount must be > 0
- withdraw amount must be > 0
- balance must never go below 0

- Update BankService so it no longer accesses account.balance directly
- Update Main so it no longer reads/writes balance directly

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How did making balance private change how the system had to interact with BankAccount?
- Why is it better for BankAccount to manage its own deposits and withdrawals rather than BankService?
- How does this refactor make misuse of BankAccount harder or impossible?

##### Exercise 2.2 - Abstraction in Code

Start with this class, for a logging system:

**class** FileLogger {

&nbsp;

**private** **boolean** fileOpen = **false**;

&nbsp;

**public** **void** openFile() {

**if** (fileOpen) {

**throw** **new** IllegalStateException("File already open");

}

System.out.println("Opening log file...");

fileOpen = **true**;

}

&nbsp;

**public** **void** writeLine(String line) {

**if** (!fileOpen) {

**throw** **new** IllegalStateException("Cannot write - file not open");

}

System.out.println("LOG: " + line);

}

&nbsp;

**public** **void** closeFile() {

**if** (!fileOpen) {

**throw** **new** IllegalStateException("File already closed");

}

System.out.println("Closing log file...");

fileOpen = **false**;

}

}

In your main method, use FileLogger directly to log a message:

- Create a FileLogger instance
- Call openFile()
- Call writeLine() with a message
- Call closeFile()

Think about the following:

- Try calling writeLine() before openFile(), what happens and why?
- If this were a real logger implementation, what might happen if another developer forgets to call closeFile()?

Create a new class called ApplicationLogger, which will provide an abstraction over FileLogger:

- Create a single method in this logger which calls each method on FileLogger in the correct order
- Update main() to use ApplicationLogger instead of FileLogger directly, checking that logging still works

We now have a new requirement for the ApplicationLogger - the ability to log out \[INFO\] and \[ERROR\] level logs:

- Refactor the existing method you've created to prepend the logged message with \[INFO\] and call it logInfo
- Create a new method called logError which prepends \[ERROR\]
- Use these new methods in your main() method

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- What complexity does ApplicationLogger hide from other classes?
- How did the main method change when switching from FileLogger to ApplicationLogger?
- Why is the new version simpler to use correctly?
- What mistakes can other developers no longer make when using ApplicationLogger?
- Why is this important in large systems?
- If the system later logged to a database instead of a file, which class would you change?
- Why is it useful that main() does not know how logging works internally?
- How does this demonstrate abstraction reducing system complexity?

### Learning Objective 3: The Four OOP Pillars - Inheritance & Polymorphism

#### Learning Objectives

- Explain the difference between method overriding and overloading
- And write overridden and overloaded methods
- Explain Java decides which method implementation to run
- Explain what upcasting and downcasting are, and when they occur
- Explain how polymorphism enables flexible, reusable designs
- Inspect types using _instance of_

#### Why This Matters

Inheritance on its own is rarely the goal, polymorphism is.

Polymorphism allows you to:

- Treat different objects in a common way, e.g. based on their common inheritance.
- Write code that works with future extensions, for instance logging behaviour in classes that extend a base application logger class
- Write classes that do not need to know about those extensions, operating only on the base class

Once polymorphism is understood, many Java features that previously seemed complex start to feel natural and predictable.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- How can inheritance help you avoid repeating the same behaviour in multiple classes?
- What additional benefits does inheritance provide when it allows polymorphism? How does this affect the way objects are used in code?
- What problem does method overriding solve that method overloading does not?
- Why is frequent downcasting often a sign of a design problem

##### Video Materials

- Java Polymorphism Fully Explained In 7 Minutes - <https://www.youtube.com/watch?v=jhDUxynEQRI>
- Programming with Mosh - <https://www.youtube.com/watch?v=pTB0EiLXUC8>
- Focus on the principles in the video rather than the javascript coding examples
- Java OOP in 10 minutes - <https://www.youtube.com/watch?v=CWYv7xlKydw>
- May be useful to help solidify concepts with java examples

##### Reading Materials

- **Baeldung - Inheritance** <https://www.baeldung.com/java-inheritance>
- **Baeldung - Polymorphism** <https://www.baeldung.com/java-polymorphism>
- **GeeksForGeeks - Upcasting Vs Downcasting in Java** <https://www.geeksforgeeks.org/java/upcasting-vs-downcasting-in-java/>
- **Baeldung - Overloading vs Overriding** <https://www.baeldung.com/java-method-overload-override>
- **Medium - Composition: Understanding Has-A vs. Is-A in Java** - <https://medium.com/@noble_frost_lion_664/composition-understanding-has-a-vs-is-a-in-java-1a1d8e2eab50>

#### Exercises

##### Exercise 3.1 - From Downcasting to Polymorphism

Set up a classes for an animal show:

- Create a base class Animal with a name field and getter, include the name of the animal in your constructor
- Create Dog extends Animal with a method bark() that prints something using the name
- Create Cat extends Animal with a method meow() that prints something using the name
- Create an AnimalShow class with a method:

- public void perform(Animal animal)

Implement perform using instanceof and casting so that:

- If the animal is a Dog, it calls bark()
- If the animal is a Cat, it calls meow()
- Otherwise it prints a default message

Confirm this runs as expected for each of your animal types, then:

- Add a new animal type, e.g. Parrot extends Animal with method squawk()
- Call show.perform(new Parrot("Polly"))
- Observe the output - is the squawk()method called?

Refactor this design to use a single method on Animal that is overridden by all subclasses.

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why did the original instanceof and casting approach fail when you added a new animal type?
- What does this reveal about how scalable this design is?
- How did moving behaviour into the base Animal class change the design?
- Why did the perform method stop needing to know the concrete animal types?
- How does this refactor demonstrate the real value of polymorphism?

##### Exercise 3.2 - Overloading vs Overriding

Starting with:

**class** PaymentMethod {

&nbsp;

**void** pay(**double** amount) {

System.out.println("Paying " + amount ");

}

}

Overload the pay method:

- Add an overloaded pay(double amount, String currency)
- Implement the method to reference the currency when paying
- Instantiate a PaymentMethod class in your main method and call both methods of pay

Override the pay method:

- Create DirectDebit extending PaymentMethod
- Override pay(double amount)
- Instantiate a DirectDebit class and call both methods of pay

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How does Java choose between overloaded methods?
- How does Java choose an overridden method at runtime?
- Why can overloading sometimes be confusing or misleading when reading code?
- How does this exercise reinforce the difference between "same method name" and "same behaviour"?

##### Exercise 3.3 - Composition vs Inheritance

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

### Learning Objective 4: Packages, import, static & final

#### Learning Objectives

- Explain how Java packages organise code and communicate structure
- And demonstrate organising code into appropriate packages
- Explain how import works across packages
- Use an IDE to import classes
- Explain what it means for a member to belong to a **class** vs an **instance**
- Explain how static changes ownership and lifetime
- Write static fields and methods
- Explain how final communicates constraints and design guarantees
- Write final methods and classes

#### Why This Matters

As projects grow, structure becomes just as important as logic. Without clear organisation, even correct code becomes difficult to understand, change, and extend.

Packages help you:

- Group related concepts
- Separate responsibilities
- Communicate architectural intent to other developers

The static and final keywords let you express design decisions directly in code, rather than relying on comments or conventions.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- How do packages communicate structure and intent, beyond just avoiding name clashes?
- What does it mean for a field or method to belong to a class rather than an instance?
- Why can misuse of static be harmful to object-oriented design?
- How does the meaning of final differ when applied to fields, methods, and classes?

##### Reading Materials

- **Baeldung - Packages** <https://www.baeldung.com/java-packages>
- **Baeldung - Static** <https://www.baeldung.com/java-static>
- Don't worry about static code blocks or inner-classes at this point
- **Medium - Hazards of global state** <https://medium.com/@obemeuche/the-hazards-of-globalizing-dynamic-variables-in-java-a-code-centric-perspective-fafa625b0a4d>
- **Baeldung - Final** <https://www.baeldung.com/java-final>
- **Baeldung - Immutable objects** <https://www.baeldung.com/java-immutable-object>
- For applications of the final keyword to guard against unwanted side-effects

#### Exercises

##### Exercise 4.1 - Static Instance Counter

Tasks:

- Create a class: Create a new class named Planet
- Instance Field: Give the class a non-static (instance) field:

- private String name;
- Add a constructor that takes the name.

- Static Field (Shared State): Add a private static field to track the number of Planet objects created:

- private static int planetCount = 0;

- Modify the Constructor: In the Planet constructor, increment planetCount every time a new Planet object is created
- Static Method (Class Behaviour): Add a public static method to retrieve the count:

- public static int getPlanetCount() that returns planetCount
- What happens if you try to reference the instance's name field in this method?

- Test: In your main method (or a separate test file):

- Create three different Planet objects: earth, mars, jupiter
- Print the planetCount using only the class name (Planet.getPlanetCount())
- What happens when you print earth.getPlanetCount(), why is this confusing?

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why does planetCount have to be static, while name should not be?
- Why is it important that getPlanetCount() is static?
- What are some of the dangers of using global static variables?
- What would happen if planetCount were an instance field instead?

##### Exercise 4.2 - Final Safety

This exercise explores the three main uses of final: fields, methods, and classes.

**Final Fields**

- Create a class named Configuration in a package of your choice.
- Class Constant: Add a public static final field for a universally constant value:

- public static final int MAX_USERS = 100;

- Final Instance Field: Add a private final field:

- private final String systemName;
- Initialise it in the constructor.

- Test in main:

- Try to reassign Configuration.MAX_USERS = 200; and observe the compiler error.
- Create a Configuration instance. Try to reassign its systemName field (you'll need to create a setter for this) and observe the compiler error

**Final Methods and Classes**

Create a parent class:

- Create a class named Polygon in your package.
- Add a private final int field for numberOfSides.
- Create a constructor that does not include this field, what happens?
- Create a constructor that takes a numberOfSides parameter and initialises the field.
- Add a getter method getNumberOfSides() to return the value of numberOfSides.
- Add a **public final** method describe() that prints: 'I am a polygon with X sides' where X is the numberOfSides field
- Try to create a setter for numberOfSides. Can you compile it?

Create a subclass:

- Create a class named Triangle that extends Polygon.
- In the constructor, call the superclass constructor with 3 sides.
- Try to override the describe() method in Triangle. What error does the compiler give you?

Make the parent class final:

- Change the Polygon class declaration to:
- public final class Polygon
- Try to compile the Triangle class. What error do you get?

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why can MAX_USERS never be reassigned?
- Why can the systemName field not be reassigned, even via a setter?
- Why can't you add a setter for numberOfSides?
- How do final fields in Configuration and Polygon serve different purposes?
- Why might a designer choose to make a class final?

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

### Sprint Challenge: Task Management System

This challenge combines all the object-orientated programming concepts you've learned so far. You'll see how classes, encapsulation, inheritance, polymorphism, packages, and static/final keywords form a cohesive system for building well-structured Java applications.

#### Background

You are working for a company that wants to track different types of tasks in a project. Each task has a description, a unique identifier, and a completion status. Some tasks have special behaviour or additional data, such as deadlines or priority levels.

Your job is to create a small system that models tasks, enforces valid state, and allows tasks to be managed using polymorphism.

#### Requirements

Design a system that models tasks, manages them, and prints a simple summary of task states to the console.

##### Task Behaviour

All tasks should:

- Have a unique identifier
- Have a human-readable description
- Be able to be completed
- Prevent invalid states, e.g. cannot be completed twice

##### Specialised Task Types

The system must support at least two specialised task types. These types should:

- Inherit from the base Task class
- Add additional state or behaviour of their own
- Behave differently at runtime when treated as a generic Task

Some examples could be a timed task with a deadline, or priority task with prioritisation

##### Task Management

Create a TaskManager class responsible for:

- Storing tasks (using a fixed-size array, e.g. max 10 tasks)
- Adding new tasks
- Completing tasks by ID
- Returning tasks based on completion status
- The TaskManager should not need to know concrete task types

##### Code Organisation

Your code should be organised into multiple packages:

- tasks → contains Task and specialised task types
- management → contains TaskManager
- main → contains Main class with a main method to demonstrate behaviour

#### Acceptance Criteria

The system should:

- Log task summaries to the console in a human-readable format
- Show each task's ID, description, type, and completion status
- Demonstrate polymorphism at runtime (e.g., calling overridden methods on different task types without checking type)
- Prevent any task from entering an invalid state
- Compile and run without errors
- Use proper encapsulation (no public fields)
- Use final or static where appropriate

Main method expectations:

- Create a TaskManager
- Add several different task types
- Complete some tasks
- Print task summaries to the console

Developer Guidance (May just use for reference)

Let's start by modelling the data:

**Class Task**

- Fields:
- private final int id (unique)
- private String description
- private boolean completed
- Methods:
- public void complete() → mark as completed, prevent double-completion
- public String getStatus() → returns a human-readable status
- Consider using static for generating unique IDs

**Specialised Tasks**

- Create at least two subclasses (e.g., TimedTask, PriorityTask)
- Add additional fields (e.g., deadline, priority)
- Override methods to demonstrate polymorphic behaviour

**TaskManager**

- Fields:
- private Task\[\] tasks
- private int taskCount
- Methods:
- public void addTask(Task task)
- public void completeTask(int id)
- public Task\[\] getTasksByStatus(boolean completed)

**Main**

- Create a simple demo of your system, showing tasks being added, completed, and summaries printed

#### Reflection Questions

- Where did polymorphism remove the need for conditional logic?
- Which responsibilities are shared across all tasks, and which are specific?
- Where did encapsulation prevent misuse of an object?
- If a new task type were added, how much existing code would need to change?

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!

### Weekly Session Discussion Topics

Come prepared to discuss:

- What problems does object-orientated programming solve compared to writing procedural code?
- When is inheritance appropriate, and when is composition a better choice?
- How does polymorphism change the way you structure conditional logic?
- What does it mean for Java variables to hold references rather than objects themselves?
- Why is encapsulation important when designing classes with mutable state?
- When should you use static members, and what problems can they cause if overused?
- What guarantees does the final keyword give you, and when is it most useful?

# CYF Java Course Sprint 3: Automated Testing and Javadoc

## Prep

### Sprint Overview

This sprint builds on your foundational Java knowledge by introducing the baseline concepts around automated testing and documentation that are required for professional Java development. You'll learn how to make sure that the code you write is supportable and maintainable.

There are lots of resources for you to read and watch, with several options for covering the same material - you are not expected to consume everything, and instead experiment with the various resources to see which help you to learn most effectively. Different people will prefer different resources and we want to encourage you to find what works best for you!

### Learning Objective 1: Automated Testing

#### What you'll learn

How automated unit tests are developed, including the primary libraries for that. Why automated testing is important to the maintainability of a project and how it can be used in automated builds.

Also because the JUnit framework relies heavily on annotations we will look at what they are and how they are used.

**Why start here?**

Any software project of a reasonable size quickly gets past the point where manual testing of the functionality with each change is practical. Automated testing gives us reassurance that a project can be enhanced or refactored whilst avoiding regressions.

Adding well constructed tests for a method, showing the expected results from specific inputs can help clarify the intent of a method and also lead to confirmation that the method parameters are sensible (e.g. in name, type and order) for its goal.

#### Reading Materials

- Annotations - [geeks for geeks annotations in java](https://www.geeksforgeeks.org/java/annotations-in-java/), [dev.java](https://dev.java/learn/annotations/)
- Don't worry about how to create annotations
- The official JUnit 5 user guide, which describes how to write tests, how test lifecycle works, what annotations are available, etc. [JUnit 5 user guide](https://docs.junit.org/5.10.0/user-guide/index.html)
- Important Sections: 1.4, 2.1-2.7, 4.1, 4.2
- Articles summarising JUnit 5 basics: @Test, assertions, lifecycle, visibility rules; [Junit 5 basics](https://nipafx.dev/junit-5-basics/), [baeldung junit-5](https://www.baeldung.com/junit-5), [vogella JUnit](https://www.vogella.com/tutorials/JUnit/article.html)
- Maven surefire plugin (reference for how tests are run during a build) [documentation](https://maven.apache.org/surefire/maven-surefire-plugin/index.html)
- simple project example [example](https://www.javaguides.net/2018/06/maven-surefire-plugin.html)

#### Video Materials

- Beginner-friendly tutorials on creating and running your first JUnit 5 tests
- [Creating and running a test](https://www.jetbrains.com/guide/java/tutorials/writing-junit5-tests/creating-and-running-a-test/) (IntelliJ)
- [JUnit 5 Crash Course](https://www.youtube.com/watch?v=6uSnF6IuWIw) (first ~25mins)
- More advanced use of JUnit (up to ~30mins when it starts on Mockito) - [Mastering Java Testing](https://www.youtube.com/watch?v=Pmxh-sObDKg)

#### Key Concepts

- Annotations can be used to provide meta-data about a class, method, field or other program-element in Java.
- Annotations are often used by frameworks to provide runtime behaviour, e.g. identify methods which represent tests, identify methods to be used for set-up.
- Explain the use of common core annotations; Override, Deprecated.
- A test as the unit where we confirm a specific set of results from an interaction with a class.
- JUnit provides a standard test class lifecycle that allows common set up to be shared between test cases.
- Assertions are the mechanism by which we verify the results of our interactions are the ones we expect. There are a wide variety of assertion capabilities built-in to JUnit.
- Tests can be run in an IDE or in a build system (e.g. Maven)

#### Exercise 1.1 - Calculator test

Given this class and fill out some sensible tests in the skeleton

**package** com.example;

&nbsp;

**public** **class** Calculator {

**public** **int** add(**int** a, **int** b) {

**return** a + b;

}

&nbsp;

**public** **int** subtract(**int** a, **int** b) {

**return** a - b;

}

&nbsp;

**public** **int** multiply(**int** a, **int** b) {

**return** a \* b;

}

&nbsp;

**public** **int** divide(**int** a, **int** b) {

**if** (b == 0) {

**throw** **new** IllegalArgumentException("Division by zero");

}

**return** a / b;

}

}

Code block 1 Calculator.java

**package** com.example;

&nbsp;

**import** org.junit.jupiter.api.BeforeEach;

**import** org.junit.jupiter.api.Test;

**import** **static** org.junit.jupiter.api.Assertions.\*;

&nbsp;

**class** CalculatorTest {

&nbsp;

@BeforeEach

**void** setUp() {

}

&nbsp;

@Test

**void** testAdd() {

}

&nbsp;

@Test

**void** testDivide() {

}

&nbsp;

@Test

**void** testDivideByZeroThrows() {

}

}

Code block 2 TestCalculator.java

#### Exercise 1.2 - Extend Calculator

Write some tests for these methods to be added to the calculator class;

- int square(int a)
- double squareRoot(int a)

consider;

- what should happen if squareRoot is requested for a negative number?
- how would we check the answer for squareRoot(3) ? (think accuracy required)

#### Exercise 1.3 - String Utilities

Write some tests for this class and then complete the implementation.

**public** **class** StringUtilities {

**public** **boolean** isPalindrome(String s) { ... }

**public** List&lt;String&gt; splitCommaSeparatedLine(String s) { ... }

}

Code block 3 StringUtilities

Did writing the test cases upfront help you focus on the behaviour you needed to implement? Did you manage to think of edge cases that should be covered? Conversely, what can be a downside (e.g. what tends to happen) if you write tests for a pre-existing implementation?

##### Stretch Goal - parameterised tests

Can you write a test-case for the isPalindrome method that uses @ParameterizedTest and @MethodSource or @CsvSource to provide parameters to the test? Can you change so that there is a clearer description associated with each test based on the inputs and expectations?

#### Exercise 1.4 - Maven Project

Create a Maven Project with JUnit 5 dependencies

Add the Calculator and StringUtilities classes as well as their tests. Note that source and test classes should be in separate folders (src/main/java, src/test/java). What do you notice if they are all in src/main/java?

Build the project (mvn clean test) and see that the tests run. Amend one of the implementations so that a test will fail and re-build the project.

#### Questions

When this class test is run, what is the output?

**public** **class** ExampleTest {

@BeforeEach

**public** **void** setup() {

System.out.println("setting up test data");

...

}

&nbsp;

&nbsp;@Test

**public** **void** testExample1() {

System.out.println("running test case 1");

...

}

&nbsp;@AfterAll

**public** **void** closeConnections() {

System.out.println("closing connections");

...

}

&nbsp;

@BeforeAll

**public** **void** createConnections() {

System.out.println("creating connections");

...

}

}

Code block 4 StringUtilities

A) setting up test data, creating connections, running test case 1, closing connections

B) setting up test data, running test case 1, closing connections, creating connections

C) creating connections, setting up test data, running test case 1, closing connections

D) creating connections, setting up test data, closing connections, running test case 1

If we introduce a new @Test annotated method testExample2 and run the test class how many times do we expect the following messages to appear;

- setting up test data
- running test case 1
- closing connections
- creating connections

#### Reflection on key concepts in automated testing

- Explain why tests should be independent of each other. What benefit does this bring?
- Explain the difference between a test-case, a test class and a test suite. Why might we use test suites?
- Explain the Junit test lifecycle
- particularly how we can use this to re-use state or reset state between tests and why this is useful from a maintainability and performance perspective.
- Are there situations where a test case might not have any assertions?
- What might a test without assertions miss and how could it be improved?

### Learning Objective 2: Javadoc

#### What you'll learn

How to write useful javadoc, how it is structured and why it is important.

**Why start here?**

Most classes and methods are used by people other than the original developer. Providing a concise description of what a class / method is for and how to use it ensures that the correct expectations are set and that the developer is not surprised by any results/behaviours.

#### Reading Materials

- Wikipedia - [Javadoc](https://en.wikipedia.org/wiki/Javadoc)
- Oracle tool and specification - [overview](https://docs.oracle.com/en/java/javase/17/javadoc/javadoc.html) [javadoc spec](https://docs.oracle.com/en/java/javase/25/docs/specs/javadoc/doc-comment-spec.html)
- example style guide - [javadoc-tool](https://www.oracle.com/uk/technical-resources/articles/java/javadoc-tool.html)
- Examples;
- [Java Util](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/package-summary.html)
- [Apache Commons Lang](https://commons.apache.org/proper/commons-lang/apidocs/index.html)

#### Video Materials

- Javadoc explainer - [youtube](https://www.youtube.com/watch?v=GM3P5vAOjx8)
- Javadoc in IntelliJ - [youtube](https://www.youtube.com/watch?v=9jtSXcp7u6g)

#### Key Concepts

- Good javadoc is more than comments on the implementation
- Javadoc should depend on context;
- frameworks should illustrate how code is written to run using them
- libraries should illustrate how they are to be used
- Links can be to other parts of the code or to external materials e.g. for more complete explanations.
- Javadoc on tests is as important as on the source;
- useful javadoc will help provide context around edge cases and unusual assertions of behaviour

#### Learning Objectives

- Be able to write javadoc for a type and its methods.
- Be able to use the IDE to generate the skeleton javadoc for a type or method.
- Be able to use tags in javadoc to appropriately describe inputs, outputs and exceptions for a method.
- Explain the use of specific javadoc tags; @deprecated, @since, @see
- how do these provide meaning relating to the history and future intention for APIs?
- Explain the main java program elements that can have javadoc

#### Exercises

In these exercises focus on;

- usage of the core syntax elements; @param, @return, @throws, @see, @link
- what a user of the service needs to know
- example usage, particularly any edge cases
- what tests are showing you about specific methods and their behaviours, in particular any edge cases that may need more explanation.

##### Exercise 2.1 - Calculator

Given the Calculator from exercise 1.1 and 1.2 write javadoc for the source classes and methods and for the test class and test methods.

Are there any cases where @see might be useful? think about how certain methods might relate to each other, e.g. inverse operations.

##### Exercise 2.2 - StringUtilities

Given the StringUtilities from exercise 1.3 write javadoc for the source classes and methods and for the test class and test methods.

## Backlog

**There is no sprint challenge this sprint, so all exercises should be submitted in a PR for review.**

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!

### Weekly Session Discussion Topics

Come prepared to discuss:

- What is automated testing? what types of automated test are there and how do they differ?
- What JUnit is for? What is a suite? When would you use a parameterised test?
- What are annotations, what annotations are used by JUnit? What are their purpose?
- On what program elements will we find javadoc?
- Why would we use javadoc from an external framework or library?

### What's Next?

After completing this sprint, you should understand:

- ✅ How to write effective tests for your code that support your ability to verify and change the code.
- ✅ How to document your code for others and for your future self

# CYF Java course Sprint 4: Intermediate Java Concepts

## Sprint Overview

This sprint builds on your foundational Java knowledge by introducing key concepts that you'll encounter in professional Java development. You'll learn about interfaces, working with different data structures, handling errors gracefully, and writing more expressive code with streams and optionals.

## Prep

### Topic 1: Interfaces

#### Learning Objectives

- Explain what an interface is, key features of interfaces and how they differ to classes
- Explain why interfaces are useful, the problems they solve and when to use them
- Write an interface with multiple implementations and call the different implementations in a polymorphic way

**Why start here?** Interfaces are fundamental to understanding Java's design philosophy. Understanding what they are and when to use them will help future topics make sense.

#### Self Study

_As you read through the resources below try to answer the following questions:_

- Can you summarise in a sentence or two what an interface is in Java? How do they compare to the classes you've seen so far?
- How is an interface different from a class? What are the key features of each? Think about how an interface relates to a class and compare to how a class relates to an instance of that class.
- Why do interfaces exist? What key problems do they solve? Think about: coupling, polymorphism, testing

##### Reading Materials

- This Medium article provides some motivation for why interfaces exist in Java and the problems they solve. It's really useful to understand the _why_ before learning the _how._ Note the article does use some quite abstract language, so don't worry if it doesn't all click right away; the aim here is just to give a bit of context before we jump in to the technical details.
- <https://piyu108.medium.com/the-importance-of-interfaces-in-java-a-comprehensive-guide-5d6d2e014cd5>
- [**Baeldung - Interfaces in Java**](https://www.baeldung.com/java-interfaces) - Focus on the examples that show how to create an interface in Java
- [W3Schools Java Interface](https://www.w3schools.com/java/java_interface.asp) - Have a look at the code snippets for more examples of basic interfaces
- [GeeksforGeeks - Interfaces in Java](https://www.geeksforgeeks.org/interfaces-in-java/) - Read the summary of when to use classes vs interfaces, and have a look at the diagrams to see the relationship between classes and interfaces

#### Exercise 1.1

Imagine you are designing a system for a bank to send monthly statements to customers. Some customers prefer to receive physical letters in the post, whereas others prefer to receive emails.

- Create a StatementSender interface with a method #sendStatement that accepts a String parameter statementContent
- What should the return type of this method be?
- What is the visibility of interface methods? Why?
- Make sure to write Javadoc on both the class and method
- Why is this Javadoc important? Think about who we are aiming this javadoc at (i.e. who will read it / benefit from it)
- Create implementations LetterStatementSender and EmailStatementSender
- The implementations of #sendStatement should simply print to the console a success method to say that the statement has been sent via the given delivery method (in reality these methods would likely call out to some additional processing or third party email/postal service, but we don't need to do that here)
- Now create a class StatementDeliveryService with a method #deliverStatement(String statementContent, StatementSender statementSender)
- This method should send the content using the sender
- Now create a main method that:
- Creates a new StatementDeliveryService and sends a statement via both letter and email

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Look at the example you just created. Why was it useful to use an interface? How would it look if we had only used classes - can you think of any problems that might cause?
- How will the use of interfaces make the code more maintainable in future? What if we decide we also want the option to send statements via text message?
- How does using an interface enforce the contract that it sets out? Again think about writing a new text message implementation.
- Similarly, what if we decide in future that physical letters are no longer supported; which code do we need to update?
- Think about how you would test StatementDeliveryService. In practice you wouldn't want to send an actual email or a letter every time you ran the test, so how could the StatementSender interface help here? (NB our expectation here is for a testing-implementation as they won't have covered mocking yet

#### Exercise 1.2

- Create a Statement interface and add a new #sendStatement method to StatementSender that accepts the new interface
- What is it called when you have two versions of the same method?
- What methods might Statement have? Think about the type of information you'd expect to see on a bank statement.
- Create two implementations of Statement:
- AllTransactionsMonthlyStatement
- As the name suggests, includes all transactions, both ingoing and outgoing for the current month
- OutgoingTransactionsMonthlyStatement
- Only includes the outgoing transactions for the current month
- How should the implementation behaviour differ?
- Create a new class StatementService that:
- Has methods to create and send both types of statements
- Uses StatementDeliveryService to send the statements
- Note we'll need a new method on StatementDeliveryService that accepts a Statement
- Refactor your main method to use StatementService
- You're now starting to build up a hierarchy of classes and interfaces. Have a look back through the reflection questions about and apply them to your refactored system - are the answers the same? Are interfaces even more important now? Imagine we increased the complexity even further by adding more services and functionality - do interfaces become more or less important?

### Topic 2: Data Structures

#### Learning Objectives

- Compare and contrast common data structures in Java: Maps, Sets and Lists, explaining their similarities and differences in terms of ordering, duplicates, memory allocation and data retrieval mechanism
- And to discuss in Big-O terms, the time complexity of basic insert / update / remove operations on common collections
- Given a scenario involving data, to choose the most appropriate data structure based on the above characteristics
- Instantiate different implementations of Maps, Lists and Arrays
- Use generics to enforce what can and can't be contained within Collections

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What are some real life examples of when a Map, List and Set should be used to store data?

- As an example: which would be best for a) Storing the names of varieties of fruit sold by a greengrocer, b) A register of students first names in a school class, c) The names of the students and the grades they achieved
- Can you think of another example for when to use a Map, List and Set?
- What are the properties of Maps, Lists, Sets that make each suitable for different types of data? Think about ordering, duplicates and key/values here.
- And how do they compare in terms of time complexity when inserting / removing / updating items? Use Big-O notation here.

- Is it possible to instantiate a Map / List / Set directly? If not, why not?

- How does this relate to interfaces? Where does the Collections interface fit in?
- What are the most common implementations? Can you find a Set implementation that has a different ordering property to normal?

- What is the #equals method and how does it differ to == ?

- How do Sets and Maps make use of the equals method?
- What is the relationship between #equals and #hashcode?
- Why can't we always just use == ?
- What happens in the following cases: a) x == foo, b) x.equals(foo), c) foo.equals(x) ? (where in each case x is a null variable and foo is a non-null variable)

- Why bother with Collections at all, can't we just use Arrays? What advantages do these pre-built data structures provide?
- Bonus: Is it possible to create Collections of primitive types? Why?

##### Reading Materials

- Collections
- [GeeksforGeeks - Collections Framework](https://www.geeksforgeeks.org/collections-in-java-2/)
- Read the motivation for why Collections are useful (remember, we always want to start with _why_!)
- Look at the sections on the main interfaces and implementations, and look at the class diagrams to see how they relate to one another
- **Just focus on Sets, Lists, Maps for now; ignore queues and concurrency.**
- <https://www.geeksforgeeks.org/advance-java/generics-with-collections/>
- We aren't focussed too much on generics at this stage, but a very basic understanding is needed to work with Collections, so focus mainly on how to enforce what types can be contained within a collection
  - - - e.g. how do I create a List of Strings? What about a Set of Animals? Or a List of Sets of integers?!
- Ignore the section on generic methods
- <https://www.baeldung.com/java-collections-complexity>
- Worth reading the whole article to see how different types of Collection compare, and try to understand _why_ the time complexity is what it is so that you can reason it yourself from first principles if necessary
- Don't worry about memorising all of the Big-O time complexity for every collection though, use this table instead:
  - - - <https://stackoverflow.com/questions/559839/big-o-summary-for-java-collections-framework-implementations>
- Equals and hashCode
- <https://stackify.com/equality-in-java-operators-methods-and-what-to-use-when/>
- This provides a good explanation and example as to why the equals method exists and how it differs to ==
- <https://codegym.cc/groups/posts/java-hashcode>
- Introduction and overview of what a hashcode is
- <https://medium.com/@alan.camalionte/why-use-hashcode-in-java-5f927879554a>
- Provides an explanation of why #hashCode exists and how it relates to #equals
- There is some mention here of 'buckets' and other details of how HashSet and HashMap implementations work → if you are interested you can research in more detail but it is not required learning at this stage, though it may provide a good discussion topic in a workshop!
- Data structures
- Show how to construct and modify each data structure → these will be useful to read when completing the exercises below
- <https://www.geeksforgeeks.org/java/list-interface-java-examples/>
- [Baeldung - Guide to Java HashSet](https://www.baeldung.com/java-hashset)
- [Baeldung - Guide to Java HashMap](https://www.baeldung.com/java-hashmap)

#### Exercise 2.1

You are given three arrays containing data relating to students and their grades: _firstNames_, _lastNames_ and _grades_. Each student is represented by the same index in each array, so firstNames\[i\] has the surname lastNames\[i\] and grade grades\[i\]. Create a class (with an appropriate name) that takes the three arrays as constructor parameters and has the following methods to collect the data into more sensible structures (note you will need to choose the appropriate return type!):

- getFirstNames(String\[\] firstNames, String\[\] lastNames, int\[\] grades)
- getDistinctFirstNames(String\[\] firstNames, String\[\] lastNames, int\[\] grades)
- getDistinctFirstNamesInAlphabeticalOrder(String\[\] firstNames, String\[\] lastNames, int\[\] grades) → Hint: no for loops needed; consider an appropriate collection implementation
- getLastNameToGrade(String\[\] firstNames, String\[\] lastNames, int\[\] grades) (Note you can assume there are no duplicate last names)

Create a main method that calls each method above and prints the output to the console. The data to use should be:

- firstNames = {Anuket, Eryn, Filip, Raquel, Eryn}
- lastNames = {Hassan, Doe, Pappas, Clarke, Jones}
- grades = {22, 45, 35, 22, 41}

##### Reflection

_Suppose there are a set of twins in the class, so there are some duplicate lastNames. Can we still build a map of students to their grades?_

#### Exercise 2.2

- Create a Student class with fields firstName and lastName
- Implement the following method: Map&lt;Student, Integer&gt; getStudentToGrade
- What methods do you need to define on Student for this map to work safely?
- Update the data set to include the twins and print the result of getStudentToGrade to the console

#### Exercise 2.3

- Now let's ditch the arrays completely and work only with collections: in your main method, call each of the methods you've already created and assign the results to new variables. This will be our starting data.
- Suppose a new student joins the class. Modify each of the collections you've created to include the new student and their grade
- Now suppose a student leaves the class. Modify each of the collections to remove that student.
- Now suppose that one of the students was found to have cheated in their exam and their grade needs to be modified. Update the collections to set the grade of one of the students to 0.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Would it have been possible to use Arrays to model the same data?
- Would it have been easier, harder or the same? Why?
- What was your thought process when deciding which data structure was most appropriate for modelling particular data? What things did you consider?
- Suppose the initial data set was input incorrectly and the same student's name and grade was input twice. How would your Map&lt;Student, Grade&gt; handle this? Why?
- What is the difference between variables: a) List firstNames, b) List&lt;String&gt; firstNames, c) ArrayList&lt;String&gt; firstNames ? Which is preferable? Bonus: how about List&lt;?&gt; firstNames ?

#### Exercise 2.4

- Given the same data as above, without using for loops, find:

- The highest and lowest grades
- The first and last names of the student with the highest grade
- Any firstNames that belong to more than one student

### Topic 3: Exceptions

#### Learning Objectives

- Explain the difference between checked and unchecked exceptions in Java
- Explain why we have checked and unchecked exceptions
- Give examples of when to use checked and unchecked exceptions
- Handle potential nulls in Java code
- Write code using try/catch/finally and try-with-resources blocks
- Explain how exception handling is used to avoid resource leaks

#### Self Study

_As you read through the resources below try to answer the following questions:_

- How do Java exceptions compare to non-Java exceptions that you've seen before? Think about Javascript / HTTP errors etc - do they serve the same purpose?
- Why does Java have checked and unchecked exceptions? What are the features of each? Think of an example of when you'd use each
- What is the hierarchy of exceptions in Java?
- What are the options for handling checked exceptions? What are the Java keywords involved?
- What is a null pointer exception?
- What is the Closable interface and why do we need it? What are the options for closing closable resources?

#### Reading Materials

- Both of these pages provide a solid overview of exceptions in Java; read at least one of them:
- <https://www.geeksforgeeks.org/java/exceptions-in-java/>
- <https://medium.com/@ShantKhayalian/mastering-java-exception-handling-a-comprehensive-guide-for-developers-c31cef921d75>
- Checked vs unchecked exceptions:
- <https://www.baeldung.com/java-checked-unchecked-exceptions>
- And a summary on why the two types exist
- <https://docs.oracle.com/javase/tutorial/essential/exceptions/runtime.html>
- Explanation of nulls and null pointer exceptions
- <https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it>

#### Checked vs Unchecked Exceptions Quiz

Complete the short quiz here to check your understanding of checked vs unchecked exceptions:

<https://www.geeksforgeeks.org/java/java-checked-vs-unchecked-exceptions/#:~:text=Examples%3A%20NullPointerException%2C%20ArrayIndexOutOfBoundsException.-,Suggested%20Quiz,-3%20Questions>

#### Exercise 3.1.1

_Create a service that safely reads text files_

- Create a FileReaderService class with a method #readFile(String filename) that:
- Attempts to read a file using BufferedReader
- Returns the file contents as a String
- Properly handles FileNotFoundException and IOException
- Uses try/finally to ensure the file is closed
- Safely handles the possibility of fileName being null
- Create a custom checked exception called InvalidFileFormatException
- Throw this if the file is empty
- From a main method, call the service with some dummy text files, including an empty file

#### Exercise 3.1.2

- Refactor your above method to use try-with-resources instead of try/finally

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Why are FileNotFoundException and IOException checked rather than unchecked exceptions? What advantages does this give developers and systems that use them?
- In this example we had control over which strings we passed to the method, so in theory we could make sure they wouldn't ever be null. When writing production code do we have this same level of control?
- When is it beneficial to include null checks, and when isn't it?
- How does try-with-resources relate to a try/finally block? Think about flexibility / clean code etc
- If an exception is thrown, does a finally block get executed before or after the catch block? How could you prove this?
- What about if the catch block throws an unchecked exception? Does the finally block still execute?

#### Exercise 3.2

- Should try/catch blocks be used as part of 'standard' processing? e.g. say I have a payment processing system that accepts cash or card, and I first attempt to process a card payment, before throwing an error and processing cash if no card details are found:

**void** processPayment(Payment payment) {

**try** {

cardProcessor.process(payment);

} **catch**(NoCardDetailsFoundException e) {

cashProcessor.process(payment);

}

}

- Will this work correctly? If we know some payments will definitely be made by cash, is there a better way to handle this? Why?
- What are some potential problems with throwing errors like this? Think about: when we want to find out about errors / unnecessary processing etc
- Update the above pseudocode to remove the try/catch block and handle the card/cash options more gracefully. Feel free to invent some methods on Payment to help you!

### Topic 4: Streams and Optionals

#### Learning Objectives

- Use basic stream operations like filter, map, collect to perform operations on collections
- Use Java Optional to handle potentially missing objects, for example by providing a default value, or by continuing only if a value is present
- And compare the tradeoffs between using Optionals and handling nulls explicitly → especially noting that Optionals can themselves be null..!
- Use Lambdas and method references in stream operations
- Use comparators to sort objects
- Explain an example of java stream processing in terms of initialisation, intermediate and terminal operations.
- Explain what lazy evaluation is and how streams use lazy evaluation for efficiency.
- And contrast this with JS maps / filters etc - what are the key differences in how they are evaluated?
- Explain what is meant by a programming paradigm, what paradigm is associated with most of the Java you've seen so far, and which is associated with streams and optionals

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What are the main advantages of using Streams over for loops? Are there any cases where using a Stream may be worse? Think about: readability / performance / maintainability
- What are the main ways to open a stream? Think about collections and arrays
- How are streams evaluated under the covers? i.e. are they executed line by line? \]
- What are intermediate and terminal operations?
- How does the way Java streams are evaluated compare to JS map, filter etc?
- What are the tradeoffs in terms of performance, memory etc?
- How do Java streams tie into interfaces? i.e. when streaming a set/list where is the #stream method defined?
- What about Maps, can they be streamed? How?
- How does using an Optional to handle 'missing' values compare to explicitly checking for nulls? Can you think of any advantages / disadvantages to using Optionals?
- Can an Optional itself be null (i.e. Optional&lt;String&gt; myOptionalString = null)? What problems does this bring? How does this impact your answer above
- In general it is not recommended to use Optionals as parameters in (especially public) methods - why?

#### Reading Materials

- Lambdas and method references → just scan through to learn what each is and the syntax
- <https://medium.com/@Zimmendra/understanding-java-lambda-expressions-and-method-references-f59ce7f0c2b0>
- Good introduction to streams and examples of key methods → you don't need to memorise each method, just use this to learn what streams are, when they are useful and to get a feel for the sorts of operations you can perform
- <https://www.geeksforgeeks.org/java/stream-in-java/>
- Introduction to optionals → again, use this to learn what they are, why they are used and don't worry _too_ much about the specific method names (that's what your IDE is for!), but definitely do understand what you'd want to use an optional for
- <https://www.geeksforgeeks.org/java/java-8-optional-class/>
- Comparison of Optionals vs null handling
- <https://medium.com/javarevisited/null-check-vs-optional-are-they-same-c361d15fade3>
- An introduction to programming paradigms - you don't need to memorise everything here, but having some familiarity with the imperative, declarative and functional paradigms, and being able to recognise examples of each will be useful
- <https://www.freecodecamp.org/news/an-introduction-to-programming-paradigms/>

#### Exercises

Alfa Streams and Lambdas exercises - TODO when we move this to git: need the superclass and the imports, as well as the source for NameFinder, ShapeCounter, Remainders..

/\*\*

\* =======================

\* Streams

\* =======================

\* &lt;p&gt;

\* Time to venture into the world of functional programming and try using some Streams.

\* &lt;p&gt;

\* Let's go... Have a go at solving the following exercises first using loops, and then convert them to use streams. As you work through, think about how the two approaches compare in terms of readability, how easy the code would be to adapt in future (as we know in enterprise software, code never stays the same forever as new requirements and bugs are worked on!), and compare the trade-offs in efficiency.

&nbsp;\*/

**public** **class** TestStreamsExercise **extends** ExerciseTest {

&nbsp;

/\*\*

\* For this first exercise, we will implement the {@link NameFinder#printNamesStartingWithA(Collection)}

\* method. It should take a collection of names and \*use a stream\* to find the names that start

\* with the letter 'A' and print them. It should not be case-sensitive, so both "Anne" and "andy"

\* would be printed.

\* &lt;p&gt;

\* This test will check your method's output.

\*/

@Test

**public** **void** testPrintNamesStartingWithA() {

List&lt;String&gt; names = Lists.newArrayList("Antony", "John", "amy", "Ben", "Dan", "Ian", "Andrew", "Peter", "Oliver");

**new** NameFinder().printNamesStartingWithA(names);

checkPrintedOutput(format("Antony%namy%nAndrew%n"));

}

&nbsp;

&nbsp;

/\*\*

\* Now let's try something a bit more complicated. We need to implement the method

\* {@link NameFinder#vowelNamesCapitalisedDescending(Collection)} so that it will take

\* our list of names, find the ones that start with a vowel, capitalise them (in case the first

\* letter isn't already capitalised) and then return them in a list in reverse-alphabetical

\* order.

\* &lt;p&gt;

\* Got all that? Give it a go and the test below will check your result.

\*/

@Test

**public** **void** testVowelNamesCapitalisedDescending() {

List&lt;String&gt; names = Lists.newArrayList("Antony", "John", "amy", "Ben", "Dan", "Ian", "Andrew", "Peter", "Oliver");

List&lt;String&gt; expectedResult = Lists.newArrayList("Oliver", "Ian", "Antony", "Andrew", "Amy");

assertEquals("Names should be as expected", expectedResult, **new** NameFinder().vowelNamesCapitalisedDescending(names));

}

&nbsp;

&nbsp;

/\*\*

\* Here's a problem involving a Map. Let's see if we can solve it using a stream.

\* &lt;p&gt;

\* The method {@link ShapeCounter#countShapesWithSides(Map, int)} should take a map of shapes to

\* their number of sides and a number of sides and will tell us how many shapes in the map have

\* that many sides.

\* &lt;p&gt;

\* Use the test below to check your method is working.

\*/

@Test

**public** **void** testStreamingMapEntries() {

Map&lt;String, Integer&gt; shapesToSides = **new** HashMap<>();

shapesToSides.put("Right-Angled Triangle", 3);

shapesToSides.put("Isosceles Triangle", 3);

shapesToSides.put("Square", 4);

shapesToSides.put("Rhombus", 4);

shapesToSides.put("Parallelogram", 4);

shapesToSides.put("Hexagon", 6);

shapesToSides.put("Octagon", 8);

&nbsp;

ShapeCounter shapeCounter = **new** ShapeCounter();

assertEquals("Should be two 3-sided shapes", 2, shapeCounter.countShapesWithSides(shapesToSides, 3));

assertEquals("Should be three 4-sided shapes", 3, shapeCounter.countShapesWithSides(shapesToSides, 4));

}

&nbsp;

&nbsp;

/\*\*

\* Maths time again. For this test we will need to implement the method

\* {@link Remainders#printRemainders(int)} to print the remainders of the numbers

\* 1-20 when divided by a given divisor. The remainders should all be on one line

\* and should be separated by commas. There should be a line break at the end.

\* &lt;p&gt;

\* For example, for a divisor of 2 it would go:

\* &lt;pre&gt;

\* 1,0,1,0 ... and so on until we have 20 numbers

\* &lt;/pre&gt;

\*/

@Test

**public** **void** testPrintingRemainders() {

Remainders remainders = **new** Remainders();

remainders.printRemainders(2);

remainders.printRemainders(5);

checkPrintedOutput(format("1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0%n1,2,3,4,0,1,2,3,4,0,1,2,3,4,0,1,2,3,4,0%n"));

}

&nbsp;

&nbsp;

/\*\*

\* Time to use one of the more 'interesting' terminal operations. In this exercise,

\* you'll need to use {@code .groupingBy()}.

\* &lt;p&gt;

\* To pass this test, implement the {@link Remainders#remainderGroups(int)} method

\* to return a {@code Map&lt;Integer, List<Integer&gt;>} with an entry for each different

\* remainder. The key should be the remainder itself and the value should be a list

\* of all the numbers between 1 and 20 that have that remainder.

\*/

@Test

**public** **void** testGroupingRemainders() {

Remainders remainders = **new** Remainders();

&nbsp;

Map&lt;Integer, List<Integer&gt;> expectedRemaindersFor5 = **new** HashMap<>();

expectedRemaindersFor5.put(0, List.of(5, 10, 15, 20));

expectedRemaindersFor5.put(1, List.of(1, 6, 11, 16));

expectedRemaindersFor5.put(2, List.of(2, 7, 12, 17));

expectedRemaindersFor5.put(3, List.of(3, 8, 13, 18));

expectedRemaindersFor5.put(4, List.of(4, 9, 14, 19));

assertEquals("Remainder groups for 5 should be correct", expectedRemaindersFor5, remainders.remainderGroups(5));

&nbsp;

Map&lt;Integer, List<Integer&gt;> expectedRemaindersFor8 = **new** HashMap<>();

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

&nbsp;

&nbsp;

/\*\*

\* What if we wanted to know 'how many times does each remainder appear?'. We'd need to get a map

\* with an entry for each remainder where the value tells us the count as a Long.

\* &lt;p&gt;

\* That's exactly what the method {@link Remainders#remainderCounts(int)} should do. Let's

\* implement it to give us the count for each remainder for a given divisor.

\*/

@Test

**public** **void** testCountingRemainders() {

Remainders remainders = **new** Remainders();

&nbsp;

Map&lt;Integer, Long&gt; expectedRemaindersFor5 = **new** HashMap<>();

expectedRemaindersFor5.put(0, 4L);

expectedRemaindersFor5.put(1, 4L);

expectedRemaindersFor5.put(2, 4L);

expectedRemaindersFor5.put(3, 4L);

expectedRemaindersFor5.put(4, 4L);

assertEquals("Remainder counts for 5 should be correct", expectedRemaindersFor5, remainders.remainderCounts(5));

&nbsp;

Map&lt;Integer, Long&gt; expectedRemaindersFor8 = **new** HashMap<>();

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

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- In general, do you find streams more or less readable than loops? Think about trivial vs more complex data manipulation
- How about when writing code; do you find it easier to write using streams or loops?
- Are there any hard and fast rules about when and when not to use streams? What are some trade-offs to consider when deciding?
- Can you think of an example of when using an Optional would be useful? How about an example of when using an Optional may actually make things worse?
- Do you need to memorise all the available stream operations? What is a useful tool to find out which methods are available?

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

### Sprint Challenge: Rental Summary Generator

**Bringing everything together:** This challenge combines all the concepts you've learned. You'll see how interfaces, collections, exceptions, comparisons, and streams form a cohesive system for building real applications.

#### Background

You are working for a company who design software for managing car leases. When a customer leases a car they pay a set rental amount each month for a given term of 1 or 3 years. Each rental is made up of capital (a portion of what the car is actually worth) and interest (what the customer pays the lease company to be allowed to lease the car, i.e. the cost of leasing the car).

The software keeps track of the above information and uses it to track payments, send invoices, generate statements and much more.

#### Requirements

##### Overview

- Design a system that generates the monthly rentals for a given lease contract and prints a rental summary.

##### Rental Calculations

- For a 1 year contract:
- 12 rentals total
- Monthly capital is the total cost of the vehicle / 12
- Monthly interest is the 2% of cost of the vehicle / 12
- For a 3 year contract:
- 36 rentals total
- Monthly capital is the total cost of the vehicle / 36
- Monthly interest is the 3% of cost of the vehicle / 36
- A rental is considered paid if it's due date is on or before the current date

##### Acceptance Criteria

- The system should log the rental summary to the console, printed in a human readable format.
- The summary information should contain:
- The customer's name and age
- The dates of the contract i.e. start and end date
- All rentals, sorted by due date
- The next due rental
- The total amount of capital and interest on the contract
- The number of remaining outstanding rentals
- If the contract is complete, i.e. the current date is after the final rental due due, then no summary should be printed. Instead the console should print a message to say the contract is completed.
- Passing unit tests for key classes

##### Developer Guidance

- Let's start with how we'll represent the data. Create the following:
- Class Contract, with fields
- String customerName
- String customerAge
- LocalDate startDate
- double carPrice
- int contractLengthYears
  - - - And validation to check it's either 1 or 3 years → perhaps there is a better type than int that could be used here?
        - Is this the best place to add this validation? Where else could it go instead? If we do add it here would we need additional validation in our services too?
          - What are the trade-offs? Note there isn't really a right answer here, and the best place depends on the requirements of the system:

e.g. There are many different types of contract, leases, loans etc and out system may support them all in some way. Do _all_ contracts have to be 1 or 3 years, or just the type that we are creating the rental generator for?

- Class Rental, with fields:
- LocalDate dueDate
- double capitalAmount
- double interestAmount
- boolean paid
- Class RentalSummary, with fields containing the information required according to the acceptance criteria, including the field List&lt;Rental&gt; rentals.
- Now think about how we'll process the data. Create the following
- interface RentalCalculator ,
- With methods:
  - - - List&lt;Rental&gt; generateRentals(Contract contract);
- And implementations
  - - - OneYearContractRentalGenerator
        - ThreeYearContractRentalGenerator
- And finally how we'll generate the rental summary data. Create the following:
- Class RentalSummaryService with methods:
- private Optional&lt;RentalSummary&gt; generateRentalSummary(Contract contract)
- void printRentalSummary(Contract contract)
  - - - Calls generateRentalSummary and prints the result to the console
- Do we need validation to check the contract length here? The answer depends on whether you've added it in your Contract initialisation code or not!
- It also needs to find the other information needed to fully populate the RentalSummary instance it returns
- Then let's create a main method to test what we've done:

**public** **static** **void** main(String\[\] args) {

&nbsp;

&nbsp; Contract oneYearContract = **new** Contract("John Smith", 25, **new** LocalDate(2025, 8, 12), 1, 10000);

&nbsp; Contract twoYearContract = **new** Contract("Michael Jones", 56, **new** LocalDate(2025, 12, 12), 2, 20000);

&nbsp; Contract threeYearContract = **new** Contract("Jane Doe", 77, **new** LocalDate(2024, 4, 1), 3, 50000);

&nbsp;Contract completedContract = **new** Contract("Rosie Parker", 47, **new** LocalDate(2021, 7, 10), 3, 40000);

&nbsp;

&nbsp; RentalSummaryService rentalSummaryService = **new** RentalSummaryService();

&nbsp; rentalSummaryService.printRentalSummary(oneYearContract);

&nbsp; rentalSummaryService.printRentalSummary(twoYearContract); // Should throw a suitable error

&nbsp; rentalSummaryService.printRentalSummary(threeYearContract);

&nbsp;rentalSummaryService.printRentalSummary(completedContract); // Should print a message to say the contract is complete

}

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- How did interfaces help you swap out implementations (e.g. different RentalCalculators)?
- Why did you choose specific collection types (List vs Set vs Map)?
- Where did exceptions help you handle errors gracefully?
- How did you decide where to implement the validation for the contract length? What are the trade-offs you considered? In particular think about callers of your methods; can you guarantee anything about the parameters passed down from other places in the system?
- How did streams make your data processing more readable than loops?
- How did Optionals help you avoid NullPointerException?
- Do you think the classes and interfaces we've used here provide the best way of modelling this information? Can you think of any improvements? Think about readability / complexity / maintenance etc
- When developing production-ready software, multiple developers often work on the same code. If someone else came across your code and needed to make a change (e.g. to add support for 2-year contracts), do you think they would find it easy? I.e. is your code readable, well-documented, open for extension etc?
- If you didn't have access to Collections, streams or interfaces would this development have been easier or harder? Where would the challenges lie?

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!

# CYF Java Course Sprint 5: Logging / Debugging and Further Automated Testing

## Sprint Overview

This sprint builds on your foundational Java knowledge by introducing key concepts around logging and debugging that are required for professional Java development. You'll learn how to make sure that the code you write is supportable and maintainable. The sprint also introduces more advanced topics for automated testing.

## Prep

### Learning Objective 1: Logging

#### What you'll learn

How logging is used in production systems and how this differs from use of the console for temporary debugging. The SLF4J and logback frameworks will be used.

**Why start here?**

Software applications in production need to provide ongoing signals as to what they are doing and whether they are operating in a healthy state. Effective logging can also provide an insight into problems that occur and can therefore assist with knowing where to start when debugging.

#### Reading Materials

- SLF4J Framework documentation - [slf4j manual](https://www.slf4j.org/manual.html)
- Logback documentation - [logback manual](https://logback.qos.ch/manual/introduction.html)
- Chapters 1-4
- Baledung logging
- [baeldung java-logging-intro](https://www.baeldung.com/java-logging-intro) - sections 1, 2, 4, 5
- [mapped diagnostic context in logging (MDC)](https://www.baeldung.com/mdc-in-log4j-2-logback) - sections 1, 2, 5-7
- OWASP cheatsheet - [OWASP logging principles](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- useful up to section "Network architecture"

#### Video Materials

- SLF4J usage - [SLF4J](https://www.youtube.com/watch?v=JahvBA-PQFM)

#### Key Concepts

- Logging is the root for system observability, not debug messages.
- Logging provides traceability in a complex system of loosely-coupled services, e.g. via common identifiers transferred across service boundaries.
- Logging can provide auditing and security, but care needs to be taken around sensitive information (e.g. passwords, private customer data)
- Logging should be lightweight and lazily-evaluated whenever possible.
- So that logging does not interfere with the performance of the system.
- Log levels allow us to control the actual logging output from the system at a later point via configuration.
- The order of increasing seriousness is TRACE, DEBUG, INFO, WARN, ERROR.
- INFO level logging is typical for a production system.
- TRACE and DEBUG should be expected only to be used when dealing with an incident or temporarily gathering diagnostics or verifying behaviour.
- Log levels should be used careful to add value and not overwhelm the system operators with noise.
- ERROR applies to unexpected cases only, not e.g. validation of user inputs. A production system should run without generating any ERRORs, we would expect any that do occur to be investigated.
- DEBUG level logging should be specific about the current state and what is being processed.
- Mapped Diagnostic Context (MDC) can be used to elaborate your logging in a cross-cutting fashion.
- This is especially helpful in linking multiple layers of processing together for a single item in a multi-threaded system.

#### Exercise 1.1 - Example logging application

Set up a simple project using slf4j using the following pom and class:

<**project** xmlns="<http://maven.apache.org/POM/4.0.0>" xmlns:xsi="<http://www.w3.org/2001/XMLSchema-instance>" xsi:schemaLocation="<http://maven.apache.org/POM/4.0.0> <http://maven.apache.org/xsd/maven-4.0.0.xsd">>

<**modelVersion**\>4.0.0</**modelVersion**\>

<**groupId**\>com.myname</**groupId**\>

<**artifactId**\>logging-example</**artifactId**\>

<**name**\>Example project with logging</**name**\>

<**version**\>1.0.0</**version**\>

<**dependencies**\>

<**dependency**\>

<**groupId**\>org.slf4j</**groupId**\>

<**artifactId**\>slf4j-api</**artifactId**\>

<**version**\>2.0.17</**version**\>

</**dependency**\>

<**dependency**\>

<**groupId**\>ch.qos.logback</**groupId**\>

<**artifactId**\>logback-classic</**artifactId**\>

<**version**\>1.5.32</**version**\>

</**dependency**\>

</**dependencies**\>

</**project**\>

Code block 5 project pom.xml

**import** org.slf4j.Logger;

**import** org.slf4j.LoggerFactory;

&nbsp;

**public** **class** LoggingDemo {

**private** **static** **final** Logger log = LoggerFactory.getLogger(LoggingDemo.**class**);

&nbsp;

**public** **static** **void** main(String\[\] args) {

log.info("Application starting...");

log.debug("This is a debug message that you should NOT see yet.");

log.warn("Low disk space!");

log.error("Something went wrong.", **new** RuntimeException("Test error"));

}

}

Code block 6 LoggingDemo

Change the log level in the configuration and observe what happens.

Add a loop to the process and log from within the loop every 10th iteration.

#### Exercise 1.2 - Example with Mapped Diagnostic Context (MDC)

Create a project using SLF4J and logback (see exercise 1.1) with the following configuration and main class

<**configuration**\>

&lt;!-- Add MDC values to log lines --&gt;

<**property** name="PATTERN" value="%d{yyyy-MM-dd HH:mm:ss} \[%thread\] %-5level \[%X{requestId}\] %logger{36} - %msg%n"/>

&nbsp;

<**appender** name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">

<**file**\>logs/app.log</**file**\>

&nbsp;

<**rollingPolicy** class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">

<**fileNamePattern**\>logs/app-%d{yyyy-MM-dd}.gz</**fileNamePattern**\>

<**maxHistory**\>7</**maxHistory**\>

</**rollingPolicy**\>

&nbsp;

<**encoder**\>

<**pattern**\>\${PATTERN}</**pattern**\>

</**encoder**\>

</**appender**\>

&nbsp;

<**root** level="info">

<**appender**\-ref ref="FILE"/>

</**root**\>

</**configuration**\>

Code block 7 logback.xml

**import** org.slf4j.Logger;

**import** org.slf4j.LoggerFactory;

**import** org.slf4j.MDC;

&nbsp;

**import** java.util.UUID;

&nbsp;

**public** **class** RequestProcessor {

**private** **static** **final** Logger log = LoggerFactory.getLogger(RequestProcessor.**class**);

&nbsp;

**public** **static** **void** main(String\[\] args) {

**for** (**int** i = 1; i <= 3; i++) {

simulateRequest(i);

}

}

&nbsp;

**private** **static** **void** simulateRequest(**int** n) {

String requestId = UUID.randomUUID().toString();

MDC.put("requestId", requestId);

&nbsp;

log.info("Processing request {}", n);

&nbsp;

**try** {

**if** (n == 2) **throw** **new** IllegalArgumentException("Bad input!");

} **catch** (Exception e) {

log.error("Error while processing", e);

} **finally** {

MDC.clear();

}

}

}

Code block 8 RequestProcessor

Run the application and observe the logging.

Amend the class to call some other method in the processing (e.g. to provide some calculation based on the input) and add some debug logging to that. Amend the configuration so that the logging is observed when you run the application. See that the context is retained.

#### Questions

##### 1. Logging Listener

Consider the following code;

**public** **void** listenerLoop() {

**while** (keepRunning) {

logger.atInfo().log("Listener polling...");

WorkItem workItem = queue.poll();

**if** (workItem == **null**) {

sleepForOneSecond();

} **else** {

process(workItem);

}

}

}

Code block 9 Logging Question 1

What concerns would you have about the logging? how could it be improved (e.g. by additional information, changing behaviour)?

##### 2\. Logging Child Processor

Consider the following code;

**public** process(WorkItem workItem) {

**int** childCount = 0;

**for** (ChildItem child : workItem.getChildren()) {

**if** (logger.isDebugEnabled()) {

logger.debug("Processing child {}", childCount++);

}

**if** (childProcess(child)) {

logger.info("Processed child {}", childCount);

} **else** {

logger.warn("Failed to process child {}", childCount);

&nbsp; }

}

}

Code block 10 Logging Question 1

If logging is at info level and the work item has 2 children which are each processed successfully what will be the output;

A) Processing child 0, Processed child 0, Processing child 1, Processed child 1, Processing child 2, Processed child 2

B) Processing child 1, Processed child 1, Processing child 2, Processed child 2, Processing child 3, Processed child 3

C) Processed child 0, Processed child 1, Processed child 2

D) Processed child 0, Processed child 0, Processed child 0

If the processing is repeated with logging at debug level what is the output?

What does this difference tell us about a problem in the way we are logging? What alternative approaches can you think of?

### Learning Objective 2: Debugging

#### Overview

Debugging a java application effectively is a core skill needed during both development and support of an application. You will learn how to step through, into and over code, evaluating expressions and observing variables/state.

**Learning Objectives**

- Explain the basic functions of the debugger;
- breakpoints
- movement through the code using; step into, step over, step out, run to cursor
- evaluation of variables, watches

**Why start here?**

As you develop and refactor software applications things will go wrong and you will need to find the cause.

#### Reading Materials

The main principles are common across all implementations but there will be some IDE specific material

- IntelliJ debugging [IntelliJ debugging-code](https://www.jetbrains.com/help/idea/debugging-code.html)
- advanced - [IntelliJ debugging tricks](https://www.baeldung.com/intellij-debugging-tricks), [stream debugging](https://www.baeldung.com/intellij-debugging-java-streams)
- VS Code debugging [VS Code java-debugging](https://code.visualstudio.com/docs/java/java-debugging) or [baeldung eclipse debugging](https://www.baeldung.com/eclipse-debugging)
- Eclipse debugging [Eclipse debugging your programs](https://help.eclipse.org/latest/index.jsp?topic=%2Forg.eclipse.jdt.doc.user%2FgettingStarted%2Fqs-13.htm&cp%3D1_1_0_11)
- Stacktraces [twilio how-to-read-and-understand-a-java-stacktrace](https://www.twilio.com/en-us/blog/developers/tutorials/building-blocks/how-to-read-and-understand-a-java-stacktrace)

#### Video Materials

- IntelliJ debugger - [youtube](https://youtu.be/V5iQ1FyRtBo?si=eA3YB2VcU7pLBdTi)
- VS Code - [youtube](https://www.youtube.com/watch?v=R1F5ihQKL4U)
- Eclipse - [youtube](https://www.youtube.com/watch?v=aqcJsKdjjvU)
- Stacktraces - [youtube-1](https://www.youtube.com/watch?v=1KusP1VeW6g), [youtube-2](https://www.youtube.com/watch?v=PFSJlZgNJXM)

#### Key Concepts

- The debugger allows you to step through code in a manner similar to a video-player might allow you to skip between chapters, move forward in steps and pause.
- Variables can be inspected and expressions evaluated during debugging to give insight into the processing and execution paths that will be followed.
- Breakpoints can be applied in advanced ways to enable; conditional-stopping, stopping on exceptions, tracking field-access
- The debugger can be used without specific breakpoints to suspend processing and inspect where current execution is at (e.g. for long-running processes or bugs in loops)
- Stacktraces can be used to track the way an application has executed to reach its current point (e.g. where an exception is thrown) and can be used to locate the root cause or where to set breakpoints to investigate further.

#### Exercise 2.1 - Faulty Calculator

Using the debugger set a breakpoint, step through the loop and inspect variables to determine the source of the error and correct it;

**import** java.util.Arrays;

**import** java.util.List;

&nbsp;

**public** **class** FaultyCalculator {

&nbsp;

**public** **static** **void** main(String\[\] args) {

List&lt;Integer&gt; values = Arrays.asList(10, 20, 30, 40);

&nbsp;

**double** average = calculateAverage(values);

System.out.println("Average = " + average); // Expected: 25

}

&nbsp;

**public** **static** **double** calculateAverage(List&lt;Integer&gt; numbers) {

**int** sum = 0;

**for** (**int** i = 1; i < numbers.size(); i++) {

Integer currentNumber = numbers.get(i);

&nbsp; sum += currentNumber;

}

&nbsp;

**return** (**double**) sum / numbers.size();

}

}

Code block 11 FaultyCalculator

Suppose that there wasn't an intermediate variable currentNumber, what could you do in the debugger instead? hint - experiment with "evaluate" functionality.

#### Exercise 2.2 - Order Processing failure

Run the code below and observe the failure.

Using the debugger set a breakpoint after the construction of the Order, observe the state in the Order object constructed. Debug again but stop the code in the constructor for Order and the inspect variables to determine the source of the error. Correct the error and observe the "process" completing with the output "Customer name: ALICE".

**public** **class** OrderProcessor {

&nbsp;

**public** **static** **void** main(String\[\] args) {

Order order = **new** Order(123);

process(order);

}

&nbsp;

**public** **static** **void** process(Order order) {

System.out.println("Customer name: " + order.customer.name.toUpperCase());

}

}

&nbsp;

**class** Order {

**int** id;

Customer customer;

&nbsp;

**public** Order(**int** id) {

**this**.id = id;

Customer customer = **new** Customer("Alice");

}

}

&nbsp;

**class** Customer {

String name;

&nbsp;

**public** Customer(String name) {

**this**.name = name;

}

}

Code block 12 OrderProcessor

### Learning Objective 3: Testing Libraries, Parameterisation and Testing Layers

#### Overview

This is a deeper dive into common industry terminology and testing techniques that will help you write better tests.

#### Learning Objectives

- Explain why mocks are useful, giving examples of the type of objects that are mocked
- Be able to use mocks to provide simple responses in a test
- Be able to use mocks to provide complex responses in a test (i.e. based on the input received)
- Be able to verify that mocks have been used in the expected manner during a test (i.e. asserting expected interactions with external resources)
- Be able to convert unit tests into a parameterised test
- Explain some benefits of test parameterisation
- Explain some of the mechanisms that can be used to provide parameters for a test
- Explain what implicit and explicit conversion for test parameters is. Give an example of implicit conversion.
- Be able to use additional libraries when testing a project.
- Explain why using assertAll or fluent assertions is beneficial in a test in comparison to multiple separate assertions.
- Explain the difference between test layers, often referred to as unit, assembly and integration tests.
- Explain why we would want different numbers of tests in each layer (relative to each other) e.g. thinking about the cost associated with adding, running and maintaining the tests.
- Explain what is meant by Test Driven Development (TDD).

**Why start here?**

In larger software applications you will have some services with many dependencies and you need to understand how to write effective isolated tests using mocks as well as the common terminology used. Most software organisations use Test Driven Development, or something closely aligned to it, as part of their software development process and therefore understanding the principles and terminology can be essential to progressing your work.

Mocks make it easy for a test to focus on the processing of a specific service without needing to rely on lots of other services too. For example, by mocking the dependencies used to provide access to external resources (databases, external web services, storage) we can provide tests which are faster, simpler and clearer about what they are assuming and what they are checking.

#### Reading Materials

- Mockito documentation - [mockito-core - latest](https://javadoc.io/doc/org.mockito/mockito-core/latest/org.mockito/org/mockito/Mockito.html#1) (#1 to #33)
- Baeldung [Mockito Series](https://www.baeldung.com/mockito-series) - follow basics
- JUnit5 assertAll - [assert all vs multiple assertions](https://www.baeldung.com/junit5-assertall-vs-multiple-assertions)
- AssertJ - [documentation](https://assertj.github.io/doc/#assertj-overview) (1, 2.1, 2.5-2.8)
- Parameterised tests - [JUnit](https://docs.junit.org/5.10.0/user-guide/#writing-tests-parameterized-tests), [Baeldung](https://www.baeldung.com/parameterized-tests-junit-5)
- Test doubles (terminology around mocks) - [Test Double](https://martinfowler.com/bliki/TestDouble.html)
- Test layers - [Martin Fowler test-pyramid](https://martinfowler.com/articles/practical-test-pyramid.html), [google beyond the test pyramid](https://testing.googleblog.com/2024/10/smurf-beyond-test-pyramid.html)
- <https://martinfowler.com/bliki/UnitTest.html>
- <https://martinfowler.com/bliki/IntegrationTest.html>
- Test Driven Development - <https://martinfowler.com/bliki/TestDrivenDevelopment.html>

#### Video Materials

- Junit + Mockito (composite - lots of chapters) - [youtube](https://www.youtube.com/watch?v=0ZtU3X9n6tI)
- parameterised tests - [youtube-1](https://www.youtube.com/watch?v=31FhEpKANOQ), [youtube-2](https://www.youtube.com/watch?v=7rz9VLGOVhk)
- Dave Farley (modern software engineering channel) - [test types](https://www.youtube.com/watch?v=gnrBqLbj1_Q), [test driven development](https://www.youtube.com/watch?v=llaUBH5oayw), [red-green refactoring process](https://www.youtube.com/watch?v=fx-Ne_s71iY)
- Automated testing, testability and test-driven development (discussion) - [youtube](https://www.youtube.com/watch?v=JDi3MSUd3zs)

#### Key Concepts

- There is a rich and meaningful terminology around various types of test double; mock, stub, spy, fake
- Mocking provides a way of simplifying test setup, keeping tests fast and creating separation between components when testing
- Frameworks are available to provide powerful mocking techniques
- Frameworks are available to provide additional assertion patterns and capabilities
- Test layers are used to describe the scope of the test and what real resources (rather than test doubles) it utilises

#### Exercise 3.1 - Mocking a Dependency

Given the PriceService below write a test using Mockito.

- Provide a fixed exchange rate regardless of what is requested
- Add a method convertToGbp and amend the mock to provide different exchange rates for EUR->GBP and EUR->USD

**public** **class** PriceService {

**private** **final** ExchangeRateClient client;

&nbsp;

PriceService(ExchangeRateClient client) {

**this**.client = client;

}

&nbsp;

**public** **double** convertTo(**double** eurPrice, String targetCurrency) {

**return** eurPrice \* client.getRate("EUR", targetCurrency);

}

}

&nbsp;

**public** **interface** ExchangeRateClient {

**double** getRate(String from, String to);

}

Code block 13 PriceService

#### Exercise 3.2 - Capturing arguments

Given the NotificationService below write a test that;

- Calls sendWelcome("<test@example.com>")
- Uses ArgumentCaptor to capture the subject and body
- Asserts with AssertJ the subject and the partial content of the email (e.g. using isEqualTo and contains)

**public** **class** NotificationService {

**private** **final** EmailClient email;

&nbsp;

NotificationService(EmailClient email) {

**this**.email = email;

}

&nbsp;

**public** **void** sendWelcome(String address) {

email.send(address, "Welcome!", "Hello there");

}

}

&nbsp;

**public** **interface** EmailClient {

**void** send(String to, String subject, String body);

}

Code block 14 NotificationService

#### Exercise 3.3 - Asserting exceptions

Make the NotificationService throw an IllegalStateException if the address does not contain an "@".

Write a test using AssertJ to verify that sendWelcome("badaddress.com") throws an exception, checking the type and the content of the message.

#### Exercise 3.4 - Parameterising tests

Take the tests written under PriceService and parameterise them so that each currency is called from a single test method

Take the tests written under NotificationService and parameterise them so that two methods are used to verify behaviours; one for a variety of valid addresses and another for invalid addresses.

In each case provide a suitable name for the test case that includes the parameter value.

Consider how the test methods for NotificationService could be further consolidated into a single method and the benefits and drawbacks of that.

#### Questions

With the following test what will the output be;

@ParameterizedTest

@CsvSource({"JANUARY, true", "JANUARY, false", "FEBRUARY, true", "FEBRUARY, false", "MARCH, true"})

**void** months_AreAtLeast29DaysLongCsv(Month month, **boolean** isALeapYear) {

assertTrue(month.length(isALeapYear) >= 29);

}

Code block 15 NotificationService

A) The code won't work as we have strings but need Month and boolean

B) The code won't work because we can't provide multiple parameters for each run

C) The code runs and fails for the 3rd input ("FEBRUARY, false")

D) The code runs and each case passes

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

### Sprint Challenge: Testing the Customer Management System

#### Bringing It All Together

Given the customer management system built in sprint 4 build unit tests for the major services and behaviours.

#### Requirements

Provide tests and javadoc for all the public methods of the following service implementations;

- EmailMessageSender
- SmsMessageSender
- CustomerService
- OrderService
- ReportingService
- InMemoryCustomerRepository
- InMemoryOrderRepository

Provide javadoc for all the implementations above and for the following interfaces;

- CustomerRepository
- OrderRepository
- MessageSender

Add logging to your system so that;

- an identifier is assigned and recorded consistently in the logs for all parts of the order process
- you can see when an order is being placed and the final status
- debug level information is recorded when the order total is calculated
- the message sender confirms the message is sent

#### Submission Checklist

- \[ \] All services are tested
- \[ \] All public methods for a given service are tested
- \[ \] Javadoc is complete, concise and correct
- \[ \] Tests are well-named named and concise
- \[ \] Test code is to the same standards as source code
- \[ \] Logging is provided and configured so that the output can be seen in a file or at the console.
- \[ \] Code is well-organized and readable
- \[ \] All tests pass

**Success criteria:**

- Tests are quick to run
- Tests are independent
- Tests are well-formatted and appropriately describe what they are testing
- Tests use constants/final variables appropriately
- Javadoc is concise but also thorough and descriptive
- There are no missing javadoc tags or malformed content
- Logging is used with meaningful, well-formatted messages at appropriate log-levels
- Logging is not too noisy
- Test-doubles are used for dependencies
- Assertions are clear and meaningful - amendments to the source code cause failures which are easy to understand
- Ordering of output lists is verified when functionally important and ignored when not
- Invalid inputs / exception conditions are tested for
- Parameterised tests are used to minimise code
- Tests all pass consistently as part of the project build cycle

**Reflection Questions**

After completing the challenge, consider;

- How could your code be made more testable?
- Was the API clear and usable?
- Were class responsibilities clear?
- Were exceptions clear and used well?
- Was it easy to describe the intent and behaviours of the classes / methods?
- What test-double approaches did you use and what situations did you find each type helpful?
- Did you always use test single units? Are there situations where some multi-unit tests be helpful?

### Tips for Success

- **Don't rush**: These concepts build on each other. Make sure you understand each before moving on.
- **Compare to JavaScript**: When learning new Java concepts, think about JavaScript equivalents:

- JUnit and Mockito is similar to javascript testing frameworks like Jest or Mocha
- Debug breakpoints and variable inspection in your IDE are similar to use of e.g. DevTools in a browser (Chrome)
- Logging in javascript tends to be limited to the console and ephemeral, whereas java applications often use frameworks to manage persistent storage of logs.
- Javadoc is similar to JSDoc in javascript with a lot of common syntax, but richer in tags and structure.

- **See the connections:** Notice how everything fits together:

- Javadoc allows us to understand how code written by others should be used and express the requirements or intent for our own code.
- Tests provide certainty of intended behaviour as new features are added and code is refactored. Tests should confirm the behaviour stated by the javadoc.
- Even complex services with multiple dependencies involved in processing can be tested by considered use of mocks
- Logging provides observability of a system when it is running.
- Logging and stacktraces can support debugging by giving evidence of our execution path.

- **Use your IDE**: Modern IDEs can generate outlines of tests and javadoc for you as well as providing autocompletion around logging functionality and assertions.
- **Test your understanding**: After each exercise, try to explain the concept to someone else (or write it down).
- **Experiment**: Change the code, break it, see what error messages you get. This is especially useful for trying your debugging skills and verifying that your tests are doing the job you expect (i.e. that they fail if the code behaviour changes unexpectedly).

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!

### Weekly Session Discussion Topics

Come prepared to discuss:

- When would you use a parameterised test? How can the parameters be provided? Why might I choose a particular way of providing parameters (such as from a file)?
- How did the use of interfaces help with the testability of your code?
- Why do we use testing libraries such as Mockito and AssertJ?
- When would you use a Stub rather than a Mock? What sorts of classes should you not mock?
- How do you interpret a stacktrace? How can your IDE help you when you have a stacktrace?
- Any challenges you experienced whilst debugging. What is happening when you step in or step out (think in terms of the stacktrace)?
- How should you use logging effectively? what are good practices? what should be avoided?
- Why do we use lazy-evaluation in logging? what does this look like in practice (what java class/concept are we using)?

### What's Next?

After completing this sprint, you should understand:

- ✅ How to include logging for traceability and observability
- ✅ What additional test libraries can offer
- ✅ How to interpret a stacktrace and use this to assist your debugging
- ✅ How to use inspection, watches and different types of breakpoint to debug effectively

# CYF Java course Sprint 6: Dependency Injection

## Prep

## Sprint 4: Dependency Injection

### Sprint Overview

This sprint introduces you to a fundamental concept in professional Java development: Dependency Injection (DI). DI is essential for building maintainable, testable applications and is the foundation of frameworks like Spring and Google Guice.

### Topic 1: Layered Architecture

#### Learning Objectives

- Explain what the term 'software architecture' means
- Explain the benefits of having a layered architecture, and the responsibilities of the database, service and presentation layers
- Describe the architecture of previous projects you have worked on

#### Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, briefly summarise what we mean by 'software architecture'?
- Why is a layered architecture useful? Think in particular about complex software systems that are live in production for a long time (and hence technology evolves!), and where maintainability, testability and reliability are important, where changes are constantly being made and where lots of developers in different teams are making changes at the same time
- How do interfaces help to decouple the layers in an application and why is this decoupling useful?
- Can you think of a project you've worked on where you used a layered architecture? If so, did it help? If you've never used a layered architecture before, can you think of a project that could be improved if refactored to do so?

##### Resources

- Introduction to software architecture - read sections Introduction to software architecture, Importance of software architecture and Software architecture design (the rest discusses architecture design patterns so feel free to read that too!)
- <https://vfunction.com/blog/what-is-software-architecture/>
- Good overview of layered architecture → focus on _why_ layered architecture is useful, familiarise yourself with the UI, business logic and database layers, and look at the example application
- <https://medium.com/@sagar.hudge/layers-in-software-architecture-c8cc16329ff6>

#### Exercise 1

- For a previous project you have worked on, describe the tiers of architecture used. Draw a diagram of the architecture tiers used and the key components and software they use (e.g. React front end, Java Service layer, Hibernate DAO and Postgres DB).
- Consider a social media application where users can write posts on a forum. Consider the process of a user adding a new post - which tier of the application would the code for the following actions live?

- Handling the user interaction to navigate to the 'new post' screen
- Posting the callback to refresh the page when the user saves the post
- Validating that the post doesn't contain any banned words or phrases after the user hits save
- Scanning the contents of the post to add suitable tags to make it appear in relavent search results
- Loading a draft post that was previously saved
- Storing the the post long term

### Topic 2: Dependencies and Dependency Injection

#### Learning Objectives

- Explain what dependency injection is and why it's useful
- Compare and contrast the different types of dependency injection : constructor and method based (note field injection does also exist but is generally considered bad practice outside of tests and isn't covered here)
- Refactor Java classes to use dependency injection and write new classes using DI

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What do we mean by a 'dependency' in a Java class?
- What is Inversion of Control (IoC) and how does it relate to Dependency Injection (DI)?
- Can you give an example of IoC that isn't DI?
- What are some potential issues with Java classes that have dependencies but don't use DI. Think about testability, maintainability and tight-coupling for large code bases that evolve over time.
- How does DI help solve the above issues?
- What is constructor injection and how is it different to method injection?

#### Resources

- Overview of dependency injection → ignore section on interface injection
- <https://medium.com/@AlexanderObregon/the-basics-of-java-dependency-injection-fc5573d31655>
- A more general discussion of Inversion of Control and how Dependency Injection is an example. Note some of the ideas here can be a little hard to understand in the abstract - focusing on the examples can be a good way to see the concepts in action
- <https://stackoverflow.com/questions/3058/what-is-inversion-of-control>

#### Exercise 2

- Refactor the code below to use constructor based dependency injection:

**public** **static** **void** main(String\[\] args) {

Car car = **new** Car();

car.start();

}

&nbsp;

**static** **class** Car {

Engine engine = **new** Engine();

&nbsp;

**void** start() {

engine.rev();

System.out.println("Car Started");

}

&nbsp;

}

&nbsp;

**static** **class** Engine {

Gears gears = **new** Gears();

Cambelt cambelt = **new** Cambelt();

&nbsp;

**void** rev() {

gears.initialise();

cambelt.initialise();

}

}

&nbsp;

&nbsp;

**static** **class** Gears {

Set&lt;Cog&gt; cogs = Set.of(**new** Cog(), **new** Cog(), **new** Cog());

&nbsp;

**void** initialise() {

cogs.forEach(cog -> cog.spin());

&nbsp;

// Initialisation logic

}

}

&nbsp;

**static** **class** Cog {

**void** spin() {

// Spin logic

}

}

&nbsp;

&nbsp;

**static** **class** Cambelt {

**void** initialise() {

// Initialisation logic

}

}

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Suppose we wanted to refactor our car such that it supported multiple different types of engine. How might we do it?
- How would unit testing the Car class be easier after it was refactored to use DI? Remember the unit tests for Car should not need to also test Engine, Gears, Cogs etc
- Why in this example (and in general) do we prefer constructor injection to setter injection?

### Topic 3: The Service Layer

#### Learning Objectives

- Explain what the service layer is, what it's responsible for, where it sits in the architecture hierarchy and why it's used
- Explain how DI helps to organise classes within the service layer and the problems it solves
- Describe the benefits of using interfaces with dependency injection in services
- Build collections of services as interfaces and using dependency injection

#### Self Study

_As you read through the resources below try to answer the following questions:_

- Where should simple business logic live? e.g. for a Car class with an Engine dependency, in which class should the code to validate that it's engine must be less than 10 years old live?
- When should standalone service classes be used?
- Should service classes be interfaces or concrete classes? Always? Why? Think about reusability, maintainability, testability.
- What do dependency injection frameworks do and how do they help with dependency injection of services? Note we aren't going to be using any DI frameworks yet, but it's good to understand the motivation for them.

##### Resources

- Overview of service / business logic layer > ignore the non java parts
- <https://www.tutorialspoint.com/what-is-the-business-logic-layer>
- Comparison of Service and Database Access Layers (as initially it may seem they are the same)
- <https://softwareengineering.stackexchange.com/questions/220909/service-layer-vs-dao-why-both>
- Motivation for using DI in the service layer by Guice, a dependency injection framework
- <https://github.com/google/guice/wiki/Motivation>

#### Exercise 3.1

Build a Payment processor that needs to work with different providers:

- Create a PaymentProcessor interface with methods:
- boolean processPayment(double amount)
- boolean refund(String transactionId)
- String getProviderName()
- Create THREE implementations (in reality each implementation would contain the code to call to the relevant API, but we'll skip that part here!):
- StripePaymentProcessor:
- processPayment: prints "Processing £X via Stripe..."
- Returns true (simulate success)
- PayPalPaymentProcessor:
- processPayment: prints "Processing £X via PayPal..."
- Returns true (simulate success)
- DummyPaymentProcessor:
- Doesn't actually process anything
- Just tracks method calls for testing
- Stores: List of amounts processed, List of refund IDs
- Create CheckoutService:
- Has PaymentProcessor dependency which should be injected in the constructor
- Method: processCheckout(List&lt;Double&gt; amounts)
- Calculates total
- Uses PaymentProcessor to charge
- Returns success/failure
- Create a main method demonstrating:
- Production with Stripe
- PaymentProcessor stripe = new StripePaymentProcessor();
- CheckoutService checkoutService = new CheckoutService(stripe);
- checkoutService.processCheckout(cart);
- Production with PayPal
- PaymentProcessor paypal = new PayPalPaymentProcessor();
- CheckoutService checkoutService2 = new CheckoutService(paypal);
- checkoutService2.processCheckout(cart);
- Testing
- DummyPaymentProcessor dummyProcessor = new DummyPaymentProcessor();
- CheckoutService dummyService = new CheckoutService(testProcessor);
- dummyService.processCheckout(cart);
- Verify: dummyProcessor.getProcessedAmounts() contains expected values

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Did CheckoutService change when switching processors?
- Could you add a new processor without changing CheckoutService?
- Suppose we updated the implementations above to call the real APIs
- What would we need to change if Stripe's API changes?
- How does having the specific dummy test implementation simplify testing?

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

## Sprint Challenge

### Requirements

#### Overview

Create a library system for managing book borrowing and returns.

#### Acceptance Criteria

- Ability to:
- Save new books
- Validate against duplicates
- New book saved to database (in memory or text file)
- Borrow a book
- Validate if it's available to borrow
- Start with a fixed borrow period (maybe 1 month) and optionally refactor later to be variable
- Update database record to set that the book is now borrowed and hence not available for someone else to borrow
  - - - Should include a borrow / return date
- List the books currently borrowed by a user
- Actively borrowed books only, not ones that have been returned
- Return a book
- If it's being returned late report that the borrower should be fined £1 per day late
- Update database record to set that the book has been returned and hence can now be borrowed again
- Search for a book by title or author to see if it's available to borrow or not
- Present sensible responses for the cases:
  - - - Book exists and can be borrowed
        - Book exists but is already borrowed by someone else
        - Book does not exist

#### Code Quality

- Tiered architecture used with an in memory database (or you can write to a text file, your choice!) and console used as the presentation layer
- Interfaces used in service layer and DI used throughout
- Code clearly documented and unit tested!

#### Developer Guidance (deliberately limited!)

- Think about the models you'll want first, and what data you'll need to store in order to meet the above criteria
- Think about how to save the data in a format (using appropriate data structures) that you'll be able to read and write to → the internet can help here!
- Create an access class responsible for reading and writing to the 'database'
- Create a suitable service layer using interfaces that you call from a main method to perform the library operations detailed in the acceptance criteria
- Make sure the service layer is unit tested

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!

# CYF Java course Sprint 7: Design Patterns

## Prep

### Sprint Overview

This sprint introduces you to Design Patterns - proven solutions to common programming problems. You'll learn what design patterns are, take an in depth look at some specific patterns, and practice refactoring code to use these patterns.

### Topic 1: Introduction to Design Patterns

#### Learning Objectives

- Explain what is meant by the term 'design pattern' and give examples of patterns you've already seen or used
- Explain why software design patterns can be useful, and give examples of appropriate and inappropriate uses of design patterns
- Recognise the trade-offs that come with design patterns

#### Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, summarise what is meant by a software design pattern.
- Are design patterns limited to the field of software engineering? Where else might you see them?
- How do design patterns simplify software development? Think about readability, communication, testability maintainability etc (note these categories of things to consider should be pretty familiar by now!)
- How can design patterns be misused and what are some potential downsides arising from misuse?
- What are some key factors to consider when deciding whether or not to use a design pattern?

##### Resources

- Refactoring Guru has some really good design patterns content. Read through the overview, history, benefits and criticisms sections
- <https://refactoring.guru/design-patterns>

#### Exercise 1

- Choose 3 design patterns (apart from the facvtor and builder patters; we will study those in detail later!) from those listed in the catalogue (<https://refactoring.guru/design-patterns/catalog>) and for each:
- Summarise the intent i.e. the problem it solves and how it solves it (note we are not interested in the specifics of the implementing code here, we just want to know in words why the pattern exists)
- Write down an example real life use case where the pattern may be useful (again we aren't interested in code here, just summarise in words at a high level the specific scenario)
- Write down an example of where the design pattern could be misused and potentially do more harm than good, and explain why

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- In the above example, why did you pick your 3 patterns? Were they easiest to understand / clearly beneficial / you've already used them / some other reason(s)?
- What might this tell you about those patterns? e.g. does a pattern being easier to understand mean it may deliver greater value than a more complex pattern? No right or wrong answers here!
- What examples of software patterns have you seen already, either in this Java course or in other software development?
- Based on what you've seen so far, what do you think are the main benefits of design patterns? Why?
- And what are the main potential drawbacks?
- Can you think of a piece of software you've written in the past where using a design pattern may have improved it?

### Topic 2: The Factory Pattern(s)

#### Learning Objectives

- Understand the differences between static factories, simple factories, the factory method pattern and the abstract factory pattern
- Be able to apply each of the above to a relevant situation
- Explain in detail what the factory method pattern and abstract factory pattern are, and why they are used
- Draw an abstract class diagram representing how the factory method and abstract factory patterns are implemented
- Refactor code to implement the factory pattern(s)
- Implement the factory pattern(s) from scratch

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What is a static factory and why is it useful?
- When is it not worth using a static factory? Why?
- What are the key features of the factory method pattern? What problems does it solve? Think about: loose coupling (relates back to the last sprint on interfaces!), testability etc, especially for large codebases where a piece of functionality may be used by lots of teams beyond the one that wrote it.
- Can you think of any code you've seen in other sprints that may benefit from use of the factory method pattern? Why?
- How does the abstract factory pattern differ from the factory method pattern? When would you use one over the other? Do they have any similarities?
- Can you think of any downsides to using the factory pattern or abstract factory pattern? Give an example of a specific situation when using either factory pattern would not be appropriate

##### Resources

- 'Factory' is a very overloaded term and can refer to lots of similar sounding concepts and patterns, all of which are worth familiarising yourself withhttps://refactoring.guru/design-patterns/factory-comparison
- <https://refactoring.guru/design-patterns/factory-comparison>
- Static factories - not a factory pattern as such, but still a useful technique to be familiar with!
- <https://medium.com/@deepanshutibrewal08/effective-java-item-1-consider-static-factory-methods-instead-of-constructors-418370277bc6>
- Simple factories - more like a static factory than either of the factory patterns
- <https://incusdata.com/blog/design-patterns-simple-factory-pattern>
- The factory method pattern
- <https://refactoring.guru/design-patterns/factory-method>
- The abstract factory pattern
- <https://refactoring.guru/design-patterns/abstract-factory>

#### Exercise 2.1

- Which type of factory (simple, method, abstract) would be most appropriate for the code below? Why?
- Refactor the code to use your chosen pattern

public class NotificationService {  
public void send(String type, String message) {  
if (type.equals("EMAIL")) {  
EmailNotification notification = new EmailNotification();  
notification.send(message);  
} else if (type.equals("SMS")) {  
SMSNotification notification = new SMSNotification();  
notification.send(message);  
}  
// Adding new notification type requires modifying this class  
}

#### Exercise 2.2

Write pseudocode and draw a class diagram to implement the following scenario using an appropriate factory pattern:

- A software application that can be configured to use a Postgres or Oracle database
- When configuring the database on app start-up there is some generic setup required when either DB platform is in use, but connecting to the database is platform specific
- There is global configuration (you can use a static constant in the main Application class) to control whether Postgres or Oracle should be used
- There is a main DatabaseInitializer class that is called from application start-up (i.e. in this case, a main method) with an #initalize method
- There should be a class responsible for handling the connection, DatabaseConnector, whose behaviour is different for Postgres and Oracle, with a #connect method

#### Exercise 2.3

Now suppose as well as the DatabaseInitializer class, there are other platform specific classes required: DatabaseAuthenticator and DatabaseEntityManager. Each of these are required by DatabaseInitializer. Rewrite or update your pseudocode and class diagram to handle this new scenario. Note you may want to try a different pattern!

#### Exercise 2.4

A requirement comes through to also support MongoDB. What changes would you need to make in order to handle this? Update your code and diagram to reflect this.

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Was adding the requirement to support MongoDB easier or harder to implement when the factory pattern was already in play? Why?
- Do the team implementing the MongoDB requirement need to know about the generic database initialising code?
- Do they need to coordinate with the team that owns the core db initialisation code?
- What about if we wanted to de-support Oracle - what would we need to change? (just think about this, no need to implement)
- What are the key factors to consider when deciding to use the factory method pattern vs the abstract factory pattern? Does one lead to the other?
- What do the terms YAGNI and KISS mean? (If you've not seen them before, have a look online.) How do they apply here?
- What are the main benefits the factory pattern delivers?
- Are there any drawbacks?

### Topic 3: The Builder Pattern

#### Learning Objectives

- Explain what the motivation and intent of the builder pattern
- Refactor Java code to use the builder pattern
- Identify when a builder pattern is appropriate and when it is not

#### Self Study

_As you read through the resources below try to answer the following questions:_

- What is mean by the term 'immutable' and why is it desirable to have immutable classes in Java?
- Can a class have more than one constructor? Are there any constraints - can you think of an example of two constructors for a class that would not be valid?
- What problems can having either multiple, similar constructors, or constructors with lots of parameters cause?
- How does the builder pattern help to solve these problems?
- What do the terms 'fluid interface' and 'method chaining' mean?
- Are there any downsides to using the builder pattern? When is it not appropriate to use?

##### Resources

- CodeGuru provides a good overview of the pattern
- <https://refactoring.guru/design-patterns/builder>

#### Exercise 3.1

- Refactor the following code to use the builder pattern:
- Make all fields final
- Private constructor taking a static inner Builder
- Required params: id, name, price
- Optional params: description, category, onOffer (default values)
- Validation in build(): id not empty, name not empty, price > 0
- Then use your builder to create:
- A laptop on offer for £1000
- A computer mouse not on offer for £20
- And verify the fields have been set correctly in the following ways
- Debugging and inspecting your objects post-creation directly
- Overriding the toString method and printing the output to the console

**public** **class** Product {

**private** String id;

**private** String name;

**private** **double** price;

**private** String description;

**private** String category;

**private** **boolean** onOffer;

&nbsp;

&nbsp; **public** Product(String id, String name, **double** price) { }

**public** Product(String id, String name, **double** price, String description) { }

}

#### Exercise 3.2

- Add two new fields to your product class, one mandatory, one optional, and update your laptop and mouse to use them

#### Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- What are the main advantages and potential disadvantages of the builder pattern?
- Think of an example where the builder pattern would not be appropriate
- Is there a factory alternative that may be used in some instances for classes with several similar constructors?
- When would you prefer this to the builder pattern?
- What happens if you forget a required parameter in a builder built class?
- Why should the fields be final and what benefits does this bring?
- Bonus: In the example above we store a monetary amount as a double - what are some potential problems with this? In general is there a preferred approach for modelling money in Java?
- Similarly, can you think of a more appropriate type to model the product category?

## Backlog

**The code you write for this challenge is mandatory homework and should be completed and sent in a PR for review before class.**

### Sprint Challenge 1

#### Overview

Build a computer store application that allows customers to configure and purchase custom computers.

#### Specification

- Java application with a console-based menu system:
- User options:

- Build Custom PC (choose components manually)
  - - - Select processor (budget/performance/enthusiast)
        - Select graphics card (integrated/gaming/professional)
        - Select memory (8GB/16GB/32GB)
        - Select storage (HDD/SSD/NVMe)
        - Customize options (case color, warranty, RGB)
- Quick Build - Budget PC
  - - - Use appropriate factory
- Quick Build - Gaming PC
  - - - Use appropriate factory
- Quick Build - Workstation PC
  - - - Use appropriate factory
- View Available Components
- Exit

- After building, display:
- Complete specifications
- Total price
- Estimated delivery time

#### Developer Guidance

- Create a PCComponent interface with methods:
- String getName()
- double getPrice()
- String getSpecifications()
- ComponentType getType() (enum: PROCESSOR, GRAPHICS_CARD, MEMORY, STORAGE)
- Create implementations: Processor, GraphicsCard, Memory, Storage
- With static factory methods for:
- Processor: budget(), midRange(), performance()
- GraphicsCard: integrated(), gaming(), professional()
- Memory: standard8GB(), standard16GB(), performance32GB()
- Storage: hdd1TB(), ssd512GB(), nvme1TB()
- Create an abstract factory interface for creating complete component families - each factory should coordinate components that work well together for their purpose
- interface PCComponentFactory
- Processor createProcessor()
- GraphicsCard createGraphicsCard()
- Memory createMemory()
- Storage createStorage()
- String getThemeName()
- String getDescription()
- Implement three themed factories:
- BudgetPCFactory (£500-700)
- Budget processor
- Integrated graphics
- 8GB memory
- HDD storage
- GamingPCFactory (£1200-1500)
- Performance processor
- Gaming graphics card
- 16GB memory
- NVMe storage
- WorkstationPCFactory (£2000-2500)
- Enthusiast processor
- Professional graphics card
- 32GB memory
- NVMe storage
- Create a PC class that uses a builder pattern to create instances, with fields:
- Processor (required)
- Graphics Card (required)
- Memory (required)
- Storage (required)
- Case colour (optional, default: "Black")
- Warranty years (optional, default: 1)
- And methods:
- double getTotalPrice (sums price of components)
- String getDetailedSpecs (returns a nicely formatted string of the component parts → you can also just use an overridden toString here if preferred)

### Sprint Challenge 2

So far we have only looked in depth at creational design patterns (i.e. patterns that help you create objects), but there are other categories too (see <https://refactoring.guru/design-patterns/catalog>).

#### Requirement

- Choose a non-creational design pattern and prepare a 5 minute presentation to deliver to your classmates
- The presentation should cover:
- What the pattern is, its intent
- Pros and cons of using the pattern
- An explanation, including class diagrams of the technical components involved
- A worked Java example for a real world scenario (try to think of one yourself), showing the code without the pattern, and then refactored to use the pattern, thus demonstrating its value
- This should be code written by you, don't just copy off the internet or use AI as you won't learn as much!

## Day-plan

- Share solutions to exercises → share code, talk through what you've done to the group, ask questions and discuss alternative solutions / tradeoffs etc
- Discuss reflections for each exercise (these are listed under _Reflections_ sections in _Prep_) → there is no right or wrong answers here, this is a chance to consolidate what you've learnt and analyse / challenge the various patterns and principles covered in this sprint.
- Please write your answers to the reflection questions as you are completing the corresponding exercises - don't wait until the last minute before class!
- Presentations for Sprint Challenge 2!

# CYF Java course Sprint 8: Introduction to Spring Framework

## Section 1: Introduction to Spring Framework & Spring Boot

Spring is one of the most widely used frameworks in Java development. It provides a comprehensive programming and configuration model for modern enterprise applications. Understanding Spring is essential for building scalable, maintainable, and testable applications, because many applications depend on it for tasks like dependency management, configuration, and testing.

Spring Boot is a tool built on top of Spring that makes it easier to create stand-alone, production-ready applications with minimal configuration. It removes boiler-plate code and provides sensible defaults, which reduces setup time and complexity. Spring Boot provides tools like Spring Initializr, spring profiles, and environment configuration to streamline development and deployment. These features allow developers to quickly scaffold projects, manage environments, and reduce errors during deployment.

There is a variety of reading material provided here, it's not essential to read it all, some covers similar content from a different point of view.

### Learning Objectives

- Explain why java frameworks are used in enterprise applications
- Explain why field injection is not recommended
- Explain the benefits of using Spring in Java applications
- Explain what Spring Boot is and why it simplifies Spring development

### Reading material

- [What are Java Frameworks?](https://www.redhat.com/en/topics/cloud-native-apps/what-is-a-Java-framework)
- [Introduction to Spring Framework](https://www.geeksforgeeks.org/advance-java/introduction-to-spring-framework/)
- [Introduction to Inversion of Control and Dependency Injection with Spring](https://www.baeldung.com/inversion-control-and-dependency-injection-in-spring)
- [Why is field injection not recommended?](https://www.baeldung.com/java-spring-field-injection-cons)
- [How Spring Boot compares to Spring](https://www.baeldung.com/spring-vs-spring-boot)
- [Boot strap a simple application](https://www.baeldung.com/spring-boot-start)
- [Spring boot annotations](https://www.baeldung.com/spring-boot-annotations)

### Framework documentation

These pages may be a useful first port of call when troubleshooting, but you don't need to read them in their entirety:

- [Spring Framework documentation](https://docs.spring.io/spring-framework/reference/index.html)
- [Spring Boot documentation](https://docs.spring.io/spring-boot/index.html)
- [Spring Initializr documentation](https://docs.spring.io/initializr/docs/current/reference/html/)

#### Exercises

Here we are going to generate a to do list application, using [spring initializr](https://start.spring.io/), that we will build on throughout the sprint. In this section, we'll set up the building blocks and initial services:

- Generate a spring application with the following dependencies:
- spring-boot-starter-web
- spring-boot-starter-data-jpa
- spring-boot-starter-test
- Create as a maven project, using the latest version of maven available.
- Create models for the following:
- Task - each task should have the following: title, priority, completed, due date, assignee username
- User - each user should have an id and username
- Create a TaskService with the following methods, writing unit tests for each:
- createTask
- Pass in a task without an id. The method will provide a new id, validate and store the new task.
- listTasks
- updateTaskById
- Provide a task with an id (a task without id will fail), update the task (unit test should validate this list is the same size).
- deleteTaskById
- getTasksByUser
- Add a TaskValidatorService which is able to validate a number of cases, including:
- Title validation: short, long, null, empty, incl. spaces.
- Write a unit test for each case.

### Quiz

- Which of these best describes how the Spring Framework helps a developer build an application?
- It acts as a "glue" that manages how different objects (dependencies) interact with each other
- It provides specialised modules to help with tasks like Database access.
- It removes the need for boiler-plate code
- All of the above
- Which annotation is used to indicate a Spring-managed bean?
- @Component
- @Bean
- @Service
- All of the above
- What is dependency injection in Spring?
- The process of creating an object
- A design pattern for managing object creation
- A way to achieve loose coupling between classes
- Both B and C
- What annotation is used for automatic dependency injection in Spring?
- @Inject
- @Autowired
- @Resource
- @Qualifier

1 - D: Spring acts as comprehensive toolbox that manges how objects interact, provides pre-built modules and eliminates repetitive setup code in favour of an annotation-driven approach

2 - D: All these annotations indicate a Spring-managed bean. @Component is a generic stereotype, while @Service is used for service-layer beans, and @Bean is used in configuration classes.

3 - D: Dependency injection is a design pattern that allows for loose coupling between classes by managing object creation and dependencies outside of the classes themselves.

4 - B: The @Autowired annotation is used to tell Spring to automatically find and inject dependencies into a field, constructor or setter, without needing to instantiate objects using the new keyword

## Section 2: Introducing Java Persistence API (JPA) and Spring Data

Most enterprise apps need persistent data (i.e. data that remains after the application/process that created it shuts down). Java Persistence API (JPA) provides a standard for object-relational mapping (ORM) (i.e. JPA defines how Java objects are mapped to database data). Spring Data JPA is built on top of this to reduce boilerplate code, and makes database access simple and consistent.

In a Spring application @Entity annotated classes represent data stored in the database. These are simple Java classes where each field in the class corresponds to a column in the table. Fields may be marked with annotations such as @Id and @Column.

For example, the following Entity represents an Employee table with three columns, id, name and email.

@Entity

**public** **class** Employee {

@Id

@GeneratedValue(strategy = GenerationType.IDENTITY)

**private** Long id;

&nbsp;

@Column(name = "name")

**private** String name;

&nbsp;

@Column(name = "email")

**private** String email;

&nbsp;

// Constructors, getters, and setters

}

@Repository annotated interfaces define how the data in the database is queried and persisted. Spring automatically generates Create, Read, Update, Delete (CRUD) operations. By following specific naming conventions, Spring Data JPA automatically generates queries at runtime, we call these Query Methods. Query methods are repository interface methods where the query is derived from the method name.

For example:

List&lt;Entity&gt; findByFieldName(DataType fieldName);

### Learning objectives

- Explain what JPA is and why it's important.
- Explain how Spring Data JPA simplifies Create, Read, Update Delete (CRUD) operations.
- Explain how Spring Data JPA generates queries based on method names.
- Create a database with User & Task tables and the JPA entity classes to represent the data persisted in these tables.
- Define spring data repository interfaces for querying the User and Task databases.
- Explain the concept of entities, repositories, and transactions.

### Reading Material

- [Introduction to JPA](http://geeksforgeeks.org/java/jpa-introduction/)
- [Introduction to Spring Data JPA](https://www.geeksforgeeks.org/springboot/what-is-spring-data-jpa/)
- [Documentation with examples](https://github.com/spring-projects/spring-data-jpa)

### Exercises

- Create a new database, which has User and Task tables. One User can have more than one Task assigned to them.
- Extract TaskService into an interface, and create a database backed implementation.

### Quiz

- Which of the following annotations is used for defining a repository bean?
- @Service
- @Component
- @Repository
- @Controller

1 - C: The @Repository annotation is specifically used to mark a class as a Data Access Object (DAO) or repository.

**Importance:** This introduces persistence, which is essential for real-world applications like e-commerce, social media, and enterprise systems.

## Section 3: Introduction to Spring REST

REST stands for Representational State Transfer and allows applications to communicate using HTTP methods, for example GET, POST, PUT and DELETE. REST APIs follow a stateless architecture, i.e. every request contains all the necessary information for the server to process it without relying on previous requests.

Spring REST is part of the Spring Framework, which simplifies the process of writing REST APIs by providing support for handling HTTP requests, data conversion & error handling. To utilise Spring REST, we must have a dependency on Spring WEB (spring-boot-starter-web) in our project.

REST Controllers manage HTTP requests, to define a REST Controller, we use the @RestContoller spring annotation.

[Postman](https://www.postman.com/) is a popular HTTP client used for sending HTTP requests to a REST API and checking the response, allowing you to test out your newly created APIs.

### Learning objectives

- Define REST Controllers for Tasks and Users, using @RestContoller and mapping annotations (@GetMapping, @PostMapping)
- Send HTTP requests to Spring REST endpoints using Postman

### Reading material

- [Overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
- [Introduction to Spring REST](https://dev.to/ayshriv/introduction-to-spring-rest-3nhl)

### Exercises

- Create the following REST controllers, with the listed methods:
- TaskController
- Get all tasks from the database
- Create a new task and save it to the database
- Delete a task from the database
- UserController
- Get all users from the database
- Test using [Postman](https://www.postman.com/api-platform/api-testing/) or curl (or alternative tooling for testing HTTP calls).

## Section 4: Testing in Spring Boot

Testing ensures that your application is reliable, maintainable, and behaves the way you expect. Spring Boot provides powerful, built‑in support for testing through JUnit and Mockito, making it easy to test everything from small pieces of logic to full application flows. In this section, students will learn the difference between unit and integration tests, how to write each type using Spring Boot's testing tools, and how to use Mockito to isolate components with mocks. By the end, they'll have a solid foundation in verifying Spring applications efficiently and consistently.

### Objectives

- Create and run unit tests that validate individual methods.
- Explain when to use simple unit tests versus when a Spring context is needed.
- Create and integration test with @SpringBootTest.
- Mock dependencies with Mockito & explain why mocking is used in unit testing.

### Reading material

- [Unit testing with spring framework](https://docs.spring.io/spring-framework/reference/testing/unit.html)
- [Integration testing with spring framework](https://docs.spring.io/spring-framework/reference/testing/integration.html)
- [MockMvc](https://docs.spring.io/spring-framework/reference/testing/mockmvc.html)