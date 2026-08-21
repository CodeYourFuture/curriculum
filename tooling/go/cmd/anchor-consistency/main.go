package main

import (
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/adrg/frontmatter"
)

type pageFrontMatter struct {
	Blocks []block `toml:"blocks"`
}

type block struct {
	Src  string
	Name string
}

var linkRegex = regexp.MustCompile(`\]\(([^)#]+)#([^)]+)\)`)

func main() {
	var rootDirectory string

	flag.StringVar(
		&rootDirectory,
		"root-dir",
		".",
		"Root directory",
	)

	flag.Parse()

	anchors, err := collectAnchors(rootDirectory)
	if err != nil {
		log.Fatal(err)
	}

	err = checkLinks(rootDirectory, anchors)
	if err != nil {
		log.Fatal(err)
	}
}

func collectAnchors(root string) (map[string]map[string]bool, error) {
	anchors := make(map[string]map[string]bool)

	err := filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() || !strings.HasSuffix(path, ".md") {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		if !strings.Contains(string(content), "[[blocks") {
			return nil
		}

		var fm pageFrontMatter

		_, err = frontmatter.Parse(strings.NewReader(string(content)), &fm)
		if err != nil {
			return nil
		}

		if len(fm.Blocks) == 0 {
			return nil
		}

		relativePath, err := filepath.Rel(root, path)
		if err != nil {
			return err
		}

		relativePath = strings.ReplaceAll(relativePath, "\\", "/")

		// Remove everything before the content directory
		if index := strings.Index(relativePath, "/content/"); index != -1 {
			relativePath = relativePath[index+len("/content/"):]
		}

		page := "/" + relativePath

		page = strings.TrimSuffix(page, "/index.md")
		page = strings.TrimSuffix(page, ".md")

		anchors[page] = make(map[string]bool)

		for _, block := range fm.Blocks {
			anchors[page][urlize(block.Name)] = true
		}

		return nil
	})

	return anchors, err
}

func checkLinks(root string, anchors map[string]map[string]bool) error {
	broken := false

	err := filepath.WalkDir(root, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() || !strings.HasSuffix(path, ".md") {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return err
		}

		matches := linkRegex.FindAllStringSubmatch(string(content), -1)

		for _, match := range matches {
			page := strings.TrimSuffix(match[1], "/")
			anchor := match[2]

			pageAnchors, ok := anchors[page]
			if !ok {
				continue
			}

			if !pageAnchors[anchor] {
				fmt.Printf(
					"Broken anchor in %s:\n  %s#%s\n",
					path,
					page,
					anchor,
				)
				broken = true
			}
		}

		return nil
	})

	if err != nil {
		return err
	}

	if broken {
		return fmt.Errorf("found broken anchors")
	}

	return nil
}

func urlize(text string) string {
	text = strings.ToLower(text)
	text = strings.ReplaceAll(text, " ", "-")
	text = strings.ReplaceAll(text, "#", "")
	return text
}
