package checker_test

import (
	"testing"

	"github.com/CodeYourFuture/curriculum/tooling/go/internal/local-overrides-enforcer/checker"
	"github.com/stretchr/testify/require"
)

func TestCorrect(t *testing.T) {
	goModContent := `module github.com/CodeYourFuture/curriculum/org-cyf

go 1.21.3

replace github.com/CodeYourFuture/curriculum/common-content => ../common-content
replace github.com/CodeYourFuture/curriculum/common-theme => ../common-theme

require (
	github.com/CodeYourFuture/curriculum/common-content v0.0.0-20240103071042-5b2177342232 // indirect
	github.com/CodeYourFuture/curriculum/common-theme v0.0.0-20240103071042-5b2177342232 // indirect
)
`

	newContent, ok, missingReplaces, err := checker.CheckFile("/some/go.mod", []byte(goModContent), "github.com/CodeYourFuture/curriculum")
	require.NoError(t, err)
	require.True(t, ok)
	require.Empty(t, missingReplaces)
	require.Equal(t, "", newContent)
}

func TestMissingReplace(t *testing.T) {
	goModContent := `module github.com/CodeYourFuture/curriculum/org-cyf

	go 1.21.3

	replace github.com/CodeYourFuture/curriculum/common-theme => ../common-theme

	require (
		github.com/CodeYourFuture/curriculum/common-content v0.0.0-20240103071042-5b2177342232 // indirect
		github.com/CodeYourFuture/curriculum/common-theme v0.0.0-20240103071042-5b2177342232 // indirect
	)
`

	newContent, ok, missingReplaces, err := checker.CheckFile("/some/go.mod", []byte(goModContent), "github.com/CodeYourFuture/curriculum")
	require.NoError(t, err)
	require.False(t, ok)
	require.Equal(t, missingReplaces, []string{"github.com/CodeYourFuture/curriculum/common-content"})
	require.Contains(t, newContent, "replace github.com/CodeYourFuture/curriculum/common-content => ../common-content")
}

func TestModuleNotChildOfParent(t *testing.T) {
	goModContent := `module github.com/CodeYourFuture/wrong

go 1.21.3

replace github.com/CodeYourFuture/curriculum/common-content => ../common-content
replace github.com/CodeYourFuture/curriculum/common-theme => ../common-theme

require (
	github.com/CodeYourFuture/curriculum/common-content v0.0.0-20240103071042-5b2177342232 // indirect
	github.com/CodeYourFuture/curriculum/common-theme v0.0.0-20240103071042-5b2177342232 // indirect
)
`

	_, _, _, err := checker.CheckFile("/some/go.mod", []byte(goModContent), "github.com/CodeYourFuture/curriculum")
	require.ErrorContains(t, err, "module at path /some/go.mod was named github.com/CodeYourFuture/wrong which isn't a child of github.com/CodeYourFuture/curriculum")
}

func TestInvalidGoModFile(t *testing.T) {
	_, _, _, err := checker.CheckFile("/some/go.mod", []byte("hello"), "github.com/CodeYourFuture/curriculum")
	require.ErrorContains(t, err, "failed to parse /some/go.mod as go.mod file: ")
}
