import { EditorView, keymap } from "@codemirror/view";
import { basicSetup } from "codemirror";
import { indentWithTab } from "@codemirror/commands";
import { javascript } from "@codemirror/lang-javascript";

const containers = document.querySelectorAll("[data-cm-editor]");

containers.forEach((container) => {
  const view = new EditorView({
    extensions: [
      // Enable "basic" functionality, see https://codemirror.net/docs/ref/#codemirror.basicSetup
      basicSetup,
      // Enable indenting via Tab, see https://codemirror.net/examples/tab/
      keymap.of([indentWithTab]),
      theme(),
      // Enable JS specific features
      javascript(),
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
