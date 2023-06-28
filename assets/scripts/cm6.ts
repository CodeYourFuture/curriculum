import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";

import { lineHighlighter } from "./highlight-lines";
import { oneDark } from "@codemirror/theme-one-dark";

// List of all possible options: https://github.com/gohugoio/hugo/blob/master/markup/highlight/highlight.go#L37-L48
// But for now we just support line highlighting
interface CodeBlockOptions {
  hl_lines?: [number, number];
}

const containers: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-cm-editor]");

containers.forEach((container) => {
  let options: CodeBlockOptions = {};
  try {
    options = JSON.parse(container.dataset.options);
  } catch {
    console.error("Invalid .Options on CM6 editor");
  }

  const view = new EditorView({
    extensions: [
      // Enable "basic" functionality, see https://codemirror.net/docs/ref/#codemirror.basicSetup
      basicSetup,
      // Enable indenting via Tab, see https://codemirror.net/examples/tab/
      keymap.of([indentWithTab]),
      theme(),
      oneDark,
      // Enable JS specific features (syntax highlighting, autocomplete, etc)
      javascript(),
      // Enable highlighting of specific lines
      lineHighlighter(options.hl_lines),
    ],
    // Set up the initial doc to be the contents of the original container
    doc: container.innerText,
  });

  // Swap the original container with the generated CM6 container because:
  //   - We need to remove the original container, so that the content is not
  //   doubled
  //   - The original container is a <pre> to preserve line breaks, so this
  //   isn't a suitable parent element for CM6
  container.after(view.dom);
  container.remove();
});

function theme() {
  return EditorView.baseTheme({
    "&.cm-editor": {
      fontSize: "1rem",
    },
  });
}
