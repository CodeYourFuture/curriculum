package main

type hugoToml struct {
	Markup *hugoTomlMarkup `toml:"markup"`
}

type hugoTomlMarkup struct {
	TableOfContents *hugoTomlTableOfContents `toml:"tableOfContents"`
	Goldmark        *hugoTomlGoldmark        `toml:"goldmark"`
}

type hugoTomlTableOfContents struct {
	Endlevel   *int  `toml:"endLevel"`
	Ordered    *bool `toml:"ordered"`
	StartLevel *int  `toml:"startLevel"`
}

type hugoTomlGoldmark struct {
	Renderer *hugoTomlGoldmarkRenderer `toml:"renderer"`
	Parser   *hugoTomlGoldmarkParser   `toml:"parser"`
}

type hugoTomlGoldmarkRenderer struct {
	Unsafe *bool `toml:"unsafe"`
}

type hugoTomlGoldmarkParser struct {
	Attribute *hugoTomlGoldmarkParserAttribute `toml:"attribute"`
}

type hugoTomlGoldmarkParserAttribute struct {
	Block *bool `toml:"block"`
	Title *bool `toml:"title"`
}
