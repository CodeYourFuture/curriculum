+++
title = 'Versioning'
headless = true
time = 30
facilitation = false
emoji= '🧩'
[objectives]
    1='Use the Teach Tech Together guide to construct your objectives'
    2='Limit the objectives to 3-5 items'
    3='Write objectives you can measure'
+++

We use Git to track different versions of files.

Perhaps you've had this experience before...

![Example of bad file naming when working on a document](./assets/example_git_exists.png)

You've probably in the past saved a document in a file with "draft" in its name, and then another with "version 1" in its name, and eventually one called "final", and then "really final", and then "final after feedback". It can be hard to know what the latest one is, and to track what order the files came in. But we keep these files around, because they were useful, and we may want to check something from them.

Git helps us to avoid this problem. Before we see how Git helps, let's try an exercise:

### Exercise 1 (10 minutes)

Open these three links - they are different stages of a draft blog post about CodeYourFuture:

- [final](https://CodeYourFuture.github.io/git-draft-blog-post-example/final)
- [revised](https://CodeYourFuture.github.io/git-draft-blog-post-example/revised)
- [v1](https://CodeYourFuture.github.io/git-draft-blog-post-example/v1)

Try to find all of the differences between these three documents. Can you work out which one is the finished one which was meant to go on the website?

You probably found it hard to see all of the differences (some were really small, like adding or removing a comma!), and non-obvious which is the most complete version!

## How does Git help?

Imagine your mentor wanted everyone in the class to answer three questions and to send back the answers. What capabilities would we need in order to be able to do that?

**First**, the mentor needs to be able to write the questions, and **store** them somewhere.

When we're using Git, we write things down in files in a folder (these could be text files, Word documents, images, or really any kind of file). When we save these files, we say we're _committing_ them, and we call the folder where we're saving them a _repository_ (or _repo_ for short).

![Teacher commits files locally](assets/lesson1diagram1.png)

**Next**, the mentor needs to put the repository somewhere where the learners can get it. We call this _pushing_ the repository. The mentor won't send a copy to each learner, but will put one copy somewhere on the Internet, and tell the learners where it is. The place the mentors on this course will be pushing to is a website called [GitHub](https://github.com), but there are other websites they could push to if they wanted to. This is the difference between Git and GitHub - Git is a way of storing and sharing files, and GitHub is one website where you can use Git.

![Teacher pushes files to GitHub](assets/lesson1diagram2.png)

**Then**, now that the mentor has pushed the questions, each learner needs to be able to **get the questions onto their computer**.

When we're using Git, we call this _cloning_ the mentor's repository (because we're making our own copy). After we've cloned the repository, we will have the same folder on our computer as the mentor created, committed, and pushed.

![A learners can clone an exact copy of what the mentor pushed](assets/lesson1diagram3.png)
