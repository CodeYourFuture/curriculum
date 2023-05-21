import { EditorView, basicSetup } from "codemirror";
import { javascript } from "@codemirror/lang-javascript";

const containers = document.querySelectorAll(".cm6");

containers.forEach((container) => {
  const view = new EditorView({
    extensions: [basicSetup, javascript()],
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
