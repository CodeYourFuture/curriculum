# Introduction to TypeScript

## Learning objectives
```objectives
- [ ] Explain what TypeScript is and how it differs from JavaScript.
- [ ] Add sensible and predictable types to JavaScript variables.
- [ ] Define JavaScript functions with parameter types and return types.
- [ ] Explain the value of using TypeScript over JavaScript.
```

<details>
  <summary>How to run these exercises locally</summary>

Once you have cloned this repository locally, you'll need to install all dependencies for this project. You can do this via your terminal by navigating to your local project's `introduction-to-typescript` directory and then running:

`npm install`

You should then be able to run the tests for each respective exercise by running:

`npm run test-exercise1`
`npm run test-exercise2`
`npm run test-exercise3`

Expect to see red text complaining about errors until you have fixed all of the problems within the relevant exercise files `exercise1.ts`, `exercise2.ts`, `exercise3.ts`.

There are also TypeScript syntax examples available within `src/examples` should you need a hint.

Best of luck!
</details>

## What is TypeScript and why do we use it?

<details>
  <summary>
    <em>Tips for volunteers</em>
  </summary>
  <em>
    This will likely be trainees first time seeing TypeScript so start by introducing them to the very basics. Make time for questions and challenge them once they are ready to actively work with or comment on TypeScript.
    <br/><br/>Here are some questions you could put to trainees when touching the relevant work:
    <ul>
      <li>What is the difference between static and dynamic types?</li>
      <li>What other languages have static types and why is it useful?</li>
      <li>What might happen if we incorrectly expected a <code>User</code> type where we actually have a <code>Promise< User ></code> type?</li>
    </ul>
  </em>
</details>
<br/>

At its core, TypeScript is a superset of JavaScript. This means that any valid JavaScript code is also valid TypeScript. TypeScript introduces static typing, which allows you to define the types of variables, function parameters, and return values. This additional layer of type information helps spot errors during development, making your code more reliable.

### Basic examples (10 minutes)

There are many basic data types in JavaScript, including but not limited to `string`, `number`, `boolean`, `undefined`, and `null`. JavaScript already has dynamic types, which means variable types are determined at runtime.

TypeScript supports static types, which means variable types are known at compile time. Here are some examples of how we might specify static types in TypeScript:

```TS
let name: string = "Luke";
let age: number = 30;
let isTrainee: boolean = true;
let completedCourses: string[] = ['ITD', 'ITP', 'Piscine']
```

TypeScript also supports type inference. This means that TypeScript can determine (infer) the type of variables based on their initial value:

```TS
let name = "Luke"; // inferred as string
let age = 30; // inferred as number
let isTrainee = true; // inferred as boolean
let completedCourses = ['ITD', 'ITP', 'Piscine'] // inferred as string[]

age = "Thirty" // TypeScript will error here: "Type 'string' is not assignable to type 'number'".
```

Notice how not everything needs to be explicit. TypeScript is very smart and will be able to effectively type many things itself. In fact, it will often find incorrect typing before you do.

In our previous examples we said `completedCourses` is of type `string[]`. TypeScript lets us be even more specific by leaning on literal types:

```TS
type Course = 'ITD' | 'ITP' | 'Piscine' | 'SDC'

let completedCourses: Course[] = ['ITD', 'ITP', 'Piscine']
```

In our example above we are defining our own type `Course` which permits a number of specific strings. It uses the union type operator `|` somewhat similarly to how we might use the logical OR operator `||`. We are stating that a variable of type `Course` may be `'ITD'` OR `'ITP'` OR `'Piscine'` OR `'SDC'`.

We can also define an object type. For example, maybe we want to wrap our earlier fields within an object:

```TS
type Course = 'ITD' | 'ITP' | 'Piscine' | 'SDC'

type User = {
  id: number;
  name: string;
  age: number;
  isTrainee: boolean;
  completedCourses: Course[]
};

const myTrainee: User = {
  id: 0,
  name: 'Luke',
  age: 30,
  isTrainee: true,
  completedCourses: ['ITD', 'ITP', 'Piscine']
}
```

If we tried to create a `User` but didn't give them a name, TypeScript would tell us. If we did the same in JavaScript, nothing would tell us we missed anything, but when we tried to get a `User`'s name, we'd get `undefined`. Even this probably wouldn't be an error - we may only find out when our UI tries to use this data and says _"undefined, aged 30, has done ITD, ITP, and Piscine"_.

TypeScript also supports optional properties. For example our `User` type might have an optional `address` property that can be left out from instances of the `User` type:

```TS
type Course = 'ITD' | 'ITP' | 'Piscine' | 'SDC'

type User = {
  id: number;
  name: string;
  age: number;
  isTrainee: boolean;
  completedCourses: Course[]
  address?: string; // equates to string | undefined
};

// myTrainee doesn't have an address property but it is still a valid User
const myTrainee: User = {
  id: 0,
  name: 'Luke',
  age: 30,
  isTrainee: true,
  completedCourses: ['ITD', 'ITP', 'Piscine']
}
```

Objects can become complicated data as they grow but TypeScript makes maintaining our code far easier!

### A more complex example (10 minutes)

