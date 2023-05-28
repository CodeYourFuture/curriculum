import {
  EditorView,
  ViewPlugin,
  Decoration,
  type DecorationSet,
} from "@codemirror/view";
import { type Range, Facet } from "@codemirror/state";

// Define a Line Decoration that applies a class to the relevant line
const highlightedLine = Decoration.line({ class: "hl_line" });

// Define a ViewPlugin that controls how the highlightedLine Decoration is
// applied to the view
const highlightLinesPlugin = ViewPlugin.define(
  (view) => {
    return {
      decorations: Decoration.set(highlightLines(view)),
    };
  },
  {
    decorations: (viewPlugin) => viewPlugin.decorations,
  }
);

function highlightLines(view: EditorView) {
  let decorations: Range<Decoration>[] = [];

  // Pull the highlighted line numbers from the facet
  const lines = view.state.facet(highlightedLineNumbers);

  for (const line of lines) {
    // Hugo gives us a start line and an end line. For CM6 we need to generate a
    // line decoration between the start and end lines (inclusive)
    // Calculate each line in-between and generate a line decoration

    const [fromLine, toLine] = line;

    // For whatever reason Hugo seems to be zero-indexing line numbers,
    // so convert to 1-indexing for CM6
    const linesBetween = range(fromLine + 1, toLine + 1);

    for (const lineBetween of linesBetween) {
      // Calculate the line position in the CM6 offset coords system
      const { from } = view.state.doc.line(lineBetween);
      // Create a Line Decoration for the line position
      decorations.push(highlightedLine.range(from));
    }
  }

  return decorations;
}

// Helper function to generate an array of line numbers between a start and end
function range(start, end) {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx);
}

// Define a facet for storing the highlighted lines, that is an array of a
// starting line number and an ending line number
const highlightedLineNumbers: Facet<[number?, number?]> = Facet.define({
  // Since we only have 1 place this can be configured, we just always take the
  // first input value
  combine: ([val]) => val,
  static: true,
});

// Define a theme that styles the highlighted lines
const highlightLinesTheme = EditorView.baseTheme({
  ".hl_line": { backgroundColor: "hsl(60deg 100% 90% / 0.8)" },
});

export function lineHighlighter(lines: [number?, number?] = []) {
  return [
    // Configure the highlighted lines
    highlightedLineNumbers.of(lines),
    highlightLinesPlugin,
    highlightLinesTheme,
  ];
}
