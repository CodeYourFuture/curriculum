package checker

import (
	"fmt"
	"strings"

	"golang.org/x/mod/modfile"
)

// CheckFile checks that a go.mod file has local overrides for all children of the passed parent module.
// It returns one of:
//   - If the contents was correct: "", true, nil
//   - If the contents was not correct: the expected contents, false, nil
//   - If an error occurred: "", false, error
func CheckFile(goModPath string, contents []byte, parentModule string) (string, bool, error) {
	gomodFile, err := modfile.Parse(goModPath, contents, nil)
	if err != nil {
		return "", false, fmt.Errorf("failed to parse %s as go.mod file: %w", goModPath, err)
	}

	parentModuleWithTrailingSlash := parentModule + "/"

	if !strings.HasPrefix(gomodFile.Module.Mod.Path, parentModuleWithTrailingSlash) {
		return "", false, fmt.Errorf("module at path %s was named %s which isn't a child of %s", goModPath, gomodFile.Module.Mod.Path, parentModule)
	}
	slashCount := strings.Count(gomodFile.Module.Mod.Path[len(parentModule):], "/")

	replaces := make(map[string]struct{})
	for _, replace := range gomodFile.Replace {
		replaces[replace.Old.Path] = struct{}{}
	}

	missingReplaces := false
	for _, require := range gomodFile.Require {
		modPath := require.Mod.Path
		if !strings.HasPrefix(modPath, parentModuleWithTrailingSlash) {
			continue
		}
		if _, isReplaced := replaces[modPath]; isReplaced {
			continue
		}
		missingReplaces = true
		rel := modPath[len(parentModuleWithTrailingSlash):]
		if err := gomodFile.AddReplace(modPath, "", strings.Repeat("../", slashCount)+rel, ""); err != nil {
			return "", false, fmt.Errorf("failed to add replace: %w", err)
		}
	}
	if missingReplaces {
		formatted, err := gomodFile.Format()
		if err != nil {
			return "", false, fmt.Errorf("failed to serialize go.mod file: %w", err)
		}
		return string(formatted), false, nil
	}
	return "", true, nil
}
