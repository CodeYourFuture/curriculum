package main

import (
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"slices"
	"strings"

	"github.com/adrg/frontmatter"
)

func main() {
	var rootDirectory string
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for go.mod files in")
	flag.Parse()

	sawBadFile := false
	err := filepath.WalkDir(rootDirectory, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if !isSprintIndex(path) {
			return nil
		}

		content, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read %s: %w", path, err)
		}
		type sprintFrontMatter struct {
			Title     string
			Layout    string
			MenuLevel []string `toml:"menu_level"`
			Theme     string
		}
		var fm sprintFrontMatter
		_, parseErr := frontmatter.Parse(strings.NewReader(string(content)), &fm)
		if parseErr != nil {
			return fmt.Errorf("failed to parse frontmatter from %s: %w", path, parseErr)
		}
		if fm.Layout != "sprint" || !slices.Contains(fm.MenuLevel, "module") {
			return nil
		}
		if fm.Title == "" {
			fmt.Printf("⚠️  Sprint at path %s had no title in its frontmatter\n", path)
			sawBadFile = true
		}
		if fm.Theme == "" && !isModuleWithoutThemes(path) {
			fmt.Printf("⚠️  Sprint at path %s had no theme in its frontmatter\n", path)
			sawBadFile = true
		}
		return nil
	})
	if err != nil {
		log.Fatalf("Error walking filesystem: %v", err)
	}
	if sawBadFile {
		os.Exit(1)
	}
}

// All of these probably _should_ have themes, but they currently don't.
// We should probably fix these all and remove this exclusion.
var modulesWithoutThemes = map[string]struct{}{
	"cloud": {},
	// Some sprints currently lack themes.
	"databases":                {},
	"how-our-curriculum-works": {},
	"induction":                {},
	"portfolio":                {},
	"the-launch":               {},
}

func isModuleWithoutThemes(path string) bool {
	pathParts := strings.Split(path, string(os.PathSeparator))
	pathPartsCount := len(pathParts)
	if pathPartsCount < 4 {
		return false
	}
	_, isModuleWithoutTheme := modulesWithoutThemes[pathParts[pathPartsCount-4]]
	return isModuleWithoutTheme
}

func isSprintIndex(path string) bool {
	pathParts := strings.Split(path, string(os.PathSeparator))
	pathPartsCount := len(pathParts)
	if pathPartsCount < 3 {
		return false
	}
	return pathParts[pathPartsCount-3] == "sprints" && pathParts[pathPartsCount-1] == "_index.md"
}
