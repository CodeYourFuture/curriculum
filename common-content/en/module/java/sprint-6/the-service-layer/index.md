+++
title = 'The Service Layer'

time = 120
objectives = [
  'Explain what the service layer is, what it is responsible for, where it sits in the architecture hierarchy and why it is used',
  'Explain how DI helps to organise classes within the service layer and the problems it solves',
  'Describe the benefits of using interfaces with dependency injection in services',
  'Build collections of services as interfaces and using dependency injection'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++


## Self Study

_As you read through the resources below try to answer the following questions:_

- Where should simple business logic live? e.g. for a Car class with an Engine dependency, in which class should the code to validate that it's engine must be less than 10 years old live?
- When should standalone service classes be used?
- Should service classes be interfaces or concrete classes? Always? Why? Think about reusability, maintainability, testability.
- What do dependency injection frameworks do and how do they help with dependency injection of services? Note we aren't going to be using any DI frameworks yet, but it's good to understand the motivation for them.

### Resources

- [Overview of service / business logic layer](https://www.tutorialspoint.com/what-is-the-business-logic-layer) - ignore the non java parts
- [Comparison of Service and Database Access Layers (as initially it may seem they are the same)](https://softwareengineering.stackexchange.com/questions/220909/service-layer-vs-dao-why-both)
- [Motivation for using DI in the service layer by Guice, a dependency injection framework](https://github.com/google/guice/wiki/Motivation)

{{<note type="exercise" title="Exercise 3.1">}}
Build a Payment processor that needs to work with different providers:

- Create a `PaymentProcessor` interface with methods:
  - `boolean processPayment(double amount)`
  - `boolean refund(String transactionId)`
  - `String getProviderName()`
- Create THREE implementations (in reality each implementation would contain the code to call to the relevant API, but we'll skip that part here!):
  - `StripePaymentProcessor`:
    - `processPayment`: prints "Processing £X via Stripe..."
    - Returns true (simulate success)
  - `PayPalPaymentProcessor`:
    - `processPayment`: prints "Processing £X via PayPal..."
    - Returns true (simulate success)
  - `DummyPaymentProcessor`:
    - Doesn't actually process anything
    - Just tracks method calls for testing
    - Stores: List of amounts processed, List of refund IDs
- Create `CheckoutService`:
  - Has `PaymentProcessor` dependency which should be injected in the constructor
  - Method: `processCheckout(List<Double> amounts)`
    - Calculates total
    - Uses `PaymentProcessor` to charge
    - Returns success/failure
- Create a main method demonstrating:
  - Production with Stripe
    - `PaymentProcessor stripe = new StripePaymentProcessor();`
    - `CheckoutService checkoutService = new CheckoutService(stripe);`
    - `checkoutService.processCheckout(cart);`
  - Production with PayPal
    - `PaymentProcessor paypal = new PayPalPaymentProcessor();`
    - `CheckoutService checkoutService2 = new CheckoutService(paypal);`
    - `checkoutService2.processCheckout(cart);`
- Testing
  - `DummyPaymentProcessor dummyProcessor = new DummyPaymentProcessor();`
  - `CheckoutService dummyService = new CheckoutService(testProcessor);`
  - `dummyService.processCheckout(cart);`
  - Verify: dummyProcessor.getProcessedAmounts() contains expected values
{{</note>}}

## Reflections

_Think about the following questions, make notes and be prepared to talk through your thoughts in the workshop._

- Did CheckoutService change when switching processors?
- Could you add a new processor without changing CheckoutService?
- Suppose we updated the implementations above to call the real APIs
- What would we need to change if Stripe's API changes?
- How does having the specific dummy test implementation simplify testing?
