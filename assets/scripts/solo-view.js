class SoloView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    // State object
    this.state = {
      currentBlockIndex: 0,
      blocks: [],
      tocLinks: [],
      navButtons: { back: null, next: null },
    };
  }

  connectedCallback() {
    this.render(); // Render the component
    this.cacheDOM(); // Cache necessary DOM elements
    this.addEventListeners(); // Setup event listeners
    this.updateView(); // Initial view update
  }

  // Cache DOM elements
  cacheDOM() {
    this.state.blocks = Array.from(
      this.querySelectorAll('[slot="blocks"] .c-block')
    );
    this.state.tocLinks = Array.from(
      this.querySelectorAll('[slot="header"] .c-toc li a')
    );
    this.state.navButtons.back = this.querySelector(
      '[slot="nav"] .c-solo-view__back'
    );
    this.state.navButtons.next = this.querySelector(
      '[slot="nav"] .c-solo-view__next'
    );
  }

  // Add event listeners
  addEventListeners() {
    this.state.tocLinks.forEach((link, index) => {
      link.addEventListener("click", () => this.updateCurrentBlockIndex(index));
    });

    this.state.navButtons.back.addEventListener("click", this.navigateBack);
    this.state.navButtons.next.addEventListener("click", this.navigateNext);
  }

  // Update current block index
  updateCurrentBlockIndex(index) {
    this.state.currentBlockIndex = index;
    this.updateView();
  }

  // Navigation logic
  navigateBack = (event) => {
    event.preventDefault();
    const backIndex = this.state.currentBlockIndex - 1;
    if (backIndex > 0) {
      this.state.tocLinks[backIndex].click();
    }
  };

  navigateNext = (event) => {
    event.preventDefault();
    const nextIndex = this.state.currentBlockIndex + 1;
    if (nextIndex < this.state.blocks.length) {
      this.state.tocLinks[nextIndex].click();
    }
  };

  // Update view
  updateView() {
    this.state.blocks.forEach((block, index) => {
      block.style.display =
        index === this.state.currentBlockIndex ? "block" : "none";
    });

    this.state.tocLinks.forEach((link, index) => {
      link.classList.toggle(
        "is-active",
        index === this.state.currentBlockIndex
      );
    });
  }

  // Lifecycle methods and utilities...

  // Render method with slots and CSS
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: grid;
          grid-template-columns: 1fr 4fr;
          gap: var(--theme-spacing--gutter);
        }
        ::slotted([slot="header"]) {
          position: sticky;
          height: 100vh;
          top: 0;
        }
        ::slotted([slot="blocks"]) {
          padding-top: var(--theme-spacing--6);
        }
        ::slotted([slot="nav"]) {
          grid-column: 2/3;
        }
      </style>
      <slot name="header"></slot>
      <slot name="blocks"></slot>
      <slot name="nav"></slot>
    `;
  }
}

customElements.define("solo-view", SoloView);
