import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@latest/dist/mermaid.esm.min.mjs";

mermaid.initialize({ startOnLoad: false });
// Prevent automatic loading so that mermaid only renders on intersection
// this is because mermaid regularly loses race conditions
// and fails to size itself correctly when loaded inside hidden elements that have no dimensions in the DOM
// like eg tabs, accordions, etc.
// adapted from https://github.com/mermaid-js/mermaid/issues/311#issuecomment-332557344

const initializeMermaid = (container) => {
  mermaid.init(undefined, container);
};

const observeMermaidContainer = () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          initializeMermaid(entry.target);
          observer.unobserve(entry.target); // Stop observing after initialization
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".mermaid").forEach((container) => {
    observer.observe(container);
  });
};

document.addEventListener("DOMContentLoaded", observeMermaidContainer);
