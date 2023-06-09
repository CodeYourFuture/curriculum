import { EditorView, Decoration, type DecorationSet } from "@codemirror/view";
import { type Range, StateField } from "@codemirror/state";

// Define a StateField that holds the current set of highlighted lines
const highlightedLines = StateField.define<DecorationSet>({
  create() {
    return Decoration.none;
  },

  update(lines, tr) {
    // Map the highlighted lines through changes to the document
    lines = lines.map(tr.changes);
    return lines;
  },

  // Provide the highlighted line decorations to the view
  provide: (field) => EditorView.decorations.from(field),
});

function highlightLines(state, lines: [number, number][]) {
  let decorations: Range<Decoration>[] = [];

  // Don't show any decorations if there are no highlighted line numbers
  if (!lines || !lines.length) return Decoration.none;

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
      const { from } = state.doc.line(lineBetween);
      // Create a Line Decoration for the line position
      decorations.push(highlightedLine.range(from));
    }
  }

  return Decoration.set(decorations);
}

// Helper function to generate an array of line numbers between a start and end
function range(start, end) {
  return Array(end - start + 1)
    .fill(null)
    .map((_, idx) => start + idx);
}

// Define a Line Decoration that applies a class to the relevant line
const highlightedLine = Decoration.line({ class: "hl_line" });

// Define a theme that styles the highlighted lines
const highlightLinesTheme = EditorView.baseTheme({
  ".hl_line": { backgroundColor: "hsl(60deg 100% 90% / 0.8)" },
});

export function lineHighlighter(lines: [number, number][]) {
  return [
    // Initialise the StateField with the lines from Hugo
    highlightedLines.init((state) => highlightLines(state, lines)),
    highlightLinesTheme,
  ];
}
