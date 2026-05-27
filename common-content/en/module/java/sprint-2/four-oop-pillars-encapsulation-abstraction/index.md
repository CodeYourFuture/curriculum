+++
title = 'The Four OOP Pillars - Encapsulation & Abstraction'

time = 120
objectives = [
    'Explain what encapsulation means and why protecting object state matters',
    'Explain what abstraction means and how it reduces system complexity',
    'Identify class responsibilities and object boundaries',
    'Explain why we use access modifiers to control visibility',
    'Explain why fields are usually private',
    'Design classes that expose a clear public API while hiding internal implementation'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

The four pillars are descriptions of patterns that appear in well-designed systems. Understanding these principles gives you:

- A shared vocabulary for talking about design
- A way to reason about why code is structured the way it is
- A foundation for understanding interfaces, collections, and services later in the course

We're going to initially focus on two of these:

- **Encapsulation** protects domain models and services
- **Abstraction** underpins dependency injection and service boundaries

If these concepts feel abstract now, that's normal, their value becomes clearer as you apply them repeatedly in code.

## Self Study

_As you read through the resources below try to answer the following questions:_

- In a sentence or two, describe abstraction and encapsulation
- How might abstraction help if your current project became part of a larger system?
- What problems arise when object state can be modified freely from outside the class?
- How would private fields and the use of setters improve safety over public fields?
- What problems do encapsulation and abstraction help prevent in real programs?

### Reading Materials

- [Baeldung - OOP Concepts](https://www.baeldung.com/java-oop)
  - Focus on: abstraction and encapsulation
  - Skip: advanced class types
- [GeeksforGeeks - OOP Concepts](https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/)
  - Focus on: abstraction and encapsulation
- [Baeldung - Access Modifiers](https://www.baeldung.com/java-access-modifiers)
- [Baeldung - Encapsulation & Information Hiding](https://www.baeldung.com/java-information-hiding-vs-encapsulation)


## Exercises
{{<note type="exercise" title="Exercise 2.1 - Fix the direct balance access using encapsulation">}}

Starting with:
```java
class BankAccount {
  public double balance;
}
class BankService {
  void withdraw(BankAccount account, double amount) {
    account.balance = account.balance - amount;
  }
  void deposit(BankAccount account, double amount) {
    account.balance = account.balance + amount;
  }
}
public class Main {
  public static void main(String[] args) {
    BankAccount account = new BankAccount();
    account.balance = 100;
    BankService service = new BankService();
    service.withdraw(account, 150);
    System.out.println("Balance: " + account.balance);
  }
}
```

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
{{</note>}}

{{<note type="exercise" title="Exercise 2.2 - Abstraction in Code">}}
Start with this class, for a logging system:

```java
class FileLogger {
  private boolean fileOpen = false;
  public void openFile() {
    if (fileOpen) {
      throw new IllegalStateException("File already open");
    }
    System.out.println("Opening log file...");
    fileOpen = true;
  }
  public void writeLine(String line) {
    if (!fileOpen) {
      throw new IllegalStateException("Cannot write - file not open");
    }
    System.out.println("LOG: " + line);
  }
  public void closeFile() {
    if (!fileOpen) {
      throw new IllegalStateException("File already closed");
    }
    System.out.println("Closing log file...");
    fileOpen = false;
  }
}
```

In your main method, use `FileLogger` directly to log a message:

- Create a `FileLogger` instance
- Call `openFile()`
- Call `writeLine()` with a message
- Call `closeFile()`

Think about the following:

- Try calling `writeLine()` before `openFile()`, what happens and why?
- If this were a real logger implementation, what might happen if another developer forgets to call `closeFile()`?

Create a new class called `ApplicationLogger`, which will provide an abstraction over `FileLogger`:

- Create a single method in this logger which calls each method on `FileLogger` in the correct order
- Update `main()` to use `ApplicationLogger` instead of `FileLogger` directly, checking that logging still works

We now have a new requirement for the `ApplicationLogger` - the ability to log out `[INFO]` and `[ERROR]` level logs:

- Refactor the existing method you've created to prepend the logged message with `[INFO]` and call it logInfo
- Create a new method called logError which prepends `[ERROR]`
- Use these new methods in your `main()` method

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- What complexity does `ApplicationLogger` hide from other classes?
- How did the main method change when switching from `FileLogger` to `ApplicationLogger`?
- Why is the new version simpler to use correctly?
- What mistakes can other developers no longer make when using `ApplicationLogger`?
- Why is this important in large systems?
- If the system later logged to a database instead of a file, which class would you change?
- Why is it useful that `main()` does not know how logging works internally?
- How does this demonstrate abstraction reducing system complexity?
{{</note>}}