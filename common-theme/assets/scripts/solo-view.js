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
    // Adding window and doc event listeners
    window.addEventListener("hashchange", this.handleFragment.bind(this));
    document.addEventListener("keydown", this.handleKeydown.bind(this));
  }

  connectedCallback() {
    this.render(); // Render the component
    this.cacheDOM(); // Cache necessary DOM elements
    this.addEventListeners(); // Setup event listeners
    this.handleFragment(); // Check for a fragment in the URL and set to this view if present
    this.updateView(); // Initial view update
  }

  disconnectedCallback() {
    // Removing window and doc event listeners
    window.removeEventListener("hashchange", this.handleFragment.bind(this));
    document.removeEventListener("keydown", this.handleKeydown.bind(this));
  }

  // Cache DOM elements
  cacheDOM() {
    this.state.blocks = [
      ...this.querySelectorAll('[slot="blocks"] > .c-block'),
    ];
    this.state.tocLinks = [
      ...this.querySelectorAll('[slot="header"] .c-toc li a'),
    ];
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

    this.addEventListener(
      "touchstart",
      (event) => {
        this.state.touchStartX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );

    this.addEventListener(
      "touchend",
      (event) => {
        const touchEndX = event.changedTouches[0].clientX;
        this.handleSwipeGesture(this.state.touchStartX, touchEndX);
      },
      { passive: true }
    );

    this.addEventListener("keydown", this.handleKeydown);
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
    this.state.tocLinks[backIndex].click();
  };

  navigateNext = (event) => {
    event.preventDefault();
    const nextIndex = this.state.currentBlockIndex + 1;
    if (nextIndex < this.state.blocks.length) {
      this.state.tocLinks[nextIndex].click();
    }
  };

  // Handle swipe gesture
  handleSwipeGesture = (startX, endX) => {
    const deltaX = endX - startX;
    const swipeThreshold = 30;
    if (deltaX > swipeThreshold) {
      // Swipe right (previous)
      this.navigateBack(new Event("swipe"));
    } else if (deltaX < -swipeThreshold) {
      // Swipe left (next)
      this.navigateNext(new Event("swipe"));
    }
  };

  handleKeydown = (event) => {
    if (event.key === "ArrowLeft") {
      this.navigateBack(event);
    }
    if (event.key === "ArrowRight") {
      this.navigateNext(event);
    }
  };

  // look for a fragment in the URL and navigate to it if one exists so we can link directly to a view
  handleFragment = () => {
    const fragment = window.location.hash.substring(1);
    if (fragment) {
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

    // Hide unusable buttons
    this.state.navButtons.back.style.display =
      this.state.currentBlockIndex === 0 ? "none" : "inline-flex";
    this.state.navButtons.next.style.display =
      this.state.currentBlockIndex === this.state.blocks.length - 1
        ? "none"
        : "inline-flex";
  }

  // Render method with slots and CSS
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        @media (min-width: 768px) {

        :host {
          display: grid;
          grid-template:
          "sidebar blocks" auto
          "sidebar nav" min-content
          "sidebar .  " 1fr / 1fr 4fr;         
          gap: var(--theme-spacing--gutter);
        }
        ::slotted([slot="header"]) {
          position: sticky;
          top: 0;
          grid-area: sidebar;

        }
        ::slotted([slot="blocks"]) {
          padding-top: var(--theme-spacing--6);
          --theme-spacing--scrollmargin: 100vh !important;
          grid-area: blocks;
        }
        ::slotted([slot="nav"]) {
          grid-area: nav;
          margin: 0 0 auto auto;
        }
      }
        
      </style>
      <slot name="header"></slot>
      <slot name="blocks"></slot>
      <slot name="nav"></slot>
    `;
  }
}

customElements.define("solo-view", SoloView);
