class SoloView extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.currentBlockIndex = 0;
    this.tocLinks = [];
    this.blocks = [];
  }

  connectedCallback() {
    this.render();
    this.cacheTOCLinks();
    this.cacheBlocks();
    this.initializeBlocksFromTOC();
    this.addNavigationListeners();
  }

  cacheTOCLinks = () => {
    this.tocLinks = Array.from(
      this.querySelectorAll('[slot="header"] .c-toc li a')
    );
  };

  cacheBlocks = () => {
    this.blocks = Array.from(this.querySelectorAll('[slot="blocks"] .c-block'));
  };

  initializeBlocksFromTOC = () => {
    // Assuming the first TOC link corresponds to the first block
    this.currentBlockIndex = 0;
    this.updateBlockVisibility();
    this.updateTOCActive();
  };

  updateBlockVisibility = () => {
    this.blocks.forEach((block, index) => {
      block.style.display = index === this.currentBlockIndex ? "block" : "none";
    });
  };

  updateTOCActive = () => {
    this.tocLinks.forEach((link, index) => {
      link.classList.toggle("is-active", index === this.currentBlockIndex);
    });
  };

  addNavigationListeners = () => {
    // TOC Links Navigation
    this.tocLinks.forEach((link, index) => {
      link.addEventListener("click", (event) => {
        this.currentBlockIndex = index;
        this.updateBlockVisibility();
        this.updateTOCActive();
      });
    });
    const backButton = this.shadowRoot.querySelector(".c-nav__link--back");
    const nextButton = this.shadowRoot.querySelector(".c-nav__link--next");

    backButton.addEventListener("click", this.navigateBack);
    nextButton.addEventListener("click", this.navigateNext);
  };

  navigateBack = (event) => {
    if (this.currentBlockIndex > 0) {
      this.currentBlockIndex--;
      this.updateBlockVisibility();
      this.updateTOCActive();
    }
  };

  navigateNext = (event) => {
    if (this.currentBlockIndex < this.blocks.length - 1) {
      this.currentBlockIndex++;
      this.updateBlockVisibility();
      this.updateTOCActive();
    }
  };

  styles = `
    :host {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: var(--theme-spacing--gutter);
    }
    ::slotted([slot="blocks"]){
      max-height: 100vh;
      overflow-y: scroll;
      padding-top: var(--theme-spacing--6)
    }
    ::slotted([slot="nav"]) {
        grid-column: 2/3;
    }
  `;

  render = () => {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      <slot name="header"></slot>
      <slot name="blocks"></slot>
      <slot name="nav"></slot>
    `;
  };
}

customElements.define("solo-view", SoloView);
