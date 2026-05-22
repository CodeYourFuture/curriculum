+++
title="Logos"
description="A grid of logos with links to external sites."
menu=["shortcodes"]
+++

```go
{{</* logos "Financial" */>}}
```

{{< logos "Financial" >}}

This runs over a funding json file and displays the logos in a grid. The json file should be in the data folder and should be named `funding.json`. The json file should have the following structure:

```json
{
  "Financial": [
    {
      "name": "Name of the organisation",
      "url": "https://www.example.com",
      "logo": "https://www.example.com/logo.png"
    }
  ]
}
```

Arguably, this should be dynamic and not keyed to funding.json. If you have time to clean this up, please do so.
