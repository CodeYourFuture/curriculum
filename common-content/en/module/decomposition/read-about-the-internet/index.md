+++
title = "Read about the Internet"
headless = true
time = 60
objectives = [
    "Define the terms 'host', 'client', and 'server'.",
    "Define the terms 'request' and 'response'.",
    "Explain the responsibilities/guarantees of four network layers: Link, Internet, Transport, Application.",
    "Explain the purpose of a TCP port.",
]
+++

### Read about the Internet

{{<note type="Reading">}}
Read chapter 11 of How Computers Really Work.

Do every exercise listed in the chapters.

Do the following projects 29, 30, 31, 32, 34, 35.

For project 29, note that if you're on macOS, you should use `en0` not `eth0`, and you will need to install `arp-scan` by running `brew install arp-scan`.
{{</note>}}

Check you have achieved each learning objective listed on this page.

{{<multiple-choice
   question="Which layer is responsible for retrying delivery of messages which didn't make it to a server?"
   answers="Link | Internet | Transport | Application"
   feedback="No - Link layer protocols may feature some local retries, but generally don't provide reliable delivery. | No - Internet layer protocols are typically responsible for routing, not reliable delivery. | Yes - the Transport layer is typically responsible for retrying delivery of lost messages, but not all Transport layer protocols support this. | Some applications do their own kind of retrying, but this is typically the primary responsibility of another layer."
   correct="2" >}}

{{<multiple-choice
   question="Which layer considers MAC addresses?"
   answers="Link | Internet | Transport | Application"
   feedback="Right - MAC addresses are how messages find their destinations on local networks. | No - the Internet layer typically uses Internet Protocol Addresses to navigate between networks. | No - the Transport layer typically deals with finding the right process on a host, rather than finding the right host. | Some applications may happen to deal with MAC addresses, but most applications do not. One layer (almost) always considers them."
   correct="0" >}}

{{<multiple-choice
   question="Which layer is responsible for ensuring that messages arrive at the server in the correct order?"
   answers="Link | Internet | Transport | Application"
   feedback="No - Link layer protocols typically don't guarantee ordered delivery. | No - Internet layer protocols are typically responsible for routing, not ordering. | Yes - the Transport layer is typically responsible for ordering of messages, but not all Transport layer protocols support this. | Some applications do their own kind of sequencing, but this is typically the primary responsibility of another layer."
   correct="2" >}}

{{<multiple-choice
   question="Which layer is used for getting from my home network to Microsoft's network?"
   answers="Link | Internet | Transport | Application"
   feedback="No - the Link layer is for messaging within local networks. | Yes - the Internet layer is for navigating between networks. | No - the Transport layer typically deals with finding the right process on a host, rather than finding the right host. | Some applications may happen to deal with routing information, but most applications do not. One layer (almost) always considers this."
   correct="1" >}}
