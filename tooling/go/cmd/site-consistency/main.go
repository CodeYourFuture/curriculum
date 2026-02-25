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

	"github.com/BurntSushi/toml"
	"github.com/goccy/go-yaml"
	"golang.org/x/mod/modfile"
)

func main() {
	var rootDirectory string
	flag.StringVar(&rootDirectory, "root-dir", ".", "Root directory to search for hugo.toml files in")
	flag.Parse()

	var errors []string

	netlifyGoVersion, err := getNetlifyGoVersion(filepath.Join(rootDirectory, "tooling", "common-config", "netlify.toml"))
	if err != nil {
		log.Fatalf("Failed to get netlify Go version: %v", err)
	}

	githubActionsPaths, err := os.ReadDir(filepath.Join(rootDirectory, ".github", "workflows"))
	if err != nil {
		log.Fatalf("Failed to list github actions: %v", err)
	}
	for _, githubActionsDirent := range githubActionsPaths {
		path := filepath.Join(rootDirectory, ".github", "workflows", githubActionsDirent.Name())
		githubActionsGoVersion, err := getGithubActionsGoVersion(path)
		if err != nil {
			log.Fatalf("Failed to get github actions Go version for path %s: %v", path, err)
		}
		if githubActionsGoVersion != "" && netlifyGoVersion != githubActionsGoVersion {
			errors = append(errors, fmt.Sprintf("Inconsistent Go versions - netlify: %s, github actions in %s: %s", netlifyGoVersion, path, githubActionsGoVersion))
		}
	}

	var directoriesToCheck []string
	err = filepath.WalkDir(rootDirectory, func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}
		if d.Name() == "_vendor" {
			return fs.SkipDir
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
	for _, directoryToCheck := range directoriesToCheck {
		for _, expectedSymlink := range []string{"config", "deploy-netlify.sh", "netlify.toml"} {
			if errorToReport, ok := checkForParentSymlink(directoryToCheck, expectedSymlink); !ok {
				// common-theme is a hugo module but we don't treat it as a deployable site.
				if directoryToCheck == filepath.Join(rootDirectory, "common-theme") {
					continue
				}
				errors = append(errors, errorToReport)
			}
		}
		gomodPath := filepath.Join(directoryToCheck, "go.mod")
		gomodContents, err := os.ReadFile(gomodPath)
		if err != nil {
			errors = append(errors, fmt.Sprintf("Failed to read go.mod file at %s: %v", gomodPath, err))
			continue
		}
		gomodFile, err := modfile.Parse(gomodPath, gomodContents, nil)
		if err != nil {
			errors = append(errors, fmt.Sprintf("Failed to parse go.mod file at %s: %v", gomodPath, err))
			continue
		}
		if gomodFile.Go.Version != netlifyGoVersion {
			errors = append(errors, fmt.Sprintf("Inconsistent Go versions - netlify: %s, %s: %s", netlifyGoVersion, gomodPath, gomodFile.Go.Version))
			continue
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

func getNetlifyGoVersion(path string) (string, error) {
	bytes, err := os.ReadFile(path)
	if err != nil {
		return "", fmt.Errorf("failed to read netlify config file: %w", err)
	}
	var config netlifyConfig
	if err := toml.Unmarshal(bytes, &config); err != nil {
		return "", fmt.Errorf("failed to decode netlify config file: %w", err)
	}
	return config.Build.Environment["GO_VERSION"], nil
}

type netlifyConfig struct {
	Build netlifyBuildConfig
}

type netlifyBuildConfig struct {
	Environment map[string]string
}

func getGithubActionsGoVersion(path string) (string, error) {
	bytes, err := os.ReadFile(path)
	if err != nil {
		return "", fmt.Errorf("failed to read github actions config file: %w", err)
	}
	var config githubActionsConfig
	if err := yaml.Unmarshal(bytes, &config); err != nil {
		return "", fmt.Errorf("failed to decode github actions config file: %w", err)
	}
	for _, job := range config.Jobs {
		for _, step := range job.Steps {
			if step.Name == "Setup Go" {
				return step.With["go-version"], nil
			}
		}
	}
	return "", nil
}

type githubActionsConfig struct {
	Jobs map[string]githubActionsJobConfig
}

type githubActionsJobConfig struct {
	Steps []githubActionStepConfig
}

type githubActionStepConfig struct {
	Name string
	With map[string]string
}
