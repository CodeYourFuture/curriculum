+++
title = "Understanding C#"
time = 90
objectives = [
    "Make sense of code in a language you don't know.",
    "Identify similarities and differences between programming languages.",
    "Use documentation, debugging, and search techniques to fix a bug in a program in a language you don't know.",
    "Use documentation, debugging, and search techniques to extend a program in a language you don't know.",
]
[build]
  list = "local"
  publishResources = false
  render = "never"
+++

No one (neither trainees nor volunteers) involved in this workshop needs to know C#.

The goal of this workshop is to work with code _even though we don't know the language_.

Trainees should be familiar with any programming language (e.g. JavaScript or Python), and should be comfortable searching for and reading documentation.

## Introduction

There are a lot of things in common across different programming languages.

Even if you don't know C#, knowing other languages gives you a basis for making sense of it.

All of your existing documentation/research/Googling skills will help you!

Get into groups of no more than 6.

## Understanding code (10 minutes)

Here is some C# code:

```cs
class DnsResolver {
    public static void Main(string[] args) {
        if (args.length != 1) {
            Console.Error.WriteLine("Expected exactly one argument, but got {0}", args.length);
            Environment.Exit(1);
        }
        string host = args[0];
        string[] parts = host.Split(".");
        Console.WriteLine($"The top-level domain of the host {host} is {parts[^-1]}");
    }
}
```

Set a timer for 10 minutes.

Take 10 minutes to play computer with this code on your own. Read through it line-by-line and work out what you think each line does.

Identify what things you don't know, or haven't seen before in another language. Try to work out what they are. First make a guess, and if you're not confident, do some research.

Identify what things you _have_ seen in another language, and what the equivalent code in that language may be.

## Discuss what is similar and what is new (15 minutes)

Popcorn around your group discussing what things in this code are _similar_ to what you've seen in other languages, and what things are different.

Discuss the things that are different:
* What trade-offs do you think they bring?
* What extra value do they give compared to how things would look in other languages?
* What draw-backs do they have?

## Debugging code (15 minutes)

Set a timer for 15 minutes.

On your own, predict what you expect the above code to do and print.

Make a new folder to work in and run this command:

```bash
dotnet new console
```

This creates a new C# project, using the .Net framework.
It creates a default `Program.cs` file.
Paste the above code into Program.cs, replacing everything that was there at the start.

Now, run these commands:

```bash
dotnet build
dotnet run -- codeyourfuture.io 
```

First, we _compile_ the C# code, then we run it.
Then, the `dotnet run` command is a shorthand to run the compiled app, which will be in a subfolder like `./bin/Debug/net10.0`.
We pass the arguments to the compiled program after the `--`.

After running these commands, compare the result you get with what you predicted would happen earlier.

In your group, try to debug and fix any issues so the code does what you would expect. Share theories about what's happening, suggest how you could get more information, and work together.

## Extending code (50 minutes)

Add additional code to the existing code to satisfy an additional requirement:

Resolve the DNS hostname passed as the program's command line argument, and print out the IP addresses it resolves to.

Try to add appropriate handling of edge cases and errors.

If you run your finished program, it should behave similar to below (but the actual values may be different):

```console
% dotnet run -- codeyourfuture.io
The top-level domain of the host codeyourfuture.io is io
The host codeyourfuture.io resolved to the following IP address:
54.72.81.102

% dotnet run -- google.com
The top-level domain of the host google.com is com
The host google.com resolved to the following IP addresses:
142.250.179.238
2a00:1450:4009:81d:0:0:0:200e
```

You can work on your own or in groups to do this.

## Sample implementation

A sample complete implementation of this exercise can be found here [https://github.com/CodeYourFuture/workshop-code/tree/main/understanding-csharp](https://github.com/CodeYourFuture/workshop-code/tree/main/understanding-csharp) but we recommend you try to completely solve the exercises yourself rather than looking at the sample implementation.
