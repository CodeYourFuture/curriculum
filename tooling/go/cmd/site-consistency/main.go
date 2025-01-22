package main

import (
	"errors"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"reflect"
	"sort"

	"github.com/BurntSushi/toml"
)

func main() {
	var rootDirectory string
	var fix bool
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for hugo.toml files in")
	flag.BoolVar(&fix, "fix", false, "Fix problems, rather than reporting them")
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
			if errorToReport, ok := checkForParentSymlink(directoryToCheck, expectedSymlink, fix); !ok {
				errors = append(errors, errorToReport)
			}
		}

		if errorToReport := checkForMarkupConfig(filepath.Join(directoryToCheck, "hugo.toml"), fix); errorToReport != nil {
			errors = append(errors, errorToReport.Error())
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
func checkForParentSymlink(directoryToCheck, expectedLinkName string, fix bool) (string, bool) {
	expectedDestination := filepath.Join("..", "tooling", "common-config", expectedLinkName)
	path := filepath.Join(directoryToCheck, expectedLinkName)
	fileInfo, err := os.Lstat(path)
	if err != nil {
		reason := fmt.Sprintf("an error occurred looking it up: %v", err)
		if errors.Is(err, fs.ErrNotExist) {
			if fix {
				if err := os.Symlink(expectedDestination, path); err != nil {
					panic(fmt.Sprintf("Failed to create symlink %s: %v", path, err))
				}
				return "", true
			}
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

func checkForMarkupConfig(path string, fix bool) error {
	var config hugoToml
	bytes, err := os.ReadFile(path)
	if err != nil {
		return fmt.Errorf("failed to read %s: %w", path, err)
	}
	if err := toml.Unmarshal(bytes, &config); err != nil {
		return fmt.Errorf("failed to decode %s as toml: %w", path, err)
	}

	want := &hugoTomlMarkup{
		TableOfContents: &hugoTomlTableOfContents{
			Endlevel:   ptr(2),
			Ordered:    ptr(true),
			StartLevel: ptr(2),
		},
		Goldmark: &hugoTomlGoldmark{
			Renderer: &hugoTomlGoldmarkRenderer{
				Unsafe: ptr(true),
			},
			Parser: &hugoTomlGoldmarkParser{
				Attribute: &hugoTomlGoldmarkParserAttribute{
					Block: ptr(true),
					Title: ptr(true),
				},
			},
		},
	}
	if !reflect.DeepEqual(config.Markup, want) {
		wantConfig := hugoToml{
			Markup: want,
		}
		marshalledWant, err := toml.Marshal(wantConfig)
		if err != nil {
			panic(fmt.Sprintf("failed to marshal known-good toml: %v", err))
		}
		if fix && config.Markup == nil {
			var out []byte
			out = append(out, bytes...)
			out = append(out, '\n', '\n')
			out = append(out, marshalledWant...)
			if err := os.WriteFile(path, out, 0644); err != nil {
				panic(fmt.Sprintf("failed to fix %s: %v", path, err))
			}
			return nil
		}
		return fmt.Errorf("%s had wrong or missing [markup] section. Add this:\n%s", path, string(marshalledWant))
	}
	return nil
}

func ptr[T any](v T) *T {
	return &v
}
