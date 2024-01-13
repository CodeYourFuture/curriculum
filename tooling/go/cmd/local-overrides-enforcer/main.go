package main

import (
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/CodeYourFuture/curriculum-labs/tooling/go/internal/local-overrides-enforcer/checker"
)

func main() {
	var rootDirectory string
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for go.mod files in")
	excludeDirectoriesFlag := flag.String("exclude", filepath.Join("tooling", "go"), "Directories to exclude from searches (comma-delimited)")
	var parentModule string
	flag.StringVar(&parentModule, "parent-module", "github.com/CodeYourFuture/curriculum-labs", "Parent module to search for missing overrides within")

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
			log.Fatalf("Failed to get absolute path of exclude direectory: %v", err)
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
		expectedContents, ok, err := checker.CheckFile(path, content, parentModule)
		if err != nil {
			return fmt.Errorf("failed to check %s: %w", path, err)
		}
		if !ok {
			sawBadFile = true
			fmt.Printf("⚠️  File at path %s didn't have some local overrides - its contents should be:\n%s\n", path, expectedContents)
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
