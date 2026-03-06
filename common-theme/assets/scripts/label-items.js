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
    this.playerAnswers = new Map();
    this.labels = [];
    this.items = [];
  }

  connectedCallback() {
    this.render();
    this.init();
  }

  render() {
    this.shadowRoot.innerHTML = `
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
    this.labels = labelsContainer.querySelectorAll("[data-label]");

    this.labels.forEach((label) => {
      label.setAttribute("draggable", "true");
      label.style.cursor = "grab";
      label.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", label.dataset.label);
        label.style.cursor = "grabbing";
      });
    });
  }

  setupContent(contentContainer) {
    this.items = contentContainer.querySelectorAll("[data-item]");

    this.items.forEach((item) => {
      this.correctAnswers.set(item.dataset.item, item.dataset.correct);
      this.playerAnswers.set(item.dataset.item, false); // we always start off wrong

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

    this.playerAnswers.set(itemId, isCorrect ? true : false);

    itemElement.dataset.status = isCorrect ? true : false;
    itemElement.classList.toggle("is-good", isCorrect);
    itemElement.classList.toggle("is-bad", !isCorrect);

    // remove old labels
    itemElement.querySelectorAll(".c-label").forEach((label) => label.remove());

    // add this label
    itemElement.appendChild(this.makeLabel(labelId));

    this.updateFeedback(isCorrect);
  }

  updateFeedback(isCorrect) {
    const feedback = this.shadowRoot
      .querySelector('slot[name="feedback"]')
      .assignedElements()[0];
    if (!feedback) return;

    const correctCount = [...this.playerAnswers.values()].filter(
      (state) => state
    ).length;
    const totalItems = this.items.length;

    if (correctCount === totalItems) {
      feedback.textContent = "🎉 You've sorted them all!";
    } else {
      feedback.textContent = `${
        isCorrect
          ? "✅ You got that one right! "
          : "❌ You got that one wrong. "
      } ${correctCount} of ${totalItems} labelled correctly`;
    }
  }
}

customElements.define("label-items", LabelItems);
