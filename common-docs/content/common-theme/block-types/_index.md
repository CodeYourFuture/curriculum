+++
title = 'Blocks System'
description="Blocks compose pages from local and remote sources"
menu=["theme"]
layout="slimdex"
emoji= '🧩'
[[blocks]]
name="link"
src="common-theme/block-types/link"

+++

Most pages are composed of blocks. Blocks are small pieces of content that can be sourced from a variety of locations. This allows us to compose pages from a mix of local and remote sources.

We do this by writing a `[[blocks]]` map in the front matter of a page. Each block requires a `name` and a `src` field. The `src` field is a URL or path to the content of the block. The `data.html` partial will run over the type of `src` and render the appropriate block partial. You can also add a `time` value to override the time that is set on the block already.

It's designed this way to minimise friction for occasional contributors. You don't need to know the name of our block to invoke it. Just give us the URL or path to the content you want to feature, and we'll take care of the rest.