<details>
  <summary>
    <em>Tips for volunteers</em>
  </summary>
  <em>
    This example has a lot of moving parts and might at first be daunting for trainees. Be sure to move through it slowly and take questions from trainees. You can always break things down further with some live code!
    <br/><br/>
    Steer trainees towards comparing the JavaScript and TypeScript examples and towards hopefully seeing some benefits of TypeScript.
    <br/><br/>
    Pointing out common JavaScript pitfalls that TypeScript avoids could be helpful. For example:
  <ul>
    <li>Misspelt properties, e.g. <code>user.naem</code> will likely error.</li>
    <li>Variables unexpectedly being <code>null</code> or <code>undefined</code>.</li>
    <li>Accidental type coercion, for example TypeScript knows <code>5 + "5"</code> will be a string (<code>"55"</code>).</li>
  </ul>
  </em>
</details>

<br/>

Let’s have a look at this example JavaScript code which fetches a user by its ID from a hypothetical API:

```JS
async function fetchUser(id) {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

const user = fetchUser(0);
```

What is a `user`? What does this data look like? We might have the answer in our head but TypeScript gives us the ability to define it in code. Let's have a look at the same example but in TypeScript:

```TS
type Course = 'ITD' | 'ITP' | 'Piscine' | 'SDC'

type User = {
  id: number;
  name: string;
  age: number;
  isTrainee: boolean;
  completedCourses: Course[]
  address?: string;
};

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(`/api/users/${id}`);
  return response.json();
}

const user: Promise<User> = fetchUser(0);
```

Here we have specified that once our `user` has been fetched, it is of type `User`. We know it is an object and we know the type of every property in the object.

Since we have to `await` the user being fetched, `Promise<>` tells us that our `user` will be a `Promise` until our API request has completed, at which point our `user` will be a `User`.

## Fixing TypeScript errors (30 minutes)

<details>
  <summary>
    <em>Tips for volunteers</em>
  </summary>
  <em>
    <ul>
      <li>You can use larger breakout groups if you don't have a volunteer for every group of trainees. Alternatively volunteers can hop between breakout groups if you are confident that trainees will be able to handle the exercise without a volunteer present.</li>
      <li>This part of the workshop is the main opportunity for trainees to actively engage with TypeScript. Be supportive but encourage trainees to problem solve for themselves wherever possible.</li>
      <li>
        <details>
          <summary>
            The nuances of exercise 3
          </summary>
          <div>
            This is a fairly open ended exercise. The problem is that a try catch block will always treat the error as type unknown, which isn't helpful and is prone to type errors. The simplest solution is to treat an error as <code>any</code> type, which is commonly done in the workplace. This is a valid approach to handling errors but it has the usual problems of the <code>any</code> type so trainees should be encouraged to handle errors with more nuance.
            </br></br>
            A slightly better approach is to use type coercion. For example <code>return (error as Error).message</code> but this is also flawed since the error type of a catch block is inherently unpredictable.
            </br></br>
            A more robust solution would be to confirm the type of <code>error</code> before utilising it. For example: 
            <code>
              if (error instanceof Error) {
                return error.message 
              }
              else {
                return error
              }
            </code>
            </br></br>
            There is no singular solution to this exercise so it is best to encourage trainees to see how far they can take error handling and TypeScript.
          </div>
        </details>
      </li>
    </ul>
  </em>
</details>

### Setup

- Breakout into groups of ideally 2, and no more than 3 trainees.
- Ideally each group should have a single fork of [the exercise repository](https://github.com/Ara225/workshop-code/tree/main/introduction-to-typescript) from where every member collaborates.
- Each member should clone the forked repository to a local project.
- Navigate to the `introduction-to-typescript` directory.
- Follow the instructions in the `README.md` to setup the project and run the exercise.

### Fixing errors

Now that you've got the project running locally, your job is to complete the exercises in order while ensuring all tests pass for each exercise.

There are TypeScript type examples within `src/examples` should you need a hint but feel free to also do your own research.

Designate a driver while the rest of your group guides the driver towards solutions. Aim to swap out drivers at least every 10 minutes.

## Takeaways (10 minutes)

<details>
  <summary>
    <em>Tips for volunteers</em>
  </summary>
  <em>
    Encourage engagement from the trainees. Steer trainees towards fulfilling the learning objectives but here are some other takeaways worth considering:
    <ul>
      <li>TypeScript makes unexpected bugs less likely.</li>
      <li>It is easier to understand someone else’s code if it is written in TypeScript.</li>
      <li>The output of code is more predictable. You can predict the output of a function without even seeing the code of a function.</li>
      <li>TypeScript is optional but useful.</li>
    </ul>
  </em>
</details>

Now that you have experience with TypeScript, what do you think of it? Are you able to answer:

- When would you choose to use TypeScript over JavaScript?
- Would you prefer to use JavaScript or TypeScript?
- Would you prefer your coworkers to use JavaScript or TypeScript?
- Why would you use TypeScript if JavaScript is more flexible?

## Additional reading

If you would like to further your TypeScript knowledge, there are many great tutorials online.

Total TypeScript is one such resource and has several free exercises.
https://www.totaltypescript.com/tutorials/beginners-typescript

W3schools also has their own short and free exercises.
https://www.w3schools.com/typescript/typescript_exercises.php
