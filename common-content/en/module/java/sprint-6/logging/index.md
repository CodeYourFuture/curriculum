+++
title = 'Logging'

time = 120
objectives = [
  'Understand how to do performant logging in Java',
  'Understand logging in Java',
  'Understand Mapped Diagnostic Context'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++


## What you'll learn

How logging is used in production systems and how this differs from use of the console for temporary debugging. The SLF4J and logback frameworks will be used.

**Why start here?**

Software applications in production need to provide ongoing signals as to what they are doing and whether they are operating in a healthy state. Effective logging can also provide an insight into problems that occur and can therefore assist with knowing where to start when debugging.

## Self Study
### Reading Materials

- [SLF4J Framework documentation](https://www.slf4j.org/manual.html)
- [Logback Documentation](https://logback.qos.ch/manual/introduction.html) - Read chapters 1-4
- [Baledung logging](https://www.baeldung.com/java-logging-intro) - Read sections 1, 2, 4, 5
- [mapped diagnostic context in logging (MDC)](https://www.baeldung.com/mdc-in-log4j-2-logback) - read sections 1, 2, 5-7
- OWASP cheatsheet - [OWASP logging principles](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- useful up to section "Network architecture"

### Video Materials
- [SLF4J usage](https://www.youtube.com/watch?v=JahvBA-PQFM)

### Key Concepts
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

## Exercises

{{<note type="exercise" title="Exercise 1.1 - Example logging application">}}
Set up a simple project using slf4j using the following pom and class:

#### Code block 5: project pom.xml
```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.myname</groupId>
  <artifactId>logging-example</artifactId>
  <name>Example project with logging</name>
  <version>1.0.0</version>
  <dependencies>
   <dependency> 
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>2.0.17</version>
   </dependency>
   <dependency> 
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.5.32</version>
   </dependency>
  </dependencies>
</project> 
```

#### Code block 6 - LoggingDemo
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
 
public class LoggingDemo {
    private static final Logger log = LoggerFactory.getLogger(LoggingDemo.class);
 
    public static void main(String[] args) {
        log.info("Application starting...");
        log.debug("This is a debug message that you should NOT see yet.");
        log.warn("Low disk space!");
        log.error("Something went wrong.", new RuntimeException("Test error"));
    }
}
```

Change the log level in the configuration and observe what happens.
Add a loop to the process and log from within the loop every 10th iteration.

{{</note>}}

{{<note type="exercise" title="Exercise 1.2 - Example with Mapped Diagnostic Context (MDC)">}}
Create a project using SLF4J and logback (see exercise 1.1) with the following configuration and main class

#### Code block 7 logback.xml
```xml
<configuration>
    <!-- Add MDC values to log lines -->
    <property name="PATTERN" value="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level [%X{requestId}] %logger{36} - %msg%n"/>
 
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/app.log</file>
 
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/app-%d{yyyy-MM-dd}.gz</fileNamePattern>
            <maxHistory>7</maxHistory>
        </rollingPolicy>
 
        <encoder>
            <pattern>${PATTERN}</pattern>
        </encoder>
    </appender>
 
    <root level="info">
        <appender-ref ref="FILE"/>
    </root>
</configuration>

```
#### Code block 8 RequestProcessor
```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
 
import java.util.UUID;
 
public class RequestProcessor {
    private static final Logger log = LoggerFactory.getLogger(RequestProcessor.class);
 
    public static void main(String[] args) {
        for (int i = 1; i <= 3; i++) {
            simulateRequest(i);
        }
    }
 
    private static void simulateRequest(int n) {
        String requestId = UUID.randomUUID().toString();
        MDC.put("requestId", requestId);
 
        log.info("Processing request {}", n);
 
        try {
            if (n == 2) throw new IllegalArgumentException("Bad input!");
        } catch (Exception e) {
            log.error("Error while processing", e);
        } finally {
            MDC.clear();
        }
    }
}
```
Run the application and observe the logging.
Amend the class to call some other method in the processing (e.g. to provide some calculation based on the input) and add some debug logging to that. Amend the configuration so that the logging is observed when you run the application. See that the context is retained.
{{</note>}}

## Questions

### 1. Logging Listener

Consider the following code;
#### Code block 9 - Logging Question 1

```java
public void listenerLoop() {
  while (keepRunning) {
    logger.atInfo().log("Listener polling...");
    WorkItem workItem = queue.poll();
    if (workItem == null) {
      sleepForOneSecond();
    } else {
      process(workItem);
    }
  }
}
```
What concerns would you have about the logging? how could it be improved (e.g. by additional information, changing behaviour)?
### 2. Logging Child Processor
Consider the following code:
#### Code block 10 Logging Question 1
```java
public process(WorkItem workItem) {
  int childCount = 0;
  for (ChildItem child : workItem.getChildren()) {
    if (logger.isDebugEnabled()) {
      logger.debug("Processing child {}", childCount++);
    }
    if (childProcess(child)) {
      logger.info("Processed child {}", childCount);
    } else {
      logger.warn("Failed to process child {}", childCount);
    }
  }
}

```


If logging is at info level and the work item has 2 children which are each processed successfully what will be the output;

1. Processing child 0, Processed child 0, Processing child 1, Processed child 1, Processing child 2, Processed child 2
2. Processing child 1, Processed child 1, Processing child 2, Processed child 2, Processing child 3, Processed child 3
3. Processed child 0, Processed child 1, Processed child 2
4. Processed child 0, Processed child 0, Processed child 0

If the processing is repeated with logging at debug level what is the output?

What does this difference tell us about a problem in the way we are logging? What alternative approaches can you think of?
