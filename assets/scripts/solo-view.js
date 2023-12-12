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
      fragment: null,
      touchStartX: 0,
      touchEndX: 0,
    };
  }

  connectedCallback() {
    this.render(); // Render the component
    this.cacheDOM(); // Cache necessary DOM elements
    this.addEventListeners(); // Setup event listeners
    this.handleFragment();
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
    window.addEventListener("hashchange", this.handleFragment);
    this.state.tocLinks.forEach((link, index) => {
      link.addEventListener("click", () => this.updateCurrentBlockIndex(index));
    });

    this.state.navButtons.back.addEventListener("click", this.navigateBack);
    this.state.navButtons.next.addEventListener("click", this.navigateNext);

    // Add swipe event listeners
    this.addEventListener("touchstart", (e) => {
      this.state.touchStartX = e.changedTouches[0].clientX;
    });

    this.addEventListener("touchend", (e) => {
      this.state.touchEndX = e.changedTouches[0].clientX;
      this.handleSwipeGesture();
    });
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

  handleSwipeGesture() {
    const deltaX = this.state.touchEndX - this.state.touchStartX;
    const swipeThreshold = 30;
    if (deltaX > swipeThreshold) {
      // Swipe right (previous)
      this.navigateBack(new Event("swipe"));
    } else if (deltaX < -swipeThreshold) {
      // Swipe left (next)
      this.navigateNext(new Event("swipe"));
    }
  }

  // look for a fragment in the URL and navigate to it if one exists so we can link directly to a view
  handleFragment = () => {
    const fragment = window.location.hash.substring(1);

    if (fragment === "toc") {
      this.state.currentBlockIndex = 0;
      this.updateView();
    } else if (fragment) {
      const matchingLinkIndex = this.state.tocLinks.findIndex(
        (link) => link.getAttribute("href").substring(1) === fragment
      );
      if (matchingLinkIndex !== -1) {
        this.state.currentBlockIndex = matchingLinkIndex;
        this.updateView();
      }
    }
  };

  // Update view
  updateView() {
    this.state.blocks.forEach((block, index) => {
      block.hidden = index !== this.state.currentBlockIndex;
    });

    this.state.tocLinks.forEach((link, index) => {
      link.classList.toggle(
        "is-active",
        index === this.state.currentBlockIndex
      );
    });
  }

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
          --theme-spacing--scrollmargin: 100vh !important;
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
