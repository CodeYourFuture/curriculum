# 🎮 Playing computer

## 💡 Purpose

This workshop is designed to develop your understanding of **playing computer**. **Playing computer** means simulating how the computer executes our code. We "step through" the code, line by line, and work out what the computer does when it follows each instruction. Once we develop a better intuition for how our code runs it becomes easier to debug code, reason about it and write more complex programs.

## 📝 Learning objectives

During this session, you will:

```objectives
- [ ] Play computer with a few short programs to work out what happens when they run
- [ ] Keep track of your place in a running program using frames
- [ ] Describe what happens when a function is called during runtime
- [ ] Check your understanding using an application like the Python visualiser
```

### Resources

You will need:

- A piece of paper saying "memory" - where we store variables
- A piece of paper saying "console" - where we print to the console
- Some example programs like the ones here 👉 [Playing computer workshop](https://github.com/Ara225/workshop-code/tree/main/playing-computer)
- [Optional] A set of functions in envelopes ( this isn't essential but a nice thing to have to reinforce the idea of instructions being "opened" up when a function is called )

( If you don't have any paper/pens you can create plain text files for "memory" and "console" and write your work out in there! )

## 🧰 Setup

1. Split up into groups of 2 or 3 at most.
2. Start with the first example ( e.g. `example-0.js` )
3. Each person will need to take responsibility for a particular **frame**. One person will be assigned the role of **global frame**, for example. If there are other function declarations, someone else will "play" that frame too.

## 🍲 Warm-up

Start with the program in `example-0.js`. There is only one frame to play here - the global frame, as there are no other function declarations and calls in the file.

- One person will "play" the **Global frame**
- This person will step through the code in `example-0.js` using the **rules of execution** below.
- Other members of the group can watch and provide support as they go through the code.
- Once you've finished you can change some of the values/variables and then someone else can play the global frame too
- ❗ After you've finished playing computer with the program, you should check your memory sheet and console sheet by using the [Python visualiser](https://pythontutor.com/javascript.html#mode=edit)

## Rules of execution

### Rule 0

Only one person can be sat at the table at a time ( where we write to the memory sheet/console sheet)

### Rule 1

Start reading code from top to bottom, one line at a time

### Rule 2

Write and update variables in memory as you go along
For example, if the program says:

```js
let a = 32;
```

You would write down "a : 32" on your piece of paper saying "memory"

### Rule 3

If a function is called the person "playing" this frame takes the seat and we jump to the instructions in that function, using Rules 1 and 2.

### Rule 4

When a function returns or finishes execution this person leaves their seat and the previous person sits down again.

You may need to play computer like this a few times before you get used to this way of thinking about the code. Make sure you swap roles so others get the chance to play a particular frame.

## 📝 Check your understanding

Doing this activity by hand is a great way to start thinking about how your code runs.
Once you've gone through this activity and played computer with pen and paper, you can check what you've got on your piece of paper by playing computer with the [Python Tutor code visualiser](https://pythontutor.com/javascript.html#mode=edit)
