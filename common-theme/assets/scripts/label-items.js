//basically matches keys (labels) to values - can have multiple values on a key.
// this is for classifying activities
// sorting and classifying are fundamental learning strategies
// it's how we make sense of things!
// TODO : make the inverse where we group items into labelled buckets
class LabelItems extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.correctAnswers = new Map();
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <style>
    .c-quiz { display: grid;gap: var(--theme-spacing--gutter)}
    </style>
      <section class="c-quiz">
        <slot name="labels"></slot>
        <slot name="heading"></slot>
        <slot name="content"></slot>
        <h4 role="status" aria-live="polite">
          <slot name="feedback"></slot>
        </h4>
      </section>
    `;
  }

  init() {
    const labelsSlot = this.shadowRoot.querySelector('slot[name="labels"]');
    const contentSlot = this.shadowRoot.querySelector('slot[name="content"]');

    labelsSlot.addEventListener("slotchange", () => {
      const labels = labelsSlot.assignedElements()[0];
      if (!labels) return;
      this.setupLabels(labels);
    });

    contentSlot.addEventListener("slotchange", () => {
      const content = contentSlot.assignedElements()[0];
      if (!content) return;
      this.setupContent(content);
    });
  }

  setupLabels(labelsContainer) {
    const labels = labelsContainer.querySelectorAll("[data-label]");

    labels.forEach((label) => {
      label.setAttribute("draggable", "true");
      label.style.cursor = "grab";
      label.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", label.dataset.label);
        label.style.cursor = "grabbing";
      });
    });
  }

  setupContent(contentContainer) {
    const items = contentContainer.querySelectorAll("[data-item]");

    items.forEach((item) => {
      if (item.dataset.correct) {
        this.correctAnswers.set(item.dataset.item, item.dataset.correct);
      }

      item.addEventListener("dragover", (e) => e.preventDefault());
      item.addEventListener("drop", (e) => {
        e.preventDefault();
        const labelId = e.dataTransfer.getData("text/plain");
        this.handleDrop(labelId, item);
      });
    });
  }

  makeLabel(labelId) {
    // make a label
    const label = document.createElement("span");
    label.textContent = labelId;
    label.classList.add("c-label");
    return label;
  }

  handleDrop(labelId, itemElement) {
    const itemId = itemElement.dataset.item;
    const isCorrect = this.correctAnswers.get(itemId) === labelId;

    itemElement.dataset.status = isCorrect ? "correct" : "incorrect";
    itemElement.classList.toggle("is-good", isCorrect);
    itemElement.classList.toggle("is-bad", !isCorrect);

    // remove old labels
    itemElement.querySelectorAll(".c-label").forEach((label) => label.remove());

    // add this label
    itemElement.appendChild(this.makeLabel(labelId));

    // Update feedback slot content
    const feedbackSlot = this.shadowRoot.querySelector('slot[name="feedback"]');
    const feedback = feedbackSlot.assignedElements()[0];
    if (feedback) {
      feedback.textContent = isCorrect ? "Sorted!" : "Try again";
    }
  }
}

customElements.define("label-items", LabelItems);
