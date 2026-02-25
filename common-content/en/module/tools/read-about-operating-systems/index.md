+++
title = "Operating systems"
headless = true
time = 120
facilitation = false
objectives = [
    "Define an operating system.",
    "Describe what an kernel is.",
    "Explain what a process is.",
    "List what processes are created when running `ls | grep '[A-Z]'`.",
    "Explain what a system call (syscall) is.",
    "Give three examples of syscalls.",
]
+++

{{<note type="Reading">}}
Read chapter 10 of How Computers Really Work.

Do every exercise listed in the chapters.

You only need to do the projects listed below (though are welcome to try any others that you want!)

Check you have achieved each learning objective listed on this page.
{{</note>}}

{{<note type="Project">}}
Do project 23 from How Computers Really Work.

You can do this on any {{<tooltip title="Unix-family OS">}}Linux and macOS are both Unix-family operating systems. Windows is not.{{</tooltip>}} - you do not need a Raspberry Pi.
{{</note>}}

{{<note type="Project">}}
Do project 20 from How Computers Really Work.

You can do this on any Unix-family OS - you don't need a Raspberry Pi.

Note: If you're on macOS, `ps -eH` doesn't exist. You can use `ps` or `ps aux` to get a list of processes. To get parent-child relationships, you'll need to install `pstree` using `brew` (`brew install pstree`), then run `pstree`.

Note: If you're on macOS, process 1 will probably be `launchd` not `init`.
{{</note>}}

{{<note type="Project">}}
If you're on a Linux machine, do projects 21, 22, and 24.

If you're on macOS, pair up with someone who has a Linux machine to do these projects.

Note: Several of these projects may not work inside Docker or virtual machines, you need to actually be using Linux.
{{</note>}}
