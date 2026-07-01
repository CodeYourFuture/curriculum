# Asking Questions 101

## Prep

- [ ] Read this article about [Mental Models](https://jamesclear.com/mental-models)
- [ ] Review the Asking Questions workshop and the CYF Guide to Asking Questions on the curriculum.

Today we're going to build on our formal language of developer questions. We began with this basic format:

1. What I _did_
1. What I _expected_
1. What actually _happened_

This format helps to find the discrepancies between expectations and reality. (This is the gap in our understanding.)

It's also an efficient way to share our current understanding with others. Now we're going to use this to write a really good bug report. A well-written bug report can help developers identify, reproduce, and fix issues more efficiently. We will follow this basic format:

1. Steps to Reproduce (What I _did_)
1. Expected Behavior (What I _expected_)
1. Actual Behavior (What actually _happened_)
1. Environment Details 🆕

> Clarity is our goal

## Exchanging incomplete information sets 30m

<details>
<summary>Context</summary>Over and over, especially during The Launch, we see trainees writing panicked, incoherent questions with no context, pasting error messages they clearly have not read, and not even sharing the link to the code they're working on.

Outside our community, developers will ignore or delete your posts if you do this. At home with us, well-meaning mentors often try to help you, but they _can't_ because you haven't given them the information they need. It feels so frustrating, and people can get really upset. We want to help you avoid this as you prepare to work in a professional environment. Your colleagues will _enjoy_ answering your questions if you give them the information they need; most developers really like solving well-constructed puzzles.
</details>

😎 Useful questions -> colleagues _enjoy_ answering -> get solutions promptly -> make lots of progress -> good performance
😰 Not useful questions -> colleagues _avoid_ answering -> don't get solutions -> take much longer -> performance appears poor

### Steps to Reproduce

When you're writing a bug report, you need to be able to reproduce the bug. This means you need to be able to make it happen again. The person reading the report needs to be able to follow your steps and cause the same error.

Here's an example of steps to reproduce:

1. Go to my deployed site at [https://my-site.com](https://my-site.com)
1. Click the "Login" button top right
1. Choose "Sign in with GitHub"
1. Authorise with GitHub and be redirected back to the site
1. Login page error says `To confirm your identity, sign in with the same account you used originally.`

### Bad bug reports

<!--{{<note type="activity" title="Inversion, 5m" >}}-->

1. Set a [timer for 5 minutes](https://www.google.com/search?q=timer+for+5+minutes).
2. Popcorn around the room and each person give an example of a bad way to ask a question until the timer goes off. For example:

"I was on the site, and then I clicked something, and it didn't work!"

<!--{{</note>}}-->

### Why are these not useful?

<!--{{<note type="activity" title="Inversion 2, 10m" >}}-->

1.  Set a [timer for 10 minutes](https://www.google.com/search?q=timer+for+10+minutes).
2.  Popcorn around the room and each person give a reason the previous question was bad until the timer goes off. For example:

"What site are you on? What are you trying to do? How can I read your post and re-create the circumstances. Be specific! Share what you see."

 <!--{{</note>}}-->

### Expected behavior

_What you expected to happen_

When you're writing a bug report, you need to be able to explain what you expected to happen after you executed the steps you just described. You might feel this is so obvious that you don't need to write it down, but this assumption is drastically, drastically wrong.

Here's an example of expected behavior:

"I expected to be able to log in with my GitHub account and be redirected to the logged-in view of my dashboard on my site."

### Actual behavior

_What actually happened_

Here's an example of actual behavior:

"Instead, I was redirected back to the login page with an error message that says `To confirm your identity, sign in with the same account you used originally.`"

<!--{{<note type="activity" title="Spot the difference, 5m" >}}-->

Look at the difference between the two examples above. What do you notice? _Apart from the user's reported problem_, what is the difference between the actual behaviour and the expected behaviour? It's subtle.

1. Set a [timer for 3 minutes](https://www.google.com/search?q=timer+for+3+minutes).
1. Popcorn around the room until you spot the difference.

<!--{{</note>}}-->

### Error messages

_What the computer told you_

Have you ever considered, and this is just a wild idea, reading the error messages that your computer gives when it goes wrong?

Just kidding! We know all trainees are implacably opposed to reading error messages. But here's the thing:

1. When you're writing a bug report, you need to include the error messages you're seeing. This is crucial information for anyone trying to help you.
1. You also need to **read the message yourself** first. If you cannot understand it, you need to say _what_ you don't understand about it. This is the gap in your understanding that you need help with.

<details>
<summary>Here's a common exchange we see:</summary>

#### Trainee

I am unable to run my code. Every time it's saying this; npm ERR!

```
Missing script: "dev"
npm ERR!
npm ERR! To see a list of scripts, run:
npm ERR!   npm run
npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/student/.npm/_logs/2024-02-26T19_28_05_701Z-debug-0.log
```

#### Mentor

What happened when you followed the suggestion in the error message?

#### Trainee

...What suggestion?

</details>

<!--{{<note type="activity" title="Spot the instruction, 3m">}}-->

1. Set a [timer for 3 minutes](https://www.google.com/search?q=timer+for+3+minutes).
1. Popcorn around the room and find the instruction in the error message.

<!--{{</note>}}>-->

Error messages aren't always correct, but they are a valuable clue.

1. Read the error message
1. Identify suggestions
1. Find out what they would do (this also means being able to form a hypothesis to test)
1. Then (maybe) do them.

### Environment Details

_The conditions in which the bug occurred_

When you're writing a bug report, you need to be able to describe the system you were using when you encountered the bug. Because all these details matter!

Here's an example of environment details:

> VSCode on Windows 10, Node v14.15.4, NPM v6.14.10, React v17.0.1, deployed to Netlify.

Let's improve a bug report together to understand why details like this matter.

## Iterative improvement of a bug report 15m

### 🐛 Bug Report Fail

> Bug: I can't create any files in my project
> I'm trying to create files in my repo but it just errors. I don't know what's wrong. Please help me!

This is a terrible bug report. Popcorn around the room and name four problems with it.

### 🐛 Bug Report Improvement 1

<details>
<summary>Bug: cannot create new files on the command line</summary>

#### Steps to reproduce:

1. Open [repo](/link-to-repo) in VSCode
1. Try creating a new file in the terminal
1. Get error that says I can't create the file.

#### Expected behaviour
I expected to create a new file in the terminal

#### Actual behaviour
Instead, I got an error message
</details>

OK now we have some more information given. We've got some steps to reproduce and some expected and actual behaviour. But it's still not great.

<!--{{<note type="activity" title="Step by step improvement, 5m" >}}-->

1. Set a [timer for 5 minutes](https://www.google.com/search?q=timer+for+5+minutes).
1. Popcorn around the room and name three problems with this bug report. How should it be improved?

Send it back!

<!--{{</note>}}-->

### 🐛 Bug Report Improvement 2

<details>
<summary>Bug: cannot create a new file on the command line</summary>

#### Steps to reproduce:

1. Open [repo](/link-to-repo) in VSCode
1. Open terminal and type `touch newfile.js`
1. Get error `'touch' is not recognized as an internal or external command, operable program or batch file.`

#### Expected behaviour

- I expected to create a new file in the terminal using the `touch` command.

#### Actual behaviour

- Instead, I got an error message `'touch' is not recognized as an internal or external command, operable program or batch file.`
</details>
<!--{{<note type="activity" title="Precision and clarity, 5m" >}}-->

Our bug reporter has worked hard on improving their bug report. But there is one crucial detail missing.

1. Set a [timer for 5 minutes](https://www.google.com/search?q=timer+for+5+minutes).
1. Popcorn around the room and guess/suggest how this bug report could be improved with one more detail.

<!--{{</note>}}-->

### 🐛 Bug Report Final Form

See how much easier is to fix in the final form? What is the bug in this report?

<details>
<summary>Bug: cannot create a new js file on the command line</summary>

#### Steps to reproduce:

1. Open [repo](/link-to-repo) in VSCode
1. Open terminal and type `touch newfile.js`
1. Get error `'touch' is not recognized as an internal or external command, operable program or batch file.`

#### Expected behaviour

- I expected to create a new file in the terminal using the `touch` command.

#### Actual behaviour

- Instead, I got an error message `'touch' is not recognized as an internal or external command, operable program or batch file.`

#### Environment details:

VSCode on Windows 10, Node v14.15.4, NPM v6.14.10, React v17.0.1, deployed to Netlify.

</details>

## Wrapping up

Recapping the key points:

Include as much context as you can, including links, line numbers, sample code, etc. Use code blocks to mark up your code. If you use screenshots, they should only show the _visual render_ (**never** screenshot code - paste code as text).

### 🧑🏾‍💻🙋 Bug reports contain

1. 🔗 Links 👍
1. 🎯 Objectives - what are you actually trying to do? 👍
1. 🖼️ Screenshots of UI if relevant 👍
1. 📝 `Code blocks` 👍
   - In Slack, proper [code snippets](https://slack.com/intl/en-gb/help/articles/204145658-Create-or-paste-code-snippets-in-Slack) get syntax highlighting and can be collapsed vertically - remember to 🧵 use threads too
1. 🪸 Environment details 👍
1. 📷 ~~Screenshots of code~~ 🙅

## 📚 Further reading

- [How to ask](https://stackoverflow.com/help/how-to-ask)
- [The programming duck](https://rubberduckdebugging.com/)
- [Asking Questions](https://curriculum.codeyourfuture.io/guides/asking-questions/)
- [Reading Error Messages](https://www.codementor.io/@erikpukinskis/how-to-read-an-error-message-6sebm8ik3)
- [Writing the perfect question](https://codeblog.jonskeet.uk/2010/08/29/writing-the-perfect-question/)
- [Smart Questions](http://catb.org/esr/faqs/smart-questions.html) NOTE: this is an old-fashioned text so it's very blunt. It is also really honest and maybe that is helpful for some people.

![Bug fixing friends](https://imgs.xkcd.com/comics/bug_thread.png)
