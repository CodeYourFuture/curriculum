+++
title = 'Introducing Java Persistence API (JPA) and Spring Data'

time = 120
objectives = [
  'Explain what JPA is and why it's important.',
  'Explain how Spring Data JPA simplifies Create, Read, Update Delete (CRUD) operations.',
  'Explain how Spring Data JPA generates queries based on method names.',
  'Create a database with User & Task tables and the JPA entity classes to represent the data persisted in these tables.',
  'Define spring data repository interfaces for querying the User and Task databases.',
  'Explain the concept of entities, repositories, and transactions.'
]
[build]
  render = 'never'
  list = 'local'
  publishResources = false

+++

Most enterprise apps need persistent data (i.e. data that remains after the application/process that created it shuts down). Java Persistence API (JPA) provides a standard for object-relational mapping (ORM) (i.e. JPA defines how Java objects are mapped to database data). Spring Data JPA is built on top of this to reduce boilerplate code, and makes database access simple and consistent.

In a Spring application @Entity annotated classes represent data stored in the database. These are simple Java classes where each field in the class corresponds to a column in the table. Fields may be marked with annotations such as @Id and @Column.

For example, the following Entity represents an Employee table with three columns, id, name and email.

```java
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
 
    @Column(name = "name")
    private String name;
 
    @Column(name = "email")
    private String email;
 
    // Constructors, getters, and setters
}

```

@Repository annotated interfaces define how the data in the database is queried and persisted. Spring automatically generates Create, Read, Update, Delete (CRUD) operations. By following specific naming conventions, Spring Data JPA automatically generates queries at runtime, we call these Query Methods. Query methods are repository interface methods where the query is derived from the method name.

For example:
```java
List<Entity>; findByFieldName(DataType fieldName);
```

## Self Study
### Reading Material

- [Introduction to JPA](http://geeksforgeeks.org/java/jpa-introduction/)
- [Introduction to Spring Data JPA](https://www.geeksforgeeks.org/springboot/what-is-spring-data-jpa/)
- [Documentation with examples](https://github.com/spring-projects/spring-data-jpa)

### Exercises

{{<note type="exercise" title="Exercise 2.1">}}

- Create a new database, which has User and Task tables. One User can have more than one Task assigned to them.
- Extract TaskService into an interface, and create a database backed implementation.
{{</note>}}

## Quiz

- Which of the following annotations is used for defining a repository bean?
  - `@Service`
  - `@Component`
  - `@Repository`
  - `@Controller`

### Answers
1 - C: The `@Repository` annotation is specifically used to mark a class as a Data Access Object (DAO) or repository.

**Importance:** This introduces persistence, which is essential for real-world applications like e-commerce, social media, and enterprise systems.