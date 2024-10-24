package main

import (
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/CodeYourFuture/curriculum/tooling/go/internal/local-overrides-enforcer/checker"
)

func main() {
	var rootDirectory string
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for go.mod files in")
	excludeDirectoriesFlag := flag.String("exclude", filepath.Join("tooling", "go"), "Directories to exclude from searches (comma-delimited)")
	var parentModule string
	flag.StringVar(&parentModule, "parent-module", "github.com/CodeYourFuture/curriculum", "Parent module to search for missing overrides within")

	flag.Parse()

	var err error
	rootDirectory, err = filepath.Abs(rootDirectory)
	if err != nil {
		log.Fatalf("Failed to get absolute path of root directory: %v", err)
	}

	var excludeDirectories []string
	for _, excludeDirectory := range strings.Split(*excludeDirectoriesFlag, ",") {
		excludeDirectory, err = filepath.Abs(excludeDirectory)
		if err != nil {
			log.Fatalf("Failed to get absolute path of exclude directory: %v", err)
		}
		excludeDirectories = append(excludeDirectories, excludeDirectory)
	}

	sawBadFile := false

	err = filepath.WalkDir(rootDirectory, func(path string, d fs.DirEntry, err error) error {
		for _, excluded := range excludeDirectories {
			if path == excluded {
				return fs.SkipDir
			}
		}
		if err != nil {
			return err
		}

		if d.Name() != "go.mod" {
			return nil
		}
		content, err := os.ReadFile(path)
		if err != nil {
			return fmt.Errorf("failed to read %s: %w", path, err)
		}
		expectedContents, ok, missingReplaces, err := checker.CheckFile(path, content, parentModule)
		if err != nil {
			return fmt.Errorf("failed to check %s: %w", path, err)
		}
		if !ok {
			sawBadFile = true
			missingReplacesStr := ""
			for _, missingReplace := range missingReplaces {
				missingReplacesStr += " - " + missingReplace + "\n"
			}
			fmt.Printf("⚠️  File at path %s didn't have some replace directives.\nMissing replace directives for modules:\n%s\nYou should replace %s with exactly this string:\n```\n%s\n```\n", path, missingReplacesStr, path, expectedContents)
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
