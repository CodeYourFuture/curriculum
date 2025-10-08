+++
title="PD block"
description="Feature a single Professional Development block by linking to a page on the external PD syllabus website"
menu=["blocktypes"]
[[blocks]]
name="PD block"
src="https://cyf-pd.netlify.app/blocks/agreements/readme/"
+++

```toml
[[blocks]]
name="PD block"
src="https://cyf-pd.netlify.app/blocks/agreements/"
```

A bit of a legacy. This block type was set up before we built the Hugo modules to pull in the PD syllabus content. Now PD modules can be mounted directly, so this would also work:

```toml
[[blocks]]
name="PD block"
src="blocks/pd/agreements"
```
