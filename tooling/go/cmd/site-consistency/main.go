package main

import (
	"errors"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"sort"
)

func main() {
	var rootDirectory string
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for hugo.toml files in")
	flag.Parse()

	var directoriesToCheck []string
	err := filepath.WalkDir(rootDirectory, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.Name() == "hugo.toml" {
			directoriesToCheck = append(directoriesToCheck, filepath.Dir(path))
		}
		return nil
	})
	if err != nil {
		log.Fatalf("Error walking filesystem: %v", err)
	}

	sort.Strings(directoriesToCheck)
	var errors []string
	for _, directoryToCheck := range directoriesToCheck {
		for _, expectedSymlink := range []string{"config", "deploy-netlify.sh", "netlify.toml"} {
			if errorToReport, ok := checkForParentSymlink(directoryToCheck, expectedSymlink); !ok {
				errors = append(errors, errorToReport)
			}
		}
	}

	for _, errorToReport := range errors {
		fmt.Println(errorToReport)
	}
	if len(errors) > 0 {
		os.Exit(1)
	}
}

// checkForParentSymlink checks that a symlink exists in the directory with expectedLinkName pointing at something in the parent directory with the same name.
// It returns a bool indicating whether things were correct, and if the bool is false, returns a non-empty string describing the problem suitable for displaying to a user.
func checkForParentSymlink(directoryToCheck, expectedLinkName string) (string, bool) {
	expectedDestination := filepath.Join("..", "tooling", "common-config", expectedLinkName)
	path := filepath.Join(directoryToCheck, expectedLinkName)
	fileInfo, err := os.Lstat(path)
	if err != nil {
		reason := fmt.Sprintf("an error occurred looking it up: %v", err)
		if errors.Is(err, fs.ErrNotExist) {
			reason = "it didn't exist"
		}
		return formatError(path, expectedDestination, reason), false
	}
	if fileInfo.Mode()&os.ModeSymlink != os.ModeSymlink {
		return formatError(path, expectedDestination, "it wasn't a symlink"), false
	}
	actualDestination, err := os.Readlink(path)
	if err != nil {
		return formatError(path, expectedDestination, fmt.Sprintf("failed to readlink it: %v", err)), false
	}
	if actualDestination != expectedDestination {
		return formatError(path, expectedDestination, fmt.Sprintf("instead it pointed to %s", actualDestination)), false
	}
	return "", true
}

func formatError(path, expectedDestination, reason string) string {
	return fmt.Sprintf("Expected %s to be a symlink pointing at %s but %s", path, expectedDestination, reason)
}
