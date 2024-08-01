+++
title="Youtube"
description="Embed a YouTube video"
emoji="📺"
menu=["blocktypes"]
[[blocks]]
name="Example Youtube"
src="https://www.youtube.com/watch?v=9bZkp7q19f0"
+++

```toml
[[blocks]]
name="Example Youtube"
src="https://www.youtube.com/watch?v=9bZkp7q19f0"
```

This block embeds a YouTube video. The `src` field should be the URL of the video. The `name` field is the title of the block. We use this custom block because the Hugo default YouTube loads all the videos on the page at once, which is not ideal for low data or old machines. This block only loads the video when the user clicks on it.
