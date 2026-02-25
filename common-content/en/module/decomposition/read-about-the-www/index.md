+++
title = "Read about the world-wide web"
headless = true
time = 75
objectives = [
    "Identify the components of a URL.",
    "Manually parse an HTTP request into a method, path, protocol, headers, and body.",
    "Manually parse an HTTP response into protocol, status code, headers, and body.",
    "Describe the request-response pattern of a web browser interacting with a server.",
    "Compare static and dynamic web servers."
]
+++

{{<note type="Reading">}}
Read chapter 12 of How Computers Really Work.

In the "Languages of the Web" section, you can skip the following sub-sections if you want because you probably already know what they say:
* Structuring the Web with HTML
* Styling the Web with CSS
* Scripting the Web with JavaScript

But you should still read the Structuring the Web's Data with JSON and XML sub-section.

Do every exercise listed in the chapters.

Do projects 36-40. You can do these on any Unix-based computer.
{{</note>}}

{{<multiple-choice
   question="What is the scheme of this URL: git+ssh://github.com/CodeYourFuture/curriculum.git"
   answers="github.com | git | git+ssh | ssh"
   feedback="No - that's the authority/hostname. | No - check the parts of a URL again. | Yes - anything at the start of a URL before the : is the scheme. | No - check the parts of a URL again."
   correct="2" >}}

{{<multiple-choice
   question="What is the path of this URL: git+ssh://github.com/CodeYourFuture/curriculum.git"
   answers="github.com | CodeYourFuture/curriculum.git | /CodeYourFuture/curriculum.git | /CodeYourFuture | /CodeYourFuture/curriculum"
   feedback="No - that's the authority/hostname. | No - check the parts of a URL again. | Yes - anything from the first slash until a ? (or the end, if there isn't one) makes up the path. | No - check the parts of a URL again. | No - check the parts of a URL again."
   correct="2" >}}

{{<label-items heading="Label each part of the URL `git+https://github.com:443/pantsbuild/ripgrep.git?rev=0f7e0fd`">}}
[LABEL=scheme] `git+https`
[LABEL=authority] `github.com:443`
[LABEL=hostname] `github.com`
[LABEL=port] `443`
[LABEL=path] `/pantsbuild/ripgrep.git`
[LABEL=query] `rev=0f7e0fd`.
{{</label-items>}}

{{<note type="Exercise">}}
In the following HTTP request, identify the path being requested, and the request headers:

```
GET /id HTTP/1.1
Host: www.example.com
User-Agent: curl/8.1.2
Accept: */*
```
{{</note>}}

{{<note type="Exercise">}}
In the following HTTP response, identify the status code, the response headers, and the response body:

```
HTTP/1.1 200 OK
Expires: -1
Cache-Control: private, max-age=0
Content-Type: application/json
Content-Length: 10

{"id": 17}
```
{{</note>}}
